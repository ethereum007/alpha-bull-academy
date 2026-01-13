import { useState } from "react";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  Building2, 
  BarChart3, 
  Target,
  Globe,
  Cpu,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Landmark,
  Building,
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface FinancialMetric {
  label: string;
  value: string;
  subValue?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

interface CompanyResult {
  name: string;
  ticker?: string;
  quarter: string;
  summary: string;
  metrics: FinancialMetric[];
  highlights: string[];
  segmentPerformance?: {
    segment: string;
    performance: string;
    trend: "up" | "down" | "neutral";
  }[];
  outlook?: string;
  dealWins?: string[];
}

interface SectorData {
  sector: string;
  icon: React.ReactNode;
  companies: CompanyResult[];
}

const Q3Results = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [openSectors, setOpenSectors] = useState<string[]>(["Information Technology", "Wealth Management", "Banking"]);

  const toggleSector = (sector: string) => {
    setOpenSectors(prev => 
      prev.includes(sector) 
        ? prev.filter(s => s !== sector)
        : [...prev, sector]
    );
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setNavOpen(false);
  };

  const sectors: SectorData[] = [
    {
      sector: "Information Technology",
      icon: <Cpu className="w-6 h-6" />,
      companies: [
        {
          name: "Tata Elxsi",
          ticker: "TATAELXSI",
          quarter: "Q3 FY26",
          summary: "Tata Elxsi reported a resilient performance in Q3 FY26, with sequential revenue growth, sharp margin expansion, and strong execution in its Transportation business. While year-on-year growth remained modest due to global macro uncertainty, the company demonstrated operational strength and improving deal momentum.",
          metrics: [
            { label: "Revenue", value: "₹953.5 Cr", trend: "up", trendValue: "+3.9% QoQ" },
            { label: "EBITDA", value: "₹222.2 Cr", trend: "up", trendValue: "+15.0% QoQ" },
            { label: "EBITDA Margin", value: "23.3%", trend: "up", trendValue: "+220 bps QoQ" },
            { label: "Net Profit (PAT)", value: "₹179.1 Cr", trend: "up", trendValue: "+15.7% QoQ" },
            { label: "YoY Revenue Growth", value: "+1.5%", trend: "up" },
          ],
          highlights: [
            "Margin expansion driven by improved utilisation, delivery efficiencies, and disciplined cost management",
            "Margins exclude a one-time exceptional item related to the new labour code",
            "Europe and Americas led growth with strong demand from strategic clients",
            "Top 10 clients contributing ~59% of total revenue",
            "Continued investment in AI and GenAI-enabled engineering across automotive, healthcare, media, and telecom"
          ],
          segmentPerformance: [
            { segment: "Transportation", performance: "+7.7% QoQ", trend: "up" },
            { segment: "Media & Communications", performance: "−0.3% QoQ", trend: "down" },
            { segment: "Healthcare & Life Sciences", performance: "−3.6% QoQ", trend: "down" }
          ],
          dealWins: [
            "Large autonomous network transformation project with a European telecom major",
            "Regulatory workflow transformation program for a global MedTech company",
            "Digital platform development for a leading global media and publishing group",
            "End-to-end product engineering engagements with US-based healthcare and off-highway OEMs"
          ],
          outlook: "Management commentary suggests a gradual improvement in growth momentum heading into Q4 FY26, supported by a strong deal pipeline, continued demand for SDV and autonomous systems, AI-led digital transformation programs, and stable margins. While near-term macro uncertainty persists, the company is well-positioned for steady growth and margin stability over the medium term."
        }
      ]
    },
    {
      sector: "Wealth Management",
      icon: <Landmark className="w-6 h-6" />,
      companies: [
        {
          name: "Anand Rathi Wealth",
          ticker: "ANANDRATHI",
          quarter: "Q3 FY26",
          summary: "Anand Rathi Wealth Limited delivered a strong performance in Q3 FY26, marked by robust growth in revenues, profits, and assets under management (AUM). The company continues to benefit from rising equity participation, improving market share, and a disciplined focus on high-quality HNI and UHNI clients.",
          metrics: [
            { label: "Revenue", value: "₹289.6 Cr", trend: "up", trendValue: "+22.2% YoY" },
            { label: "Total Revenue", value: "₹305.7 Cr", trend: "up", trendValue: "+25.2% YoY" },
            { label: "PAT", value: "₹100.1 Cr", trend: "up", trendValue: "+29.6% YoY" },
            { label: "PAT Margin", value: "32.7%", trend: "up", trendValue: "vs 31.6% Q3 FY25" },
            { label: "EPS", value: "₹12.1", trend: "up", trendValue: "+29.9% YoY" },
            { label: "AUM", value: "₹99,008 Cr", trend: "up", trendValue: "+29.6% YoY" },
          ],
          highlights: [
            "AUM grew 29.6% YoY to ₹99,008 crore, achieving 99% of FY26 AUM guidance in 9 months",
            "Industry-leading profitability with ~47% Return on Equity (ROE)",
            "Equity MF market share (net inflows) increased to 2.38%",
            "Equity MF AUM market share rose to 1.46%",
            "Monthly SIP inflows of ₹5,831 crore with net inflows of ₹2,715 crore",
            "AUM attrition remained extremely low at below 0.15%",
            "AUM per Relationship Manager at ₹246 crore with 34 client families per RM",
            "Focus on ₹5–50 crore and ₹50+ crore client segments for improved revenue stability"
          ],
          segmentPerformance: [
            { segment: "9M FY26 Revenue", performance: "₹896.9 Cr (+21.4% YoY)", trend: "up" },
            { segment: "9M FY26 PAT", performance: "₹293.7 Cr (+29.5% YoY)", trend: "up" },
            { segment: "Equity MF Net Inflows", performance: "₹2,715 Cr", trend: "up" }
          ],
          outlook: "Management remains confident about sustained growth, supported by strong equity market participation, expanding relationship manager base, increasing wallet share from existing clients, and scalable digital and platform-led initiatives. With strong visibility on earnings, AUM growth, and margins, Anand Rathi Wealth remains well positioned to capitalise on India's evolving wealth landscape."
        }
      ]
    },
    {
      sector: "Banking",
      icon: <Building className="w-6 h-6" />,
      companies: [
        {
          name: "Bank of Maharashtra",
          ticker: "MAHABANK",
          quarter: "Q3 FY26",
          summary: "Bank of Maharashtra reported a strong operational and financial performance in Q3 FY26, marked by healthy growth in profits, sustained expansion in advances and deposits, and continued improvement in asset quality. The bank continues to benefit from balanced loan growth, strong retail traction, and disciplined risk management.",
          metrics: [
            { label: "Net Profit", value: "₹1,779 Cr", trend: "up", trendValue: "+26.5% YoY" },
            { label: "Operating Profit", value: "₹2,736 Cr", trend: "up", trendValue: "+18.8% YoY" },
            { label: "NII", value: "₹3,422 Cr", trend: "up", trendValue: "+16.3% YoY" },
            { label: "RoA", value: "1.86%", trend: "up", trendValue: "vs 1.78% YoY" },
            { label: "Cost-to-Income", value: "37.19%", trend: "up", trendValue: "vs 38.27% YoY" },
            { label: "NIM", value: "~3.86%", trend: "neutral" },
          ],
          highlights: [
            "Total Business grew 17.2% YoY to ₹5.95 lakh crore",
            "Total Deposits up 15.3% YoY to ₹3.22 lakh crore",
            "Global Advances grew 19.6% YoY to ₹2.74 lakh crore",
            "Retail Advances surged 36.4% YoY to ₹83,418 crore",
            "MSME Advances grew 7.5% YoY to ₹51,197 crore",
            "RAM advances now account for over 63% of domestic advances",
            "Credit-Deposit ratio improved to 85.0%",
            "Digital transaction share crossed 98%",
            "GoI shareholding reduced to 73.6% through OFS, meeting SEBI norms"
          ],
          segmentPerformance: [
            { segment: "Gross NPA", performance: "1.60% (vs 1.80% YoY)", trend: "up" },
            { segment: "Net NPA", performance: "0.15% (vs 0.20% YoY)", trend: "up" },
            { segment: "PCR", performance: "~90.7%", trend: "up" },
            { segment: "CRAR", performance: "~17.1%", trend: "up" }
          ],
          outlook: "Management remains cautiously optimistic on the outlook, supported by strong credit demand especially in retail and MSME segments, stable margins despite a declining rate environment, sustained improvement in asset quality, and focus on digital transformation and cost efficiency. While external risks such as global uncertainty and margin pressure remain, Bank of Maharashtra appears well-positioned to deliver sustainable profitability and return ratios."
        }
      ]
    }
  ];

  const getTrendIcon = (trend: "up" | "down" | "neutral") => {
    switch (trend) {
      case "up":
        return <ArrowUpRight className="w-4 h-4 text-green-500" />;
      case "down":
        return <ArrowDownRight className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getTrendColor = (trend: "up" | "down" | "neutral") => {
    switch (trend) {
      case "up":
        return "text-green-600 bg-green-50 dark:bg-green-950 border-green-200";
      case "down":
        return "text-red-600 bg-red-50 dark:bg-red-950 border-red-200";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <>
      <Helmet>
        <title>Q3 Results FY26 - IT Sector Earnings Analysis | AlphaBull</title>
        <meta name="description" content="Comprehensive Q3 FY26 earnings analysis covering Tata Elxsi financial performance, revenue growth, margin expansion, segment performance, deal wins, and management outlook." />
        <meta name="keywords" content="Tata Elxsi Q3 FY26 results, Tata Elxsi earnings, IT sector Q3 results, Tata Elxsi financial performance" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Q3 FY26 Earnings Season
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Q3 Results <span className="text-primary">FY26</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive analysis of quarterly earnings, financial performance, and outlook across sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation Toggle */}
        <Button
          onClick={() => setNavOpen(!navOpen)}
          className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg md:hidden"
          size="icon"
        >
          {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>

        {/* Mobile Navigation Drawer */}
        {navOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setNavOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-card border-l border-border p-4 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Quick Navigation</h3>
                <Button variant="ghost" size="icon" onClick={() => setNavOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              {sectors.map((sector, i) => (
                <Collapsible
                  key={i}
                  open={openSectors.includes(sector.sector)}
                  onOpenChange={() => toggleSector(sector.sector)}
                  className="mb-2"
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-muted text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">{sector.icon}</span>
                      <span className="font-medium text-sm">{sector.sector}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openSectors.includes(sector.sector) ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-8 space-y-1 mt-1">
                      {sector.companies.map((company, j) => (
                        <button
                          key={j}
                          onClick={() => scrollToSection(`company-${sector.sector}-${company.name}`.replace(/\s+/g, '-').toLowerCase())}
                          className="block w-full text-left text-sm py-2 px-3 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {company.name}
                        </button>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        )}

        {/* Results Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex gap-8">
              {/* Desktop Sidebar Navigation */}
              <aside className="hidden md:block w-64 shrink-0">
                <div className="sticky top-24 bg-card border border-border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Menu className="w-5 h-5 text-primary" />
                    Quick Navigation
                  </h3>
                  {sectors.map((sector, i) => (
                    <Collapsible
                      key={i}
                      open={openSectors.includes(sector.sector)}
                      onOpenChange={() => toggleSector(sector.sector)}
                      className="mb-2"
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-muted text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-primary">{sector.icon}</span>
                          <span className="font-medium text-sm">{sector.sector}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openSectors.includes(sector.sector) ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="ml-7 space-y-1 mt-1 border-l-2 border-primary/20 pl-3">
                          {sector.companies.map((company, j) => (
                            <button
                              key={j}
                              onClick={() => scrollToSection(`company-${sector.sector}-${company.name}`.replace(/\s+/g, '-').toLowerCase())}
                              className="block w-full text-left text-sm py-1.5 px-2 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {company.name}
                            </button>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1">
                {sectors.map((sector, sectorIndex) => (
                  <div key={sectorIndex} className="mb-16" id={`sector-${sector.sector}`.replace(/\s+/g, '-').toLowerCase()}>
                    {/* Sector Header */}
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {sector.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                          {sector.sector}
                        </h2>
                        <p className="text-muted-foreground">{sector.companies.length} {sector.companies.length === 1 ? 'Company' : 'Companies'}</p>
                      </div>
                    </div>

                    {/* Companies in Sector */}
                    {sector.companies.map((company, companyIndex) => (
                      <Card 
                        key={companyIndex} 
                        id={`company-${sector.sector}-${company.name}`.replace(/\s+/g, '-').toLowerCase()}
                        className="p-6 md:p-8 mb-8 scroll-mt-24"
                      >
                    {/* Company Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                            {company.name}
                          </h3>
                          {company.ticker && (
                            <Badge variant="outline" className="text-xs">
                              {company.ticker}
                            </Badge>
                          )}
                        </div>
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          {company.quarter} Results
                        </Badge>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {company.summary}
                    </p>

                    {/* Financial Metrics */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        Financial Highlights
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {company.metrics.map((metric, i) => (
                          <div key={i} className="bg-muted/50 rounded-lg p-4">
                            <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                            <p className="text-xl font-bold text-foreground">{metric.value}</p>
                            {metric.trendValue && (
                              <div className={`flex items-center gap-1 text-xs mt-1 ${metric.trend === 'up' ? 'text-green-600' : metric.trend === 'down' ? 'text-red-600' : 'text-muted-foreground'}`}>
                                {getTrendIcon(metric.trend || "neutral")}
                                {metric.trendValue}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Segment Performance */}
                    {company.segmentPerformance && (
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-primary" />
                          Segment Performance
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {company.segmentPerformance.map((seg, i) => (
                            <div key={i} className={`rounded-lg p-4 border ${getTrendColor(seg.trend)}`}>
                              <p className="font-medium mb-1">{seg.segment}</p>
                              <div className="flex items-center gap-2">
                                {getTrendIcon(seg.trend)}
                                <span className="font-semibold">{seg.performance}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Highlights */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {company.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deal Wins */}
                    {company.dealWins && (
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Globe className="w-5 h-5 text-primary" />
                          Strategic Deal Wins
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {company.dealWins.map((deal, i) => (
                            <div key={i} className="flex items-start gap-3 bg-green-50 dark:bg-green-950/30 rounded-lg p-4 border border-green-200 dark:border-green-900">
                              <TrendingUp className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                              <span className="text-sm text-foreground">{deal}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Outlook */}
                    {company.outlook && (
                      <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          Outlook
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {company.outlook}
                        </p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Q3Results;
