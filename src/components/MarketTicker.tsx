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

export const MarketTicker = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const fetchMarketData = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('get-market-data');
      
      if (error) {
        console.error('Error fetching market data:', error);
        return;
      }

      if (data?.data) {
        setMarketData(data.data);
      }
    } catch (error) {
      console.error('Error fetching market data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
    const interval = setInterval(fetchMarketData, 5 * 60 * 1000);
    return () => clearInterval(interval);
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

  if (loading || marketData.length === 0) {
    return (
      <div className="fixed top-[116px] left-0 right-0 z-30 bg-card border-b border-border py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            Loading market data...
          </div>
        </div>
      </div>
    );
  }

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
