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
      <p class="lead">"Trading is amalgamation of patience, risk management and the right game plan"</p>
      
      <p>Most of the traders go through phases of Emotion and cycles. Let me point out few mistakes we all do.</p>

      <h2 class="mb-8">🎯 1st Mistake — Entering without a Game Plan</h2>
      
      <p class="mb-8">The number one mistake most of the traders do is entering a stock without a Game Plan.</p>
      
      <p class="mb-8">Most of the times I ask, why the entry? And the answers are astounding:</p>
      
      <p class="mb-4">• I got the tip from my friend</p>
      <p class="mb-4">• It's a good stock sir, it will go up, let me average it</p>
      <p class="mb-4">• It is available at cheap</p>
      <p class="mb-4">• Some brokerage gave this call yada yada yada…</p>
      
      <p class="mb-8">Your entry is not managed by you, but someone else's. In this instance, who will you blame if you make a loss?</p>
      
      <p class="mb-8"><strong>Before even punching a Buy/Sell order on the Screen</strong></p>
      
      <p class="mb-8">First thing you need to do is - "What is my Game plan"?</p>
      
      <p class="mb-4">• Is the stock giving a breakout?</p>
      <p class="mb-4">• Is the stock coming out weekly/monthly consolidation?</p>
      <p class="mb-4">• If I am building a strategy, is the stock meeting my entry conditions?</p>
      <p class="mb-4">• Is the stock above the moving averages for me to take an entry?</p>
      <p class="mb-4">• Is there volume build up from few sessions etc?</p>
      
      <p class="mb-8"><strong>Above all,</strong></p>
      
      <p class="mb-4">• What is my entry?</p>
      <p class="mb-4">• What is my exit?</p>
      <p class="mb-4">• What is the risk positioning?</p>
      
      <p>We will discuss other rookie mistakes in the coming blogs.</p>

      <h2>📝 Task</h2>
      
      <p class="highlight">Share one experience you had when you first started trading and what you learned from it or what was your emotion? – Could be just 2-3 lines as well. DM us on WhatsApp!</p>
    `,
  },
};
