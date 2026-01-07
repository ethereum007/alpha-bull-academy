export interface EarningsResult {
  id: string;
  company: string;
  ticker: string;
  sector: string;
  revenue: number;
  revenueGrowth: number;
  netProfit: number;
  profitGrowth: number;
  verdict: 'beat' | 'miss' | 'inline';
  resultDate: string;
  analysis?: string;
}

export interface SectorData {
  name: string;
  companies: EarningsResult[];
}

// Sample data - you can replace this with actual Q3 results
export const earningsData: EarningsResult[] = [
  {
    id: 'tcs-q3',
    company: 'Tata Consultancy Services',
    ticker: 'TCS',
    sector: 'IT',
    revenue: 64259,
    revenueGrowth: 5.6,
    netProfit: 12380,
    profitGrowth: 8.2,
    verdict: 'beat',
    resultDate: '2025-01-09',
    analysis: 'TCS delivered strong Q3 results with broad-based growth across verticals. Deal wins remained robust at $8.6B TCV.'
  },
  {
    id: 'infy-q3',
    company: 'Infosys',
    ticker: 'INFY',
    sector: 'IT',
    revenue: 41764,
    revenueGrowth: 6.1,
    netProfit: 6806,
    profitGrowth: 11.4,
    verdict: 'beat',
    resultDate: '2025-01-16',
    analysis: 'Infosys raised FY25 revenue guidance to 4.5-5%. Strong deal wins and improved margins drove the beat.'
  },
  {
    id: 'hdfc-q3',
    company: 'HDFC Bank',
    ticker: 'HDFCBANK',
    sector: 'Banking',
    revenue: 85000,
    revenueGrowth: 9.2,
    netProfit: 16735,
    profitGrowth: 6.7,
    verdict: 'inline',
    resultDate: '2025-01-20',
    analysis: 'HDFC Bank posted steady growth. NII growth moderated but asset quality remained strong with GNPA at 1.27%.'
  },
  {
    id: 'icici-q3',
    company: 'ICICI Bank',
    ticker: 'ICICIBANK',
    sector: 'Banking',
    revenue: 47000,
    revenueGrowth: 14.5,
    netProfit: 11792,
    profitGrowth: 18.3,
    verdict: 'beat',
    resultDate: '2025-01-25',
    analysis: 'ICICI Bank continues to outperform with strong loan growth and improving asset quality.'
  },
  {
    id: 'hul-q3',
    company: 'Hindustan Unilever',
    ticker: 'HINDUNILVR',
    sector: 'FMCG',
    revenue: 16100,
    revenueGrowth: 2.1,
    netProfit: 2989,
    profitGrowth: -1.8,
    verdict: 'miss',
    resultDate: '2025-01-23',
    analysis: 'Volume growth remained muted at 2%. Rural recovery slower than expected. Input cost pressures impacted margins.'
  },
  {
    id: 'reliance-q3',
    company: 'Reliance Industries',
    ticker: 'RELIANCE',
    sector: 'Conglomerate',
    revenue: 264000,
    revenueGrowth: 7.4,
    netProfit: 21930,
    profitGrowth: 12.1,
    verdict: 'beat',
    resultDate: '2025-01-17',
    analysis: 'Jio and Retail segments drove growth. O2C margins improved sequentially. New energy investments on track.'
  }
];

export const getSectorData = (): SectorData[] => {
  const sectorMap = new Map<string, EarningsResult[]>();
  
  earningsData.forEach(result => {
    const existing = sectorMap.get(result.sector) || [];
    sectorMap.set(result.sector, [...existing, result]);
  });
  
  return Array.from(sectorMap.entries()).map(([name, companies]) => ({
    name,
    companies: companies.sort((a, b) => new Date(b.resultDate).getTime() - new Date(a.resultDate).getTime())
  }));
};

export const currentSeason = {
  quarter: 'Q3',
  fiscalYear: 'FY25',
  period: 'Oct - Dec 2024',
  totalResults: earningsData.length,
  beats: earningsData.filter(e => e.verdict === 'beat').length,
  misses: earningsData.filter(e => e.verdict === 'miss').length,
  inline: earningsData.filter(e => e.verdict === 'inline').length
};
