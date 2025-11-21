import { useEffect, useRef } from 'react';

interface Candle {
  open: number;
  high: number;
  low: number;
  close: number;
  x: number;
}

export const TradingChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const candlesRef = useRef<Candle[]>([]);
  const offsetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate initial candles
    const candleWidth = 12;
    const candleGap = 8;
    const numCandles = Math.ceil(canvas.width / (candleWidth + candleGap)) + 2;
    
    let lastPrice = canvas.height * 0.5;
    
    const generateCandle = (x: number): Candle => {
      const volatility = 20;
      const change = (Math.random() - 0.5) * volatility;
      const open = lastPrice;
      const close = open + change + (Math.random() - 0.3) * volatility;
      const high = Math.max(open, close) + Math.random() * 15;
      const low = Math.min(open, close) - Math.random() * 15;
      
      lastPrice = close;
      
      return { open, high, low, close, x };
    };

    // Initialize candles
    for (let i = 0; i < numCandles; i++) {
      candlesRef.current.push(generateCandle(i * (candleWidth + candleGap)));
    }

    const drawCandle = (candle: Candle) => {
      const isBullish = candle.close > candle.open;
      const color = isBullish ? 'rgba(34, 197, 94, 0.8)' : 'rgba(239, 68, 68, 0.8)';
      
      const bodyTop = Math.min(candle.open, candle.close);
      const bodyBottom = Math.max(candle.open, candle.close);
      const bodyHeight = Math.max(bodyBottom - bodyTop, 2);

      // Draw wick
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(candle.x + candleWidth / 2, candle.high);
      ctx.lineTo(candle.x + candleWidth / 2, candle.low);
      ctx.stroke();

      // Draw body
      ctx.fillStyle = color;
      ctx.fillRect(candle.x, bodyTop, candleWidth, bodyHeight);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move candles left
      offsetRef.current += 0.5;

      if (offsetRef.current >= candleWidth + candleGap) {
        offsetRef.current = 0;
        candlesRef.current.shift();
        const lastCandle = candlesRef.current[candlesRef.current.length - 1];
        candlesRef.current.push(generateCandle(lastCandle.x + candleWidth + candleGap));
      }

      // Draw all candles
      candlesRef.current.forEach((candle) => {
        const adjustedCandle = {
          ...candle,
          x: candle.x - offsetRef.current
        };
        drawCandle(adjustedCandle);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
};
