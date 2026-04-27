"use client";

import { useEffect, useState, useRef } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  type: 'index' | 'stock';
}

// Brand colors for stocks (simplified)
const stockColors: Record<string, string> = {
  'RELIANCE': '#0055a4',
  'TCS': '#0055a4',
  'HDFCBANK': '#004C8F',
  'ICICIBANK': '#F58220',
  'INFY': '#007CC3',
  'SBIN': '#22409A',
  'BHARTIARTL': '#E60012',
  'ITC': '#003087',
  'KOTAKBANK': '#ED1C24',
  'LT': '#005BAC',
  'HUL': '#1F36C7',
  'AXISBANK': '#97144D',
  'ADANIENT': '#0055A4',
  'BAJFINANCE': '#00A6E8',
  'MARUTI': '#ED1C24',
  'TATAMOTORS': '#0055A4',
  'SUNPHARMA': '#FF6600',
  'WIPRO': '#481986',
  'HCLTECH': '#0097CD',
  'TATASTEEL': '#0055A4',
};

// Static fallback data for instant render
const fallbackData: MarketData[] = [
  { symbol: 'NIFTY50', name: 'NIFTY 50', price: 24150.45, change: 125.30, changePercent: 0.52, type: 'index' },
  { symbol: 'BANKNIFTY', name: 'NIFTY BANK', price: 52340.80, change: -180.25, changePercent: -0.34, type: 'index' },
  { symbol: 'RELIANCE', name: 'RELIANCE', price: 2890.50, change: 45.20, changePercent: 1.59, type: 'stock' },
  { symbol: 'TCS', name: 'TCS', price: 4125.30, change: -28.50, changePercent: -0.69, type: 'stock' },
  { symbol: 'HDFCBANK', name: 'HDFC BANK', price: 1678.90, change: 12.35, changePercent: 0.74, type: 'stock' },
  { symbol: 'ICICIBANK', name: 'ICICI BANK', price: 1245.60, change: 35.80, changePercent: 2.96, type: 'stock' },
  { symbol: 'INFY', name: 'INFOSYS', price: 1890.25, change: -15.40, changePercent: -0.81, type: 'stock' },
  { symbol: 'SBIN', name: 'SBIN', price: 825.40, change: 8.90, changePercent: 1.09, type: 'stock' },
];

export const MarketTicker = () => {
  const [marketData, setMarketData] = useState<MarketData[]>(fallbackData);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    // Fetch live data in background after initial render (non-blocking)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout
    
    const fetchMarketData = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('get-market-data', {
          body: { signal: controller.signal }
        });
        
        if (!error && data?.data) {
          setMarketData(data.data);
        }
      } catch {
        // Silently use fallback data
      }
    };

    // Delay fetch slightly to prioritize initial render
    const fetchTimer = setTimeout(fetchMarketData, 100);
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchMarketData, 5 * 60 * 1000);
    
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(fetchTimer);
      clearInterval(interval);
      controller.abort();
    };
  }, []);

  // Smooth scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || marketData.length === 0) return;

    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPosition += speed;
      const maxScroll = scrollContainer.scrollWidth / 2;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [marketData]);


  // Duplicate for seamless loop
  const duplicatedData = [...marketData, ...marketData];

  return (
    <div className="fixed top-[116px] left-0 right-0 z-30 bg-card border-b border-border py-2.5 overflow-hidden">
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex gap-6 whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          {duplicatedData.map((item, index) => (
            <div
              key={`${item.symbol}-${index}`}
              className="flex items-center gap-3 px-3 py-1 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              {/* Stock/Index Icon */}
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                style={{ 
                  backgroundColor: item.type === 'index' 
                    ? 'hsl(var(--primary))' 
                    : stockColors[item.symbol] || '#666'
                }}
              >
                {item.symbol.charAt(0)}
              </div>

              {/* Symbol */}
              <span className="font-semibold text-sm">
                {item.name}
              </span>

              {/* Price */}
              <span className="text-sm font-medium text-foreground">
                {item.price.toLocaleString('en-IN', { 
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2 
                })}
                {item.type === 'index' ? '' : ''}
              </span>

              {/* Change */}
              <span
                className={`flex items-center gap-1 text-xs font-semibold ${
                  item.change >= 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {item.change >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {item.change >= 0 ? '+' : ''}
                {item.change.toFixed(2)} ({item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};