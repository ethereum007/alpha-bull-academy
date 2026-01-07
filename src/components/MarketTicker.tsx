import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface MarketIndex {
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

export const MarketTicker = () => {
  const [indices, setIndices] = useState<MarketIndex[]>([
    { name: "NIFTY 50", symbol: "NIFTY", price: 0, change: 0, changePercent: 0 },
    { name: "BANK NIFTY", symbol: "BANKNIFTY", price: 0, change: 0, changePercent: 0 },
    { name: "NIFTY IT", symbol: "NIFTYIT", price: 0, change: 0, changePercent: 0 },
    { name: "SENSEX", symbol: "SENSEX", price: 0, change: 0, changePercent: 0 },
  ]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchMarketData = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('get-market-data');
      
      if (error) {
        console.error('Error fetching market data:', error);
        return;
      }

      if (data?.indices) {
        setIndices(data.indices);
        setLastUpdated(new Date());
      }
    } catch (error) {
      console.error('Error fetching market data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
    
    // Refresh every 5 minutes during market hours
    const interval = setInterval(fetchMarketData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Duplicate indices for seamless loop
  const duplicatedIndices = [...indices, ...indices];

  return (
    <div className="bg-card/80 backdrop-blur-sm border-b border-border/50 py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground shrink-0 border-r border-border/50 pr-4">
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">
              {lastUpdated 
                ? `Updated: ${lastUpdated.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`
                : 'Loading...'}
            </span>
          </div>
          
          <div className="overflow-hidden flex-1">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -50 * indices.length * 8],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedIndices.map((index, i) => (
                <div
                  key={`${index.symbol}-${i}`}
                  className="flex items-center gap-3 shrink-0"
                >
                  <span className="font-semibold text-sm whitespace-nowrap">
                    {index.name}
                  </span>
                  <span className="text-sm font-medium">
                    {index.price > 0 ? index.price.toLocaleString('en-IN', { maximumFractionDigits: 2 }) : '—'}
                  </span>
                  {index.price > 0 && (
                    <span
                      className={`flex items-center gap-1 text-xs font-medium ${
                        index.change >= 0 ? 'text-success' : 'text-destructive'
                      }`}
                    >
                      {index.change >= 0 ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)} ({index.changePercent.toFixed(2)}%)
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
