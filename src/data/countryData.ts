export interface StateData {
  name: string;
  population: number;
  households: number;
  avgKwhPerHousehold: number;
  sources: Record<string, number>; // percentage
  majorConsumers: string[];
}

export interface CountryData {
  name: string;
  code: string;
  population: number;
  totalDemandGwhMonth: number;
  avgKwhPerHousehold: number;
  sources: Record<string, number>;
  sectorBreakdown: Record<string, number>;
  states: StateData[];
}

export const countriesData: CountryData[] = [
  {
    name: "India",
    code: "IN",
    population: 1_440_000_000,
    totalDemandGwhMonth: 150_000,
    avgKwhPerHousehold: 185,
    sources: { Coal: 55, Solar: 15, Wind: 10, Hydro: 12, Nuclear: 3, Gas: 5 },
    sectorBreakdown: { Residential: 28, Commercial: 9, Industrial: 42, Agriculture: 18, Public: 3 },
    states: [
      { name: "Maharashtra", population: 130_000_000, households: 26_000_000, avgKwhPerHousehold: 200, sources: { Coal: 50, Solar: 18, Wind: 12, Hydro: 10, Nuclear: 5, Gas: 5 }, majorConsumers: ["Railways", "Mumbai Metro", "Malls", "IT Parks", "Factories", "Hospitals"] },
      { name: "Uttar Pradesh", population: 240_000_000, households: 40_000_000, avgKwhPerHousehold: 120, sources: { Coal: 65, Solar: 12, Wind: 3, Hydro: 8, Nuclear: 2, Gas: 10 }, majorConsumers: ["Railways", "Agriculture Pumps", "Small Industries", "Government Offices"] },
      { name: "Tamil Nadu", population: 80_000_000, households: 20_000_000, avgKwhPerHousehold: 190, sources: { Coal: 40, Solar: 20, Wind: 25, Hydro: 10, Nuclear: 5 }, majorConsumers: ["Auto Factories", "IT Corridors", "Chennai Metro", "Textiles", "Hospitals"] },
      { name: "Gujarat", population: 70_000_000, households: 14_000_000, avgKwhPerHousehold: 210, sources: { Coal: 45, Solar: 25, Wind: 15, Gas: 10, Nuclear: 5 }, majorConsumers: ["Refineries", "Ports", "Diamond Industry", "Textile Mills", "Solar Parks"] },
      { name: "Karnataka", population: 68_000_000, households: 15_000_000, avgKwhPerHousehold: 180, sources: { Coal: 35, Solar: 22, Wind: 15, Hydro: 25, Nuclear: 3 }, majorConsumers: ["IT Parks Bangalore", "Metro Rail", "Coffee Estates", "Airports"] },
      { name: "Rajasthan", population: 82_000_000, households: 14_000_000, avgKwhPerHousehold: 150, sources: { Coal: 50, Solar: 30, Wind: 12, Gas: 5, Nuclear: 3 }, majorConsumers: ["Mining", "Tourism Hotels", "Agriculture Pumps", "Cement Plants"] },
      { name: "Delhi", population: 32_000_000, households: 5_000_000, avgKwhPerHousehold: 250, sources: { Coal: 30, Gas: 25, Solar: 15, Wind: 5, Import: 25 }, majorConsumers: ["Delhi Metro", "Government Buildings", "Malls", "Hospitals", "Data Centers"] },
      { name: "West Bengal", population: 100_000_000, households: 22_000_000, avgKwhPerHousehold: 140, sources: { Coal: 70, Solar: 8, Hydro: 10, Gas: 7, Wind: 5 }, majorConsumers: ["Kolkata Metro", "Steel Plants", "Jute Mills", "Tea Gardens"] },
    ],
  },
  {
    name: "United States",
    code: "US",
    population: 335_000_000,
    totalDemandGwhMonth: 340_000,
    avgKwhPerHousehold: 900,
    sources: { Gas: 40, Nuclear: 19, Coal: 10, Wind: 14, Solar: 8, Hydro: 6, Other: 3 },
    sectorBreakdown: { Residential: 38, Commercial: 36, Industrial: 26 },
    states: [
      { name: "California", population: 39_000_000, households: 13_000_000, avgKwhPerHousehold: 550, sources: { Gas: 38, Solar: 27, Wind: 12, Hydro: 10, Nuclear: 9, Geothermal: 4 }, majorConsumers: ["Silicon Valley Data Centers", "Hollywood Studios", "LA Metro", "Airports", "Agriculture"] },
      { name: "Texas", population: 30_000_000, households: 10_000_000, avgKwhPerHousehold: 1150, sources: { Gas: 45, Wind: 28, Solar: 10, Coal: 10, Nuclear: 7 }, majorConsumers: ["Oil Refineries", "Data Centers", "AC Systems", "Airports", "Military Bases"] },
      { name: "New York", population: 19_500_000, households: 7_500_000, avgKwhPerHousehold: 600, sources: { Gas: 35, Nuclear: 25, Hydro: 20, Wind: 10, Solar: 5, Other: 5 }, majorConsumers: ["NYC Subway", "Skyscrapers", "Wall Street Data Centers", "Hospitals", "Broadway"] },
      { name: "Florida", population: 22_500_000, households: 8_500_000, avgKwhPerHousehold: 1050, sources: { Gas: 55, Solar: 15, Nuclear: 12, Coal: 8, Other: 10 }, majorConsumers: ["Theme Parks", "AC Systems", "Airports", "Cruise Ports", "Hotels"] },
    ],
  },
  {
    name: "China",
    code: "CN",
    population: 1_425_000_000,
    totalDemandGwhMonth: 700_000,
    avgKwhPerHousehold: 350,
    sources: { Coal: 58, Hydro: 15, Wind: 10, Solar: 8, Nuclear: 5, Gas: 4 },
    sectorBreakdown: { Industrial: 58, Residential: 15, Commercial: 14, Transport: 8, Other: 5 },
    states: [
      { name: "Guangdong", population: 127_000_000, households: 40_000_000, avgKwhPerHousehold: 380, sources: { Coal: 45, Gas: 15, Nuclear: 15, Solar: 10, Hydro: 10, Wind: 5 }, majorConsumers: ["Shenzhen Tech Factories", "Guangzhou Metro", "Export Ports", "Data Centers"] },
      { name: "Shandong", population: 101_000_000, households: 35_000_000, avgKwhPerHousehold: 400, sources: { Coal: 65, Wind: 15, Solar: 10, Nuclear: 5, Hydro: 5 }, majorConsumers: ["Steel Mills", "Chemical Plants", "Agriculture", "Ports"] },
      { name: "Beijing", population: 22_000_000, households: 8_000_000, avgKwhPerHousehold: 300, sources: { Gas: 35, Coal: 25, Solar: 15, Wind: 15, Import: 10 }, majorConsumers: ["Government Buildings", "Metro System", "Data Centers", "Hospitals", "Universities"] },
    ],
  },
  {
    name: "United Kingdom",
    code: "GB",
    population: 67_500_000,
    totalDemandGwhMonth: 25_000,
    avgKwhPerHousehold: 300,
    sources: { Gas: 35, Wind: 30, Nuclear: 14, Solar: 5, Biomass: 8, Import: 8 },
    sectorBreakdown: { Residential: 30, Commercial: 28, Industrial: 22, Transport: 15, Other: 5 },
    states: [
      { name: "England", population: 56_000_000, households: 20_000_000, avgKwhPerHousehold: 310, sources: { Gas: 40, Wind: 25, Nuclear: 15, Solar: 8, Biomass: 7, Import: 5 }, majorConsumers: ["London Underground", "NHS Hospitals", "Data Centers", "Factories", "Universities"] },
      { name: "Scotland", population: 5_500_000, households: 2_500_000, avgKwhPerHousehold: 350, sources: { Wind: 55, Hydro: 15, Gas: 15, Nuclear: 10, Other: 5 }, majorConsumers: ["Oil & Gas Platforms", "Whisky Distilleries", "Wind Farms", "Universities"] },
    ],
  },
  {
    name: "Germany",
    code: "DE",
    population: 84_000_000,
    totalDemandGwhMonth: 45_000,
    avgKwhPerHousehold: 290,
    sources: { Wind: 27, Coal: 20, Gas: 15, Solar: 14, Biomass: 8, Nuclear: 0, Hydro: 4, Other: 12 },
    sectorBreakdown: { Industrial: 44, Residential: 26, Commercial: 20, Transport: 10 },
    states: [
      { name: "Bavaria", population: 13_200_000, households: 5_500_000, avgKwhPerHousehold: 310, sources: { Gas: 25, Solar: 22, Hydro: 20, Wind: 10, Biomass: 12, Coal: 11 }, majorConsumers: ["BMW Factories", "Siemens Plants", "Munich Airport", "Beer Breweries"] },
      { name: "North Rhine-Westphalia", population: 18_000_000, households: 8_000_000, avgKwhPerHousehold: 300, sources: { Coal: 35, Wind: 20, Gas: 18, Solar: 10, Biomass: 10, Other: 7 }, majorConsumers: ["Steel Works", "Chemical Plants", "Rhine Ports", "Rail Networks"] },
    ],
  },
  {
    name: "Japan",
    code: "JP",
    population: 124_000_000,
    totalDemandGwhMonth: 80_000,
    avgKwhPerHousehold: 400,
    sources: { Gas: 35, Coal: 25, Nuclear: 10, Solar: 12, Hydro: 8, Wind: 3, Other: 7 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 25, Transport: 10 },
    states: [
      { name: "Tokyo", population: 14_000_000, households: 7_000_000, avgKwhPerHousehold: 350, sources: { Gas: 40, Coal: 15, Nuclear: 12, Solar: 15, Hydro: 8, Other: 10 }, majorConsumers: ["Shinkansen", "Tokyo Metro", "Shibuya District", "Data Centers", "Hospitals"] },
      { name: "Osaka", population: 8_800_000, households: 4_000_000, avgKwhPerHousehold: 380, sources: { Gas: 38, Coal: 20, Nuclear: 15, Solar: 12, Hydro: 8, Other: 7 }, majorConsumers: ["Kansai Industries", "Osaka Metro", "Ports", "Factories"] },
    ],
  },
  {
    name: "Brazil",
    code: "BR",
    population: 216_000_000,
    totalDemandGwhMonth: 55_000,
    avgKwhPerHousehold: 160,
    sources: { Hydro: 60, Wind: 12, Biomass: 8, Gas: 8, Solar: 6, Nuclear: 2, Coal: 4 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 22, Agriculture: 8, Other: 5 },
    states: [
      { name: "São Paulo", population: 46_000_000, households: 15_000_000, avgKwhPerHousehold: 200, sources: { Hydro: 55, Gas: 15, Biomass: 10, Wind: 8, Solar: 7, Nuclear: 5 }, majorConsumers: ["Metro System", "Auto Factories", "Shopping Centers", "Hospitals", "Universities"] },
      { name: "Rio de Janeiro", population: 17_500_000, households: 6_000_000, avgKwhPerHousehold: 180, sources: { Hydro: 50, Gas: 20, Wind: 10, Solar: 8, Nuclear: 7, Other: 5 }, majorConsumers: ["Oil Refineries", "Metro", "Tourism Hotels", "Ports", "Stadiums"] },
    ],
  },
  {
    name: "Australia",
    code: "AU",
    population: 26_500_000,
    totalDemandGwhMonth: 22_000,
    avgKwhPerHousehold: 630,
    sources: { Coal: 30, Gas: 20, Solar: 22, Wind: 15, Hydro: 8, Other: 5 },
    sectorBreakdown: { Residential: 32, Commercial: 28, Industrial: 30, Transport: 10 },
    states: [
      { name: "New South Wales", population: 8_200_000, households: 3_200_000, avgKwhPerHousehold: 600, sources: { Coal: 40, Solar: 20, Wind: 12, Gas: 15, Hydro: 8, Other: 5 }, majorConsumers: ["Sydney Metro", "Mining Ops", "Data Centers", "Hospitals", "Universities"] },
      { name: "Victoria", population: 6_700_000, households: 2_600_000, avgKwhPerHousehold: 550, sources: { Gas: 30, Wind: 25, Solar: 20, Coal: 15, Hydro: 5, Other: 5 }, majorConsumers: ["Melbourne Trams", "Manufacturing", "Ports", "Hospitals"] },
    ],
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    population: 36_000_000,
    totalDemandGwhMonth: 30_000,
    avgKwhPerHousehold: 850,
    sources: { Gas: 50, Oil: 40, Solar: 5, Wind: 3, Other: 2 },
    sectorBreakdown: { Residential: 50, Industrial: 20, Commercial: 18, Government: 12 },
    states: [
      { name: "Riyadh", population: 8_500_000, households: 1_800_000, avgKwhPerHousehold: 950, sources: { Gas: 55, Oil: 35, Solar: 8, Wind: 2 }, majorConsumers: ["AC Systems", "Desalination Plants", "Metro", "Malls", "Government HQ"] },
    ],
  },
  {
    name: "South Africa",
    code: "ZA",
    population: 62_000_000,
    totalDemandGwhMonth: 19_000,
    avgKwhPerHousehold: 250,
    sources: { Coal: 65, Nuclear: 5, Wind: 10, Solar: 8, Gas: 5, Hydro: 4, Other: 3 },
    sectorBreakdown: { Industrial: 38, Residential: 25, Commercial: 22, Mining: 12, Other: 3 },
    states: [
      { name: "Gauteng", population: 16_000_000, households: 5_000_000, avgKwhPerHousehold: 300, sources: { Coal: 60, Solar: 12, Wind: 8, Nuclear: 8, Gas: 7, Other: 5 }, majorConsumers: ["Gold Mines", "Johannesburg CBD", "Gautrain", "Hospitals", "Factories"] },
    ],
  },
];

export const defaultSectorModel = {
  urban: { Residential: 45, Commercial: 30, Industrial: 10, Public: 12, Strategic: 3 },
  industrial: { Residential: 30, Commercial: 15, Industrial: 40, Public: 12, Strategic: 3 },
  remote: { Residential: 55, Commercial: 15, Industrial: 5, Public: 20, Strategic: 5 },
};

export function calculateAreaDemand(households: number, avgKwh: number, sectorType: keyof typeof defaultSectorModel = "urban") {
  const model = defaultSectorModel[sectorType];
  const residentialGwh = (households * avgKwh) / 1_000_000;
  const totalDemandGwh = residentialGwh / (model.Residential / 100);

  const breakdown: Record<string, number> = {};
  for (const sector in model) {
    breakdown[sector] = (totalDemandGwh * model[sector as keyof typeof model]) / 100;
  }

  return { totalDemandGwhPerMonth: totalDemandGwh, sectorBreakdownGwh: breakdown };
}

export function simplePredict(data: { date: string; value: number }[], days: number = 30): { date: string; predicted: number }[] {
  if (data.length < 2) return [];

  // Simple linear regression + seasonal adjustment
  const n = data.length;
  const values = data.map(d => d.value);
  const avg = values.reduce((a, b) => a + b, 0) / n;
  
  // Trend: slope from first half vs second half averages
  const half = Math.floor(n / 2);
  const firstHalf = values.slice(0, half).reduce((a, b) => a + b, 0) / half;
  const secondHalf = values.slice(half).reduce((a, b) => a + b, 0) / (n - half);
  const dailyTrend = (secondHalf - firstHalf) / (n / 2);

  // Weekly seasonality
  const weekPattern = [1.0, 0.98, 0.97, 0.96, 0.99, 1.03, 1.07]; // Mon-Sun

  const lastDate = new Date(data[data.length - 1].date);
  const lastValue = values[values.length - 1];

  const predictions: { date: string; predicted: number }[] = [];
  for (let i = 1; i <= days; i++) {
    const futureDate = new Date(lastDate);
    futureDate.setDate(futureDate.getDate() + i);
    const dayOfWeek = futureDate.getDay();
    const seasonalFactor = weekPattern[dayOfWeek === 0 ? 6 : dayOfWeek - 1];
    const predicted = Math.max(0, (lastValue + dailyTrend * i) * seasonalFactor + (Math.random() - 0.5) * avg * 0.05);
    
    predictions.push({
      date: futureDate.toISOString().split("T")[0],
      predicted: Math.round(predicted * 100) / 100,
    });
  }

  return predictions;
}
