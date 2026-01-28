import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { TrendingUp, TrendingDown, Minus, ChevronDown, BarChart3, Calendar, Building2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Disclaimer } from "@/components/Disclaimer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { getSectorData, currentSeason, EarningsResult } from "@/data/earningsData";
import { useState } from "react";

const formatCurrency = (value: number) => {
  if (value >= 1000) {
    return `₹${(value / 100).toFixed(0)}Cr`;
  }
  return `₹${value}Cr`;
};

const VerdictBadge = ({ verdict }: { verdict: 'beat' | 'miss' | 'inline' }) => {
  const styles = {
    beat: 'bg-green-500/20 text-green-400 border-green-500/30',
    miss: 'bg-red-500/20 text-red-400 border-red-500/30',
    inline: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
  };
  
  const labels = {
    beat: 'Beat Estimates',
    miss: 'Missed Estimates',
    inline: 'In Line'
  };

  const icons = {
    beat: <TrendingUp className="w-3 h-3" />,
    miss: <TrendingDown className="w-3 h-3" />,
    inline: <Minus className="w-3 h-3" />
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${styles[verdict]}`}>
      {icons[verdict]}
      {labels[verdict]}
    </span>
  );
};

const CompanyCard = ({ result }: { result: EarningsResult }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-lg font-bold">{result.company}</CardTitle>
              <p className="text-xs text-amber-500 font-medium mt-0.5">Coming Soon</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-primary font-mono text-sm">{result.ticker}</span>
                <span className="text-muted-foreground text-xs">
                  <Calendar className="w-3 h-3 inline mr-1" />
                  {new Date(result.resultDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                </span>
              </div>
            </div>
            <VerdictBadge verdict={result.verdict} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Revenue</p>
              <p className="text-lg font-semibold">{formatCurrency(result.revenue)}</p>
              <p className={`text-sm font-medium ${result.revenueGrowth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {result.revenueGrowth >= 0 ? '+' : ''}{result.revenueGrowth.toFixed(1)}% YoY
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Net Profit</p>
              <p className="text-lg font-semibold">{formatCurrency(result.netProfit)}</p>
              <p className={`text-sm font-medium ${result.profitGrowth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {result.profitGrowth >= 0 ? '+' : ''}{result.profitGrowth.toFixed(1)}% YoY
              </p>
            </div>
          </div>
          {result.analysis && (
            <p className="text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
              {result.analysis}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SectorSection = ({ name, companies }: { name: string; companies: EarningsResult[] }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const avgGrowth = companies.reduce((acc, c) => acc + c.profitGrowth, 0) / companies.length;
  const beats = companies.filter(c => c.verdict === 'beat').length;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-8">
      <CollapsibleTrigger className="w-full">
        <div className="flex items-center justify-between p-4 bg-accent/20 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-3">
            <Building2 className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold">{name}</h3>
            <span className="text-sm text-muted-foreground">
              {companies.length} {companies.length === 1 ? 'company' : 'companies'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <span className={avgGrowth >= 0 ? 'text-green-400' : 'text-red-400'}>
                Avg PAT: {avgGrowth >= 0 ? '+' : ''}{avgGrowth.toFixed(1)}%
              </span>
              <span className="text-green-400">
                {beats}/{companies.length} Beat
              </span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {companies.map(result => (
            <CompanyCard key={result.id} result={result} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const Earnings = () => {
  const sectorData = getSectorData();

  return (
    <>
      <Helmet>
        <title>Q3 FY25 Earnings Results & Analysis | AlphaBull</title>
        <meta name="description" content="Comprehensive analysis of Q3 FY25 earnings results. Track revenue, profit growth, and expert insights for top Indian companies across IT, Banking, FMCG sectors." />
        <meta name="keywords" content="Q3 results 2025, earnings analysis, stock market results, TCS results, Infosys results, HDFC Bank results, quarterly earnings India" />
        <link rel="canonical" href="https://alphabull.club/earnings" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{currentSeason.quarter} {currentSeason.fiscalYear} Earnings Season</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Quarterly <span className="text-primary">Results Analysis</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track earnings results, revenue growth, and profit trends for top Indian companies. 
              Updated analysis for {currentSeason.period}.
            </p>
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            <Card className="bg-card/50 text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-primary">{currentSeason.totalResults}</p>
                <p className="text-sm text-muted-foreground">Total Results</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-green-400">{currentSeason.beats}</p>
                <p className="text-sm text-muted-foreground">Beat Estimates</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-yellow-400">{currentSeason.inline}</p>
                <p className="text-sm text-muted-foreground">In Line</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-red-400">{currentSeason.misses}</p>
                <p className="text-sm text-muted-foreground">Missed</p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Sector Results */}
        <section className="container mx-auto px-4">
          {sectorData.map(sector => (
            <SectorSection key={sector.name} name={sector.name} companies={sector.companies} />
          ))}
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 mt-16">
          <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30">
            <CardContent className="py-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Want to Learn How to Analyze Results?</h2>
              <p className="text-muted-foreground mb-4">
                Join AlphaBull's trading courses to master fundamental and technical analysis.
              </p>
              <a
                href="/#courses"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Explore Courses
              </a>
            </CardContent>
          </Card>
        </section>
      </main>

      <Disclaimer />
      <Footer />
    </>
  );
};

export default Earnings;
