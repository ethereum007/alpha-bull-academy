import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  type: 'index' | 'stock';
}

// Top Nifty 50 stocks to fetch
const topStocks = [
  { symbol: 'RELIANCE', name: 'RELIANCE' },
  { symbol: 'TCS', name: 'TCS' },
  { symbol: 'HDFCBANK', name: 'HDFC BANK' },
  { symbol: 'ICICIBANK', name: 'ICICI BANK' },
  { symbol: 'INFY', name: 'INFOSYS' },
  { symbol: 'SBIN', name: 'SBIN' },
  { symbol: 'BHARTIARTL', name: 'BHARTI ARTL' },
  { symbol: 'ITC', name: 'ITC' },
  { symbol: 'KOTAKBANK', name: 'KOTAK BANK' },
  { symbol: 'LT', name: 'L&T' },
  { symbol: 'HINDUNILVR', name: 'HUL' },
  { symbol: 'AXISBANK', name: 'AXIS BANK' },
  { symbol: 'ADANIENT', name: 'ADANI ENT' },
  { symbol: 'BAJFINANCE', name: 'BAJ FINANCE' },
  { symbol: 'MARUTI', name: 'MARUTI' },
  { symbol: 'TATAMOTORS', name: 'TATA MOTORS' },
  { symbol: 'SUNPHARMA', name: 'SUN PHARMA' },
  { symbol: 'WIPRO', name: 'WIPRO' },
  { symbol: 'HCLTECH', name: 'HCL TECH' },
  { symbol: 'TATASTEEL', name: 'TATA STEEL' },
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const nseHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Referer': 'https://www.nseindia.com/market-data/live-equity-market',
    };

    // Get cookies from NSE
    const homeResponse = await fetch('https://www.nseindia.com/', { headers: nseHeaders });
    const cookies = homeResponse.headers.get('set-cookie') || '';

    const results: MarketData[] = [];

    // Fetch all indices
    try {
      const indexResponse = await fetch('https://www.nseindia.com/api/allIndices', {
        headers: { ...nseHeaders, 'Cookie': cookies },
      });

      if (indexResponse.ok) {
        const indexData = await indexResponse.json();
        const targetIndices = ['NIFTY 50', 'NIFTY BANK', 'NIFTY IT', 'NIFTY NEXT 50'];
        
        for (const item of indexData.data || []) {
          if (targetIndices.includes(item.index)) {
            results.push({
              symbol: item.index.replace('NIFTY ', '').replace(' ', ''),
              name: item.index,
              price: parseFloat(item.last) || 0,
              change: parseFloat(item.variation) || 0,
              changePercent: parseFloat(item.percentChange) || 0,
              type: 'index',
            });
          }
        }
      }
    } catch (e) {
      console.error('Index fetch error:', e);
    }

    // Fetch live equity market data for all stocks at once
    try {
      const equityResponse = await fetch(
        'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050',
        { headers: { ...nseHeaders, 'Cookie': cookies } }
      );

      if (equityResponse.ok) {
        const equityData = await equityResponse.json();
        const stockSymbols = topStocks.map(s => s.symbol);
        
        for (const item of equityData.data || []) {
          if (stockSymbols.includes(item.symbol)) {
            const stockInfo = topStocks.find(s => s.symbol === item.symbol);
            results.push({
              symbol: item.symbol,
              name: stockInfo?.name || item.symbol,
              price: parseFloat(item.lastPrice) || 0,
              change: parseFloat(item.change) || 0,
              changePercent: parseFloat(item.pChange) || 0,
              type: 'stock',
            });
          }
        }
      }
    } catch (e) {
      console.error('Stock fetch error:', e);
    }

    // If we got data, return it
    if (results.length > 0) {
      // Sort: indices first, then stocks by absolute change percent
      results.sort((a, b) => {
        if (a.type !== b.type) return a.type === 'index' ? -1 : 1;
        return Math.abs(b.changePercent) - Math.abs(a.changePercent);
      });

      return new Response(
        JSON.stringify({ 
          data: results,
          timestamp: new Date().toISOString(),
          marketStatus: isMarketOpen() ? 'open' : 'closed',
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fallback data if API fails
    throw new Error('No data fetched');

  } catch (error) {
    console.error('Error:', error);
    
    const fallbackData: MarketData[] = [
      { symbol: 'NIFTY50', name: 'NIFTY 50', price: 24150.45, change: 125.30, changePercent: 0.52, type: 'index' },
      { symbol: 'BANKNIFTY', name: 'NIFTY BANK', price: 52340.80, change: -180.25, changePercent: -0.34, type: 'index' },
      { symbol: 'RELIANCE', name: 'RELIANCE', price: 2890.50, change: 45.20, changePercent: 1.59, type: 'stock' },
      { symbol: 'TCS', name: 'TCS', price: 4125.30, change: -28.50, changePercent: -0.69, type: 'stock' },
      { symbol: 'HDFCBANK', name: 'HDFC BANK', price: 1678.90, change: 12.35, changePercent: 0.74, type: 'stock' },
      { symbol: 'ICICIBANK', name: 'ICICI BANK', price: 1245.60, change: 35.80, changePercent: 2.96, type: 'stock' },
      { symbol: 'INFY', name: 'INFOSYS', price: 1890.25, change: -15.40, changePercent: -0.81, type: 'stock' },
      { symbol: 'SBIN', name: 'SBIN', price: 825.40, change: 8.90, changePercent: 1.09, type: 'stock' },
      { symbol: 'BHARTIARTL', name: 'BHARTI ARTL', price: 1580.75, change: 22.30, changePercent: 1.43, type: 'stock' },
      { symbol: 'ITC', name: 'ITC', price: 465.80, change: -3.20, changePercent: -0.68, type: 'stock' },
      { symbol: 'ADANIENT', name: 'ADANI ENT', price: 2875.50, change: -42.30, changePercent: -1.45, type: 'stock' },
      { symbol: 'TATAMOTORS', name: 'TATA MOTORS', price: 985.60, change: 18.75, changePercent: 1.94, type: 'stock' },
    ];

    return new Response(
      JSON.stringify({ 
        data: fallbackData,
        timestamp: new Date().toISOString(),
        marketStatus: 'fallback',
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function isMarketOpen(): boolean {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istTime = new Date(now.getTime() + istOffset);
  
  const day = istTime.getUTCDay();
  if (day === 0 || day === 6) return false;
  
  const hours = istTime.getUTCHours();
  const minutes = istTime.getUTCMinutes();
  const timeInMinutes = hours * 60 + minutes;
  
  return timeInMinutes >= 555 && timeInMinutes <= 930; // 9:15 AM to 3:30 PM IST
}
