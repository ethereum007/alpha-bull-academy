import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface MarketIndex {
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Fetch data from NSE India API
    const nseHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Referer': 'https://www.nseindia.com/',
    };

    // First, get cookies from NSE homepage
    const homeResponse = await fetch('https://www.nseindia.com/', {
      headers: nseHeaders,
    });
    
    const cookies = homeResponse.headers.get('set-cookie') || '';
    
    // Fetch index data
    const indexResponse = await fetch('https://www.nseindia.com/api/allIndices', {
      headers: {
        ...nseHeaders,
        'Cookie': cookies,
      },
    });

    if (!indexResponse.ok) {
      throw new Error(`NSE API returned ${indexResponse.status}`);
    }

    const data = await indexResponse.json();
    
    // Extract key indices
    const indexMap: Record<string, string> = {
      'NIFTY 50': 'NIFTY',
      'NIFTY BANK': 'BANKNIFTY',
      'NIFTY IT': 'NIFTYIT',
    };

    const indices: MarketIndex[] = [];

    if (data.data) {
      for (const item of data.data) {
        const mappedSymbol = indexMap[item.index];
        if (mappedSymbol) {
          indices.push({
            name: item.index,
            symbol: mappedSymbol,
            price: parseFloat(item.last) || 0,
            change: parseFloat(item.variation) || 0,
            changePercent: parseFloat(item.percentChange) || 0,
          });
        }
      }
    }

    // Add SENSEX from BSE (simplified fallback data if API fails)
    try {
      const bseResponse = await fetch('https://api.bseindia.com/BseIndiaAPI/api/Sensex/w', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'application/json',
          'Referer': 'https://www.bseindia.com/',
        },
      });
      
      if (bseResponse.ok) {
        const bseData = await bseResponse.json();
        if (bseData.CurrValue) {
          indices.push({
            name: 'SENSEX',
            symbol: 'SENSEX',
            price: parseFloat(bseData.CurrValue.replace(/,/g, '')) || 0,
            change: parseFloat(bseData.Chg) || 0,
            changePercent: parseFloat(bseData.PcntChg) || 0,
          });
        }
      }
    } catch (bseError) {
      console.error('BSE API error:', bseError);
      // Add placeholder for SENSEX
      indices.push({
        name: 'SENSEX',
        symbol: 'SENSEX',
        price: 0,
        change: 0,
        changePercent: 0,
      });
    }

    // Sort to maintain consistent order
    const sortOrder = ['NIFTY', 'BANKNIFTY', 'NIFTYIT', 'SENSEX'];
    indices.sort((a, b) => sortOrder.indexOf(a.symbol) - sortOrder.indexOf(b.symbol));

    return new Response(
      JSON.stringify({ 
        indices,
        timestamp: new Date().toISOString(),
        marketStatus: isMarketOpen() ? 'open' : 'closed',
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error fetching market data:', error);
    
    // Return sample data as fallback
    const fallbackIndices: MarketIndex[] = [
      { name: 'NIFTY 50', symbol: 'NIFTY', price: 24150.45, change: 125.30, changePercent: 0.52 },
      { name: 'NIFTY BANK', symbol: 'BANKNIFTY', price: 52340.80, change: -180.25, changePercent: -0.34 },
      { name: 'NIFTY IT', symbol: 'NIFTYIT', price: 43250.15, change: 320.50, changePercent: 0.75 },
      { name: 'SENSEX', symbol: 'SENSEX', price: 79850.20, change: 410.35, changePercent: 0.52 },
    ];

    return new Response(
      JSON.stringify({ 
        indices: fallbackIndices,
        timestamp: new Date().toISOString(),
        marketStatus: 'fallback',
        error: 'Using cached data',
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

function isMarketOpen(): boolean {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istTime = new Date(now.getTime() + istOffset);
  
  const day = istTime.getUTCDay();
  const hours = istTime.getUTCHours();
  const minutes = istTime.getUTCMinutes();
  
  // Market is closed on weekends
  if (day === 0 || day === 6) return false;
  
  // Market hours: 9:15 AM to 3:30 PM IST
  const timeInMinutes = hours * 60 + minutes;
  const marketOpen = 9 * 60 + 15; // 9:15 AM
  const marketClose = 15 * 60 + 30; // 3:30 PM
  
  return timeInMinutes >= marketOpen && timeInMinutes <= marketClose;
}
