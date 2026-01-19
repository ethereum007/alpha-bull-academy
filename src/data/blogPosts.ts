import tradingMistakes from "@/assets/blog-trading-mistakes.png";

export interface BlogPostMeta {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface BlogPostContent extends BlogPostMeta {
  subtitle: string;
  keywords: string;
  content: string;
}

export const blogPostsMeta: BlogPostMeta[] = [
  {
    id: "top-7-mistakes-by-traders",
    title: "Top 7 Mistakes by Traders",
    excerpt: "Most traders go through phases of emotion and cycles. Learn about the common mistakes that can derail your trading journey and how to avoid them.",
    author: "AlphaBull Academy",
    date: "2026-01-19",
    readTime: "5 min read",
    category: "Trading Psychology",
    image: tradingMistakes,
  },
];

export const blogPostsContent: Record<string, BlogPostContent> = {
  "top-7-mistakes-by-traders": {
    id: "top-7-mistakes-by-traders",
    title: "Top 7 Mistakes by Traders",
    subtitle: "Trading is Amalgamation of Patience, Risk Management and the Right Game Plan",
    author: "AlphaBull Academy",
    date: "2026-01-19",
    readTime: "5 min read",
    category: "Trading Psychology",
    image: tradingMistakes,
    keywords: "trading mistakes, trading psychology, game plan trading, risk management, beginner trading errors",
    excerpt: "Most traders go through phases of emotion and cycles. Learn about the common mistakes that can derail your trading journey and how to avoid them.",
    content: `
      <p class="lead">"Trading is amalgamation of patience, risk management and the right game plan." Most of the traders go through phases of emotion and cycles. Let me point out few mistakes we all do.</p>

      <h2>🎯 MISTAKE NO 1 — Trading Without a Game Plan</h2>
      <p>The foremost mistake a trader does is, just trade for fun with no game plan. I've seen traders who wake up every morning, open their trading terminal and trade just randomly till the market closes.</p>
      <p>Every trading day should have a game plan. And yes, without a trading plan you might be in profits for few days but profits are not consistent this way.</p>

      <h2>📉 MISTAKE NO 2 — Averaging Without Knowledge</h2>
      <p>Averaging is a strategy where you buy/sell more quantity of the same stock when it has fallen/gone up. Though it's a potent strategy, it should be used only under specific conditions and not every time.</p>
      <p>Most of the traders are in habit of averaging when the trade starts moving against their position. Remember, proper risk management must be followed when averaging.</p>

      <h2>💧 MISTAKE NO 3 — Trading in Illiquid Stocks</h2>
      <p>Illiquid stocks are those where the trading volume is very low. These stocks often have wide bid-ask spreads and can move unexpectedly in either direction.</p>
      <p>Always trade in liquid stocks where there's enough volume to enter and exit positions without significant slippage.</p>

      <h2>🛑 MISTAKE NO 4 — Not Following Stop Loss</h2>
      <p>This is perhaps the most devastating mistake. Many traders set stop losses but remove them when price approaches, hoping for a reversal.</p>
      <p>A stop loss is your insurance against unlimited losses. Once set, it should never be moved further away from your entry.</p>

      <h2>⚡ MISTAKE NO 5 — Overtrading</h2>
      <p>Trading too frequently often leads to poor decision-making and increased transaction costs. Quality of trades matters more than quantity.</p>
      <p>Wait for high-probability setups that align with your trading plan rather than forcing trades when conditions aren't favorable.</p>

      <h2>😤 MISTAKE NO 6 — Trading With Emotions</h2>
      <p>Fear and greed are the two emotions that destroy trading accounts. Fear prevents you from taking good trades, while greed keeps you in losing positions hoping for reversals.</p>
      <p>Develop emotional discipline by following your trading plan mechanically and taking breaks after significant wins or losses.</p>

      <h2>📓 MISTAKE NO 7 — Not Maintaining a Trading Journal</h2>
      <p>Without tracking your trades, you cannot identify patterns in your behavior or improve your strategy. A trading journal is essential for growth.</p>
      <p>Record every trade with entry/exit reasons, emotions felt, and lessons learned. Review weekly to identify areas for improvement.</p>

      <h2>🔑 Key Takeaway</h2>
      <p class="highlight">Trading success comes from discipline, not predictions. Avoid these common mistakes, follow your game plan, and always protect your capital with proper risk management.</p>
    `,
  },
};
