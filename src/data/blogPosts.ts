import tradingMistakes from "@/assets/blog-trading-mistakes.png";
import systemHopping from "@/assets/blog-system-hopping.png";
import systemHoppingCover from "@/assets/blog-system-hopping-cover.png";
import systemHoppingInline from "@/assets/blog-system-hopping-inline.png";

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
    readTime: "8 min read",
    category: "Trading Psychology",
    image: tradingMistakes,
  },
  {
    id: "system-hopping-the-silent-account-killer",
    title: "System Hopping — The Silent Account Killer",
    excerpt: "Why constantly switching trading strategies is destroying your progress. Learn why mastering ONE system beats knowing ten, and how to break the cycle.",
    author: "AlphaBull Academy",
    date: "2026-01-26",
    readTime: "6 min read",
    category: "Mistakes Traders Make",
    image: systemHoppingCover,
  },
];

export const blogPostsContent: Record<string, BlogPostContent> = {
  "top-7-mistakes-by-traders": {
    id: "top-7-mistakes-by-traders",
    title: "Top 7 Mistakes by Traders",
    subtitle: "Trading is Amalgamation of Patience, Risk Management and the Right Game Plan",
    author: "AlphaBull Academy",
    date: "2026-01-19",
    readTime: "8 min read",
    category: "Trading Psychology",
    image: tradingMistakes,
    keywords: "trading mistakes, trading psychology, game plan trading, risk management, beginner trading errors, system hopping, revenge trading, overtrading",
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

      <h2 class="mb-8">🔄 2nd Mistake — System Hopping</h2>
      
      <img src="${systemHopping}" alt="System Hopping in Trading - traders who keep switching strategies never see real progress" class="mb-8 rounded-lg w-full" />
      
      <p class="mb-8">This is the death of many traders. A trader tries one system, sees a couple of losses, panics, and jumps to the next "holy grail" strategy.</p>
      
      <p class="mb-8">Every time you switch your system, you go back to zero. You lose all the screen time, all the pattern recognition, all the muscle memory you were building.</p>
      
      <p class="mb-4">• Week 1: "Moving averages are the best!"</p>
      <p class="mb-4">• Week 3: "No no, RSI divergence is where the money is"</p>
      <p class="mb-4">• Week 5: "Forget indicators, let me try option selling"</p>
      <p class="mb-4">• Week 7: "Back to basics — candlestick patterns!"</p>
      
      <p class="mb-8">Sound familiar? Every system works — <strong>if you give it enough time and stick with it.</strong></p>
      
      <p class="mb-8">The trader who masters ONE setup will always outperform the trader who knows 10 setups superficially. Dedicate yourself to mastering one system. Give it at least 100 trades before you judge it.</p>

      <h2 class="mb-8">😤 3rd Mistake — Revenge Trading</h2>
      
      <p class="mb-8">You took a loss. It hurts. Your ego says, "I need to make it back NOW." So you jump into the next trade without any setup, without any logic — just emotion.</p>
      
      <p class="mb-8">This is revenge trading, and it's one of the fastest ways to blow up your account.</p>
      
      <p class="mb-4">• You increase your position size to "recover faster"</p>
      <p class="mb-4">• You take low-probability trades just to be in the market</p>
      <p class="mb-4">• You ignore your stop loss because "it will come back"</p>
      
      <p class="mb-8">The market doesn't owe you anything. A loss is a loss — accept it, journal it, and move on. The next quality setup will come. <strong>Patience pays, revenge doesn't.</strong></p>

      <h2 class="mb-8">📊 4th Mistake — Overtrading</h2>
      
      <p class="mb-8">More trades ≠ more money. In fact, it's usually the opposite.</p>
      
      <p class="mb-8">Overtrading comes from the need to "always be doing something." But the best traders know that sometimes the best trade is NO trade.</p>
      
      <p class="mb-4">• You're forcing entries where there are none</p>
      <p class="mb-4">• You're trading out of boredom, not conviction</p>
      <p class="mb-4">• Your brokerage is making more money than you are</p>
      
      <p class="mb-8">Set a maximum number of trades per day or per week. <strong>Quality over quantity — always.</strong> If your setup doesn't appear, sit on your hands. The market will be there tomorrow.</p>

      <h2 class="mb-8">⚠️ 5th Mistake — Ignoring Risk Management</h2>
      
      <p class="mb-8">You can have the best strategy in the world, but without risk management, you're building a house on sand.</p>
      
      <p class="mb-8">Most beginners focus on "how much can I make?" The right question is "how much can I afford to lose?"</p>
      
      <p class="mb-4">• Never risk more than 1-2% of your capital on a single trade</p>
      <p class="mb-4">• Always have a stop loss — ALWAYS</p>
      <p class="mb-4">• Position sizing is not optional, it's survival</p>
      <p class="mb-4">• A 50% loss requires a 100% gain just to break even</p>
      
      <p class="mb-8"><strong>Risk management is not about avoiding losses — it's about surviving long enough to win.</strong> The traders who last 5+ years in the market are the ones who respect risk above everything.</p>

      <h2 class="mb-8">📰 6th Mistake — Trading on News & Tips</h2>
      
      <p class="mb-8">By the time you hear the news, the smart money has already acted. By the time you see the WhatsApp tip, the person who sent it has already taken their position.</p>
      
      <p class="mb-4">• "XYZ company getting a big order — BUY!" (stock already up 15%)</p>
      <p class="mb-4">• "Market will crash" — (market rallies next day)</p>
      <p class="mb-4">• Telegram channel says "100% sure shot tip" — (nothing is 100% in markets)</p>
      
      <p class="mb-8">News creates noise. <strong>Charts tell you the truth.</strong> Learn to read price action and you'll never need to depend on someone else's opinion again. Trade what you see, not what you hear.</p>

      <h2 class="mb-8">🧠 7th Mistake — Not Journaling Your Trades</h2>
      
      <p class="mb-8">If you're not journaling, you're not learning. It's that simple.</p>
      
      <p class="mb-8">A trade journal is your personal coach. It shows you patterns in YOUR behaviour — not the market's.</p>
      
      <p class="mb-4">• What time of day do you trade best?</p>
      <p class="mb-4">• Which setups give you the highest win rate?</p>
      <p class="mb-4">• Are you losing more on Mondays? After lunch? When the market is choppy?</p>
      
      <p class="mb-8">For every trade, note down: <strong>Entry reason, Exit reason, Emotion during the trade, and What you learned.</strong> After 50 trades, your journal will reveal insights no course or mentor can teach you.</p>

      <h2>📝 Task</h2>
      
      <p class="highlight">Share one experience you had when you first started trading and what you learned from it or what was your emotion? – Could be just 2-3 lines as well. DM us on WhatsApp!</p>
    `,
  },
  "system-hopping-the-silent-account-killer": {
    id: "system-hopping-the-silent-account-killer",
    title: "System Hopping — The Silent Account Killer",
    subtitle: "Why Switching Strategies Every Week Is Keeping You Stuck at Zero",
    author: "AlphaBull Academy",
    date: "2026-01-26",
    readTime: "6 min read",
    category: "Mistakes Traders Make",
    image: systemHoppingCover,
    keywords: "system hopping trading, switching trading strategies, trading consistency, trading discipline, stick to one strategy, trading mistakes India",
    excerpt: "Why constantly switching trading strategies is destroying your progress. Learn why mastering ONE system beats knowing ten, and how to break the cycle.",
    content: `
      <p class="lead">"Every time you switch your system, you go back to zero."</p>

      <p class="mb-8">This is the death of more trading accounts than any market crash ever could be. It's silent. It's subtle. And almost every trader falls for it — <strong>System Hopping.</strong></p>

      <h2 class="mb-8">🔄 What Is System Hopping?</h2>

      <img src="${systemHoppingInline}" alt="System Hopping in Trading - traders who keep switching strategies never see real progress" class="mb-8 rounded-lg w-full" />

      <p class="mb-8">System Hopping is when a trader tries one strategy, sees a couple of losses, panics, and jumps to the next "holy grail" strategy. Then the cycle repeats — endlessly.</p>

      <p class="mb-8">Here's what it typically looks like:</p>

      <p class="mb-4">• <strong>Week 1:</strong> "Moving averages are the best! I'll master this."</p>
      <p class="mb-4">• <strong>Week 3:</strong> "Two losses in a row? Moving averages don't work. Let me try RSI divergence."</p>
      <p class="mb-4">• <strong>Week 5:</strong> "RSI is also giving false signals. Forget indicators, let me try option selling."</p>
      <p class="mb-4">• <strong>Week 7:</strong> "Option selling is risky. Back to basics — candlestick patterns!"</p>
      <p class="mb-8">• <strong>Week 9:</strong> "Nothing works in this market..." 😩</p>

      <p class="mb-8">Sound familiar? You're not alone. But here's the truth nobody tells you...</p>

      <h2 class="mb-8">📉 Why System Hopping Destroys You</h2>

      <p class="mb-8">Every trading system goes through <strong>drawdown periods.</strong> That's normal. But when you abandon a system during its drawdown, you miss the recovery — which is where the profits are.</p>

      <p class="mb-4">• You lose all the <strong>screen time</strong> you invested</p>
      <p class="mb-4">• You lose the <strong>pattern recognition</strong> you were building</p>
      <p class="mb-4">• You lose the <strong>muscle memory</strong> of executing that system</p>
      <p class="mb-4">• You reset your <strong>learning curve to zero</strong> — every single time</p>

      <p class="mb-8">It's like digging 10 wells, each 3 feet deep, instead of one well 30 feet deep. You put in the same effort but never hit water.</p>

      <h2 class="mb-8">🧠 The Psychology Behind It</h2>

      <p class="mb-8">System hopping is driven by two powerful emotions:</p>

      <p class="mb-4"><strong>1. Fear of missing out (FOMO):</strong> You see someone posting profits with a different strategy and think, "That's the one! My system is broken."</p>
      <p class="mb-8"><strong>2. Instant gratification:</strong> We want results NOW. When losses come (and they will), our brain wants to escape the pain by trying something new.</p>

      <p class="mb-8">But here's what separates profitable traders from the rest — <strong>they endure the drawdown.</strong> They trust their edge because they've tested it over 100+ trades, not just 10.</p>

      <h2 class="mb-8">✅ How to Break the Cycle</h2>

      <p class="mb-4"><strong>1. Pick ONE system.</strong> Just one. Moving averages, price action, RSI — it doesn't matter. What matters is commitment.</p>
      <p class="mb-4"><strong>2. Give it 100 trades.</strong> Not 10, not 20 — at least 100 trades before you judge any system. This gives you a statistically meaningful sample.</p>
      <p class="mb-4"><strong>3. Journal every trade.</strong> Write down your entry, exit, emotion, and lesson. After 100 trades, the data will tell you if the system works — not your feelings.</p>
      <p class="mb-4"><strong>4. Accept losses as tuition fees.</strong> Every loss is a learning opportunity. The market is charging you tuition — make sure you're actually learning.</p>
      <p class="mb-8"><strong>5. Stop watching others.</strong> Their Instagram screenshots are highlight reels. Focus on YOUR process, YOUR system, YOUR growth.</p>

      <h2 class="mb-8">💡 The One System Rule</h2>

      <p class="mb-8">Here's a powerful exercise: <strong>For the next 3 months, trade ONLY one setup.</strong> One timeframe, one entry condition, one exit rule. Nothing else.</p>

      <p class="mb-8">You'll be amazed at how deeply you start understanding price behaviour when you're not distracted by 15 different strategies. You'll start seeing nuances that system hoppers never notice.</p>

      <p class="mb-8"><strong>The trader who masters ONE setup will ALWAYS outperform the trader who knows 10 setups superficially.</strong></p>

      <h2>📝 Your Action Step</h2>

      <p class="highlight">Write down the ONE system you'll commit to for the next 90 days. Share it with us on WhatsApp — we'll hold you accountable! DM us at +91 90329 99466</p>
    `,
  },
};
