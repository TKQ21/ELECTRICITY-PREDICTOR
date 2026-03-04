export interface StateData {
  name: string;
  population: number;
  households: number;
  avgKwhPerHousehold: number;
  sources: Record<string, number>;
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
  // ===== ASIA =====
  {
    name: "India", code: "IN", population: 1_440_000_000, totalDemandGwhMonth: 150_000, avgKwhPerHousehold: 185,
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
      { name: "Madhya Pradesh", population: 87_000_000, households: 16_000_000, avgKwhPerHousehold: 130, sources: { Coal: 60, Solar: 18, Hydro: 12, Wind: 5, Gas: 5 }, majorConsumers: ["Agriculture Pumps", "Cement Plants", "Mining", "Railways"] },
      { name: "Andhra Pradesh", population: 53_000_000, households: 13_000_000, avgKwhPerHousehold: 170, sources: { Coal: 40, Solar: 22, Wind: 18, Hydro: 15, Gas: 5 }, majorConsumers: ["Ports", "Pharma Industry", "Agriculture", "Amaravati Construction"] },
      { name: "Telangana", population: 40_000_000, households: 10_000_000, avgKwhPerHousehold: 195, sources: { Coal: 48, Solar: 20, Wind: 10, Hydro: 12, Gas: 10 }, majorConsumers: ["Hyderabad IT Hub", "Pharma Companies", "Metro Rail", "Data Centers"] },
      { name: "Kerala", population: 35_000_000, households: 9_000_000, avgKwhPerHousehold: 160, sources: { Hydro: 40, Solar: 20, Coal: 15, Wind: 10, Gas: 10, Other: 5 }, majorConsumers: ["Tourism Hotels", "Kochi Metro", "Ports", "Hospitals", "IT Parks"] },
      { name: "Punjab", population: 31_000_000, households: 6_500_000, avgKwhPerHousehold: 220, sources: { Coal: 55, Solar: 15, Hydro: 15, Wind: 5, Gas: 10 }, majorConsumers: ["Agriculture Pumps", "Grain Mills", "Railways", "Small Industries"] },
      { name: "Bihar", population: 130_000_000, households: 22_000_000, avgKwhPerHousehold: 80, sources: { Coal: 65, Solar: 12, Hydro: 10, Gas: 8, Other: 5 }, majorConsumers: ["Agriculture Pumps", "Railways", "Government Offices", "Small Industries"] },
      { name: "Odisha", population: 47_000_000, households: 11_000_000, avgKwhPerHousehold: 140, sources: { Coal: 60, Hydro: 18, Solar: 10, Wind: 7, Other: 5 }, majorConsumers: ["Steel Plants", "Aluminium Smelters", "Mining", "Ports"] },
      { name: "Jharkhand", population: 40_000_000, households: 8_000_000, avgKwhPerHousehold: 120, sources: { Coal: 75, Solar: 8, Hydro: 8, Wind: 4, Other: 5 }, majorConsumers: ["Coal Mines", "Steel Plants", "Railways", "Cement Plants"] },
      { name: "Assam", population: 36_000_000, households: 7_500_000, avgKwhPerHousehold: 100, sources: { Gas: 30, Hydro: 25, Coal: 20, Solar: 12, Other: 13 }, majorConsumers: ["Oil Refineries", "Tea Gardens", "Railways", "Government Buildings"] },
      { name: "Chhattisgarh", population: 30_000_000, households: 6_000_000, avgKwhPerHousehold: 160, sources: { Coal: 70, Solar: 12, Hydro: 10, Other: 8 }, majorConsumers: ["Steel Plants", "Power Plants", "Mining", "Cement Factories"] },
      { name: "Haryana", population: 30_000_000, households: 5_500_000, avgKwhPerHousehold: 200, sources: { Coal: 50, Solar: 20, Gas: 12, Wind: 8, Other: 10 }, majorConsumers: ["Auto Factories", "IT Parks Gurugram", "Agriculture", "Railways"] },
      { name: "Uttarakhand", population: 12_000_000, households: 2_500_000, avgKwhPerHousehold: 150, sources: { Hydro: 55, Coal: 20, Solar: 12, Wind: 5, Other: 8 }, majorConsumers: ["Tourism Hotels", "Pharma Plants", "Military Bases", "AIIMS Hospital"] },
      { name: "Goa", population: 1_600_000, households: 400_000, avgKwhPerHousehold: 200, sources: { Coal: 35, Solar: 20, Gas: 15, Hydro: 10, Wind: 10, Other: 10 }, majorConsumers: ["Tourism Hotels", "Mining", "Ports", "Pharma Companies"] },
      { name: "Himachal Pradesh", population: 7_500_000, households: 1_800_000, avgKwhPerHousehold: 170, sources: { Hydro: 65, Solar: 15, Coal: 10, Wind: 5, Other: 5 }, majorConsumers: ["Hydropower Plants", "Tourism", "Apple Cold Storage", "Cement Plants"] },
      { name: "Jammu & Kashmir", population: 14_000_000, households: 2_800_000, avgKwhPerHousehold: 140, sources: { Hydro: 50, Coal: 20, Solar: 12, Gas: 10, Other: 8 }, majorConsumers: ["Military Bases", "Tourism Hotels", "Agriculture", "Government Buildings"] },
    ],
  },
  {
    name: "China", code: "CN", population: 1_425_000_000, totalDemandGwhMonth: 700_000, avgKwhPerHousehold: 350,
    sources: { Coal: 58, Hydro: 15, Wind: 10, Solar: 8, Nuclear: 5, Gas: 4 },
    sectorBreakdown: { Industrial: 58, Residential: 15, Commercial: 14, Transport: 8, Other: 5 },
    states: [
      { name: "Guangdong", population: 127_000_000, households: 40_000_000, avgKwhPerHousehold: 380, sources: { Coal: 45, Gas: 15, Nuclear: 15, Solar: 10, Hydro: 10, Wind: 5 }, majorConsumers: ["Shenzhen Tech Factories", "Guangzhou Metro", "Export Ports", "Data Centers"] },
      { name: "Shandong", population: 101_000_000, households: 35_000_000, avgKwhPerHousehold: 400, sources: { Coal: 65, Wind: 15, Solar: 10, Nuclear: 5, Hydro: 5 }, majorConsumers: ["Steel Mills", "Chemical Plants", "Agriculture", "Ports"] },
      { name: "Beijing", population: 22_000_000, households: 8_000_000, avgKwhPerHousehold: 300, sources: { Gas: 35, Coal: 25, Solar: 15, Wind: 15, Import: 10 }, majorConsumers: ["Government Buildings", "Metro System", "Data Centers", "Hospitals", "Universities"] },
      { name: "Jiangsu", population: 85_000_000, households: 28_000_000, avgKwhPerHousehold: 380, sources: { Coal: 50, Solar: 18, Wind: 12, Nuclear: 10, Gas: 10 }, majorConsumers: ["Manufacturing Hubs", "Ports", "IT Industry", "Chemical Plants"] },
      { name: "Zhejiang", population: 66_000_000, households: 22_000_000, avgKwhPerHousehold: 360, sources: { Coal: 42, Nuclear: 18, Solar: 15, Wind: 10, Hydro: 10, Gas: 5 }, majorConsumers: ["E-commerce Warehouses", "Textile Industry", "Ports", "Tech Companies"] },
      { name: "Henan", population: 99_000_000, households: 30_000_000, avgKwhPerHousehold: 320, sources: { Coal: 68, Solar: 12, Wind: 10, Hydro: 5, Gas: 5 }, majorConsumers: ["Agriculture", "Food Processing", "Coal Mines", "Railways"] },
      { name: "Sichuan", population: 84_000_000, households: 28_000_000, avgKwhPerHousehold: 280, sources: { Hydro: 60, Coal: 15, Gas: 12, Solar: 8, Wind: 5 }, majorConsumers: ["Hydropower Plants", "Electronics Factories", "Agriculture", "Chengdu Metro"] },
      { name: "Shanghai", population: 25_000_000, households: 10_000_000, avgKwhPerHousehold: 350, sources: { Gas: 35, Coal: 20, Nuclear: 15, Solar: 12, Wind: 10, Import: 8 }, majorConsumers: ["Financial District", "Ports", "Metro System", "Factories", "Airports"] },
      { name: "Hubei", population: 58_000_000, households: 19_000_000, avgKwhPerHousehold: 320, sources: { Hydro: 40, Coal: 35, Solar: 10, Wind: 8, Nuclear: 7 }, majorConsumers: ["Three Gorges Dam", "Auto Factories", "Steel Plants", "Universities"] },
      { name: "Yunnan", population: 47_000_000, households: 14_000_000, avgKwhPerHousehold: 250, sources: { Hydro: 70, Solar: 12, Wind: 8, Coal: 5, Other: 5 }, majorConsumers: ["Aluminium Smelters", "Mining", "Tourism", "Agriculture"] },
    ],
  },
  {
    name: "Japan", code: "JP", population: 124_000_000, totalDemandGwhMonth: 80_000, avgKwhPerHousehold: 400,
    sources: { Gas: 35, Coal: 25, Nuclear: 10, Solar: 12, Hydro: 8, Wind: 3, Other: 7 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 25, Transport: 10 },
    states: [
      { name: "Tokyo", population: 14_000_000, households: 7_000_000, avgKwhPerHousehold: 350, sources: { Gas: 40, Coal: 15, Nuclear: 12, Solar: 15, Hydro: 8, Other: 10 }, majorConsumers: ["Shinkansen", "Tokyo Metro", "Shibuya District", "Data Centers", "Hospitals"] },
      { name: "Osaka", population: 8_800_000, households: 4_000_000, avgKwhPerHousehold: 380, sources: { Gas: 38, Coal: 20, Nuclear: 15, Solar: 12, Hydro: 8, Other: 7 }, majorConsumers: ["Kansai Industries", "Osaka Metro", "Ports", "Factories"] },
      { name: "Kanagawa", population: 9_200_000, households: 4_200_000, avgKwhPerHousehold: 360, sources: { Gas: 42, Solar: 18, Nuclear: 12, Coal: 15, Hydro: 8, Other: 5 }, majorConsumers: ["Auto Factories", "Yokohama Port", "Research Labs", "Electronics"] },
      { name: "Aichi", population: 7_500_000, households: 3_200_000, avgKwhPerHousehold: 420, sources: { Gas: 35, Coal: 22, Nuclear: 12, Solar: 15, Hydro: 8, Other: 8 }, majorConsumers: ["Toyota Factories", "Nagoya Port", "Airports", "Manufacturing"] },
      { name: "Hokkaido", population: 5_200_000, households: 2_600_000, avgKwhPerHousehold: 450, sources: { Coal: 30, Gas: 25, Hydro: 15, Wind: 12, Solar: 10, Geothermal: 8 }, majorConsumers: ["Agriculture", "Dairy Farms", "Heating Systems", "Sapporo Metro", "Tourism"] },
    ],
  },
  {
    name: "South Korea", code: "KR", population: 52_000_000, totalDemandGwhMonth: 48_000, avgKwhPerHousehold: 350,
    sources: { Nuclear: 30, Coal: 28, Gas: 25, Solar: 8, Wind: 4, Hydro: 3, Other: 2 },
    sectorBreakdown: { Industrial: 50, Residential: 15, Commercial: 25, Transport: 10 },
    states: [
      { name: "Seoul", population: 9_700_000, households: 4_000_000, avgKwhPerHousehold: 300, sources: { Gas: 35, Nuclear: 25, Coal: 18, Solar: 10, Import: 7, Other: 5 }, majorConsumers: ["Seoul Metro", "Samsung HQ", "Shopping Districts", "Data Centers", "Hospitals"] },
      { name: "Gyeonggi", population: 13_600_000, households: 5_200_000, avgKwhPerHousehold: 370, sources: { Nuclear: 30, Gas: 25, Coal: 22, Solar: 12, Wind: 6, Other: 5 }, majorConsumers: ["Semiconductor Fabs", "Auto Industry", "Airports", "Military Bases"] },
      { name: "Busan", population: 3_400_000, households: 1_400_000, avgKwhPerHousehold: 340, sources: { Nuclear: 35, Coal: 25, Gas: 20, Solar: 8, Wind: 7, Other: 5 }, majorConsumers: ["Busan Port", "Shipbuilding", "Petrochemicals", "Metro System"] },
    ],
  },
  {
    name: "Indonesia", code: "ID", population: 280_000_000, totalDemandGwhMonth: 28_000, avgKwhPerHousehold: 130,
    sources: { Coal: 60, Gas: 15, Hydro: 8, Geothermal: 6, Solar: 4, Oil: 4, Other: 3 },
    sectorBreakdown: { Industrial: 35, Residential: 42, Commercial: 18, Other: 5 },
    states: [
      { name: "Jakarta", population: 11_000_000, households: 3_000_000, avgKwhPerHousehold: 200, sources: { Coal: 50, Gas: 25, Solar: 8, Oil: 7, Other: 10 }, majorConsumers: ["MRT System", "Shopping Malls", "Government HQ", "Factories", "Ports"] },
      { name: "West Java", population: 50_000_000, households: 13_000_000, avgKwhPerHousehold: 140, sources: { Coal: 55, Gas: 18, Geothermal: 10, Hydro: 8, Solar: 5, Other: 4 }, majorConsumers: ["Textile Factories", "Manufacturing", "Agriculture", "Tea Plantations"] },
      { name: "East Java", population: 40_000_000, households: 11_000_000, avgKwhPerHousehold: 120, sources: { Coal: 60, Gas: 15, Geothermal: 8, Hydro: 8, Solar: 5, Other: 4 }, majorConsumers: ["Petrochemicals", "Cement Plants", "Agriculture", "Ports"] },
      { name: "Bali", population: 4_400_000, households: 1_200_000, avgKwhPerHousehold: 160, sources: { Coal: 40, Gas: 20, Solar: 15, Geothermal: 10, Oil: 8, Other: 7 }, majorConsumers: ["Tourism Hotels", "Resorts", "Airports", "Shopping Areas"] },
    ],
  },
  {
    name: "Pakistan", code: "PK", population: 235_000_000, totalDemandGwhMonth: 13_000, avgKwhPerHousehold: 110,
    sources: { Gas: 30, Hydro: 25, Coal: 18, Nuclear: 10, Oil: 8, Solar: 5, Wind: 4 },
    sectorBreakdown: { Residential: 47, Industrial: 25, Commercial: 8, Agriculture: 12, Other: 8 },
    states: [
      { name: "Punjab", population: 120_000_000, households: 20_000_000, avgKwhPerHousehold: 120, sources: { Gas: 35, Coal: 20, Hydro: 15, Nuclear: 12, Solar: 8, Oil: 5, Wind: 5 }, majorConsumers: ["Textile Mills", "Agriculture Pumps", "Railways", "Lahore Metro"] },
      { name: "Sindh", population: 55_000_000, households: 9_000_000, avgKwhPerHousehold: 100, sources: { Gas: 40, Coal: 22, Wind: 12, Solar: 10, Hydro: 8, Oil: 8 }, majorConsumers: ["Karachi Port", "Industries", "Oil Refineries", "Agriculture"] },
      { name: "Khyber Pakhtunkhwa", population: 40_000_000, households: 6_000_000, avgKwhPerHousehold: 90, sources: { Hydro: 55, Gas: 15, Coal: 12, Solar: 8, Oil: 5, Other: 5 }, majorConsumers: ["Hydropower Plants", "Agriculture", "Military", "Mining"] },
    ],
  },
  {
    name: "Bangladesh", code: "BD", population: 175_000_000, totalDemandGwhMonth: 8_500, avgKwhPerHousehold: 90,
    sources: { Gas: 55, Coal: 15, Oil: 10, Hydro: 3, Solar: 8, Import: 6, Other: 3 },
    sectorBreakdown: { Industrial: 38, Residential: 35, Commercial: 15, Agriculture: 7, Other: 5 },
    states: [
      { name: "Dhaka Division", population: 45_000_000, households: 10_000_000, avgKwhPerHousehold: 120, sources: { Gas: 50, Coal: 18, Oil: 10, Solar: 8, Import: 8, Other: 6 }, majorConsumers: ["Garment Factories", "Dhaka Metro", "Malls", "Government Offices"] },
      { name: "Chittagong Division", population: 35_000_000, households: 7_000_000, avgKwhPerHousehold: 100, sources: { Gas: 45, Coal: 20, Oil: 12, Hydro: 8, Solar: 8, Other: 7 }, majorConsumers: ["Chittagong Port", "Ship Breaking", "Steel Mills", "Cement Plants"] },
    ],
  },
  {
    name: "Thailand", code: "TH", population: 72_000_000, totalDemandGwhMonth: 16_500, avgKwhPerHousehold: 200,
    sources: { Gas: 55, Coal: 15, Hydro: 5, Solar: 10, Biomass: 8, Import: 5, Other: 2 },
    sectorBreakdown: { Industrial: 38, Residential: 25, Commercial: 28, Agriculture: 4, Other: 5 },
    states: [
      { name: "Bangkok", population: 11_000_000, households: 3_500_000, avgKwhPerHousehold: 260, sources: { Gas: 55, Coal: 12, Solar: 12, Import: 8, Biomass: 5, Other: 8 }, majorConsumers: ["BTS/MRT Metro", "Shopping Malls", "Hotels", "Hospitals", "Airports"] },
      { name: "Eastern Seaboard", population: 5_500_000, households: 1_500_000, avgKwhPerHousehold: 350, sources: { Gas: 60, Coal: 15, Solar: 10, Biomass: 5, Other: 10 }, majorConsumers: ["Petrochemical Plants", "Auto Factories", "Laem Chabang Port", "Industrial Estates"] },
    ],
  },
  {
    name: "Vietnam", code: "VN", population: 100_000_000, totalDemandGwhMonth: 22_000, avgKwhPerHousehold: 170,
    sources: { Coal: 40, Hydro: 25, Gas: 12, Solar: 12, Wind: 6, Biomass: 3, Other: 2 },
    sectorBreakdown: { Industrial: 52, Residential: 28, Commercial: 12, Agriculture: 4, Other: 4 },
    states: [
      { name: "Ho Chi Minh City", population: 10_000_000, households: 3_000_000, avgKwhPerHousehold: 220, sources: { Coal: 35, Gas: 20, Solar: 15, Hydro: 15, Wind: 8, Other: 7 }, majorConsumers: ["Manufacturing Zones", "Metro System", "Ports", "Tech Parks", "Shopping Centers"] },
      { name: "Hanoi", population: 8_500_000, households: 2_500_000, avgKwhPerHousehold: 200, sources: { Coal: 45, Hydro: 20, Gas: 12, Solar: 10, Wind: 8, Other: 5 }, majorConsumers: ["Government Buildings", "Industrial Parks", "Metro", "Universities"] },
    ],
  },
  {
    name: "Philippines", code: "PH", population: 117_000_000, totalDemandGwhMonth: 9_500, avgKwhPerHousehold: 110,
    sources: { Coal: 45, Gas: 18, Geothermal: 12, Hydro: 8, Solar: 7, Wind: 5, Oil: 3, Other: 2 },
    sectorBreakdown: { Industrial: 30, Residential: 35, Commercial: 28, Other: 7 },
    states: [
      { name: "Metro Manila", population: 14_000_000, households: 3_500_000, avgKwhPerHousehold: 180, sources: { Coal: 40, Gas: 25, Geothermal: 10, Solar: 10, Hydro: 5, Other: 10 }, majorConsumers: ["Business Districts", "MRT/LRT", "Shopping Malls", "Call Centers", "Hospitals"] },
      { name: "Cebu", population: 5_000_000, households: 1_200_000, avgKwhPerHousehold: 130, sources: { Coal: 50, Solar: 15, Geothermal: 12, Hydro: 8, Wind: 8, Other: 7 }, majorConsumers: ["Tourism Hotels", "Ports", "IT Parks", "Manufacturing"] },
    ],
  },
  {
    name: "Malaysia", code: "MY", population: 34_000_000, totalDemandGwhMonth: 14_500, avgKwhPerHousehold: 350,
    sources: { Gas: 38, Coal: 30, Hydro: 15, Solar: 8, Oil: 4, Biomass: 3, Other: 2 },
    sectorBreakdown: { Industrial: 45, Commercial: 30, Residential: 22, Other: 3 },
    states: [
      { name: "Selangor", population: 7_000_000, households: 2_000_000, avgKwhPerHousehold: 400, sources: { Gas: 40, Coal: 28, Solar: 12, Hydro: 10, Other: 10 }, majorConsumers: ["KL Metro", "Data Centers", "Manufacturing", "Petronas HQ", "Airports"] },
      { name: "Sarawak", population: 2_900_000, households: 700_000, avgKwhPerHousehold: 300, sources: { Hydro: 55, Gas: 20, Coal: 10, Solar: 8, Biomass: 7 }, majorConsumers: ["Bakun Dam", "Aluminium Smelters", "Timber Industry", "Palm Oil Mills"] },
    ],
  },
  {
    name: "Singapore", code: "SG", population: 6_000_000, totalDemandGwhMonth: 4_500, avgKwhPerHousehold: 400,
    sources: { Gas: 95, Solar: 3, Other: 2 },
    sectorBreakdown: { Industrial: 38, Commercial: 37, Residential: 15, Transport: 10 },
    states: [
      { name: "Singapore", population: 6_000_000, households: 1_400_000, avgKwhPerHousehold: 400, sources: { Gas: 95, Solar: 3, Other: 2 }, majorConsumers: ["MRT System", "Data Centers", "Petrochemical Hub", "Changi Airport", "Marina Bay"] },
    ],
  },
  {
    name: "Taiwan", code: "TW", population: 23_500_000, totalDemandGwhMonth: 22_000, avgKwhPerHousehold: 350,
    sources: { Gas: 40, Coal: 30, Nuclear: 9, Solar: 10, Wind: 5, Hydro: 3, Other: 3 },
    sectorBreakdown: { Industrial: 52, Residential: 18, Commercial: 20, Transport: 10 },
    states: [
      { name: "Taipei", population: 2_600_000, households: 1_000_000, avgKwhPerHousehold: 300, sources: { Gas: 45, Coal: 20, Nuclear: 10, Solar: 10, Wind: 8, Other: 7 }, majorConsumers: ["Taipei Metro", "TSMC Facilities", "Tech Parks", "Data Centers", "Hospitals"] },
      { name: "Kaohsiung", population: 2_700_000, households: 1_000_000, avgKwhPerHousehold: 400, sources: { Gas: 35, Coal: 35, Solar: 12, Nuclear: 8, Wind: 5, Other: 5 }, majorConsumers: ["Ports", "Steel Mills", "Petrochemicals", "Shipbuilding"] },
    ],
  },
  {
    name: "Myanmar", code: "MM", population: 55_000_000, totalDemandGwhMonth: 2_500, avgKwhPerHousehold: 60,
    sources: { Hydro: 50, Gas: 30, Coal: 10, Solar: 5, Other: 5 },
    sectorBreakdown: { Industrial: 30, Residential: 40, Commercial: 15, Agriculture: 10, Other: 5 },
    states: [
      { name: "Yangon", population: 7_500_000, households: 2_000_000, avgKwhPerHousehold: 100, sources: { Gas: 40, Hydro: 30, Coal: 12, Solar: 8, Other: 10 }, majorConsumers: ["Garment Factories", "Ports", "Pagodas", "Markets", "Government Buildings"] },
    ],
  },
  {
    name: "Cambodia", code: "KH", population: 17_000_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 80,
    sources: { Hydro: 40, Coal: 25, Solar: 12, Import: 15, Oil: 5, Other: 3 },
    sectorBreakdown: { Industrial: 30, Residential: 40, Commercial: 20, Other: 10 },
    states: [
      { name: "Phnom Penh", population: 2_200_000, households: 500_000, avgKwhPerHousehold: 130, sources: { Hydro: 35, Coal: 25, Solar: 15, Import: 15, Gas: 5, Other: 5 }, majorConsumers: ["Garment Factories", "Hotels", "Shopping Centers", "Government Buildings"] },
    ],
  },
  {
    name: "Sri Lanka", code: "LK", population: 22_000_000, totalDemandGwhMonth: 1_500, avgKwhPerHousehold: 85,
    sources: { Hydro: 30, Coal: 25, Oil: 15, Solar: 12, Wind: 10, Biomass: 5, Other: 3 },
    sectorBreakdown: { Industrial: 30, Residential: 35, Commercial: 25, Other: 10 },
    states: [
      { name: "Western Province", population: 6_000_000, households: 1_500_000, avgKwhPerHousehold: 120, sources: { Coal: 30, Hydro: 25, Oil: 15, Solar: 12, Wind: 10, Other: 8 }, majorConsumers: ["Colombo Port", "Garment Factories", "Hotels", "Government HQ"] },
    ],
  },
  {
    name: "Nepal", code: "NP", population: 31_000_000, totalDemandGwhMonth: 800, avgKwhPerHousehold: 55,
    sources: { Hydro: 90, Solar: 5, Import: 3, Other: 2 },
    sectorBreakdown: { Residential: 45, Industrial: 20, Commercial: 18, Agriculture: 12, Other: 5 },
    states: [
      { name: "Bagmati Province", population: 6_000_000, households: 1_300_000, avgKwhPerHousehold: 80, sources: { Hydro: 85, Solar: 8, Import: 4, Other: 3 }, majorConsumers: ["Kathmandu Valley", "Cement Plants", "Hotels", "Government Buildings"] },
    ],
  },
  {
    name: "Mongolia", code: "MN", population: 3_400_000, totalDemandGwhMonth: 700, avgKwhPerHousehold: 250,
    sources: { Coal: 80, Hydro: 5, Wind: 8, Solar: 5, Other: 2 },
    sectorBreakdown: { Industrial: 40, Residential: 30, Commercial: 15, Mining: 10, Other: 5 },
    states: [
      { name: "Ulaanbaatar", population: 1_600_000, households: 400_000, avgKwhPerHousehold: 300, sources: { Coal: 85, Solar: 5, Wind: 5, Other: 5 }, majorConsumers: ["Mining Companies", "Heating Plants", "Government Buildings", "Shopping Centers"] },
    ],
  },
  {
    name: "Kazakhstan", code: "KZ", population: 20_000_000, totalDemandGwhMonth: 9_500, avgKwhPerHousehold: 350,
    sources: { Coal: 65, Gas: 15, Hydro: 10, Wind: 5, Solar: 3, Nuclear: 0, Other: 2 },
    sectorBreakdown: { Industrial: 45, Residential: 20, Commercial: 15, Mining: 15, Other: 5 },
    states: [
      { name: "Almaty", population: 2_100_000, households: 600_000, avgKwhPerHousehold: 400, sources: { Coal: 55, Hydro: 20, Gas: 10, Solar: 8, Wind: 5, Other: 2 }, majorConsumers: ["Metro System", "Shopping Centers", "Data Centers", "Universities"] },
      { name: "Astana", population: 1_300_000, households: 350_000, avgKwhPerHousehold: 450, sources: { Coal: 60, Gas: 18, Wind: 10, Solar: 7, Other: 5 }, majorConsumers: ["Government Buildings", "Expo City", "Heating Systems", "Universities"] },
    ],
  },
  {
    name: "Uzbekistan", code: "UZ", population: 36_000_000, totalDemandGwhMonth: 5_500, avgKwhPerHousehold: 200,
    sources: { Gas: 75, Hydro: 12, Coal: 5, Solar: 4, Wind: 2, Other: 2 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Agriculture: 18, Commercial: 12, Other: 5 },
    states: [
      { name: "Tashkent", population: 2_900_000, households: 700_000, avgKwhPerHousehold: 280, sources: { Gas: 70, Hydro: 12, Solar: 8, Coal: 5, Other: 5 }, majorConsumers: ["Metro System", "Textile Mills", "Government Buildings", "Agriculture"] },
    ],
  },
  {
    name: "Israel", code: "IL", population: 10_000_000, totalDemandGwhMonth: 6_500, avgKwhPerHousehold: 500,
    sources: { Gas: 65, Solar: 15, Coal: 12, Wind: 3, Other: 5 },
    sectorBreakdown: { Residential: 30, Commercial: 28, Industrial: 22, Agriculture: 10, Other: 10 },
    states: [
      { name: "Tel Aviv District", population: 1_500_000, households: 550_000, avgKwhPerHousehold: 450, sources: { Gas: 70, Solar: 12, Coal: 8, Wind: 5, Other: 5 }, majorConsumers: ["Tech Startups", "Diamond Exchange", "Hospitals", "Universities", "Desalination"] },
      { name: "Negev", population: 800_000, households: 200_000, avgKwhPerHousehold: 600, sources: { Solar: 40, Gas: 40, Coal: 10, Wind: 5, Other: 5 }, majorConsumers: ["Solar Farms", "Military Bases", "Agriculture", "Mining", "Desalination Plants"] },
    ],
  },
  {
    name: "Iraq", code: "IQ", population: 44_000_000, totalDemandGwhMonth: 8_000, avgKwhPerHousehold: 250,
    sources: { Gas: 50, Oil: 35, Hydro: 5, Solar: 5, Import: 3, Other: 2 },
    sectorBreakdown: { Residential: 48, Industrial: 18, Commercial: 15, Government: 14, Other: 5 },
    states: [
      { name: "Baghdad", population: 9_000_000, households: 2_000_000, avgKwhPerHousehold: 300, sources: { Gas: 55, Oil: 30, Solar: 7, Import: 5, Other: 3 }, majorConsumers: ["Government Buildings", "AC Systems", "Hospitals", "Markets", "Military"] },
    ],
  },
  {
    name: "Iran", code: "IR", population: 88_000_000, totalDemandGwhMonth: 28_000, avgKwhPerHousehold: 280,
    sources: { Gas: 65, Oil: 12, Hydro: 10, Nuclear: 5, Wind: 3, Solar: 3, Other: 2 },
    sectorBreakdown: { Industrial: 33, Residential: 33, Commercial: 18, Agriculture: 10, Other: 6 },
    states: [
      { name: "Tehran", population: 9_500_000, households: 3_000_000, avgKwhPerHousehold: 320, sources: { Gas: 70, Oil: 10, Hydro: 5, Nuclear: 5, Solar: 5, Other: 5 }, majorConsumers: ["Metro System", "Industries", "Government HQ", "Bazaars", "Hospitals"] },
      { name: "Isfahan", population: 2_200_000, households: 600_000, avgKwhPerHousehold: 300, sources: { Gas: 60, Hydro: 12, Nuclear: 8, Solar: 8, Oil: 7, Other: 5 }, majorConsumers: ["Steel Plants", "Petrochemicals", "Tourism", "Nuclear Facilities"] },
    ],
  },
  {
    name: "Afghanistan", code: "AF", population: 42_000_000, totalDemandGwhMonth: 600, avgKwhPerHousehold: 30,
    sources: { Hydro: 35, Import: 40, Solar: 10, Gas: 8, Other: 7 },
    sectorBreakdown: { Residential: 55, Commercial: 15, Industrial: 10, Government: 12, Other: 8 },
    states: [
      { name: "Kabul", population: 5_000_000, households: 800_000, avgKwhPerHousehold: 50, sources: { Import: 50, Hydro: 20, Solar: 12, Gas: 10, Other: 8 }, majorConsumers: ["Government Buildings", "Hospitals", "Markets", "Military Bases"] },
    ],
  },

  // ===== AMERICAS =====
  {
    name: "United States", code: "US", population: 335_000_000, totalDemandGwhMonth: 340_000, avgKwhPerHousehold: 900,
    sources: { Gas: 40, Nuclear: 19, Coal: 10, Wind: 14, Solar: 8, Hydro: 6, Other: 3 },
    sectorBreakdown: { Residential: 38, Commercial: 36, Industrial: 26 },
    states: [
      { name: "California", population: 39_000_000, households: 13_000_000, avgKwhPerHousehold: 550, sources: { Gas: 38, Solar: 27, Wind: 12, Hydro: 10, Nuclear: 9, Geothermal: 4 }, majorConsumers: ["Silicon Valley Data Centers", "Hollywood Studios", "LA Metro", "Airports", "Agriculture"] },
      { name: "Texas", population: 30_000_000, households: 10_000_000, avgKwhPerHousehold: 1150, sources: { Gas: 45, Wind: 28, Solar: 10, Coal: 10, Nuclear: 7 }, majorConsumers: ["Oil Refineries", "Data Centers", "AC Systems", "Airports", "Military Bases"] },
      { name: "New York", population: 19_500_000, households: 7_500_000, avgKwhPerHousehold: 600, sources: { Gas: 35, Nuclear: 25, Hydro: 20, Wind: 10, Solar: 5, Other: 5 }, majorConsumers: ["NYC Subway", "Skyscrapers", "Wall Street Data Centers", "Hospitals", "Broadway"] },
      { name: "Florida", population: 22_500_000, households: 8_500_000, avgKwhPerHousehold: 1050, sources: { Gas: 55, Solar: 15, Nuclear: 12, Coal: 8, Other: 10 }, majorConsumers: ["Theme Parks", "AC Systems", "Airports", "Cruise Ports", "Hotels"] },
      { name: "Pennsylvania", population: 13_000_000, households: 5_200_000, avgKwhPerHousehold: 850, sources: { Gas: 40, Nuclear: 32, Coal: 8, Wind: 8, Solar: 5, Hydro: 4, Other: 3 }, majorConsumers: ["Steel Mills", "Hospitals", "Universities", "Data Centers", "Manufacturing"] },
      { name: "Illinois", population: 12_500_000, households: 5_000_000, avgKwhPerHousehold: 750, sources: { Nuclear: 50, Gas: 18, Wind: 15, Coal: 8, Solar: 5, Other: 4 }, majorConsumers: ["Chicago L Train", "O'Hare Airport", "Data Centers", "Commodities Trading", "Manufacturing"] },
      { name: "Ohio", population: 11_800_000, households: 4_800_000, avgKwhPerHousehold: 900, sources: { Gas: 42, Coal: 15, Nuclear: 14, Wind: 12, Solar: 8, Hydro: 4, Other: 5 }, majorConsumers: ["Auto Plants", "Steel Mills", "Hospitals", "Universities", "Agriculture"] },
      { name: "Georgia", population: 11_000_000, households: 4_000_000, avgKwhPerHousehold: 1000, sources: { Gas: 38, Nuclear: 25, Coal: 12, Solar: 10, Hydro: 5, Biomass: 5, Other: 5 }, majorConsumers: ["Atlanta Airport", "Data Centers", "Military Bases", "Agriculture", "Port of Savannah"] },
      { name: "Washington", population: 7_800_000, households: 3_000_000, avgKwhPerHousehold: 950, sources: { Hydro: 65, Wind: 12, Gas: 10, Nuclear: 5, Solar: 4, Other: 4 }, majorConsumers: ["Boeing Factories", "Tech Companies", "Ports", "Agriculture", "Data Centers"] },
      { name: "Arizona", population: 7_500_000, households: 2_800_000, avgKwhPerHousehold: 1100, sources: { Gas: 30, Nuclear: 25, Solar: 22, Coal: 10, Wind: 5, Hydro: 5, Other: 3 }, majorConsumers: ["AC Systems", "Data Centers", "Mining", "Military Bases", "Agriculture"] },
    ],
  },
  {
    name: "Canada", code: "CA", population: 40_000_000, totalDemandGwhMonth: 50_000, avgKwhPerHousehold: 950,
    sources: { Hydro: 58, Nuclear: 14, Gas: 12, Wind: 8, Solar: 3, Coal: 3, Other: 2 },
    sectorBreakdown: { Industrial: 38, Residential: 30, Commercial: 27, Transport: 5 },
    states: [
      { name: "Ontario", population: 15_000_000, households: 5_500_000, avgKwhPerHousehold: 850, sources: { Nuclear: 55, Hydro: 25, Gas: 8, Wind: 8, Solar: 3, Other: 1 }, majorConsumers: ["Toronto Subway", "Auto Factories", "Mining", "Data Centers", "Hospitals"] },
      { name: "Quebec", population: 8_800_000, households: 3_500_000, avgKwhPerHousehold: 1200, sources: { Hydro: 94, Wind: 4, Biomass: 1, Other: 1 }, majorConsumers: ["Aluminium Smelters", "Montreal Metro", "Heating Systems", "Data Centers", "Paper Mills"] },
      { name: "Alberta", population: 4_700_000, households: 1_700_000, avgKwhPerHousehold: 900, sources: { Gas: 55, Wind: 15, Coal: 10, Solar: 8, Hydro: 8, Other: 4 }, majorConsumers: ["Oil Sands", "Petrochemicals", "Agriculture", "Data Centers", "Mining"] },
      { name: "British Columbia", population: 5_400_000, households: 2_000_000, avgKwhPerHousehold: 1000, sources: { Hydro: 88, Gas: 5, Wind: 3, Solar: 2, Biomass: 2 }, majorConsumers: ["Mining", "Vancouver SkyTrain", "Ports", "Forestry", "Data Centers"] },
    ],
  },
  {
    name: "Brazil", code: "BR", population: 216_000_000, totalDemandGwhMonth: 55_000, avgKwhPerHousehold: 160,
    sources: { Hydro: 60, Wind: 12, Biomass: 8, Gas: 8, Solar: 6, Nuclear: 2, Coal: 4 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 22, Agriculture: 8, Other: 5 },
    states: [
      { name: "São Paulo", population: 46_000_000, households: 15_000_000, avgKwhPerHousehold: 200, sources: { Hydro: 55, Gas: 15, Biomass: 10, Wind: 8, Solar: 7, Nuclear: 5 }, majorConsumers: ["Metro System", "Auto Factories", "Shopping Centers", "Hospitals", "Universities"] },
      { name: "Rio de Janeiro", population: 17_500_000, households: 6_000_000, avgKwhPerHousehold: 180, sources: { Hydro: 50, Gas: 20, Wind: 10, Solar: 8, Nuclear: 7, Other: 5 }, majorConsumers: ["Oil Refineries", "Metro", "Tourism Hotels", "Ports", "Stadiums"] },
      { name: "Minas Gerais", population: 21_000_000, households: 7_000_000, avgKwhPerHousehold: 170, sources: { Hydro: 65, Wind: 10, Solar: 10, Biomass: 8, Gas: 5, Other: 2 }, majorConsumers: ["Mining", "Steel Plants", "Agriculture", "Coffee Processing"] },
      { name: "Bahia", population: 15_000_000, households: 5_000_000, avgKwhPerHousehold: 130, sources: { Hydro: 40, Wind: 30, Solar: 15, Biomass: 8, Gas: 5, Other: 2 }, majorConsumers: ["Wind Farms", "Petrochemicals", "Tourism", "Ports", "Agriculture"] },
    ],
  },
  {
    name: "Mexico", code: "MX", population: 132_000_000, totalDemandGwhMonth: 27_000, avgKwhPerHousehold: 180,
    sources: { Gas: 55, Hydro: 10, Coal: 5, Nuclear: 4, Wind: 8, Solar: 10, Oil: 5, Other: 3 },
    sectorBreakdown: { Industrial: 35, Residential: 25, Commercial: 22, Agriculture: 5, Other: 13 },
    states: [
      { name: "Mexico City", population: 9_200_000, households: 3_000_000, avgKwhPerHousehold: 200, sources: { Gas: 50, Hydro: 12, Solar: 12, Nuclear: 8, Wind: 8, Other: 10 }, majorConsumers: ["Metro System", "Government Buildings", "Shopping Malls", "Airports", "Hospitals"] },
      { name: "Nuevo León", population: 5_800_000, households: 1_600_000, avgKwhPerHousehold: 280, sources: { Gas: 65, Solar: 12, Wind: 10, Coal: 5, Other: 8 }, majorConsumers: ["Steel Plants", "Cement Factories", "Auto Industry", "FEMSA HQ"] },
      { name: "Jalisco", population: 8_500_000, households: 2_400_000, avgKwhPerHousehold: 180, sources: { Gas: 45, Hydro: 18, Solar: 15, Wind: 12, Other: 10 }, majorConsumers: ["Tequila Industry", "Electronics Factories", "Guadalajara IT Hub", "Agriculture"] },
    ],
  },
  {
    name: "Argentina", code: "AR", population: 46_000_000, totalDemandGwhMonth: 12_000, avgKwhPerHousehold: 250,
    sources: { Gas: 55, Hydro: 18, Nuclear: 7, Wind: 10, Solar: 5, Other: 5 },
    sectorBreakdown: { Industrial: 30, Residential: 35, Commercial: 22, Agriculture: 8, Other: 5 },
    states: [
      { name: "Buenos Aires", population: 17_000_000, households: 5_500_000, avgKwhPerHousehold: 280, sources: { Gas: 55, Nuclear: 10, Hydro: 10, Wind: 10, Solar: 8, Other: 7 }, majorConsumers: ["Buenos Aires Subte", "Ports", "Meatpacking", "Government Buildings", "Shopping Centers"] },
      { name: "Patagonia", population: 2_500_000, households: 800_000, avgKwhPerHousehold: 350, sources: { Wind: 40, Gas: 25, Hydro: 20, Solar: 8, Other: 7 }, majorConsumers: ["Wind Farms", "Oil Extraction", "Tourism", "Mining", "Agriculture"] },
    ],
  },
  {
    name: "Colombia", code: "CO", population: 52_000_000, totalDemandGwhMonth: 6_500, avgKwhPerHousehold: 140,
    sources: { Hydro: 65, Gas: 15, Coal: 8, Wind: 5, Solar: 4, Biomass: 2, Other: 1 },
    sectorBreakdown: { Industrial: 28, Residential: 35, Commercial: 25, Agriculture: 7, Other: 5 },
    states: [
      { name: "Bogotá", population: 8_000_000, households: 2_500_000, avgKwhPerHousehold: 160, sources: { Hydro: 60, Gas: 18, Coal: 8, Solar: 6, Wind: 5, Other: 3 }, majorConsumers: ["TransMilenio BRT", "Data Centers", "Shopping Malls", "Government HQ", "Hospitals"] },
      { name: "Antioquia", population: 6_800_000, households: 2_000_000, avgKwhPerHousehold: 150, sources: { Hydro: 70, Gas: 10, Coal: 8, Solar: 5, Wind: 4, Other: 3 }, majorConsumers: ["Medellín Metro", "Coffee Processing", "Textile Industry", "Mining"] },
    ],
  },
  {
    name: "Chile", code: "CL", population: 19_500_000, totalDemandGwhMonth: 7_000, avgKwhPerHousehold: 200,
    sources: { Solar: 25, Coal: 18, Gas: 15, Wind: 15, Hydro: 20, Other: 7 },
    sectorBreakdown: { Industrial: 40, Residential: 22, Commercial: 20, Mining: 15, Other: 3 },
    states: [
      { name: "Santiago Metropolitan", population: 7_200_000, households: 2_400_000, avgKwhPerHousehold: 220, sources: { Gas: 25, Solar: 22, Hydro: 20, Coal: 15, Wind: 12, Other: 6 }, majorConsumers: ["Santiago Metro", "Data Centers", "Shopping Centers", "Hospitals", "Universities"] },
      { name: "Atacama", population: 300_000, households: 100_000, avgKwhPerHousehold: 400, sources: { Solar: 60, Wind: 15, Gas: 10, Hydro: 5, Other: 10 }, majorConsumers: ["Copper Mines", "Solar Farms", "Lithium Extraction", "Desalination Plants"] },
    ],
  },
  {
    name: "Peru", code: "PE", population: 34_000_000, totalDemandGwhMonth: 4_500, avgKwhPerHousehold: 120,
    sources: { Hydro: 50, Gas: 35, Solar: 5, Wind: 5, Coal: 3, Other: 2 },
    sectorBreakdown: { Industrial: 32, Residential: 30, Commercial: 22, Mining: 12, Other: 4 },
    states: [
      { name: "Lima", population: 11_000_000, households: 3_000_000, avgKwhPerHousehold: 150, sources: { Gas: 45, Hydro: 35, Solar: 8, Wind: 5, Other: 7 }, majorConsumers: ["Lima Metro", "Mining HQs", "Government Buildings", "Shopping Centers", "Ports"] },
    ],
  },
  {
    name: "Venezuela", code: "VE", population: 28_000_000, totalDemandGwhMonth: 6_000, avgKwhPerHousehold: 200,
    sources: { Hydro: 65, Gas: 15, Oil: 12, Wind: 3, Solar: 3, Other: 2 },
    sectorBreakdown: { Industrial: 25, Residential: 38, Commercial: 20, Government: 12, Other: 5 },
    states: [
      { name: "Caracas", population: 3_500_000, households: 900_000, avgKwhPerHousehold: 250, sources: { Hydro: 60, Gas: 18, Oil: 12, Solar: 5, Other: 5 }, majorConsumers: ["Government Buildings", "Metro System", "Oil Industry", "Hospitals", "Shopping Centers"] },
    ],
  },
  {
    name: "Ecuador", code: "EC", population: 18_000_000, totalDemandGwhMonth: 2_500, avgKwhPerHousehold: 110,
    sources: { Hydro: 70, Gas: 10, Oil: 8, Solar: 5, Wind: 3, Biomass: 2, Other: 2 },
    sectorBreakdown: { Industrial: 28, Residential: 35, Commercial: 22, Agriculture: 10, Other: 5 },
    states: [
      { name: "Quito", population: 2_800_000, households: 700_000, avgKwhPerHousehold: 130, sources: { Hydro: 75, Gas: 8, Solar: 7, Oil: 5, Wind: 3, Other: 2 }, majorConsumers: ["Metro System", "Government Buildings", "Hospitals", "Universities", "Tourism"] },
    ],
  },
  {
    name: "Bolivia", code: "BO", population: 12_200_000, totalDemandGwhMonth: 900, avgKwhPerHousehold: 80,
    sources: { Gas: 55, Hydro: 25, Solar: 8, Wind: 5, Biomass: 4, Other: 3 },
    sectorBreakdown: { Residential: 35, Industrial: 28, Commercial: 18, Agriculture: 12, Other: 7 },
    states: [
      { name: "La Paz", population: 2_900_000, households: 700_000, avgKwhPerHousehold: 100, sources: { Hydro: 40, Gas: 35, Solar: 10, Wind: 8, Other: 7 }, majorConsumers: ["Cable Cars (Mi Teleférico)", "Government Buildings", "Mining HQs", "Markets"] },
    ],
  },
  {
    name: "Paraguay", code: "PY", population: 7_400_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 130,
    sources: { Hydro: 99, Other: 1 },
    sectorBreakdown: { Residential: 40, Industrial: 30, Commercial: 20, Agriculture: 5, Other: 5 },
    states: [
      { name: "Asunción", population: 2_500_000, households: 600_000, avgKwhPerHousehold: 160, sources: { Hydro: 99, Other: 1 }, majorConsumers: ["Itaipú Related", "Government HQ", "Shopping Centers", "Ports"] },
    ],
  },
  {
    name: "Uruguay", code: "UY", population: 3_500_000, totalDemandGwhMonth: 1_000, avgKwhPerHousehold: 280,
    sources: { Hydro: 35, Wind: 35, Solar: 10, Biomass: 12, Gas: 5, Other: 3 },
    sectorBreakdown: { Residential: 30, Industrial: 32, Commercial: 25, Agriculture: 8, Other: 5 },
    states: [
      { name: "Montevideo", population: 1_800_000, households: 650_000, avgKwhPerHousehold: 300, sources: { Wind: 35, Hydro: 30, Solar: 12, Biomass: 12, Gas: 6, Other: 5 }, majorConsumers: ["Ports", "Government Buildings", "Shopping Centers", "Hospitals", "Data Centers"] },
    ],
  },
  {
    name: "Cuba", code: "CU", population: 11_200_000, totalDemandGwhMonth: 1_500, avgKwhPerHousehold: 100,
    sources: { Oil: 60, Gas: 15, Biomass: 10, Solar: 8, Wind: 5, Other: 2 },
    sectorBreakdown: { Residential: 42, Industrial: 22, Commercial: 15, Government: 15, Other: 6 },
    states: [
      { name: "Havana", population: 2_100_000, households: 650_000, avgKwhPerHousehold: 120, sources: { Oil: 55, Gas: 18, Solar: 10, Biomass: 8, Wind: 5, Other: 4 }, majorConsumers: ["Hotels", "Government Buildings", "Hospitals", "Ports", "Tourism"] },
    ],
  },
  {
    name: "Dominican Republic", code: "DO", population: 11_000_000, totalDemandGwhMonth: 1_800, avgKwhPerHousehold: 140,
    sources: { Gas: 35, Coal: 18, Oil: 15, Wind: 12, Solar: 10, Hydro: 5, Other: 5 },
    sectorBreakdown: { Residential: 35, Commercial: 30, Industrial: 22, Agriculture: 8, Other: 5 },
    states: [
      { name: "Santo Domingo", population: 3_500_000, households: 900_000, avgKwhPerHousehold: 170, sources: { Gas: 38, Coal: 18, Oil: 12, Solar: 12, Wind: 10, Hydro: 5, Other: 5 }, majorConsumers: ["Hotels", "Shopping Centers", "Free Trade Zones", "Hospitals", "Government"] },
    ],
  },
  {
    name: "Costa Rica", code: "CR", population: 5_200_000, totalDemandGwhMonth: 1_000, avgKwhPerHousehold: 200,
    sources: { Hydro: 65, Wind: 15, Geothermal: 10, Solar: 5, Biomass: 3, Other: 2 },
    sectorBreakdown: { Residential: 35, Commercial: 28, Industrial: 25, Agriculture: 7, Other: 5 },
    states: [
      { name: "San José", population: 1_500_000, households: 400_000, avgKwhPerHousehold: 230, sources: { Hydro: 60, Wind: 15, Geothermal: 10, Solar: 8, Biomass: 4, Other: 3 }, majorConsumers: ["Tech Companies", "Coffee Processing", "Government Buildings", "Shopping Centers"] },
    ],
  },
  {
    name: "Panama", code: "PA", population: 4_500_000, totalDemandGwhMonth: 1_100, avgKwhPerHousehold: 200,
    sources: { Hydro: 45, Gas: 20, Solar: 12, Wind: 10, Oil: 8, Other: 5 },
    sectorBreakdown: { Commercial: 35, Residential: 30, Industrial: 20, Government: 10, Other: 5 },
    states: [
      { name: "Panama City", population: 1_800_000, households: 500_000, avgKwhPerHousehold: 250, sources: { Hydro: 40, Gas: 25, Solar: 12, Wind: 10, Oil: 8, Other: 5 }, majorConsumers: ["Panama Canal", "Banking District", "Metro System", "Shopping Malls", "Ports"] },
    ],
  },
  {
    name: "Guatemala", code: "GT", population: 18_000_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 80,
    sources: { Hydro: 35, Biomass: 20, Gas: 15, Coal: 12, Solar: 8, Wind: 5, Oil: 3, Other: 2 },
    sectorBreakdown: { Residential: 35, Industrial: 28, Commercial: 22, Agriculture: 10, Other: 5 },
    states: [
      { name: "Guatemala City", population: 3_000_000, households: 700_000, avgKwhPerHousehold: 120, sources: { Hydro: 30, Gas: 20, Biomass: 18, Solar: 12, Coal: 10, Wind: 5, Other: 5 }, majorConsumers: ["Malls", "Government Buildings", "Hospitals", "Food Processing", "Textile Mills"] },
    ],
  },
  {
    name: "Honduras", code: "HN", population: 10_500_000, totalDemandGwhMonth: 800, avgKwhPerHousehold: 70,
    sources: { Hydro: 30, Solar: 15, Biomass: 15, Oil: 15, Wind: 10, Coal: 8, Gas: 5, Other: 2 },
    sectorBreakdown: { Residential: 38, Industrial: 25, Commercial: 22, Agriculture: 10, Other: 5 },
    states: [
      { name: "Tegucigalpa", population: 1_400_000, households: 350_000, avgKwhPerHousehold: 100, sources: { Hydro: 28, Solar: 18, Oil: 15, Biomass: 12, Wind: 12, Coal: 8, Other: 7 }, majorConsumers: ["Government Buildings", "Shopping Centers", "Hospitals", "Maquiladoras"] },
    ],
  },
  {
    name: "El Salvador", code: "SV", population: 6_500_000, totalDemandGwhMonth: 600, avgKwhPerHousehold: 85,
    sources: { Geothermal: 25, Hydro: 25, Gas: 18, Solar: 12, Biomass: 10, Oil: 5, Wind: 3, Other: 2 },
    sectorBreakdown: { Residential: 35, Commercial: 28, Industrial: 25, Agriculture: 7, Other: 5 },
    states: [
      { name: "San Salvador", population: 1_800_000, households: 450_000, avgKwhPerHousehold: 110, sources: { Geothermal: 25, Gas: 20, Hydro: 20, Solar: 12, Biomass: 10, Other: 13 }, majorConsumers: ["Malls", "Government Buildings", "Food Processing", "Hospitals"] },
    ],
  },
  {
    name: "Jamaica", code: "JM", population: 3_000_000, totalDemandGwhMonth: 350, avgKwhPerHousehold: 100,
    sources: { Oil: 40, Gas: 25, Solar: 12, Wind: 10, Hydro: 5, Biomass: 5, Other: 3 },
    sectorBreakdown: { Residential: 35, Commercial: 30, Industrial: 20, Tourism: 10, Other: 5 },
    states: [
      { name: "Kingston", population: 1_200_000, households: 350_000, avgKwhPerHousehold: 120, sources: { Oil: 38, Gas: 25, Solar: 15, Wind: 10, Other: 12 }, majorConsumers: ["Ports", "Hotels", "Government Buildings", "Hospitals", "Shopping Centers"] },
    ],
  },
  {
    name: "Trinidad and Tobago", code: "TT", population: 1_400_000, totalDemandGwhMonth: 800, avgKwhPerHousehold: 400,
    sources: { Gas: 95, Solar: 2, Other: 3 },
    sectorBreakdown: { Industrial: 55, Residential: 20, Commercial: 18, Other: 7 },
    states: [
      { name: "Port of Spain", population: 550_000, households: 160_000, avgKwhPerHousehold: 420, sources: { Gas: 95, Solar: 3, Other: 2 }, majorConsumers: ["LNG Plants", "Petrochemicals", "Government Buildings", "Ports"] },
    ],
  },
  {
    name: "Haiti", code: "HT", population: 11_500_000, totalDemandGwhMonth: 200, avgKwhPerHousehold: 20,
    sources: { Oil: 45, Hydro: 15, Solar: 15, Biomass: 15, Wind: 5, Other: 5 },
    sectorBreakdown: { Residential: 50, Commercial: 20, Industrial: 12, Government: 10, Other: 8 },
    states: [
      { name: "Port-au-Prince", population: 2_800_000, households: 600_000, avgKwhPerHousehold: 30, sources: { Oil: 45, Solar: 18, Hydro: 12, Biomass: 12, Wind: 5, Other: 8 }, majorConsumers: ["Hospitals", "Government Buildings", "Hotels", "Markets"] },
    ],
  },

  // ===== EUROPE =====
  {
    name: "United Kingdom", code: "GB", population: 67_500_000, totalDemandGwhMonth: 25_000, avgKwhPerHousehold: 300,
    sources: { Gas: 35, Wind: 30, Nuclear: 14, Solar: 5, Biomass: 8, Import: 8 },
    sectorBreakdown: { Residential: 30, Commercial: 28, Industrial: 22, Transport: 15, Other: 5 },
    states: [
      { name: "England", population: 56_000_000, households: 20_000_000, avgKwhPerHousehold: 310, sources: { Gas: 40, Wind: 25, Nuclear: 15, Solar: 8, Biomass: 7, Import: 5 }, majorConsumers: ["London Underground", "NHS Hospitals", "Data Centers", "Factories", "Universities"] },
      { name: "Scotland", population: 5_500_000, households: 2_500_000, avgKwhPerHousehold: 350, sources: { Wind: 55, Hydro: 15, Gas: 15, Nuclear: 10, Other: 5 }, majorConsumers: ["Oil & Gas Platforms", "Whisky Distilleries", "Wind Farms", "Universities"] },
      { name: "Wales", population: 3_100_000, households: 1_400_000, avgKwhPerHousehold: 300, sources: { Wind: 35, Gas: 30, Nuclear: 15, Solar: 8, Hydro: 5, Other: 7 }, majorConsumers: ["Steel Works", "Mining", "Wind Farms", "Tourism", "Agriculture"] },
      { name: "Northern Ireland", population: 1_900_000, households: 750_000, avgKwhPerHousehold: 320, sources: { Wind: 40, Gas: 35, Biomass: 10, Solar: 5, Import: 5, Other: 5 }, majorConsumers: ["Agriculture", "Manufacturing", "Hospitals", "Ports"] },
    ],
  },
  {
    name: "Germany", code: "DE", population: 84_000_000, totalDemandGwhMonth: 45_000, avgKwhPerHousehold: 290,
    sources: { Wind: 27, Coal: 20, Gas: 15, Solar: 14, Biomass: 8, Hydro: 4, Other: 12 },
    sectorBreakdown: { Industrial: 44, Residential: 26, Commercial: 20, Transport: 10 },
    states: [
      { name: "Bavaria", population: 13_200_000, households: 5_500_000, avgKwhPerHousehold: 310, sources: { Gas: 25, Solar: 22, Hydro: 20, Wind: 10, Biomass: 12, Coal: 11 }, majorConsumers: ["BMW Factories", "Siemens Plants", "Munich Airport", "Beer Breweries"] },
      { name: "North Rhine-Westphalia", population: 18_000_000, households: 8_000_000, avgKwhPerHousehold: 300, sources: { Coal: 35, Wind: 20, Gas: 18, Solar: 10, Biomass: 10, Other: 7 }, majorConsumers: ["Steel Works", "Chemical Plants", "Rhine Ports", "Rail Networks"] },
      { name: "Baden-Württemberg", population: 11_000_000, households: 4_800_000, avgKwhPerHousehold: 280, sources: { Solar: 20, Gas: 18, Wind: 15, Nuclear: 15, Hydro: 12, Coal: 10, Biomass: 10 }, majorConsumers: ["Mercedes-Benz Factories", "Porsche Plants", "SAP HQ", "Bosch Manufacturing"] },
      { name: "Lower Saxony", population: 8_000_000, households: 3_400_000, avgKwhPerHousehold: 300, sources: { Wind: 40, Gas: 20, Coal: 12, Solar: 10, Biomass: 10, Nuclear: 5, Other: 3 }, majorConsumers: ["VW Wolfsburg", "Wind Farms", "Agriculture", "Ports"] },
    ],
  },
  {
    name: "France", code: "FR", population: 68_000_000, totalDemandGwhMonth: 40_000, avgKwhPerHousehold: 400,
    sources: { Nuclear: 65, Hydro: 12, Wind: 10, Solar: 5, Gas: 5, Other: 3 },
    sectorBreakdown: { Residential: 35, Industrial: 28, Commercial: 25, Transport: 7, Other: 5 },
    states: [
      { name: "Île-de-France", population: 12_000_000, households: 5_000_000, avgKwhPerHousehold: 350, sources: { Nuclear: 70, Wind: 8, Solar: 5, Gas: 8, Hydro: 4, Other: 5 }, majorConsumers: ["Paris Metro", "CDG Airport", "La Défense Business District", "Hospitals", "Museums"] },
      { name: "Provence-Alpes-Côte d'Azur", population: 5_000_000, households: 2_200_000, avgKwhPerHousehold: 380, sources: { Nuclear: 55, Solar: 18, Hydro: 10, Wind: 8, Gas: 5, Other: 4 }, majorConsumers: ["Tourism Hotels", "Ports", "Agriculture", "Petrochemicals", "Airports"] },
      { name: "Auvergne-Rhône-Alpes", population: 8_000_000, households: 3_500_000, avgKwhPerHousehold: 420, sources: { Nuclear: 60, Hydro: 22, Wind: 5, Solar: 5, Gas: 5, Other: 3 }, majorConsumers: ["Ski Resorts", "Pharmaceuticals", "Chemical Plants", "Lyon Metro", "Hydropower"] },
    ],
  },
  {
    name: "Italy", code: "IT", population: 59_000_000, totalDemandGwhMonth: 26_000, avgKwhPerHousehold: 250,
    sources: { Gas: 42, Solar: 15, Hydro: 12, Wind: 10, Biomass: 5, Coal: 3, Import: 8, Other: 5 },
    sectorBreakdown: { Industrial: 38, Residential: 22, Commercial: 25, Transport: 10, Other: 5 },
    states: [
      { name: "Lombardy", population: 10_000_000, households: 4_200_000, avgKwhPerHousehold: 280, sources: { Gas: 45, Hydro: 20, Solar: 12, Wind: 5, Import: 10, Biomass: 5, Other: 3 }, majorConsumers: ["Milan Metro", "Fashion Industry", "Manufacturing", "Data Centers", "Hospitals"] },
      { name: "Lazio", population: 5_700_000, households: 2_500_000, avgKwhPerHousehold: 240, sources: { Gas: 50, Solar: 15, Wind: 10, Import: 10, Hydro: 5, Biomass: 5, Other: 5 }, majorConsumers: ["Rome Metro", "Government Buildings", "Vatican", "Tourism", "Hospitals"] },
      { name: "Sicily", population: 4_800_000, households: 2_000_000, avgKwhPerHousehold: 200, sources: { Gas: 35, Solar: 20, Wind: 18, Oil: 10, Import: 8, Biomass: 5, Other: 4 }, majorConsumers: ["Refineries", "Tourism", "Agriculture", "Ports", "Wind Farms"] },
    ],
  },
  {
    name: "Spain", code: "ES", population: 47_500_000, totalDemandGwhMonth: 22_000, avgKwhPerHousehold: 280,
    sources: { Wind: 25, Nuclear: 20, Gas: 15, Solar: 18, Hydro: 10, Coal: 2, Other: 10 },
    sectorBreakdown: { Industrial: 35, Residential: 25, Commercial: 28, Transport: 7, Other: 5 },
    states: [
      { name: "Catalonia", population: 7_800_000, households: 3_200_000, avgKwhPerHousehold: 270, sources: { Nuclear: 30, Wind: 18, Solar: 18, Gas: 15, Hydro: 10, Other: 9 }, majorConsumers: ["Barcelona Metro", "Tourism Hotels", "Auto Factories", "Ports", "Airports"] },
      { name: "Madrid", population: 6_800_000, households: 2_800_000, avgKwhPerHousehold: 260, sources: { Gas: 25, Nuclear: 22, Wind: 18, Solar: 18, Hydro: 8, Other: 9 }, majorConsumers: ["Madrid Metro", "Government Buildings", "Data Centers", "Airports", "Shopping Centers"] },
      { name: "Andalusia", population: 8_500_000, households: 3_400_000, avgKwhPerHousehold: 250, sources: { Solar: 30, Wind: 25, Gas: 18, Hydro: 8, Nuclear: 10, Other: 9 }, majorConsumers: ["Tourism Hotels", "Agriculture", "Solar Farms", "Ports", "Wind Farms"] },
    ],
  },
  {
    name: "Poland", code: "PL", population: 38_000_000, totalDemandGwhMonth: 15_000, avgKwhPerHousehold: 250,
    sources: { Coal: 55, Wind: 15, Gas: 10, Solar: 8, Biomass: 5, Hydro: 2, Other: 5 },
    sectorBreakdown: { Industrial: 38, Residential: 28, Commercial: 22, Transport: 7, Other: 5 },
    states: [
      { name: "Masovia (Warsaw)", population: 5_500_000, households: 2_200_000, avgKwhPerHousehold: 260, sources: { Coal: 50, Gas: 15, Wind: 12, Solar: 10, Biomass: 5, Other: 8 }, majorConsumers: ["Warsaw Metro", "Government HQ", "Data Centers", "Shopping Centers", "Factories"] },
      { name: "Silesia", population: 4_500_000, households: 1_800_000, avgKwhPerHousehold: 280, sources: { Coal: 70, Wind: 8, Solar: 8, Gas: 5, Biomass: 5, Other: 4 }, majorConsumers: ["Coal Mines", "Steel Plants", "Chemical Industry", "Railways"] },
    ],
  },
  {
    name: "Netherlands", code: "NL", population: 17_800_000, totalDemandGwhMonth: 10_000, avgKwhPerHousehold: 290,
    sources: { Gas: 40, Wind: 25, Solar: 15, Biomass: 5, Coal: 5, Nuclear: 3, Import: 5, Other: 2 },
    sectorBreakdown: { Industrial: 35, Commercial: 30, Residential: 22, Transport: 8, Other: 5 },
    states: [
      { name: "South Holland", population: 3_800_000, households: 1_600_000, avgKwhPerHousehold: 280, sources: { Gas: 38, Wind: 22, Solar: 15, Nuclear: 5, Import: 8, Coal: 5, Other: 7 }, majorConsumers: ["Rotterdam Port", "Refineries", "Data Centers", "The Hague Government"] },
      { name: "North Holland", population: 2_900_000, households: 1_300_000, avgKwhPerHousehold: 270, sources: { Gas: 35, Wind: 25, Solar: 15, Biomass: 8, Import: 8, Other: 9 }, majorConsumers: ["Schiphol Airport", "Amsterdam Canal District", "Data Centers", "Banking Sector"] },
    ],
  },
  {
    name: "Belgium", code: "BE", population: 11_600_000, totalDemandGwhMonth: 7_500, avgKwhPerHousehold: 350,
    sources: { Nuclear: 40, Gas: 22, Wind: 15, Solar: 8, Biomass: 5, Import: 5, Other: 5 },
    sectorBreakdown: { Industrial: 35, Residential: 25, Commercial: 28, Transport: 7, Other: 5 },
    states: [
      { name: "Flanders", population: 6_700_000, households: 2_800_000, avgKwhPerHousehold: 360, sources: { Nuclear: 40, Gas: 22, Wind: 15, Solar: 10, Biomass: 5, Other: 8 }, majorConsumers: ["Antwerp Port", "Chemical Plants", "Diamond Industry", "Data Centers"] },
      { name: "Brussels", population: 1_200_000, households: 550_000, avgKwhPerHousehold: 300, sources: { Gas: 35, Nuclear: 30, Wind: 10, Solar: 8, Import: 10, Other: 7 }, majorConsumers: ["EU Institutions", "NATO HQ", "Metro System", "Hotels", "Government Buildings"] },
    ],
  },
  {
    name: "Sweden", code: "SE", population: 10_500_000, totalDemandGwhMonth: 12_000, avgKwhPerHousehold: 700,
    sources: { Hydro: 40, Nuclear: 30, Wind: 20, Solar: 3, Biomass: 5, Other: 2 },
    sectorBreakdown: { Industrial: 38, Residential: 28, Commercial: 22, Transport: 7, Other: 5 },
    states: [
      { name: "Stockholm", population: 2_400_000, households: 1_000_000, avgKwhPerHousehold: 600, sources: { Nuclear: 35, Hydro: 30, Wind: 20, Solar: 5, Biomass: 5, Other: 5 }, majorConsumers: ["Stockholm Metro", "Ericsson HQ", "Data Centers", "Hospitals", "Ports"] },
    ],
  },
  {
    name: "Norway", code: "NO", population: 5_500_000, totalDemandGwhMonth: 12_500, avgKwhPerHousehold: 1400,
    sources: { Hydro: 88, Wind: 8, Gas: 2, Other: 2 },
    sectorBreakdown: { Industrial: 42, Residential: 30, Commercial: 18, Transport: 5, Other: 5 },
    states: [
      { name: "Oslo", population: 700_000, households: 320_000, avgKwhPerHousehold: 1200, sources: { Hydro: 90, Wind: 5, Solar: 2, Other: 3 }, majorConsumers: ["Data Centers", "Electric Vehicle Charging", "Government Buildings", "Hospitals", "Metro"] },
      { name: "Rogaland", population: 500_000, households: 200_000, avgKwhPerHousehold: 1500, sources: { Hydro: 85, Wind: 10, Gas: 3, Other: 2 }, majorConsumers: ["Oil & Gas Industry", "Aluminium Smelters", "Fish Processing", "Ports"] },
    ],
  },
  {
    name: "Denmark", code: "DK", population: 5_900_000, totalDemandGwhMonth: 3_000, avgKwhPerHousehold: 320,
    sources: { Wind: 55, Solar: 10, Gas: 10, Biomass: 12, Import: 8, Coal: 3, Other: 2 },
    sectorBreakdown: { Residential: 28, Commercial: 30, Industrial: 30, Transport: 7, Other: 5 },
    states: [
      { name: "Copenhagen", population: 1_400_000, households: 600_000, avgKwhPerHousehold: 280, sources: { Wind: 55, Solar: 10, Biomass: 12, Gas: 8, Import: 10, Other: 5 }, majorConsumers: ["Metro System", "Ørsted HQ", "Data Centers", "Hospitals", "Maersk Ports"] },
    ],
  },
  {
    name: "Finland", code: "FI", population: 5_600_000, totalDemandGwhMonth: 7_500, avgKwhPerHousehold: 700,
    sources: { Nuclear: 35, Hydro: 18, Wind: 20, Biomass: 12, Gas: 5, Import: 5, Other: 5 },
    sectorBreakdown: { Industrial: 45, Residential: 25, Commercial: 20, Transport: 5, Other: 5 },
    states: [
      { name: "Helsinki", population: 660_000, households: 310_000, avgKwhPerHousehold: 600, sources: { Nuclear: 35, Wind: 20, Hydro: 15, Biomass: 10, Gas: 8, Import: 7, Other: 5 }, majorConsumers: ["Nokia HQ", "Data Centers", "Metro System", "Ports", "Heating Networks"] },
    ],
  },
  {
    name: "Switzerland", code: "CH", population: 8_900_000, totalDemandGwhMonth: 5_500, avgKwhPerHousehold: 400,
    sources: { Hydro: 55, Nuclear: 30, Solar: 8, Wind: 2, Biomass: 3, Other: 2 },
    sectorBreakdown: { Industrial: 30, Residential: 30, Commercial: 28, Transport: 7, Other: 5 },
    states: [
      { name: "Zürich", population: 1_600_000, households: 700_000, avgKwhPerHousehold: 380, sources: { Hydro: 50, Nuclear: 30, Solar: 10, Wind: 3, Other: 7 }, majorConsumers: ["Banking Sector", "Data Centers", "Railways", "Hospitals", "Universities"] },
    ],
  },
  {
    name: "Austria", code: "AT", population: 9_100_000, totalDemandGwhMonth: 6_000, avgKwhPerHousehold: 380,
    sources: { Hydro: 55, Wind: 12, Gas: 12, Solar: 8, Biomass: 8, Coal: 2, Other: 3 },
    sectorBreakdown: { Industrial: 35, Residential: 28, Commercial: 25, Transport: 7, Other: 5 },
    states: [
      { name: "Vienna", population: 2_000_000, households: 950_000, avgKwhPerHousehold: 350, sources: { Gas: 25, Hydro: 30, Wind: 15, Solar: 10, Biomass: 10, Import: 5, Other: 5 }, majorConsumers: ["U-Bahn Metro", "Government Buildings", "Hospitals", "Tourism", "Opera House"] },
    ],
  },
  {
    name: "Portugal", code: "PT", population: 10_300_000, totalDemandGwhMonth: 4_500, avgKwhPerHousehold: 230,
    sources: { Wind: 25, Hydro: 20, Gas: 25, Solar: 15, Biomass: 5, Coal: 0, Import: 5, Other: 5 },
    sectorBreakdown: { Industrial: 32, Residential: 28, Commercial: 28, Transport: 7, Other: 5 },
    states: [
      { name: "Lisbon", population: 2_900_000, households: 1_200_000, avgKwhPerHousehold: 240, sources: { Gas: 28, Wind: 22, Hydro: 18, Solar: 15, Biomass: 5, Import: 7, Other: 5 }, majorConsumers: ["Lisbon Metro", "Tourism Hotels", "Ports", "Data Centers", "Government HQ"] },
    ],
  },
  {
    name: "Greece", code: "GR", population: 10_400_000, totalDemandGwhMonth: 4_500, avgKwhPerHousehold: 300,
    sources: { Gas: 35, Solar: 20, Wind: 20, Coal: 8, Hydro: 8, Import: 5, Other: 4 },
    sectorBreakdown: { Residential: 32, Commercial: 28, Industrial: 25, Transport: 10, Other: 5 },
    states: [
      { name: "Attica (Athens)", population: 3_800_000, households: 1_600_000, avgKwhPerHousehold: 310, sources: { Gas: 38, Solar: 18, Wind: 18, Coal: 8, Hydro: 5, Import: 8, Other: 5 }, majorConsumers: ["Athens Metro", "Tourism", "Ports", "Airports", "Government Buildings"] },
    ],
  },
  {
    name: "Czechia", code: "CZ", population: 10_800_000, totalDemandGwhMonth: 6_000, avgKwhPerHousehold: 320,
    sources: { Nuclear: 35, Coal: 25, Gas: 12, Solar: 8, Wind: 5, Hydro: 3, Biomass: 7, Other: 5 },
    sectorBreakdown: { Industrial: 40, Residential: 25, Commercial: 22, Transport: 8, Other: 5 },
    states: [
      { name: "Prague", population: 1_300_000, households: 600_000, avgKwhPerHousehold: 280, sources: { Nuclear: 35, Gas: 18, Coal: 15, Solar: 10, Wind: 5, Biomass: 8, Other: 9 }, majorConsumers: ["Prague Metro", "Škoda Factories", "Data Centers", "Tourism", "Government"] },
    ],
  },
  {
    name: "Romania", code: "RO", population: 19_000_000, totalDemandGwhMonth: 5_000, avgKwhPerHousehold: 200,
    sources: { Hydro: 25, Nuclear: 18, Coal: 15, Gas: 15, Wind: 12, Solar: 8, Biomass: 4, Other: 3 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 22, Transport: 8, Other: 5 },
    states: [
      { name: "Bucharest", population: 1_900_000, households: 800_000, avgKwhPerHousehold: 230, sources: { Gas: 22, Nuclear: 18, Hydro: 18, Wind: 15, Solar: 10, Coal: 10, Other: 7 }, majorConsumers: ["Bucharest Metro", "Government Buildings", "IT Industry", "Shopping Centers"] },
    ],
  },
  {
    name: "Hungary", code: "HU", population: 9_700_000, totalDemandGwhMonth: 4_000, avgKwhPerHousehold: 280,
    sources: { Nuclear: 45, Gas: 20, Solar: 12, Biomass: 5, Wind: 3, Import: 10, Coal: 3, Other: 2 },
    sectorBreakdown: { Industrial: 35, Residential: 28, Commercial: 25, Transport: 7, Other: 5 },
    states: [
      { name: "Budapest", population: 1_800_000, households: 780_000, avgKwhPerHousehold: 280, sources: { Nuclear: 45, Gas: 20, Solar: 12, Import: 10, Biomass: 5, Other: 8 }, majorConsumers: ["Budapest Metro", "Government Buildings", "Manufacturing", "Hospitals", "Tourism"] },
    ],
  },
  {
    name: "Ireland", code: "IE", population: 5_200_000, totalDemandGwhMonth: 2_800, avgKwhPerHousehold: 400,
    sources: { Wind: 35, Gas: 40, Solar: 5, Biomass: 5, Import: 8, Hydro: 3, Other: 4 },
    sectorBreakdown: { Commercial: 35, Industrial: 28, Residential: 25, Transport: 7, Other: 5 },
    states: [
      { name: "Dublin", population: 1_400_000, households: 500_000, avgKwhPerHousehold: 380, sources: { Gas: 40, Wind: 30, Solar: 5, Import: 10, Biomass: 5, Other: 10 }, majorConsumers: ["Data Centers (Google, Meta, AWS)", "Hospitals", "Government", "Pharma Plants", "Airports"] },
    ],
  },
  {
    name: "Ukraine", code: "UA", population: 37_000_000, totalDemandGwhMonth: 12_000, avgKwhPerHousehold: 200,
    sources: { Nuclear: 55, Hydro: 8, Coal: 15, Gas: 8, Solar: 7, Wind: 5, Other: 2 },
    sectorBreakdown: { Industrial: 38, Residential: 28, Commercial: 18, Agriculture: 10, Other: 6 },
    states: [
      { name: "Kyiv", population: 3_000_000, households: 1_200_000, avgKwhPerHousehold: 250, sources: { Nuclear: 55, Gas: 12, Hydro: 10, Solar: 8, Wind: 5, Coal: 5, Other: 5 }, majorConsumers: ["Kyiv Metro", "Government Buildings", "Hospitals", "Industry", "Universities"] },
    ],
  },
  {
    name: "Russia", code: "RU", population: 144_000_000, totalDemandGwhMonth: 95_000, avgKwhPerHousehold: 400,
    sources: { Gas: 45, Nuclear: 20, Hydro: 18, Coal: 12, Wind: 2, Solar: 1, Other: 2 },
    sectorBreakdown: { Industrial: 42, Residential: 22, Commercial: 18, Transport: 12, Other: 6 },
    states: [
      { name: "Moscow", population: 13_000_000, households: 5_000_000, avgKwhPerHousehold: 350, sources: { Gas: 55, Nuclear: 20, Hydro: 10, Coal: 5, Wind: 3, Solar: 2, Other: 5 }, majorConsumers: ["Moscow Metro", "Government Buildings", "Data Centers", "Hospitals", "Airports"] },
      { name: "Saint Petersburg", population: 5_400_000, households: 2_200_000, avgKwhPerHousehold: 380, sources: { Gas: 50, Nuclear: 25, Hydro: 10, Wind: 5, Coal: 5, Other: 5 }, majorConsumers: ["Ports", "Shipbuilding", "Metro System", "Government Buildings", "Museums"] },
      { name: "Krasnoyarsk", population: 1_100_000, households: 450_000, avgKwhPerHousehold: 500, sources: { Hydro: 60, Coal: 25, Gas: 8, Wind: 3, Other: 4 }, majorConsumers: ["Aluminium Smelters", "Hydropower Plants", "Mining", "Heating Systems"] },
    ],
  },
  {
    name: "Turkey", code: "TR", population: 86_000_000, totalDemandGwhMonth: 28_000, avgKwhPerHousehold: 230,
    sources: { Gas: 25, Coal: 25, Hydro: 20, Wind: 12, Solar: 10, Geothermal: 3, Other: 5 },
    sectorBreakdown: { Industrial: 42, Residential: 25, Commercial: 22, Agriculture: 6, Other: 5 },
    states: [
      { name: "Istanbul", population: 16_000_000, households: 5_500_000, avgKwhPerHousehold: 250, sources: { Gas: 35, Coal: 18, Wind: 12, Solar: 10, Hydro: 10, Import: 8, Other: 7 }, majorConsumers: ["Istanbul Metro", "Bosphorus Bridges", "Shopping Malls", "Airports", "Factories"] },
      { name: "Ankara", population: 5_700_000, households: 2_000_000, avgKwhPerHousehold: 220, sources: { Gas: 30, Coal: 25, Hydro: 15, Solar: 12, Wind: 10, Other: 8 }, majorConsumers: ["Government Buildings", "Military HQ", "Metro System", "Universities"] },
      { name: "Antalya", population: 2_600_000, households: 800_000, avgKwhPerHousehold: 280, sources: { Solar: 25, Hydro: 20, Gas: 20, Coal: 15, Wind: 12, Other: 8 }, majorConsumers: ["Tourism Hotels", "Airports", "Agriculture", "Shopping Centers"] },
    ],
  },
  {
    name: "Serbia", code: "RS", population: 6_600_000, totalDemandGwhMonth: 3_000, avgKwhPerHousehold: 300,
    sources: { Coal: 55, Hydro: 25, Gas: 5, Wind: 5, Solar: 5, Biomass: 3, Other: 2 },
    sectorBreakdown: { Industrial: 32, Residential: 35, Commercial: 18, Agriculture: 8, Other: 7 },
    states: [
      { name: "Belgrade", population: 1_700_000, households: 650_000, avgKwhPerHousehold: 320, sources: { Coal: 50, Hydro: 20, Gas: 10, Wind: 8, Solar: 7, Other: 5 }, majorConsumers: ["Government Buildings", "Shopping Centers", "Factories", "Hospitals", "Universities"] },
    ],
  },
  {
    name: "Croatia", code: "HR", population: 3_800_000, totalDemandGwhMonth: 1_500, avgKwhPerHousehold: 260,
    sources: { Hydro: 35, Gas: 20, Wind: 15, Solar: 10, Import: 10, Nuclear: 5, Other: 5 },
    sectorBreakdown: { Industrial: 25, Residential: 35, Commercial: 25, Transport: 10, Other: 5 },
    states: [
      { name: "Zagreb", population: 800_000, households: 330_000, avgKwhPerHousehold: 270, sources: { Gas: 25, Hydro: 30, Wind: 12, Solar: 10, Import: 12, Nuclear: 5, Other: 6 }, majorConsumers: ["Tram System", "Government Buildings", "Shopping Centers", "Hospitals"] },
    ],
  },
  {
    name: "Bulgaria", code: "BG", population: 6_500_000, totalDemandGwhMonth: 3_200, avgKwhPerHousehold: 280,
    sources: { Nuclear: 35, Coal: 25, Hydro: 10, Solar: 10, Wind: 8, Gas: 5, Biomass: 4, Other: 3 },
    sectorBreakdown: { Industrial: 32, Residential: 32, Commercial: 22, Transport: 8, Other: 6 },
    states: [
      { name: "Sofia", population: 1_300_000, households: 550_000, avgKwhPerHousehold: 290, sources: { Nuclear: 35, Coal: 22, Solar: 12, Gas: 8, Hydro: 8, Wind: 8, Other: 7 }, majorConsumers: ["Sofia Metro", "Government Buildings", "IT Sector", "Shopping Centers"] },
    ],
  },
  {
    name: "Slovakia", code: "SK", population: 5_400_000, totalDemandGwhMonth: 2_500, avgKwhPerHousehold: 260,
    sources: { Nuclear: 52, Hydro: 15, Gas: 10, Solar: 8, Coal: 5, Biomass: 5, Wind: 3, Other: 2 },
    sectorBreakdown: { Industrial: 40, Residential: 25, Commercial: 22, Transport: 8, Other: 5 },
    states: [
      { name: "Bratislava", population: 450_000, households: 200_000, avgKwhPerHousehold: 280, sources: { Nuclear: 52, Gas: 15, Hydro: 12, Solar: 8, Other: 13 }, majorConsumers: ["VW Factory", "Government Buildings", "Ports", "Data Centers"] },
    ],
  },
  {
    name: "Lithuania", code: "LT", population: 2_800_000, totalDemandGwhMonth: 1_100, avgKwhPerHousehold: 250,
    sources: { Wind: 30, Gas: 20, Solar: 12, Biomass: 12, Import: 15, Hydro: 5, Other: 6 },
    sectorBreakdown: { Industrial: 30, Residential: 30, Commercial: 25, Transport: 10, Other: 5 },
    states: [
      { name: "Vilnius", population: 580_000, households: 250_000, avgKwhPerHousehold: 260, sources: { Wind: 28, Gas: 22, Import: 15, Solar: 12, Biomass: 12, Other: 11 }, majorConsumers: ["Laser Companies", "IT Sector", "Government Buildings", "Hospitals"] },
    ],
  },
  {
    name: "Latvia", code: "LV", population: 1_800_000, totalDemandGwhMonth: 700, avgKwhPerHousehold: 240,
    sources: { Hydro: 30, Gas: 25, Wind: 15, Biomass: 12, Import: 10, Solar: 5, Other: 3 },
    sectorBreakdown: { Industrial: 25, Residential: 32, Commercial: 28, Transport: 10, Other: 5 },
    states: [
      { name: "Riga", population: 620_000, households: 270_000, avgKwhPerHousehold: 250, sources: { Hydro: 28, Gas: 25, Wind: 15, Biomass: 12, Import: 12, Other: 8 }, majorConsumers: ["Ports", "Tram System", "Government Buildings", "Food Processing"] },
    ],
  },
  {
    name: "Estonia", code: "EE", population: 1_400_000, totalDemandGwhMonth: 800, avgKwhPerHousehold: 350,
    sources: { Oil: 25, Wind: 20, Biomass: 15, Gas: 12, Solar: 8, Import: 12, Other: 8 },
    sectorBreakdown: { Industrial: 30, Residential: 28, Commercial: 28, Transport: 9, Other: 5 },
    states: [
      { name: "Tallinn", population: 450_000, households: 200_000, avgKwhPerHousehold: 360, sources: { Wind: 22, Oil: 20, Biomass: 15, Gas: 12, Import: 15, Solar: 8, Other: 8 }, majorConsumers: ["E-Government Data Centers", "Ports", "IT Startups", "Hospitals"] },
    ],
  },
  {
    name: "Iceland", code: "IS", population: 380_000, totalDemandGwhMonth: 1_500, avgKwhPerHousehold: 2500,
    sources: { Hydro: 70, Geothermal: 28, Wind: 1, Other: 1 },
    sectorBreakdown: { Industrial: 70, Residential: 12, Commercial: 10, Other: 8 },
    states: [
      { name: "Reykjavik", population: 230_000, households: 80_000, avgKwhPerHousehold: 2200, sources: { Hydro: 68, Geothermal: 30, Wind: 1, Other: 1 }, majorConsumers: ["Aluminium Smelters", "Data Centers", "Geothermal Plants", "Fish Processing", "Heating Systems"] },
    ],
  },
  {
    name: "Luxembourg", code: "LU", population: 660_000, totalDemandGwhMonth: 550, avgKwhPerHousehold: 500,
    sources: { Import: 60, Wind: 12, Solar: 8, Gas: 8, Biomass: 5, Hydro: 4, Other: 3 },
    sectorBreakdown: { Commercial: 35, Industrial: 30, Residential: 22, Transport: 8, Other: 5 },
    states: [
      { name: "Luxembourg City", population: 130_000, households: 55_000, avgKwhPerHousehold: 480, sources: { Import: 60, Wind: 12, Solar: 8, Gas: 8, Other: 12 }, majorConsumers: ["EU Institutions", "Banking Sector", "Steel Industry", "Data Centers"] },
    ],
  },
  {
    name: "Malta", code: "MT", population: 520_000, totalDemandGwhMonth: 250, avgKwhPerHousehold: 320,
    sources: { Gas: 60, Import: 20, Solar: 12, Wind: 3, Other: 5 },
    sectorBreakdown: { Residential: 30, Commercial: 35, Industrial: 20, Tourism: 10, Other: 5 },
    states: [
      { name: "Malta", population: 520_000, households: 170_000, avgKwhPerHousehold: 320, sources: { Gas: 60, Import: 20, Solar: 12, Wind: 3, Other: 5 }, majorConsumers: ["Tourism Hotels", "Desalination Plants", "Ports", "Government Buildings"] },
    ],
  },
  {
    name: "Cyprus", code: "CY", population: 1_300_000, totalDemandGwhMonth: 450, avgKwhPerHousehold: 350,
    sources: { Oil: 40, Gas: 15, Solar: 25, Wind: 10, Biomass: 5, Other: 5 },
    sectorBreakdown: { Residential: 32, Commercial: 30, Industrial: 20, Tourism: 12, Other: 6 },
    states: [
      { name: "Nicosia", population: 350_000, households: 120_000, avgKwhPerHousehold: 370, sources: { Oil: 38, Solar: 28, Gas: 15, Wind: 10, Other: 9 }, majorConsumers: ["Government Buildings", "Hotels", "Shopping Centers", "Universities", "AC Systems"] },
    ],
  },
  {
    name: "Slovenia", code: "SI", population: 2_100_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 350,
    sources: { Nuclear: 35, Hydro: 25, Coal: 15, Solar: 10, Gas: 5, Biomass: 5, Other: 5 },
    sectorBreakdown: { Industrial: 35, Residential: 28, Commercial: 25, Transport: 7, Other: 5 },
    states: [
      { name: "Ljubljana", population: 300_000, households: 130_000, avgKwhPerHousehold: 340, sources: { Nuclear: 35, Hydro: 25, Coal: 12, Solar: 12, Gas: 8, Other: 8 }, majorConsumers: ["Government Buildings", "Tourism", "Manufacturing", "Universities"] },
    ],
  },
  {
    name: "North Macedonia", code: "MK", population: 2_100_000, totalDemandGwhMonth: 600, avgKwhPerHousehold: 200,
    sources: { Coal: 40, Hydro: 20, Gas: 12, Solar: 10, Wind: 8, Import: 5, Other: 5 },
    sectorBreakdown: { Industrial: 30, Residential: 35, Commercial: 20, Agriculture: 8, Other: 7 },
    states: [
      { name: "Skopje", population: 600_000, households: 200_000, avgKwhPerHousehold: 220, sources: { Coal: 38, Gas: 15, Hydro: 18, Solar: 12, Wind: 8, Other: 9 }, majorConsumers: ["Government Buildings", "Manufacturing", "Shopping Centers", "Hospitals"] },
    ],
  },
  {
    name: "Albania", code: "AL", population: 2_800_000, totalDemandGwhMonth: 600, avgKwhPerHousehold: 180,
    sources: { Hydro: 85, Solar: 5, Wind: 3, Import: 5, Other: 2 },
    sectorBreakdown: { Residential: 40, Industrial: 22, Commercial: 22, Agriculture: 10, Other: 6 },
    states: [
      { name: "Tirana", population: 900_000, households: 300_000, avgKwhPerHousehold: 200, sources: { Hydro: 80, Solar: 8, Import: 5, Wind: 4, Other: 3 }, majorConsumers: ["Government Buildings", "Shopping Centers", "Hotels", "Construction"] },
    ],
  },
  {
    name: "Moldova", code: "MD", population: 2_600_000, totalDemandGwhMonth: 400, avgKwhPerHousehold: 130,
    sources: { Import: 70, Gas: 12, Solar: 5, Wind: 5, Biomass: 5, Other: 3 },
    sectorBreakdown: { Residential: 35, Industrial: 22, Commercial: 22, Agriculture: 15, Other: 6 },
    states: [
      { name: "Chișinău", population: 700_000, households: 280_000, avgKwhPerHousehold: 150, sources: { Import: 65, Gas: 15, Solar: 7, Wind: 5, Other: 8 }, majorConsumers: ["Government Buildings", "Food Processing", "IT Sector", "Hospitals"] },
    ],
  },
  {
    name: "Belarus", code: "BY", population: 9_200_000, totalDemandGwhMonth: 3_500, avgKwhPerHousehold: 250,
    sources: { Gas: 55, Nuclear: 25, Import: 5, Solar: 3, Wind: 3, Hydro: 2, Biomass: 5, Other: 2 },
    sectorBreakdown: { Industrial: 35, Residential: 28, Commercial: 20, Agriculture: 10, Other: 7 },
    states: [
      { name: "Minsk", population: 2_000_000, households: 800_000, avgKwhPerHousehold: 280, sources: { Gas: 50, Nuclear: 25, Solar: 5, Import: 8, Other: 12 }, majorConsumers: ["Metro System", "IT Park", "Government Buildings", "Manufacturing"] },
    ],
  },
  {
    name: "Georgia", code: "GE", population: 3_700_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 220,
    sources: { Hydro: 75, Gas: 12, Wind: 5, Solar: 3, Import: 3, Other: 2 },
    sectorBreakdown: { Residential: 35, Industrial: 25, Commercial: 22, Agriculture: 10, Other: 8 },
    states: [
      { name: "Tbilisi", population: 1_200_000, households: 400_000, avgKwhPerHousehold: 250, sources: { Hydro: 70, Gas: 15, Solar: 5, Wind: 4, Other: 6 }, majorConsumers: ["Metro System", "Government Buildings", "Tourism Hotels", "Manufacturing"] },
    ],
  },
  {
    name: "Armenia", code: "AM", population: 2_800_000, totalDemandGwhMonth: 600, avgKwhPerHousehold: 180,
    sources: { Nuclear: 30, Hydro: 25, Gas: 25, Solar: 10, Wind: 5, Other: 5 },
    sectorBreakdown: { Industrial: 28, Residential: 35, Commercial: 22, Agriculture: 8, Other: 7 },
    states: [
      { name: "Yerevan", population: 1_100_000, households: 380_000, avgKwhPerHousehold: 200, sources: { Nuclear: 30, Gas: 25, Hydro: 22, Solar: 12, Wind: 5, Other: 6 }, majorConsumers: ["Government Buildings", "IT Industry", "Mining HQs", "Shopping Centers"] },
    ],
  },
  {
    name: "Azerbaijan", code: "AZ", population: 10_200_000, totalDemandGwhMonth: 2_500, avgKwhPerHousehold: 200,
    sources: { Gas: 80, Hydro: 8, Wind: 5, Solar: 4, Other: 3 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 18, Oil_Gas: 12, Other: 5 },
    states: [
      { name: "Baku", population: 2_300_000, households: 700_000, avgKwhPerHousehold: 250, sources: { Gas: 82, Hydro: 5, Wind: 5, Solar: 5, Other: 3 }, majorConsumers: ["Oil & Gas Industry", "Government Buildings", "Metro System", "Hotels", "Ports"] },
    ],
  },

  // ===== AFRICA =====
  {
    name: "South Africa", code: "ZA", population: 62_000_000, totalDemandGwhMonth: 19_000, avgKwhPerHousehold: 250,
    sources: { Coal: 65, Nuclear: 5, Wind: 10, Solar: 8, Gas: 5, Hydro: 4, Other: 3 },
    sectorBreakdown: { Industrial: 38, Residential: 25, Commercial: 22, Mining: 12, Other: 3 },
    states: [
      { name: "Gauteng", population: 16_000_000, households: 5_000_000, avgKwhPerHousehold: 300, sources: { Coal: 60, Solar: 12, Wind: 8, Nuclear: 8, Gas: 7, Other: 5 }, majorConsumers: ["Gold Mines", "Johannesburg CBD", "Gautrain", "Hospitals", "Factories"] },
      { name: "Western Cape", population: 7_500_000, households: 2_200_000, avgKwhPerHousehold: 280, sources: { Coal: 45, Wind: 20, Solar: 15, Nuclear: 10, Gas: 5, Other: 5 }, majorConsumers: ["Cape Town Port", "Tourism Hotels", "Wineries", "Data Centers", "Universities"] },
      { name: "KwaZulu-Natal", population: 12_000_000, households: 3_200_000, avgKwhPerHousehold: 220, sources: { Coal: 65, Solar: 10, Wind: 8, Gas: 5, Hydro: 5, Other: 7 }, majorConsumers: ["Durban Port", "Sugar Mills", "Petrochemicals", "Tourism", "Mining"] },
    ],
  },
  {
    name: "Nigeria", code: "NG", population: 225_000_000, totalDemandGwhMonth: 4_000, avgKwhPerHousehold: 30,
    sources: { Gas: 55, Hydro: 25, Solar: 8, Oil: 5, Wind: 3, Other: 4 },
    sectorBreakdown: { Residential: 50, Commercial: 20, Industrial: 18, Government: 7, Other: 5 },
    states: [
      { name: "Lagos", population: 22_000_000, households: 5_000_000, avgKwhPerHousehold: 50, sources: { Gas: 55, Solar: 15, Hydro: 10, Oil: 10, Wind: 5, Other: 5 }, majorConsumers: ["Industries", "Ports", "Markets", "Government Buildings", "Hospitals"] },
      { name: "Abuja", population: 4_000_000, households: 800_000, avgKwhPerHousehold: 60, sources: { Gas: 50, Hydro: 20, Solar: 15, Oil: 5, Wind: 5, Other: 5 }, majorConsumers: ["Government Buildings", "Embassies", "Shopping Malls", "Hospitals"] },
      { name: "Kano", population: 4_500_000, households: 900_000, avgKwhPerHousehold: 25, sources: { Gas: 40, Hydro: 20, Solar: 20, Oil: 10, Other: 10 }, majorConsumers: ["Textile Industry", "Dye Pits", "Agriculture", "Markets"] },
    ],
  },
  {
    name: "Egypt", code: "EG", population: 106_000_000, totalDemandGwhMonth: 18_000, avgKwhPerHousehold: 180,
    sources: { Gas: 55, Oil: 10, Solar: 10, Wind: 10, Hydro: 8, Coal: 2, Other: 5 },
    sectorBreakdown: { Residential: 42, Industrial: 25, Commercial: 15, Agriculture: 8, Government: 5, Other: 5 },
    states: [
      { name: "Cairo", population: 22_000_000, households: 5_500_000, avgKwhPerHousehold: 200, sources: { Gas: 55, Oil: 10, Solar: 10, Wind: 5, Hydro: 5, Other: 15 }, majorConsumers: ["Cairo Metro", "Government Buildings", "Hospitals", "Shopping Malls", "Hotels"] },
      { name: "Aswan", population: 1_500_000, households: 350_000, avgKwhPerHousehold: 160, sources: { Hydro: 50, Solar: 25, Gas: 15, Wind: 5, Other: 5 }, majorConsumers: ["Aswan Dam", "Tourism", "Agriculture", "Aluminium Smelter"] },
    ],
  },
  {
    name: "Kenya", code: "KE", population: 56_000_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 50,
    sources: { Geothermal: 40, Hydro: 25, Wind: 15, Solar: 8, Gas: 5, Biomass: 5, Other: 2 },
    sectorBreakdown: { Industrial: 28, Residential: 35, Commercial: 25, Agriculture: 7, Other: 5 },
    states: [
      { name: "Nairobi", population: 5_000_000, households: 1_200_000, avgKwhPerHousehold: 80, sources: { Geothermal: 40, Hydro: 20, Wind: 15, Solar: 10, Gas: 8, Other: 7 }, majorConsumers: ["Nairobi SGR Railway", "Shopping Malls", "Data Centers", "Hospitals", "Government HQ"] },
    ],
  },
  {
    name: "Ethiopia", code: "ET", population: 126_000_000, totalDemandGwhMonth: 1_400, avgKwhPerHousehold: 25,
    sources: { Hydro: 85, Wind: 5, Solar: 4, Geothermal: 3, Biomass: 2, Other: 1 },
    sectorBreakdown: { Industrial: 35, Residential: 35, Commercial: 15, Agriculture: 10, Other: 5 },
    states: [
      { name: "Addis Ababa", population: 5_500_000, households: 1_200_000, avgKwhPerHousehold: 50, sources: { Hydro: 80, Wind: 5, Solar: 5, Geothermal: 5, Other: 5 }, majorConsumers: ["Light Rail", "Cement Plants", "Government Buildings", "AU Headquarters", "Hospitals"] },
    ],
  },
  {
    name: "Ghana", code: "GH", population: 34_000_000, totalDemandGwhMonth: 1_500, avgKwhPerHousehold: 60,
    sources: { Hydro: 35, Gas: 35, Solar: 12, Oil: 8, Wind: 5, Other: 5 },
    sectorBreakdown: { Residential: 38, Industrial: 28, Commercial: 22, Agriculture: 7, Other: 5 },
    states: [
      { name: "Greater Accra", population: 5_500_000, households: 1_400_000, avgKwhPerHousehold: 80, sources: { Gas: 35, Hydro: 30, Solar: 15, Oil: 8, Wind: 5, Other: 7 }, majorConsumers: ["Tema Port", "Aluminium Smelter", "Government Buildings", "Shopping Malls"] },
    ],
  },
  {
    name: "Tanzania", code: "TZ", population: 65_000_000, totalDemandGwhMonth: 700, avgKwhPerHousehold: 20,
    sources: { Gas: 40, Hydro: 30, Solar: 10, Biomass: 8, Wind: 5, Oil: 5, Other: 2 },
    sectorBreakdown: { Industrial: 25, Residential: 40, Commercial: 18, Agriculture: 12, Other: 5 },
    states: [
      { name: "Dar es Salaam", population: 7_000_000, households: 1_800_000, avgKwhPerHousehold: 35, sources: { Gas: 45, Hydro: 25, Solar: 12, Oil: 8, Wind: 5, Other: 5 }, majorConsumers: ["Ports", "Cement Plants", "Breweries", "Government Buildings"] },
    ],
  },
  {
    name: "Morocco", code: "MA", population: 37_000_000, totalDemandGwhMonth: 3_500, avgKwhPerHousehold: 120,
    sources: { Coal: 30, Wind: 18, Solar: 15, Gas: 12, Hydro: 10, Oil: 5, Other: 10 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 20, Agriculture: 10, Other: 5 },
    states: [
      { name: "Casablanca", population: 4_000_000, households: 1_000_000, avgKwhPerHousehold: 150, sources: { Coal: 28, Wind: 18, Gas: 15, Solar: 15, Hydro: 8, Other: 16 }, majorConsumers: ["Casablanca Port", "Tram System", "Industries", "Shopping Malls", "Airports"] },
    ],
  },
  {
    name: "Algeria", code: "DZ", population: 45_000_000, totalDemandGwhMonth: 7_000, avgKwhPerHousehold: 200,
    sources: { Gas: 90, Solar: 3, Wind: 2, Hydro: 2, Oil: 2, Other: 1 },
    sectorBreakdown: { Residential: 42, Industrial: 25, Commercial: 15, Government: 10, Other: 8 },
    states: [
      { name: "Algiers", population: 4_000_000, households: 900_000, avgKwhPerHousehold: 230, sources: { Gas: 88, Solar: 5, Wind: 3, Hydro: 2, Other: 2 }, majorConsumers: ["Metro System", "Government Buildings", "Ports", "AC Systems", "Hospitals"] },
    ],
  },
  {
    name: "Tunisia", code: "TN", population: 12_000_000, totalDemandGwhMonth: 1_700, avgKwhPerHousehold: 140,
    sources: { Gas: 65, Wind: 10, Solar: 8, Oil: 8, Hydro: 2, Import: 4, Other: 3 },
    sectorBreakdown: { Residential: 32, Industrial: 32, Commercial: 20, Agriculture: 10, Other: 6 },
    states: [
      { name: "Tunis", population: 2_800_000, households: 700_000, avgKwhPerHousehold: 160, sources: { Gas: 62, Wind: 10, Solar: 10, Oil: 8, Import: 5, Other: 5 }, majorConsumers: ["Light Rail", "Tourism Hotels", "Olive Oil Processing", "Government Buildings"] },
    ],
  },
  {
    name: "Libya", code: "LY", population: 7_000_000, totalDemandGwhMonth: 2_200, avgKwhPerHousehold: 300,
    sources: { Gas: 50, Oil: 40, Solar: 5, Wind: 2, Other: 3 },
    sectorBreakdown: { Residential: 40, Industrial: 22, Commercial: 15, Government: 15, Other: 8 },
    states: [
      { name: "Tripoli", population: 1_200_000, households: 300_000, avgKwhPerHousehold: 350, sources: { Gas: 48, Oil: 40, Solar: 7, Wind: 3, Other: 2 }, majorConsumers: ["Government Buildings", "Oil Industry HQs", "AC Systems", "Hospitals"] },
    ],
  },
  {
    name: "DR Congo", code: "CD", population: 102_000_000, totalDemandGwhMonth: 800, avgKwhPerHousehold: 10,
    sources: { Hydro: 95, Solar: 2, Oil: 2, Other: 1 },
    sectorBreakdown: { Industrial: 45, Residential: 30, Commercial: 10, Mining: 10, Other: 5 },
    states: [
      { name: "Kinshasa", population: 17_000_000, households: 3_500_000, avgKwhPerHousehold: 15, sources: { Hydro: 92, Solar: 3, Oil: 3, Other: 2 }, majorConsumers: ["Mining Companies", "Government Buildings", "Markets", "Ports"] },
    ],
  },
  {
    name: "Angola", code: "AO", population: 36_000_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 40,
    sources: { Hydro: 60, Gas: 20, Oil: 10, Solar: 5, Wind: 3, Other: 2 },
    sectorBreakdown: { Industrial: 35, Residential: 35, Commercial: 15, Oil_Sector: 10, Other: 5 },
    states: [
      { name: "Luanda", population: 9_000_000, households: 2_000_000, avgKwhPerHousehold: 55, sources: { Hydro: 55, Gas: 22, Oil: 12, Solar: 5, Other: 6 }, majorConsumers: ["Oil Industry", "Government Buildings", "Ports", "Shopping Malls"] },
    ],
  },
  {
    name: "Mozambique", code: "MZ", population: 33_000_000, totalDemandGwhMonth: 1_600, avgKwhPerHousehold: 25,
    sources: { Hydro: 65, Gas: 20, Solar: 5, Coal: 5, Wind: 3, Other: 2 },
    sectorBreakdown: { Industrial: 55, Residential: 25, Commercial: 10, Agriculture: 5, Other: 5 },
    states: [
      { name: "Maputo", population: 2_200_000, households: 500_000, avgKwhPerHousehold: 50, sources: { Hydro: 60, Gas: 22, Solar: 8, Coal: 5, Other: 5 }, majorConsumers: ["Aluminium Smelter (Mozal)", "Government Buildings", "Ports", "Hospitals"] },
    ],
  },
  {
    name: "Cameroon", code: "CM", population: 28_000_000, totalDemandGwhMonth: 700, avgKwhPerHousehold: 30,
    sources: { Hydro: 55, Gas: 20, Oil: 10, Solar: 8, Biomass: 5, Other: 2 },
    sectorBreakdown: { Industrial: 35, Residential: 35, Commercial: 15, Agriculture: 10, Other: 5 },
    states: [
      { name: "Douala", population: 3_800_000, households: 900_000, avgKwhPerHousehold: 40, sources: { Hydro: 50, Gas: 22, Oil: 12, Solar: 8, Other: 8 }, majorConsumers: ["Aluminium Company ALUCAM", "Ports", "Industries", "Markets"] },
    ],
  },
  {
    name: "Ivory Coast", code: "CI", population: 28_000_000, totalDemandGwhMonth: 900, avgKwhPerHousehold: 35,
    sources: { Gas: 45, Hydro: 30, Solar: 8, Biomass: 8, Oil: 5, Other: 4 },
    sectorBreakdown: { Industrial: 30, Residential: 38, Commercial: 18, Agriculture: 8, Other: 6 },
    states: [
      { name: "Abidjan", population: 6_000_000, households: 1_400_000, avgKwhPerHousehold: 50, sources: { Gas: 45, Hydro: 25, Solar: 10, Biomass: 8, Oil: 5, Other: 7 }, majorConsumers: ["Ports", "Cocoa Processing", "Government Buildings", "Hotels", "Industries"] },
    ],
  },
  {
    name: "Senegal", code: "SN", population: 18_000_000, totalDemandGwhMonth: 500, avgKwhPerHousehold: 35,
    sources: { Gas: 40, Oil: 20, Solar: 18, Wind: 8, Hydro: 5, Biomass: 5, Other: 4 },
    sectorBreakdown: { Residential: 38, Industrial: 25, Commercial: 22, Agriculture: 8, Other: 7 },
    states: [
      { name: "Dakar", population: 4_000_000, households: 900_000, avgKwhPerHousehold: 50, sources: { Gas: 38, Solar: 20, Oil: 18, Wind: 10, Biomass: 5, Other: 9 }, majorConsumers: ["Ports", "Government Buildings", "Fishing Industry", "Hotels", "BRT System"] },
    ],
  },
  {
    name: "Uganda", code: "UG", population: 48_000_000, totalDemandGwhMonth: 350, avgKwhPerHousehold: 15,
    sources: { Hydro: 75, Solar: 10, Biomass: 5, Oil: 5, Wind: 3, Other: 2 },
    sectorBreakdown: { Industrial: 25, Residential: 40, Commercial: 18, Agriculture: 12, Other: 5 },
    states: [
      { name: "Kampala", population: 3_500_000, households: 800_000, avgKwhPerHousehold: 25, sources: { Hydro: 72, Solar: 12, Biomass: 5, Oil: 5, Other: 6 }, majorConsumers: ["Brewing Industry", "Government Buildings", "Markets", "Hospitals", "Telecom Towers"] },
    ],
  },
  {
    name: "Zimbabwe", code: "ZW", population: 16_000_000, totalDemandGwhMonth: 800, avgKwhPerHousehold: 60,
    sources: { Coal: 40, Hydro: 35, Solar: 10, Import: 8, Wind: 4, Other: 3 },
    sectorBreakdown: { Industrial: 30, Residential: 35, Mining: 15, Commercial: 12, Other: 8 },
    states: [
      { name: "Harare", population: 2_200_000, households: 550_000, avgKwhPerHousehold: 80, sources: { Coal: 38, Hydro: 30, Solar: 12, Import: 10, Other: 10 }, majorConsumers: ["Mining Companies", "Government Buildings", "Hospitals", "Manufacturing"] },
    ],
  },
  {
    name: "Zambia", code: "ZM", population: 20_000_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 50,
    sources: { Hydro: 80, Coal: 8, Solar: 5, Import: 4, Other: 3 },
    sectorBreakdown: { Mining: 40, Residential: 30, Commercial: 15, Agriculture: 8, Other: 7 },
    states: [
      { name: "Lusaka", population: 3_500_000, households: 800_000, avgKwhPerHousehold: 65, sources: { Hydro: 78, Coal: 8, Solar: 6, Import: 5, Other: 3 }, majorConsumers: ["Copper Mines", "Government Buildings", "Shopping Centers", "Hospitals"] },
    ],
  },
  {
    name: "Rwanda", code: "RW", population: 14_000_000, totalDemandGwhMonth: 100, avgKwhPerHousehold: 15,
    sources: { Hydro: 40, Solar: 20, Gas: 15, Import: 10, Biomass: 8, Other: 7 },
    sectorBreakdown: { Residential: 38, Industrial: 22, Commercial: 25, Agriculture: 8, Other: 7 },
    states: [
      { name: "Kigali", population: 1_200_000, households: 300_000, avgKwhPerHousehold: 25, sources: { Hydro: 38, Solar: 22, Gas: 15, Import: 10, Other: 15 }, majorConsumers: ["Convention Center", "Government Buildings", "Hotels", "IT Hub", "Hospitals"] },
    ],
  },
  {
    name: "Sudan", code: "SD", population: 46_000_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 30,
    sources: { Hydro: 50, Oil: 20, Solar: 12, Gas: 8, Wind: 5, Other: 5 },
    sectorBreakdown: { Residential: 45, Industrial: 20, Agriculture: 15, Commercial: 12, Other: 8 },
    states: [
      { name: "Khartoum", population: 6_000_000, households: 1_200_000, avgKwhPerHousehold: 45, sources: { Hydro: 45, Oil: 22, Solar: 15, Gas: 10, Other: 8 }, majorConsumers: ["Government Buildings", "Merowe Dam", "Hospitals", "Markets", "AC Systems"] },
    ],
  },
  {
    name: "Madagascar", code: "MG", population: 30_000_000, totalDemandGwhMonth: 200, avgKwhPerHousehold: 10,
    sources: { Hydro: 45, Oil: 30, Solar: 10, Biomass: 8, Wind: 4, Other: 3 },
    sectorBreakdown: { Residential: 45, Industrial: 20, Commercial: 18, Agriculture: 10, Other: 7 },
    states: [
      { name: "Antananarivo", population: 3_500_000, households: 700_000, avgKwhPerHousehold: 18, sources: { Hydro: 40, Oil: 30, Solar: 12, Biomass: 8, Other: 10 }, majorConsumers: ["Government Buildings", "Textile Factories", "Markets", "Hospitals"] },
    ],
  },

  // ===== MIDDLE EAST =====
  {
    name: "Saudi Arabia", code: "SA", population: 36_000_000, totalDemandGwhMonth: 30_000, avgKwhPerHousehold: 850,
    sources: { Gas: 50, Oil: 40, Solar: 5, Wind: 3, Other: 2 },
    sectorBreakdown: { Residential: 50, Industrial: 20, Commercial: 18, Government: 12 },
    states: [
      { name: "Riyadh", population: 8_500_000, households: 1_800_000, avgKwhPerHousehold: 950, sources: { Gas: 55, Oil: 35, Solar: 8, Wind: 2 }, majorConsumers: ["AC Systems", "Desalination Plants", "Metro", "Malls", "Government HQ"] },
      { name: "Eastern Province", population: 5_000_000, households: 1_200_000, avgKwhPerHousehold: 900, sources: { Gas: 60, Oil: 30, Solar: 5, Wind: 3, Other: 2 }, majorConsumers: ["Aramco Facilities", "Refineries", "Desalination", "Ports", "Industrial Cities"] },
      { name: "Makkah", population: 9_000_000, households: 2_000_000, avgKwhPerHousehold: 800, sources: { Gas: 48, Oil: 42, Solar: 5, Other: 5 }, majorConsumers: ["Haramain Railway", "Hajj AC Systems", "Hotels", "Hospitals", "Holy Mosques"] },
    ],
  },
  {
    name: "UAE", code: "AE", population: 10_000_000, totalDemandGwhMonth: 12_000, avgKwhPerHousehold: 900,
    sources: { Gas: 75, Solar: 10, Nuclear: 10, Oil: 3, Other: 2 },
    sectorBreakdown: { Residential: 35, Commercial: 30, Industrial: 22, Government: 8, Other: 5 },
    states: [
      { name: "Dubai", population: 3_600_000, households: 900_000, avgKwhPerHousehold: 950, sources: { Gas: 70, Solar: 18, Nuclear: 5, Other: 7 }, majorConsumers: ["Burj Khalifa District", "Dubai Metro", "Desalination", "Airports", "Malls"] },
      { name: "Abu Dhabi", population: 1_500_000, households: 350_000, avgKwhPerHousehold: 1100, sources: { Gas: 70, Nuclear: 18, Solar: 8, Other: 4 }, majorConsumers: ["ADNOC Facilities", "Desalination", "Barakah Nuclear", "Government HQ", "Masdar City"] },
    ],
  },
  {
    name: "Qatar", code: "QA", population: 3_000_000, totalDemandGwhMonth: 4_000, avgKwhPerHousehold: 1200,
    sources: { Gas: 95, Solar: 3, Other: 2 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 25, Government: 5, Other: 5 },
    states: [
      { name: "Doha", population: 2_400_000, households: 500_000, avgKwhPerHousehold: 1300, sources: { Gas: 95, Solar: 3, Other: 2 }, majorConsumers: ["LNG Plants", "AC Systems", "Doha Metro", "Qatar Foundation", "Lusail City"] },
    ],
  },
  {
    name: "Kuwait", code: "KW", population: 4_300_000, totalDemandGwhMonth: 5_500, avgKwhPerHousehold: 1200,
    sources: { Gas: 55, Oil: 40, Solar: 3, Other: 2 },
    sectorBreakdown: { Residential: 48, Commercial: 22, Industrial: 15, Government: 10, Other: 5 },
    states: [
      { name: "Kuwait City", population: 3_000_000, households: 700_000, avgKwhPerHousehold: 1300, sources: { Gas: 55, Oil: 40, Solar: 3, Other: 2 }, majorConsumers: ["AC Systems", "Desalination", "Oil Industry", "Shopping Malls", "Government HQ"] },
    ],
  },
  {
    name: "Oman", code: "OM", population: 5_200_000, totalDemandGwhMonth: 3_200, avgKwhPerHousehold: 700,
    sources: { Gas: 85, Solar: 5, Oil: 5, Wind: 3, Other: 2 },
    sectorBreakdown: { Residential: 42, Industrial: 25, Commercial: 18, Government: 10, Other: 5 },
    states: [
      { name: "Muscat", population: 1_800_000, households: 400_000, avgKwhPerHousehold: 750, sources: { Gas: 85, Solar: 6, Oil: 4, Wind: 3, Other: 2 }, majorConsumers: ["Desalination Plants", "AC Systems", "Ports", "Government Buildings", "Hotels"] },
    ],
  },
  {
    name: "Bahrain", code: "BH", population: 1_500_000, totalDemandGwhMonth: 1_500, avgKwhPerHousehold: 800,
    sources: { Gas: 95, Solar: 3, Other: 2 },
    sectorBreakdown: { Residential: 35, Industrial: 30, Commercial: 25, Government: 5, Other: 5 },
    states: [
      { name: "Manama", population: 1_500_000, households: 350_000, avgKwhPerHousehold: 800, sources: { Gas: 95, Solar: 3, Other: 2 }, majorConsumers: ["Aluminium Smelter (Alba)", "Banking District", "AC Systems", "Desalination"] },
    ],
  },
  {
    name: "Jordan", code: "JO", population: 11_500_000, totalDemandGwhMonth: 1_800, avgKwhPerHousehold: 160,
    sources: { Gas: 55, Solar: 15, Wind: 10, Oil: 8, Import: 7, Other: 5 },
    sectorBreakdown: { Residential: 40, Commercial: 22, Industrial: 18, Water_Pumping: 12, Other: 8 },
    states: [
      { name: "Amman", population: 4_500_000, households: 1_000_000, avgKwhPerHousehold: 180, sources: { Gas: 55, Solar: 15, Wind: 10, Oil: 8, Import: 7, Other: 5 }, majorConsumers: ["Water Pumping", "Government Buildings", "Hotels", "Hospitals", "Shopping Malls"] },
    ],
  },
  {
    name: "Lebanon", code: "LB", population: 5_500_000, totalDemandGwhMonth: 1_000, avgKwhPerHousehold: 130,
    sources: { Oil: 45, Gas: 15, Solar: 15, Hydro: 8, Import: 10, Wind: 4, Other: 3 },
    sectorBreakdown: { Residential: 38, Commercial: 25, Industrial: 18, Government: 12, Other: 7 },
    states: [
      { name: "Beirut", population: 2_400_000, households: 600_000, avgKwhPerHousehold: 150, sources: { Oil: 40, Solar: 18, Gas: 15, Import: 12, Hydro: 5, Other: 10 }, majorConsumers: ["Private Generators", "Government Buildings", "Hotels", "Hospitals", "Shopping Centers"] },
    ],
  },
  {
    name: "Yemen", code: "YE", population: 34_000_000, totalDemandGwhMonth: 300, avgKwhPerHousehold: 15,
    sources: { Oil: 45, Solar: 25, Gas: 12, Wind: 5, Hydro: 3, Other: 10 },
    sectorBreakdown: { Residential: 55, Commercial: 15, Industrial: 10, Government: 12, Other: 8 },
    states: [
      { name: "Sana'a", population: 4_000_000, households: 700_000, avgKwhPerHousehold: 20, sources: { Solar: 35, Oil: 35, Gas: 12, Wind: 8, Other: 10 }, majorConsumers: ["Government Buildings", "Hospitals", "Markets", "Water Pumps"] },
    ],
  },

  // ===== OCEANIA =====
  {
    name: "Australia", code: "AU", population: 26_500_000, totalDemandGwhMonth: 22_000, avgKwhPerHousehold: 630,
    sources: { Coal: 30, Gas: 20, Solar: 22, Wind: 15, Hydro: 8, Other: 5 },
    sectorBreakdown: { Residential: 32, Commercial: 28, Industrial: 30, Transport: 10 },
    states: [
      { name: "New South Wales", population: 8_200_000, households: 3_200_000, avgKwhPerHousehold: 600, sources: { Coal: 40, Solar: 20, Wind: 12, Gas: 15, Hydro: 8, Other: 5 }, majorConsumers: ["Sydney Metro", "Mining Ops", "Data Centers", "Hospitals", "Universities"] },
      { name: "Victoria", population: 6_700_000, households: 2_600_000, avgKwhPerHousehold: 550, sources: { Gas: 30, Wind: 25, Solar: 20, Coal: 15, Hydro: 5, Other: 5 }, majorConsumers: ["Melbourne Trams", "Manufacturing", "Ports", "Hospitals"] },
      { name: "Queensland", population: 5_400_000, households: 2_000_000, avgKwhPerHousehold: 700, sources: { Coal: 40, Solar: 25, Gas: 15, Wind: 10, Hydro: 5, Other: 5 }, majorConsumers: ["Mining (Coal, Bauxite)", "LNG Plants", "Tourism", "Airports", "Agriculture"] },
      { name: "Western Australia", population: 2_900_000, households: 1_100_000, avgKwhPerHousehold: 750, sources: { Gas: 45, Solar: 20, Wind: 15, Coal: 10, Other: 10 }, majorConsumers: ["Iron Ore Mines", "LNG Facilities", "Desalination", "Ports", "Agriculture"] },
    ],
  },
  {
    name: "New Zealand", code: "NZ", population: 5_200_000, totalDemandGwhMonth: 3_500, avgKwhPerHousehold: 600,
    sources: { Hydro: 55, Geothermal: 18, Wind: 10, Gas: 10, Solar: 3, Other: 4 },
    sectorBreakdown: { Industrial: 35, Residential: 28, Commercial: 25, Agriculture: 7, Other: 5 },
    states: [
      { name: "Auckland", population: 1_700_000, households: 550_000, avgKwhPerHousehold: 580, sources: { Hydro: 50, Geothermal: 18, Wind: 12, Gas: 10, Solar: 5, Other: 5 }, majorConsumers: ["Ports", "Data Centers", "Airports", "Hospitals", "Manufacturing"] },
      { name: "Canterbury", population: 650_000, households: 250_000, avgKwhPerHousehold: 650, sources: { Hydro: 70, Wind: 10, Geothermal: 5, Gas: 8, Solar: 4, Other: 3 }, majorConsumers: ["Dairy Processing", "Agriculture", "Irrigation", "Hospitals", "University"] },
    ],
  },
  {
    name: "Papua New Guinea", code: "PG", population: 10_000_000, totalDemandGwhMonth: 300, avgKwhPerHousehold: 20,
    sources: { Hydro: 35, Gas: 30, Oil: 15, Solar: 8, Geothermal: 5, Biomass: 5, Other: 2 },
    sectorBreakdown: { Industrial: 40, Residential: 30, Commercial: 15, Mining: 10, Other: 5 },
    states: [
      { name: "Port Moresby", population: 400_000, households: 80_000, avgKwhPerHousehold: 40, sources: { Gas: 35, Hydro: 30, Oil: 15, Solar: 10, Other: 10 }, majorConsumers: ["LNG Plant", "Government Buildings", "Mining HQs", "Ports"] },
    ],
  },
  {
    name: "Fiji", code: "FJ", population: 930_000, totalDemandGwhMonth: 80, avgKwhPerHousehold: 70,
    sources: { Hydro: 45, Oil: 20, Solar: 15, Biomass: 10, Wind: 5, Other: 5 },
    sectorBreakdown: { Residential: 35, Commercial: 30, Industrial: 18, Tourism: 12, Other: 5 },
    states: [
      { name: "Suva", population: 95_000, households: 25_000, avgKwhPerHousehold: 80, sources: { Hydro: 45, Oil: 20, Solar: 15, Biomass: 10, Other: 10 }, majorConsumers: ["Tourism Hotels", "Government Buildings", "Ports", "Hospitals"] },
    ],
  },

  // ===== MORE ASIA =====
  {
    name: "Laos", code: "LA", population: 7_500_000, totalDemandGwhMonth: 700, avgKwhPerHousehold: 80,
    sources: { Hydro: 80, Coal: 8, Solar: 5, Biomass: 4, Other: 3 },
    sectorBreakdown: { Industrial: 35, Residential: 35, Commercial: 15, Agriculture: 10, Other: 5 },
    states: [
      { name: "Vientiane", population: 900_000, households: 220_000, avgKwhPerHousehold: 110, sources: { Hydro: 78, Coal: 8, Solar: 6, Other: 8 }, majorConsumers: ["Government Buildings", "Markets", "Cement Plants", "Hospitals"] },
    ],
  },
  {
    name: "Brunei", code: "BN", population: 450_000, totalDemandGwhMonth: 400, avgKwhPerHousehold: 600,
    sources: { Gas: 95, Solar: 3, Other: 2 },
    sectorBreakdown: { Industrial: 40, Residential: 28, Commercial: 18, Government: 9, Other: 5 },
    states: [
      { name: "Bandar Seri Begawan", population: 50_000, households: 15_000, avgKwhPerHousehold: 580, sources: { Gas: 95, Solar: 3, Other: 2 }, majorConsumers: ["LNG Plants", "Oil & Gas Facilities", "Government Buildings", "Mosques"] },
    ],
  },
  {
    name: "Maldives", code: "MV", population: 520_000, totalDemandGwhMonth: 60, avgKwhPerHousehold: 130,
    sources: { Oil: 75, Solar: 18, Wind: 4, Other: 3 },
    sectorBreakdown: { Tourism: 40, Residential: 28, Commercial: 18, Government: 9, Other: 5 },
    states: [
      { name: "Malé", population: 250_000, households: 40_000, avgKwhPerHousehold: 160, sources: { Oil: 70, Solar: 22, Wind: 5, Other: 3 }, majorConsumers: ["Tourism Resorts", "Desalination Plants", "AC Systems", "Government Buildings"] },
    ],
  },
  {
    name: "Bhutan", code: "BT", population: 780_000, totalDemandGwhMonth: 250, avgKwhPerHousehold: 150,
    sources: { Hydro: 95, Solar: 2, Biomass: 2, Other: 1 },
    sectorBreakdown: { Industrial: 50, Residential: 25, Commercial: 12, Agriculture: 8, Other: 5 },
    states: [
      { name: "Thimphu", population: 120_000, households: 30_000, avgKwhPerHousehold: 170, sources: { Hydro: 95, Solar: 3, Other: 2 }, majorConsumers: ["Hydropower Export", "Government Buildings", "Hotels", "Hospitals"] },
    ],
  },
  {
    name: "Turkmenistan", code: "TM", population: 6_400_000, totalDemandGwhMonth: 2_200, avgKwhPerHousehold: 250,
    sources: { Gas: 95, Hydro: 2, Solar: 2, Other: 1 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 15, Agriculture: 12, Other: 8 },
    states: [
      { name: "Ashgabat", population: 1_000_000, households: 250_000, avgKwhPerHousehold: 300, sources: { Gas: 95, Solar: 3, Other: 2 }, majorConsumers: ["Government Buildings (Marble City)", "Gas Processing", "AC Systems", "Airports"] },
    ],
  },
  {
    name: "Tajikistan", code: "TJ", population: 10_000_000, totalDemandGwhMonth: 1_500, avgKwhPerHousehold: 120,
    sources: { Hydro: 90, Coal: 5, Solar: 3, Other: 2 },
    sectorBreakdown: { Industrial: 35, Residential: 35, Agriculture: 15, Commercial: 10, Other: 5 },
    states: [
      { name: "Dushanbe", population: 900_000, households: 200_000, avgKwhPerHousehold: 150, sources: { Hydro: 88, Coal: 5, Solar: 4, Other: 3 }, majorConsumers: ["Aluminium Smelter (TALCO)", "Government Buildings", "Markets", "Hospitals"] },
    ],
  },
  {
    name: "Kyrgyzstan", code: "KG", population: 7_000_000, totalDemandGwhMonth: 1_300, avgKwhPerHousehold: 180,
    sources: { Hydro: 85, Coal: 8, Gas: 3, Solar: 2, Other: 2 },
    sectorBreakdown: { Residential: 38, Industrial: 25, Agriculture: 18, Commercial: 12, Other: 7 },
    states: [
      { name: "Bishkek", population: 1_100_000, households: 280_000, avgKwhPerHousehold: 210, sources: { Hydro: 82, Coal: 8, Gas: 4, Solar: 3, Other: 3 }, majorConsumers: ["Government Buildings", "Markets", "Mining HQs", "Hospitals", "Universities"] },
    ],
  },

  // ===== MORE AFRICA =====
  {
    name: "Namibia", code: "NA", population: 2_600_000, totalDemandGwhMonth: 350, avgKwhPerHousehold: 120,
    sources: { Hydro: 25, Solar: 25, Import: 25, Coal: 10, Wind: 10, Other: 5 },
    sectorBreakdown: { Mining: 35, Residential: 25, Commercial: 20, Agriculture: 12, Other: 8 },
    states: [
      { name: "Windhoek", population: 450_000, households: 120_000, avgKwhPerHousehold: 150, sources: { Import: 30, Solar: 25, Hydro: 20, Coal: 10, Wind: 10, Other: 5 }, majorConsumers: ["Mining Companies", "Government Buildings", "Shopping Centers", "Hospitals"] },
    ],
  },
  {
    name: "Botswana", code: "BW", population: 2_600_000, totalDemandGwhMonth: 350, avgKwhPerHousehold: 120,
    sources: { Coal: 55, Solar: 15, Import: 15, Gas: 5, Wind: 5, Other: 5 },
    sectorBreakdown: { Mining: 35, Residential: 28, Commercial: 20, Government: 10, Other: 7 },
    states: [
      { name: "Gaborone", population: 280_000, households: 80_000, avgKwhPerHousehold: 140, sources: { Coal: 50, Solar: 18, Import: 15, Wind: 8, Other: 9 }, majorConsumers: ["Diamond Mines", "Government Buildings", "Shopping Malls", "Hospitals"] },
    ],
  },
  {
    name: "Mauritius", code: "MU", population: 1_300_000, totalDemandGwhMonth: 250, avgKwhPerHousehold: 200,
    sources: { Coal: 30, Gas: 15, Oil: 15, Solar: 15, Biomass: 12, Hydro: 5, Wind: 5, Other: 3 },
    sectorBreakdown: { Industrial: 30, Residential: 28, Commercial: 25, Tourism: 12, Other: 5 },
    states: [
      { name: "Port Louis", population: 150_000, households: 50_000, avgKwhPerHousehold: 220, sources: { Coal: 28, Gas: 15, Solar: 18, Biomass: 12, Oil: 12, Other: 15 }, majorConsumers: ["Textile Factories", "Tourism Hotels", "Ports", "Government Buildings"] },
    ],
  },
  {
    name: "Mali", code: "ML", population: 22_000_000, totalDemandGwhMonth: 300, avgKwhPerHousehold: 15,
    sources: { Hydro: 40, Oil: 25, Solar: 15, Biomass: 10, Import: 5, Other: 5 },
    sectorBreakdown: { Residential: 45, Industrial: 18, Commercial: 15, Agriculture: 12, Other: 10 },
    states: [
      { name: "Bamako", population: 4_000_000, households: 800_000, avgKwhPerHousehold: 25, sources: { Hydro: 38, Oil: 25, Solar: 18, Biomass: 8, Other: 11 }, majorConsumers: ["Government Buildings", "Markets", "Mining HQs", "Hospitals"] },
    ],
  },
  {
    name: "Burkina Faso", code: "BF", population: 22_000_000, totalDemandGwhMonth: 200, avgKwhPerHousehold: 10,
    sources: { Solar: 25, Oil: 25, Hydro: 15, Biomass: 15, Import: 12, Other: 8 },
    sectorBreakdown: { Residential: 45, Industrial: 18, Commercial: 15, Mining: 12, Other: 10 },
    states: [
      { name: "Ouagadougou", population: 3_000_000, households: 600_000, avgKwhPerHousehold: 18, sources: { Solar: 25, Oil: 22, Import: 15, Hydro: 12, Biomass: 12, Other: 14 }, majorConsumers: ["Gold Mines", "Government Buildings", "Markets", "Hospitals"] },
    ],
  },
  {
    name: "Niger", code: "NE", population: 26_000_000, totalDemandGwhMonth: 150, avgKwhPerHousehold: 8,
    sources: { Oil: 30, Import: 30, Solar: 18, Coal: 8, Hydro: 5, Biomass: 5, Other: 4 },
    sectorBreakdown: { Residential: 50, Mining: 20, Commercial: 12, Government: 10, Other: 8 },
    states: [
      { name: "Niamey", population: 1_500_000, households: 300_000, avgKwhPerHousehold: 15, sources: { Import: 30, Oil: 25, Solar: 22, Coal: 8, Other: 15 }, majorConsumers: ["Uranium Mines", "Government Buildings", "Markets", "Hospitals"] },
    ],
  },
  {
    name: "Chad", code: "TD", population: 18_000_000, totalDemandGwhMonth: 80, avgKwhPerHousehold: 5,
    sources: { Oil: 60, Solar: 15, Hydro: 5, Biomass: 10, Other: 10 },
    sectorBreakdown: { Residential: 48, Oil_Sector: 20, Commercial: 12, Government: 12, Other: 8 },
    states: [
      { name: "N'Djamena", population: 1_500_000, households: 300_000, avgKwhPerHousehold: 10, sources: { Oil: 55, Solar: 20, Biomass: 10, Hydro: 5, Other: 10 }, majorConsumers: ["Oil Refineries", "Government Buildings", "Markets", "Hospitals"] },
    ],
  },
  {
    name: "Somalia", code: "SO", population: 18_000_000, totalDemandGwhMonth: 100, avgKwhPerHousehold: 8,
    sources: { Oil: 50, Solar: 25, Wind: 10, Biomass: 10, Other: 5 },
    sectorBreakdown: { Residential: 55, Commercial: 18, Government: 10, Industry: 10, Other: 7 },
    states: [
      { name: "Mogadishu", population: 2_800_000, households: 500_000, avgKwhPerHousehold: 12, sources: { Oil: 45, Solar: 30, Wind: 10, Biomass: 8, Other: 7 }, majorConsumers: ["Private Generators", "Markets", "Government Buildings", "Hospitals", "Ports"] },
    ],
  },
  {
    name: "Eritrea", code: "ER", population: 3_600_000, totalDemandGwhMonth: 50, avgKwhPerHousehold: 15,
    sources: { Oil: 55, Solar: 15, Wind: 10, Hydro: 5, Biomass: 10, Other: 5 },
    sectorBreakdown: { Residential: 45, Industrial: 15, Government: 18, Commercial: 12, Other: 10 },
    states: [
      { name: "Asmara", population: 900_000, households: 200_000, avgKwhPerHousehold: 20, sources: { Oil: 50, Solar: 18, Wind: 12, Hydro: 8, Other: 12 }, majorConsumers: ["Government Buildings", "Mining", "Hospitals", "Military"] },
    ],
  },
  {
    name: "Djibouti", code: "DJ", population: 1_100_000, totalDemandGwhMonth: 40, avgKwhPerHousehold: 40,
    sources: { Oil: 40, Geothermal: 15, Solar: 15, Import: 20, Wind: 5, Other: 5 },
    sectorBreakdown: { Residential: 35, Commercial: 25, Military: 18, Government: 12, Other: 10 },
    states: [
      { name: "Djibouti City", population: 600_000, households: 130_000, avgKwhPerHousehold: 45, sources: { Oil: 38, Import: 22, Geothermal: 15, Solar: 15, Other: 10 }, majorConsumers: ["Military Bases (US, French)", "Ports", "Government Buildings", "Hotels"] },
    ],
  },
  {
    name: "Equatorial Guinea", code: "GQ", population: 1_700_000, totalDemandGwhMonth: 150, avgKwhPerHousehold: 80,
    sources: { Gas: 65, Hydro: 15, Oil: 10, Solar: 5, Other: 5 },
    sectorBreakdown: { Oil_Gas: 45, Residential: 25, Commercial: 15, Government: 10, Other: 5 },
    states: [
      { name: "Malabo", population: 300_000, households: 70_000, avgKwhPerHousehold: 100, sources: { Gas: 60, Hydro: 15, Oil: 12, Solar: 7, Other: 6 }, majorConsumers: ["LNG Plants", "Government Buildings", "Hotels", "Ports"] },
    ],
  },
  {
    name: "Gabon", code: "GA", population: 2_400_000, totalDemandGwhMonth: 250, avgKwhPerHousehold: 100,
    sources: { Hydro: 40, Gas: 30, Oil: 15, Solar: 8, Biomass: 5, Other: 2 },
    sectorBreakdown: { Industrial: 38, Residential: 28, Commercial: 18, Government: 10, Other: 6 },
    states: [
      { name: "Libreville", population: 850_000, households: 200_000, avgKwhPerHousehold: 120, sources: { Gas: 35, Hydro: 35, Oil: 15, Solar: 8, Other: 7 }, majorConsumers: ["Oil Industry", "Government Buildings", "Manganese Mining", "Ports"] },
    ],
  },
  {
    name: "Republic of Congo", code: "CG", population: 6_000_000, totalDemandGwhMonth: 180, avgKwhPerHousehold: 30,
    sources: { Hydro: 55, Gas: 25, Oil: 10, Solar: 5, Other: 5 },
    sectorBreakdown: { Industrial: 35, Residential: 35, Commercial: 15, Government: 10, Other: 5 },
    states: [
      { name: "Brazzaville", population: 2_400_000, households: 500_000, avgKwhPerHousehold: 35, sources: { Hydro: 55, Gas: 25, Oil: 10, Solar: 5, Other: 5 }, majorConsumers: ["Oil Industry", "Government Buildings", "Railway", "Markets"] },
    ],
  },
  {
    name: "Central African Republic", code: "CF", population: 5_500_000, totalDemandGwhMonth: 30, avgKwhPerHousehold: 5,
    sources: { Hydro: 50, Oil: 25, Solar: 10, Biomass: 10, Other: 5 },
    sectorBreakdown: { Residential: 50, Government: 18, Commercial: 12, Mining: 12, Other: 8 },
    states: [
      { name: "Bangui", population: 1_000_000, households: 200_000, avgKwhPerHousehold: 8, sources: { Hydro: 48, Oil: 25, Solar: 12, Biomass: 10, Other: 5 }, majorConsumers: ["Government Buildings", "Markets", "Hospitals", "Diamond Trade"] },
    ],
  },
  {
    name: "South Sudan", code: "SS", population: 11_500_000, totalDemandGwhMonth: 30, avgKwhPerHousehold: 3,
    sources: { Oil: 50, Solar: 25, Hydro: 5, Biomass: 15, Other: 5 },
    sectorBreakdown: { Residential: 50, Oil_Sector: 22, Government: 12, Commercial: 8, Other: 8 },
    states: [
      { name: "Juba", population: 600_000, households: 120_000, avgKwhPerHousehold: 8, sources: { Oil: 45, Solar: 30, Biomass: 12, Other: 13 }, majorConsumers: ["Government Buildings", "Oil Industry", "UN Camps", "Markets"] },
    ],
  },
  {
    name: "Benin", code: "BJ", population: 13_500_000, totalDemandGwhMonth: 150, avgKwhPerHousehold: 12,
    sources: { Import: 35, Gas: 25, Solar: 15, Hydro: 10, Oil: 8, Biomass: 5, Other: 2 },
    sectorBreakdown: { Residential: 42, Commercial: 22, Industrial: 18, Agriculture: 10, Other: 8 },
    states: [
      { name: "Cotonou", population: 800_000, households: 200_000, avgKwhPerHousehold: 20, sources: { Import: 32, Gas: 25, Solar: 18, Hydro: 8, Oil: 8, Other: 9 }, majorConsumers: ["Ports", "Government Buildings", "Markets", "Hotels"] },
    ],
  },
  {
    name: "Togo", code: "TG", population: 9_000_000, totalDemandGwhMonth: 100, avgKwhPerHousehold: 12,
    sources: { Import: 40, Gas: 20, Hydro: 15, Solar: 12, Oil: 5, Biomass: 5, Other: 3 },
    sectorBreakdown: { Residential: 42, Commercial: 22, Industrial: 18, Agriculture: 10, Other: 8 },
    states: [
      { name: "Lomé", population: 2_000_000, households: 450_000, avgKwhPerHousehold: 18, sources: { Import: 38, Gas: 22, Solar: 15, Hydro: 10, Other: 15 }, majorConsumers: ["Ports", "Government Buildings", "Phosphate Mining", "Markets"] },
    ],
  },
  {
    name: "Guinea", code: "GN", population: 14_000_000, totalDemandGwhMonth: 150, avgKwhPerHousehold: 12,
    sources: { Hydro: 50, Oil: 20, Solar: 12, Biomass: 10, Other: 8 },
    sectorBreakdown: { Residential: 45, Mining: 25, Commercial: 12, Government: 10, Other: 8 },
    states: [
      { name: "Conakry", population: 2_000_000, households: 450_000, avgKwhPerHousehold: 18, sources: { Hydro: 45, Oil: 22, Solar: 15, Biomass: 8, Other: 10 }, majorConsumers: ["Bauxite Mining", "Government Buildings", "Markets", "Ports"] },
    ],
  },
  {
    name: "Sierra Leone", code: "SL", population: 8_500_000, totalDemandGwhMonth: 50, avgKwhPerHousehold: 8,
    sources: { Hydro: 35, Oil: 30, Solar: 15, Biomass: 12, Other: 8 },
    sectorBreakdown: { Residential: 48, Mining: 18, Commercial: 15, Government: 12, Other: 7 },
    states: [
      { name: "Freetown", population: 1_200_000, households: 250_000, avgKwhPerHousehold: 12, sources: { Hydro: 32, Oil: 28, Solar: 18, Biomass: 12, Other: 10 }, majorConsumers: ["Government Buildings", "Mining Companies", "Markets", "Hospitals"] },
    ],
  },
  {
    name: "Liberia", code: "LR", population: 5_400_000, totalDemandGwhMonth: 30, avgKwhPerHousehold: 6,
    sources: { Oil: 40, Hydro: 25, Solar: 15, Biomass: 12, Other: 8 },
    sectorBreakdown: { Residential: 48, Commercial: 18, Mining: 15, Government: 12, Other: 7 },
    states: [
      { name: "Monrovia", population: 1_500_000, households: 300_000, avgKwhPerHousehold: 10, sources: { Oil: 38, Hydro: 25, Solar: 18, Biomass: 10, Other: 9 }, majorConsumers: ["Government Buildings", "Rubber Plantations", "Ports", "Hospitals"] },
    ],
  },
  {
    name: "Malawi", code: "MW", population: 20_000_000, totalDemandGwhMonth: 150, avgKwhPerHousehold: 10,
    sources: { Hydro: 70, Solar: 12, Biomass: 8, Coal: 5, Other: 5 },
    sectorBreakdown: { Residential: 40, Industrial: 22, Commercial: 18, Agriculture: 12, Other: 8 },
    states: [
      { name: "Lilongwe", population: 1_200_000, households: 280_000, avgKwhPerHousehold: 15, sources: { Hydro: 68, Solar: 15, Biomass: 8, Other: 9 }, majorConsumers: ["Government Buildings", "Tobacco Processing", "Hospitals", "Markets"] },
    ],
  },
  {
    name: "Eswatini", code: "SZ", population: 1_200_000, totalDemandGwhMonth: 100, avgKwhPerHousehold: 70,
    sources: { Import: 60, Hydro: 15, Biomass: 10, Solar: 8, Coal: 5, Other: 2 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 18, Agriculture: 10, Other: 7 },
    states: [
      { name: "Mbabane", population: 80_000, households: 22_000, avgKwhPerHousehold: 80, sources: { Import: 58, Hydro: 15, Solar: 10, Biomass: 10, Other: 7 }, majorConsumers: ["Sugar Processing", "Government Buildings", "Hospitals"] },
    ],
  },
  {
    name: "Lesotho", code: "LS", population: 2_300_000, totalDemandGwhMonth: 80, avgKwhPerHousehold: 30,
    sources: { Hydro: 45, Import: 40, Solar: 8, Wind: 4, Other: 3 },
    sectorBreakdown: { Residential: 40, Industrial: 22, Commercial: 18, Government: 12, Other: 8 },
    states: [
      { name: "Maseru", population: 400_000, households: 100_000, avgKwhPerHousehold: 40, sources: { Hydro: 42, Import: 40, Solar: 10, Wind: 5, Other: 3 }, majorConsumers: ["Textile Factories", "Government Buildings", "Hospitals"] },
    ],
  },
  {
    name: "Comoros", code: "KM", population: 900_000, totalDemandGwhMonth: 8, avgKwhPerHousehold: 10,
    sources: { Oil: 70, Solar: 15, Hydro: 5, Wind: 5, Other: 5 },
    sectorBreakdown: { Residential: 50, Commercial: 20, Government: 15, Agriculture: 10, Other: 5 },
    states: [
      { name: "Moroni", population: 60_000, households: 15_000, avgKwhPerHousehold: 15, sources: { Oil: 68, Solar: 18, Hydro: 5, Other: 9 }, majorConsumers: ["Government Buildings", "Hotels", "Hospitals", "Markets"] },
    ],
  },
  {
    name: "Mauritania", code: "MR", population: 4_900_000, totalDemandGwhMonth: 80, avgKwhPerHousehold: 20,
    sources: { Gas: 40, Solar: 20, Wind: 15, Oil: 12, Hydro: 8, Other: 5 },
    sectorBreakdown: { Mining: 35, Residential: 30, Commercial: 15, Government: 12, Other: 8 },
    states: [
      { name: "Nouakchott", population: 1_200_000, households: 250_000, avgKwhPerHousehold: 25, sources: { Gas: 38, Solar: 22, Wind: 15, Oil: 12, Other: 13 }, majorConsumers: ["Iron Ore Mining", "Government Buildings", "Markets", "Ports"] },
    ],
  },
  {
    name: "Cape Verde", code: "CV", population: 600_000, totalDemandGwhMonth: 40, avgKwhPerHousehold: 60,
    sources: { Wind: 25, Solar: 20, Oil: 45, Hydro: 3, Other: 7 },
    sectorBreakdown: { Residential: 35, Tourism: 28, Commercial: 18, Government: 12, Other: 7 },
    states: [
      { name: "Praia", population: 170_000, households: 45_000, avgKwhPerHousehold: 65, sources: { Oil: 42, Wind: 25, Solar: 22, Other: 11 }, majorConsumers: ["Tourism Hotels", "Desalination Plants", "Government Buildings", "Airports"] },
    ],
  },
  {
    name: "São Tomé and Príncipe", code: "ST", population: 230_000, totalDemandGwhMonth: 10, avgKwhPerHousehold: 35,
    sources: { Hydro: 40, Oil: 35, Solar: 15, Biomass: 5, Other: 5 },
    sectorBreakdown: { Residential: 45, Commercial: 22, Government: 15, Agriculture: 10, Other: 8 },
    states: [
      { name: "São Tomé", population: 80_000, households: 20_000, avgKwhPerHousehold: 40, sources: { Hydro: 38, Oil: 35, Solar: 18, Other: 9 }, majorConsumers: ["Government Buildings", "Hotels", "Cocoa Processing", "Hospitals"] },
    ],
  },
  {
    name: "Gambia", code: "GM", population: 2_700_000, totalDemandGwhMonth: 30, avgKwhPerHousehold: 12,
    sources: { Oil: 60, Solar: 20, Wind: 8, Biomass: 8, Other: 4 },
    sectorBreakdown: { Residential: 48, Commercial: 20, Tourism: 12, Government: 12, Other: 8 },
    states: [
      { name: "Banjul", population: 400_000, households: 90_000, avgKwhPerHousehold: 18, sources: { Oil: 55, Solar: 22, Wind: 10, Other: 13 }, majorConsumers: ["Tourism Hotels", "Government Buildings", "Markets", "Ports"] },
    ],
  },
  {
    name: "Guinea-Bissau", code: "GW", population: 2_100_000, totalDemandGwhMonth: 12, avgKwhPerHousehold: 6,
    sources: { Oil: 70, Solar: 12, Hydro: 5, Biomass: 8, Other: 5 },
    sectorBreakdown: { Residential: 50, Commercial: 18, Government: 15, Agriculture: 10, Other: 7 },
    states: [
      { name: "Bissau", population: 500_000, households: 110_000, avgKwhPerHousehold: 8, sources: { Oil: 68, Solar: 15, Biomass: 8, Other: 9 }, majorConsumers: ["Government Buildings", "Cashew Processing", "Markets", "Hospitals"] },
    ],
  },

  // ===== CARIBBEAN / PACIFIC ISLAND NATIONS =====
  {
    name: "Bahamas", code: "BS", population: 410_000, totalDemandGwhMonth: 170, avgKwhPerHousehold: 350,
    sources: { Oil: 70, Solar: 12, Wind: 8, Gas: 5, Other: 5 },
    sectorBreakdown: { Tourism: 35, Residential: 30, Commercial: 22, Government: 8, Other: 5 },
    states: [
      { name: "Nassau", population: 280_000, households: 80_000, avgKwhPerHousehold: 370, sources: { Oil: 68, Solar: 15, Wind: 8, Other: 9 }, majorConsumers: ["Tourism Resorts", "Cruise Ports", "AC Systems", "Airports", "Government"] },
    ],
  },
  {
    name: "Barbados", code: "BB", population: 290_000, totalDemandGwhMonth: 80, avgKwhPerHousehold: 250,
    sources: { Oil: 55, Solar: 20, Wind: 10, Gas: 8, Biomass: 4, Other: 3 },
    sectorBreakdown: { Residential: 30, Tourism: 28, Commercial: 22, Industrial: 12, Other: 8 },
    states: [
      { name: "Bridgetown", population: 110_000, households: 35_000, avgKwhPerHousehold: 260, sources: { Oil: 52, Solar: 22, Wind: 12, Gas: 8, Other: 6 }, majorConsumers: ["Tourism Hotels", "Rum Distilleries", "Government Buildings", "Ports"] },
    ],
  },
  {
    name: "Suriname", code: "SR", population: 620_000, totalDemandGwhMonth: 150, avgKwhPerHousehold: 200,
    sources: { Hydro: 45, Oil: 30, Gas: 10, Solar: 8, Biomass: 5, Other: 2 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 18, Mining: 12, Other: 5 },
    states: [
      { name: "Paramaribo", population: 250_000, households: 70_000, avgKwhPerHousehold: 220, sources: { Hydro: 42, Oil: 30, Gas: 10, Solar: 10, Other: 8 }, majorConsumers: ["Bauxite/Alumina Industry", "Government Buildings", "Ports"] },
    ],
  },
  {
    name: "Guyana", code: "GY", population: 800_000, totalDemandGwhMonth: 100, avgKwhPerHousehold: 100,
    sources: { Oil: 45, Hydro: 15, Solar: 15, Gas: 10, Biomass: 10, Other: 5 },
    sectorBreakdown: { Residential: 35, Industrial: 25, Commercial: 20, Mining: 12, Other: 8 },
    states: [
      { name: "Georgetown", population: 240_000, households: 60_000, avgKwhPerHousehold: 120, sources: { Oil: 42, Solar: 18, Hydro: 15, Gas: 10, Other: 15 }, majorConsumers: ["Sugar Processing", "Government Buildings", "Ports", "Mining Companies"] },
    ],
  },
  {
    name: "Belize", code: "BZ", population: 430_000, totalDemandGwhMonth: 50, avgKwhPerHousehold: 100,
    sources: { Hydro: 30, Import: 25, Biomass: 20, Solar: 10, Oil: 8, Wind: 4, Other: 3 },
    sectorBreakdown: { Residential: 35, Tourism: 25, Commercial: 20, Agriculture: 12, Other: 8 },
    states: [
      { name: "Belize City", population: 60_000, households: 18_000, avgKwhPerHousehold: 110, sources: { Import: 28, Hydro: 25, Biomass: 20, Solar: 12, Oil: 8, Other: 7 }, majorConsumers: ["Tourism Hotels", "Ports", "Government Buildings", "Agriculture"] },
    ],
  },
  {
    name: "Samoa", code: "WS", population: 220_000, totalDemandGwhMonth: 12, avgKwhPerHousehold: 45,
    sources: { Hydro: 30, Oil: 30, Solar: 20, Biomass: 10, Wind: 5, Other: 5 },
    sectorBreakdown: { Residential: 40, Commercial: 25, Government: 18, Agriculture: 10, Other: 7 },
    states: [
      { name: "Apia", population: 38_000, households: 9_000, avgKwhPerHousehold: 50, sources: { Hydro: 28, Oil: 28, Solar: 22, Biomass: 10, Other: 12 }, majorConsumers: ["Government Buildings", "Hotels", "Hospitals", "Markets"] },
    ],
  },
  {
    name: "Tonga", code: "TO", population: 107_000, totalDemandGwhMonth: 5, avgKwhPerHousehold: 40,
    sources: { Oil: 65, Solar: 20, Wind: 8, Other: 7 },
    sectorBreakdown: { Residential: 42, Commercial: 25, Government: 18, Agriculture: 8, Other: 7 },
    states: [
      { name: "Nuku'alofa", population: 25_000, households: 6_000, avgKwhPerHousehold: 45, sources: { Oil: 62, Solar: 22, Wind: 8, Other: 8 }, majorConsumers: ["Government Buildings", "Hotels", "Hospitals"] },
    ],
  },
  {
    name: "Vanuatu", code: "VU", population: 320_000, totalDemandGwhMonth: 8, avgKwhPerHousehold: 25,
    sources: { Oil: 45, Hydro: 15, Solar: 15, Wind: 10, Biomass: 10, Geothermal: 3, Other: 2 },
    sectorBreakdown: { Residential: 38, Tourism: 22, Commercial: 18, Government: 12, Other: 10 },
    states: [
      { name: "Port Vila", population: 52_000, households: 12_000, avgKwhPerHousehold: 35, sources: { Oil: 42, Solar: 18, Wind: 12, Hydro: 12, Other: 16 }, majorConsumers: ["Tourism Hotels", "Government Buildings", "Ports", "Hospitals"] },
    ],
  },
  {
    name: "Solomon Islands", code: "SB", population: 720_000, totalDemandGwhMonth: 10, avgKwhPerHousehold: 12,
    sources: { Oil: 60, Solar: 15, Hydro: 10, Biomass: 10, Other: 5 },
    sectorBreakdown: { Residential: 40, Commercial: 22, Government: 18, Mining: 12, Other: 8 },
    states: [
      { name: "Honiara", population: 90_000, households: 20_000, avgKwhPerHousehold: 20, sources: { Oil: 58, Solar: 18, Hydro: 10, Other: 14 }, majorConsumers: ["Government Buildings", "Markets", "Hospitals", "Gold Mining"] },
    ],
  },
  {
    name: "Kiribati", code: "KI", population: 130_000, totalDemandGwhMonth: 3, avgKwhPerHousehold: 20,
    sources: { Oil: 70, Solar: 20, Wind: 5, Other: 5 },
    sectorBreakdown: { Residential: 45, Government: 22, Commercial: 18, Other: 15 },
    states: [
      { name: "Tarawa", population: 65_000, households: 14_000, avgKwhPerHousehold: 22, sources: { Oil: 68, Solar: 22, Wind: 5, Other: 5 }, majorConsumers: ["Government Buildings", "Desalination", "Hospitals"] },
    ],
  },
  {
    name: "Micronesia", code: "FM", population: 115_000, totalDemandGwhMonth: 5, avgKwhPerHousehold: 30,
    sources: { Oil: 65, Solar: 18, Hydro: 8, Wind: 5, Other: 4 },
    sectorBreakdown: { Residential: 42, Government: 25, Commercial: 18, Other: 15 },
    states: [
      { name: "Palikir", population: 7_000, households: 1_500, avgKwhPerHousehold: 35, sources: { Oil: 62, Solar: 20, Hydro: 8, Other: 10 }, majorConsumers: ["Government Buildings", "Schools", "Hospitals"] },
    ],
  },
  {
    name: "Marshall Islands", code: "MH", population: 42_000, totalDemandGwhMonth: 2, avgKwhPerHousehold: 35,
    sources: { Oil: 70, Solar: 20, Wind: 5, Other: 5 },
    sectorBreakdown: { Government: 30, Residential: 35, Commercial: 18, Military: 12, Other: 5 },
    states: [
      { name: "Majuro", population: 28_000, households: 6_000, avgKwhPerHousehold: 38, sources: { Oil: 68, Solar: 22, Wind: 5, Other: 5 }, majorConsumers: ["US Military Base", "Government Buildings", "Hospitals"] },
    ],
  },
  {
    name: "Palau", code: "PW", population: 18_000, totalDemandGwhMonth: 3, avgKwhPerHousehold: 100,
    sources: { Oil: 60, Solar: 25, Wind: 5, Other: 10 },
    sectorBreakdown: { Tourism: 35, Residential: 28, Government: 22, Other: 15 },
    states: [
      { name: "Ngerulmud", population: 300, households: 100, avgKwhPerHousehold: 110, sources: { Oil: 58, Solar: 28, Wind: 5, Other: 9 }, majorConsumers: ["Tourism Resorts", "Government Buildings", "Airports"] },
    ],
  },
  {
    name: "Nauru", code: "NR", population: 12_000, totalDemandGwhMonth: 1, avgKwhPerHousehold: 60,
    sources: { Oil: 75, Solar: 18, Other: 7 },
    sectorBreakdown: { Residential: 35, Government: 30, Mining: 20, Other: 15 },
    states: [
      { name: "Yaren", population: 1_200, households: 300, avgKwhPerHousehold: 65, sources: { Oil: 72, Solar: 20, Other: 8 }, majorConsumers: ["Phosphate Processing", "Government Buildings", "Hospitals"] },
    ],
  },
  {
    name: "Tuvalu", code: "TV", population: 11_000, totalDemandGwhMonth: 0.5, avgKwhPerHousehold: 30,
    sources: { Oil: 55, Solar: 35, Wind: 5, Other: 5 },
    sectorBreakdown: { Residential: 45, Government: 30, Commercial: 15, Other: 10 },
    states: [
      { name: "Funafuti", population: 7_000, households: 1_500, avgKwhPerHousehold: 32, sources: { Oil: 52, Solar: 38, Wind: 5, Other: 5 }, majorConsumers: ["Government Buildings", "Schools", "Hospitals"] },
    ],
  },

  // ===== ADDITIONAL COUNTRIES =====
  {
    name: "Andorra", code: "AD", population: 80_000, totalDemandGwhMonth: 45, avgKwhPerHousehold: 400,
    sources: { Import: 80, Hydro: 15, Solar: 3, Other: 2 },
    sectorBreakdown: { Tourism: 35, Residential: 28, Commercial: 25, Government: 7, Other: 5 },
    states: [
      { name: "Andorra la Vella", population: 22_000, households: 9_000, avgKwhPerHousehold: 420, sources: { Import: 78, Hydro: 15, Solar: 4, Other: 3 }, majorConsumers: ["Ski Resorts", "Shopping Centers", "Hotels", "Government Buildings"] },
    ],
  },
  {
    name: "Monaco", code: "MC", population: 40_000, totalDemandGwhMonth: 50, avgKwhPerHousehold: 600,
    sources: { Import: 90, Solar: 5, Other: 5 },
    sectorBreakdown: { Commercial: 40, Residential: 25, Tourism: 22, Government: 8, Other: 5 },
    states: [
      { name: "Monaco", population: 40_000, households: 18_000, avgKwhPerHousehold: 600, sources: { Import: 90, Solar: 5, Other: 5 }, majorConsumers: ["Casinos", "Luxury Hotels", "Yachts", "F1 Circuit", "Government Buildings"] },
    ],
  },
  {
    name: "San Marino", code: "SM", population: 34_000, totalDemandGwhMonth: 25, avgKwhPerHousehold: 380,
    sources: { Import: 85, Solar: 8, Wind: 3, Other: 4 },
    sectorBreakdown: { Residential: 30, Commercial: 28, Industrial: 22, Tourism: 12, Other: 8 },
    states: [
      { name: "San Marino City", population: 4_500, households: 1_800, avgKwhPerHousehold: 400, sources: { Import: 85, Solar: 8, Wind: 3, Other: 4 }, majorConsumers: ["Tourism", "Government Buildings", "Shopping Centers"] },
    ],
  },
  {
    name: "Liechtenstein", code: "LI", population: 39_000, totalDemandGwhMonth: 35, avgKwhPerHousehold: 500,
    sources: { Import: 75, Hydro: 15, Solar: 5, Other: 5 },
    sectorBreakdown: { Industrial: 35, Residential: 28, Commercial: 25, Government: 7, Other: 5 },
    states: [
      { name: "Vaduz", population: 5_800, households: 2_500, avgKwhPerHousehold: 520, sources: { Import: 75, Hydro: 15, Solar: 5, Other: 5 }, majorConsumers: ["Manufacturing", "Banking Sector", "Government Buildings"] },
    ],
  },
  {
    name: "Vatican City", code: "VA", population: 800, totalDemandGwhMonth: 0.8, avgKwhPerHousehold: 0,
    sources: { Solar: 20, Import: 80 },
    sectorBreakdown: { Government: 60, Commercial: 25, Other: 15 },
    states: [
      { name: "Vatican City", population: 800, households: 200, avgKwhPerHousehold: 300, sources: { Import: 80, Solar: 20 }, majorConsumers: ["St. Peter's Basilica", "Vatican Museums", "Apostolic Palace", "Radio Vatican"] },
    ],
  },
  {
    name: "Nicaragua", code: "NI", population: 7_000_000, totalDemandGwhMonth: 400, avgKwhPerHousehold: 55,
    sources: { Geothermal: 15, Wind: 15, Hydro: 10, Solar: 12, Oil: 28, Biomass: 12, Gas: 5, Other: 3 },
    sectorBreakdown: { Residential: 38, Industrial: 22, Commercial: 22, Agriculture: 12, Other: 6 },
    states: [
      { name: "Managua", population: 1_500_000, households: 350_000, avgKwhPerHousehold: 70, sources: { Oil: 25, Geothermal: 18, Wind: 15, Solar: 15, Hydro: 10, Biomass: 10, Other: 7 }, majorConsumers: ["Government Buildings", "Malls", "Hospitals", "Factories"] },
    ],
  },

  // ===== MISSING EUROPE =====
  { name: "Iceland", code: "IS", population: 380_000, totalDemandGwhMonth: 1_600, avgKwhPerHousehold: 1200, sources: { Hydro: 70, Geothermal: 25, Wind: 3, Other: 2 }, sectorBreakdown: { Industrial: 75, Residential: 12, Commercial: 10, Other: 3 }, states: [{ name: "Reykjavik", population: 140_000, households: 55_000, avgKwhPerHousehold: 900, sources: { Hydro: 65, Geothermal: 30, Wind: 3, Other: 2 }, majorConsumers: ["Aluminium Smelters", "Data Centers", "Geothermal Plants", "Government Buildings"] }] },
  { name: "Luxembourg", code: "LU", population: 660_000, totalDemandGwhMonth: 550, avgKwhPerHousehold: 450, sources: { Import: 75, Wind: 10, Solar: 5, Gas: 5, Hydro: 3, Other: 2 }, sectorBreakdown: { Industrial: 30, Residential: 25, Commercial: 30, Transport: 10, Other: 5 }, states: [{ name: "Luxembourg City", population: 130_000, households: 55_000, avgKwhPerHousehold: 460, sources: { Import: 75, Wind: 10, Solar: 5, Gas: 5, Other: 5 }, majorConsumers: ["Banking Sector", "EU Institutions", "Steel Plants", "Data Centers"] }] },
  { name: "Malta", code: "MT", population: 530_000, totalDemandGwhMonth: 220, avgKwhPerHousehold: 300, sources: { Gas: 65, Import: 15, Solar: 12, Oil: 5, Other: 3 }, sectorBreakdown: { Residential: 30, Commercial: 28, Industrial: 20, Tourism: 15, Other: 7 }, states: [{ name: "Valletta Region", population: 400_000, households: 160_000, avgKwhPerHousehold: 310, sources: { Gas: 65, Import: 15, Solar: 12, Oil: 5, Other: 3 }, majorConsumers: ["Tourism Hotels", "Desalination", "Government Buildings", "Ports"] }] },
  { name: "Cyprus", code: "CY", population: 1_250_000, totalDemandGwhMonth: 450, avgKwhPerHousehold: 350, sources: { Oil: 45, Solar: 20, Gas: 15, Wind: 10, Import: 5, Other: 5 }, sectorBreakdown: { Residential: 32, Commercial: 28, Industrial: 20, Tourism: 12, Other: 8 }, states: [{ name: "Nicosia", population: 350_000, households: 120_000, avgKwhPerHousehold: 360, sources: { Oil: 42, Solar: 22, Gas: 15, Wind: 10, Other: 11 }, majorConsumers: ["AC Systems", "Tourism", "Government Buildings", "Desalination"] }] },
  { name: "Estonia", code: "EE", population: 1_350_000, totalDemandGwhMonth: 800, avgKwhPerHousehold: 320, sources: { Wind: 25, Oil_Shale: 30, Biomass: 15, Solar: 8, Gas: 10, Import: 7, Other: 5 }, sectorBreakdown: { Industrial: 32, Residential: 28, Commercial: 25, Transport: 10, Other: 5 }, states: [{ name: "Tallinn", population: 450_000, households: 180_000, avgKwhPerHousehold: 330, sources: { Wind: 25, Oil_Shale: 25, Gas: 15, Solar: 10, Import: 12, Biomass: 8, Other: 5 }, majorConsumers: ["Data Centers", "IT Sector", "Ports", "Government Buildings"] }] },
  { name: "Latvia", code: "LV", population: 1_850_000, totalDemandGwhMonth: 650, avgKwhPerHousehold: 250, sources: { Hydro: 30, Gas: 25, Wind: 18, Biomass: 12, Solar: 5, Import: 5, Other: 5 }, sectorBreakdown: { Industrial: 28, Residential: 30, Commercial: 25, Transport: 10, Other: 7 }, states: [{ name: "Riga", population: 620_000, households: 260_000, avgKwhPerHousehold: 260, sources: { Gas: 28, Hydro: 25, Wind: 18, Biomass: 12, Solar: 5, Import: 7, Other: 5 }, majorConsumers: ["Ports", "Manufacturing", "Government Buildings", "Hospitals"] }] },
  { name: "Albania", code: "AL", population: 2_800_000, totalDemandGwhMonth: 600, avgKwhPerHousehold: 180, sources: { Hydro: 85, Solar: 5, Import: 5, Wind: 3, Other: 2 }, sectorBreakdown: { Residential: 40, Industrial: 22, Commercial: 20, Agriculture: 10, Other: 8 }, states: [{ name: "Tirana", population: 900_000, households: 250_000, avgKwhPerHousehold: 200, sources: { Hydro: 82, Solar: 6, Import: 5, Wind: 4, Other: 3 }, majorConsumers: ["Government Buildings", "Shopping Centers", "Hospitals", "Construction"] }] },
  { name: "North Macedonia", code: "MK", population: 2_100_000, totalDemandGwhMonth: 650, avgKwhPerHousehold: 250, sources: { Coal: 40, Hydro: 20, Gas: 12, Import: 10, Solar: 8, Wind: 5, Other: 5 }, sectorBreakdown: { Residential: 35, Industrial: 30, Commercial: 20, Transport: 8, Other: 7 }, states: [{ name: "Skopje", population: 600_000, households: 180_000, avgKwhPerHousehold: 270, sources: { Coal: 38, Hydro: 18, Gas: 15, Import: 10, Solar: 10, Other: 9 }, majorConsumers: ["Steel Plants", "Government Buildings", "Shopping Centers"] }] },
  { name: "Montenegro", code: "ME", population: 620_000, totalDemandGwhMonth: 300, avgKwhPerHousehold: 350, sources: { Hydro: 55, Coal: 20, Import: 10, Solar: 5, Wind: 5, Other: 5 }, sectorBreakdown: { Residential: 38, Industrial: 22, Commercial: 22, Tourism: 12, Other: 6 }, states: [{ name: "Podgorica", population: 200_000, households: 65_000, avgKwhPerHousehold: 360, sources: { Hydro: 52, Coal: 20, Import: 10, Solar: 8, Wind: 5, Other: 5 }, majorConsumers: ["Aluminium Smelter", "Tourism", "Government Buildings"] }] },
  { name: "Bosnia and Herzegovina", code: "BA", population: 3_200_000, totalDemandGwhMonth: 1_100, avgKwhPerHousehold: 280, sources: { Coal: 45, Hydro: 35, Wind: 5, Solar: 5, Import: 5, Other: 5 }, sectorBreakdown: { Industrial: 30, Residential: 35, Commercial: 20, Transport: 8, Other: 7 }, states: [{ name: "Sarajevo", population: 280_000, households: 100_000, avgKwhPerHousehold: 300, sources: { Coal: 40, Hydro: 35, Wind: 5, Solar: 8, Import: 7, Other: 5 }, majorConsumers: ["Government Buildings", "Tram System", "Hospitals", "Shopping Centers"] }] },
  { name: "Moldova", code: "MD", population: 2_600_000, totalDemandGwhMonth: 400, avgKwhPerHousehold: 120, sources: { Import: 65, Gas: 15, Wind: 5, Solar: 5, Biomass: 5, Other: 5 }, sectorBreakdown: { Residential: 38, Industrial: 22, Commercial: 20, Agriculture: 12, Other: 8 }, states: [{ name: "Chișinău", population: 700_000, households: 250_000, avgKwhPerHousehold: 140, sources: { Import: 60, Gas: 18, Solar: 8, Wind: 5, Other: 9 }, majorConsumers: ["Government Buildings", "Wine Industry", "Hospitals", "Markets"] }] },
  { name: "Belarus", code: "BY", population: 9_200_000, totalDemandGwhMonth: 3_500, avgKwhPerHousehold: 280, sources: { Gas: 55, Nuclear: 25, Import: 5, Hydro: 3, Wind: 3, Solar: 3, Other: 6 }, sectorBreakdown: { Industrial: 38, Residential: 28, Commercial: 18, Agriculture: 10, Other: 6 }, states: [{ name: "Minsk", population: 2_000_000, households: 800_000, avgKwhPerHousehold: 300, sources: { Gas: 50, Nuclear: 28, Import: 5, Solar: 5, Wind: 5, Other: 7 }, majorConsumers: ["Tractor Factories", "Government Buildings", "Metro System", "IT Sector"] }] },

  // ===== MISSING AMERICAS =====
  { name: "Ecuador", code: "EC", population: 18_000_000, totalDemandGwhMonth: 2_500, avgKwhPerHousehold: 120, sources: { Hydro: 75, Gas: 8, Oil: 8, Solar: 4, Wind: 3, Other: 2 }, sectorBreakdown: { Residential: 32, Industrial: 28, Commercial: 22, Agriculture: 10, Other: 8 }, states: [{ name: "Quito", population: 2_800_000, households: 750_000, avgKwhPerHousehold: 140, sources: { Hydro: 78, Gas: 8, Solar: 5, Wind: 4, Other: 5 }, majorConsumers: ["Government Buildings", "Metro System", "Hospitals", "Tourism"] }] },
  { name: "Bolivia", code: "BO", population: 12_200_000, totalDemandGwhMonth: 900, avgKwhPerHousehold: 70, sources: { Gas: 55, Hydro: 25, Solar: 8, Wind: 5, Biomass: 4, Other: 3 }, sectorBreakdown: { Industrial: 30, Residential: 30, Commercial: 18, Mining: 15, Other: 7 }, states: [{ name: "La Paz", population: 900_000, households: 250_000, avgKwhPerHousehold: 90, sources: { Hydro: 35, Gas: 40, Solar: 10, Wind: 8, Other: 7 }, majorConsumers: ["Government Buildings", "Mining HQs", "Teleférico Cable Cars", "Markets"] }] },
  { name: "Paraguay", code: "PY", population: 7_400_000, totalDemandGwhMonth: 1_500, avgKwhPerHousehold: 150, sources: { Hydro: 99, Other: 1 }, sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 20, Agriculture: 10, Other: 5 }, states: [{ name: "Asunción", population: 550_000, households: 150_000, avgKwhPerHousehold: 180, sources: { Hydro: 99, Other: 1 }, majorConsumers: ["Itaipu Dam Export", "Government Buildings", "Shopping Centers", "Hospitals"] }] },
  { name: "Uruguay", code: "UY", population: 3_500_000, totalDemandGwhMonth: 1_000, avgKwhPerHousehold: 250, sources: { Hydro: 35, Wind: 40, Solar: 10, Biomass: 10, Gas: 3, Other: 2 }, sectorBreakdown: { Industrial: 28, Residential: 35, Commercial: 22, Agriculture: 10, Other: 5 }, states: [{ name: "Montevideo", population: 1_400_000, households: 500_000, avgKwhPerHousehold: 270, sources: { Wind: 40, Hydro: 30, Solar: 12, Biomass: 10, Gas: 5, Other: 3 }, majorConsumers: ["Ports", "Government Buildings", "Data Centers", "Hospitals"] }] },
  { name: "Honduras", code: "HN", population: 10_400_000, totalDemandGwhMonth: 800, avgKwhPerHousehold: 70, sources: { Hydro: 35, Solar: 18, Oil: 15, Biomass: 12, Wind: 10, Coal: 5, Other: 5 }, sectorBreakdown: { Residential: 38, Industrial: 25, Commercial: 22, Agriculture: 8, Other: 7 }, states: [{ name: "Tegucigalpa", population: 1_200_000, households: 280_000, avgKwhPerHousehold: 90, sources: { Hydro: 32, Solar: 18, Oil: 18, Wind: 12, Biomass: 10, Other: 10 }, majorConsumers: ["Government Buildings", "Shopping Centers", "Maquilas", "Hospitals"] }] },
  { name: "El Salvador", code: "SV", population: 6_300_000, totalDemandGwhMonth: 550, avgKwhPerHousehold: 80, sources: { Geothermal: 25, Hydro: 22, Gas: 18, Solar: 15, Biomass: 8, Oil: 7, Other: 5 }, sectorBreakdown: { Residential: 35, Industrial: 28, Commercial: 25, Agriculture: 7, Other: 5 }, states: [{ name: "San Salvador", population: 1_800_000, households: 450_000, avgKwhPerHousehold: 95, sources: { Geothermal: 25, Hydro: 20, Gas: 18, Solar: 15, Biomass: 8, Oil: 8, Other: 6 }, majorConsumers: ["Textile Factories", "Government Buildings", "Shopping Malls", "Bitcoin Mining"] }] },
  { name: "Costa Rica", code: "CR", population: 5_200_000, totalDemandGwhMonth: 950, avgKwhPerHousehold: 200, sources: { Hydro: 65, Wind: 15, Geothermal: 10, Solar: 5, Biomass: 3, Other: 2 }, sectorBreakdown: { Industrial: 28, Residential: 30, Commercial: 25, Agriculture: 10, Other: 7 }, states: [{ name: "San José", population: 350_000, households: 120_000, avgKwhPerHousehold: 220, sources: { Hydro: 60, Wind: 15, Geothermal: 12, Solar: 5, Biomass: 5, Other: 3 }, majorConsumers: ["Intel Factory", "Government Buildings", "Hospitals", "Tourism Hotels"] }] },
  { name: "Panama", code: "PA", population: 4_400_000, totalDemandGwhMonth: 950, avgKwhPerHousehold: 180, sources: { Hydro: 55, Gas: 15, Solar: 10, Wind: 10, Oil: 5, Other: 5 }, sectorBreakdown: { Industrial: 22, Residential: 28, Commercial: 30, Transport: 12, Other: 8 }, states: [{ name: "Panama City", population: 1_000_000, households: 300_000, avgKwhPerHousehold: 220, sources: { Hydro: 50, Gas: 18, Solar: 12, Wind: 10, Oil: 5, Other: 5 }, majorConsumers: ["Panama Canal", "Banking District", "Metro System", "Ports", "Airports"] }] },
  { name: "Haiti", code: "HT", population: 11_700_000, totalDemandGwhMonth: 100, avgKwhPerHousehold: 10, sources: { Oil: 50, Hydro: 15, Solar: 15, Biomass: 10, Wind: 5, Other: 5 }, sectorBreakdown: { Residential: 48, Commercial: 20, Industrial: 12, Government: 12, Other: 8 }, states: [{ name: "Port-au-Prince", population: 2_800_000, households: 600_000, avgKwhPerHousehold: 15, sources: { Oil: 48, Solar: 18, Hydro: 12, Biomass: 10, Other: 12 }, majorConsumers: ["Government Buildings", "Hospitals", "Markets", "Factories"] }] },
  { name: "Dominican Republic", code: "DO", population: 11_200_000, totalDemandGwhMonth: 1_800, avgKwhPerHousehold: 150, sources: { Gas: 35, Oil: 15, Coal: 12, Wind: 15, Solar: 12, Hydro: 5, Biomass: 3, Other: 3 }, sectorBreakdown: { Residential: 35, Commercial: 28, Industrial: 22, Tourism: 10, Other: 5 }, states: [{ name: "Santo Domingo", population: 3_500_000, households: 900_000, avgKwhPerHousehold: 170, sources: { Gas: 38, Wind: 15, Solar: 12, Coal: 12, Oil: 10, Hydro: 5, Other: 8 }, majorConsumers: ["Tourism Resorts", "Free Trade Zones", "Metro System", "Government HQ"] }] },
  { name: "Jamaica", code: "JM", population: 2_800_000, totalDemandGwhMonth: 400, avgKwhPerHousehold: 120, sources: { Oil: 40, Gas: 20, Solar: 15, Wind: 12, Hydro: 5, Biomass: 5, Other: 3 }, sectorBreakdown: { Residential: 32, Commercial: 28, Industrial: 22, Tourism: 12, Other: 6 }, states: [{ name: "Kingston", population: 600_000, households: 180_000, avgKwhPerHousehold: 140, sources: { Oil: 38, Gas: 22, Solar: 15, Wind: 12, Hydro: 5, Other: 8 }, majorConsumers: ["Bauxite/Alumina Plants", "Tourism Hotels", "Government Buildings", "Ports"] }] },
  { name: "Trinidad and Tobago", code: "TT", population: 1_400_000, totalDemandGwhMonth: 800, avgKwhPerHousehold: 400, sources: { Gas: 95, Solar: 2, Wind: 1, Other: 2 }, sectorBreakdown: { Industrial: 55, Residential: 20, Commercial: 15, Government: 5, Other: 5 }, states: [{ name: "Port of Spain", population: 40_000, households: 15_000, avgKwhPerHousehold: 420, sources: { Gas: 95, Solar: 2, Other: 3 }, majorConsumers: ["LNG Plants", "Petrochemicals", "Government Buildings", "Ports"] }] },
  { name: "Cuba", code: "CU", population: 11_200_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 100, sources: { Oil: 45, Gas: 15, Solar: 12, Biomass: 10, Wind: 8, Hydro: 5, Other: 5 }, sectorBreakdown: { Residential: 40, Industrial: 22, Commercial: 18, Agriculture: 12, Other: 8 }, states: [{ name: "Havana", population: 2_100_000, households: 600_000, avgKwhPerHousehold: 120, sources: { Oil: 42, Gas: 18, Solar: 12, Biomass: 10, Wind: 8, Other: 10 }, majorConsumers: ["Government Buildings", "Tourism Hotels", "Hospitals", "Ports", "Factories"] }] },
  { name: "Guatemala", code: "GT", population: 18_000_000, totalDemandGwhMonth: 1_000, avgKwhPerHousehold: 60, sources: { Hydro: 30, Coal: 18, Oil: 15, Biomass: 12, Solar: 10, Wind: 8, Geothermal: 4, Other: 3 }, sectorBreakdown: { Residential: 35, Industrial: 28, Commercial: 22, Agriculture: 8, Other: 7 }, states: [{ name: "Guatemala City", population: 3_000_000, households: 700_000, avgKwhPerHousehold: 85, sources: { Hydro: 28, Coal: 18, Solar: 12, Oil: 12, Biomass: 10, Wind: 10, Other: 10 }, majorConsumers: ["Government Buildings", "Shopping Centers", "Factories", "Hospitals"] }] },

  // ===== MISSING AFRICA =====
  { name: "Angola", code: "AO", population: 36_000_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 30, sources: { Hydro: 55, Gas: 18, Oil: 12, Solar: 8, Wind: 4, Other: 3 }, sectorBreakdown: { Industrial: 32, Residential: 30, Commercial: 18, Mining: 12, Other: 8 }, states: [{ name: "Luanda", population: 9_000_000, households: 2_000_000, avgKwhPerHousehold: 45, sources: { Hydro: 50, Gas: 20, Oil: 12, Solar: 10, Other: 8 }, majorConsumers: ["Oil Industry", "Ports", "Government Buildings", "Hospitals"] }] },
  { name: "Mozambique", code: "MZ", population: 33_000_000, totalDemandGwhMonth: 1_400, avgKwhPerHousehold: 25, sources: { Hydro: 65, Gas: 15, Solar: 8, Coal: 5, Wind: 4, Other: 3 }, sectorBreakdown: { Industrial: 55, Residential: 20, Commercial: 12, Agriculture: 8, Other: 5 }, states: [{ name: "Maputo", population: 1_200_000, households: 300_000, avgKwhPerHousehold: 50, sources: { Hydro: 60, Gas: 18, Solar: 10, Coal: 5, Other: 7 }, majorConsumers: ["Aluminium Smelter (Mozal)", "Ports", "Government Buildings", "Hospitals"] }] },
  { name: "Zimbabwe", code: "ZW", population: 16_000_000, totalDemandGwhMonth: 800, avgKwhPerHousehold: 50, sources: { Hydro: 35, Coal: 35, Solar: 12, Import: 8, Wind: 5, Other: 5 }, sectorBreakdown: { Industrial: 30, Residential: 32, Mining: 18, Commercial: 12, Other: 8 }, states: [{ name: "Harare", population: 1_600_000, households: 400_000, avgKwhPerHousehold: 70, sources: { Hydro: 32, Coal: 32, Solar: 15, Import: 10, Other: 11 }, majorConsumers: ["Mining Companies", "Government Buildings", "Industry", "Hospitals"] }] },
  { name: "Zambia", code: "ZM", population: 20_000_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 55, sources: { Hydro: 80, Coal: 5, Solar: 8, Wind: 3, Other: 4 }, sectorBreakdown: { Mining: 50, Residential: 25, Commercial: 12, Industrial: 8, Other: 5 }, states: [{ name: "Lusaka", population: 3_500_000, households: 700_000, avgKwhPerHousehold: 70, sources: { Hydro: 78, Solar: 10, Coal: 5, Other: 7 }, majorConsumers: ["Copper Mines", "Government Buildings", "Shopping Centers", "Hospitals"] }] },
  { name: "Malawi", code: "MW", population: 20_000_000, totalDemandGwhMonth: 200, avgKwhPerHousehold: 10, sources: { Hydro: 65, Solar: 15, Biomass: 8, Coal: 5, Other: 7 }, sectorBreakdown: { Residential: 42, Industrial: 22, Commercial: 15, Agriculture: 12, Other: 9 }, states: [{ name: "Lilongwe", population: 1_200_000, households: 280_000, avgKwhPerHousehold: 18, sources: { Hydro: 60, Solar: 18, Biomass: 8, Other: 14 }, majorConsumers: ["Government Buildings", "Tobacco Processing", "Hospitals", "Tea Estates"] }] },
  { name: "Republic of the Congo", code: "CG", population: 6_000_000, totalDemandGwhMonth: 200, avgKwhPerHousehold: 25, sources: { Hydro: 60, Gas: 20, Oil: 10, Solar: 5, Other: 5 }, sectorBreakdown: { Industrial: 28, Residential: 35, Commercial: 18, Oil_Sector: 12, Other: 7 }, states: [{ name: "Brazzaville", population: 2_400_000, households: 500_000, avgKwhPerHousehold: 30, sources: { Hydro: 58, Gas: 22, Oil: 8, Solar: 6, Other: 6 }, majorConsumers: ["Government Buildings", "Oil Industry", "Markets", "Hospitals"] }] },
  { name: "Equatorial Guinea", code: "GQ", population: 1_700_000, totalDemandGwhMonth: 100, avgKwhPerHousehold: 50, sources: { Gas: 50, Hydro: 25, Oil: 15, Solar: 5, Other: 5 }, sectorBreakdown: { Industrial: 55, Residential: 22, Government: 12, Commercial: 8, Other: 3 }, states: [{ name: "Malabo", population: 300_000, households: 70_000, avgKwhPerHousehold: 60, sources: { Gas: 48, Hydro: 25, Oil: 15, Solar: 5, Other: 7 }, majorConsumers: ["LNG Plants", "Government Buildings", "Oil Facilities", "Hospitals"] }] },
  { name: "Gabon", code: "GA", population: 2_400_000, totalDemandGwhMonth: 250, avgKwhPerHousehold: 80, sources: { Hydro: 40, Gas: 30, Oil: 15, Solar: 5, Biomass: 5, Other: 5 }, sectorBreakdown: { Industrial: 40, Residential: 28, Commercial: 15, Mining: 10, Other: 7 }, states: [{ name: "Libreville", population: 850_000, households: 200_000, avgKwhPerHousehold: 100, sources: { Hydro: 38, Gas: 30, Oil: 15, Solar: 8, Other: 9 }, majorConsumers: ["Oil Industry", "Manganese Mining", "Government Buildings", "Ports"] }] },
  { name: "Central African Republic", code: "CF", population: 5_500_000, totalDemandGwhMonth: 30, avgKwhPerHousehold: 5, sources: { Hydro: 55, Oil: 20, Solar: 10, Biomass: 10, Other: 5 }, sectorBreakdown: { Residential: 48, Government: 20, Commercial: 12, Industrial: 10, Other: 10 }, states: [{ name: "Bangui", population: 900_000, households: 180_000, avgKwhPerHousehold: 8, sources: { Hydro: 52, Oil: 22, Solar: 12, Biomass: 8, Other: 6 }, majorConsumers: ["Government Buildings", "Hospitals", "Markets", "Diamond Trade"] }] },
  { name: "South Sudan", code: "SS", population: 11_500_000, totalDemandGwhMonth: 50, avgKwhPerHousehold: 5, sources: { Oil: 50, Solar: 20, Hydro: 10, Biomass: 12, Other: 8 }, sectorBreakdown: { Residential: 45, Government: 22, Oil_Sector: 15, Commercial: 10, Other: 8 }, states: [{ name: "Juba", population: 500_000, households: 100_000, avgKwhPerHousehold: 10, sources: { Oil: 48, Solar: 25, Hydro: 8, Biomass: 10, Other: 9 }, majorConsumers: ["Government Buildings", "Oil Facilities", "UN Compounds", "Hospitals"] }] },
  { name: "Somalia", code: "SO", population: 18_000_000, totalDemandGwhMonth: 80, avgKwhPerHousehold: 5, sources: { Oil: 55, Solar: 20, Wind: 10, Biomass: 8, Other: 7 }, sectorBreakdown: { Residential: 50, Commercial: 18, Government: 12, Telecom: 10, Other: 10 }, states: [{ name: "Mogadishu", population: 2_500_000, households: 400_000, avgKwhPerHousehold: 10, sources: { Oil: 50, Solar: 25, Wind: 10, Other: 15 }, majorConsumers: ["Private Generators", "Telecom Towers", "Government Buildings", "Markets"] }] },
  { name: "Djibouti", code: "DJ", population: 1_100_000, totalDemandGwhMonth: 50, avgKwhPerHousehold: 40, sources: { Oil: 40, Geothermal: 15, Solar: 15, Wind: 10, Import: 15, Other: 5 }, sectorBreakdown: { Residential: 35, Military: 25, Commercial: 20, Government: 12, Other: 8 }, states: [{ name: "Djibouti City", population: 600_000, households: 130_000, avgKwhPerHousehold: 45, sources: { Oil: 38, Import: 18, Geothermal: 15, Solar: 15, Wind: 8, Other: 6 }, majorConsumers: ["Military Bases (US, France)", "Ports", "Government Buildings", "Desalination"] }] },
  { name: "Comoros", code: "KM", population: 920_000, totalDemandGwhMonth: 8, avgKwhPerHousehold: 8, sources: { Oil: 60, Solar: 18, Hydro: 8, Wind: 5, Biomass: 5, Other: 4 }, sectorBreakdown: { Residential: 48, Commercial: 20, Government: 15, Agriculture: 10, Other: 7 }, states: [{ name: "Moroni", population: 55_000, households: 12_000, avgKwhPerHousehold: 12, sources: { Oil: 58, Solar: 20, Hydro: 8, Other: 14 }, majorConsumers: ["Government Buildings", "Hotels", "Markets", "Hospitals"] }] },
  { name: "Eswatini", code: "SZ", population: 1_200_000, totalDemandGwhMonth: 150, avgKwhPerHousehold: 90, sources: { Import: 60, Hydro: 18, Solar: 8, Biomass: 8, Coal: 3, Other: 3 }, sectorBreakdown: { Industrial: 35, Residential: 28, Commercial: 18, Agriculture: 12, Other: 7 }, states: [{ name: "Mbabane", population: 80_000, households: 22_000, avgKwhPerHousehold: 100, sources: { Import: 58, Hydro: 18, Solar: 10, Biomass: 8, Other: 6 }, majorConsumers: ["Sugar Mills", "Government Buildings", "Pulp Mills", "Hospitals"] }] },
  { name: "Lesotho", code: "LS", population: 2_200_000, totalDemandGwhMonth: 80, avgKwhPerHousehold: 30, sources: { Hydro: 45, Import: 35, Solar: 10, Wind: 5, Other: 5 }, sectorBreakdown: { Residential: 42, Industrial: 20, Commercial: 15, Government: 15, Other: 8 }, states: [{ name: "Maseru", population: 330_000, households: 80_000, avgKwhPerHousehold: 40, sources: { Import: 38, Hydro: 38, Solar: 12, Wind: 5, Other: 7 }, majorConsumers: ["Textile Factories", "Government Buildings", "Hospitals", "Water Projects"] }] },
  { name: "Sierra Leone", code: "SL", population: 8_600_000, totalDemandGwhMonth: 50, avgKwhPerHousehold: 5, sources: { Hydro: 35, Oil: 30, Solar: 15, Biomass: 12, Other: 8 }, sectorBreakdown: { Residential: 48, Mining: 18, Commercial: 15, Government: 12, Other: 7 }, states: [{ name: "Freetown", population: 1_200_000, households: 250_000, avgKwhPerHousehold: 10, sources: { Hydro: 32, Oil: 30, Solar: 18, Biomass: 10, Other: 10 }, majorConsumers: ["Mining Companies", "Government Buildings", "Markets", "Hospitals"] }] },
  { name: "Liberia", code: "LR", population: 5_300_000, totalDemandGwhMonth: 40, avgKwhPerHousehold: 6, sources: { Hydro: 30, Oil: 35, Solar: 15, Biomass: 12, Other: 8 }, sectorBreakdown: { Residential: 45, Mining: 22, Commercial: 15, Government: 10, Other: 8 }, states: [{ name: "Monrovia", population: 1_600_000, households: 320_000, avgKwhPerHousehold: 10, sources: { Hydro: 28, Oil: 35, Solar: 18, Biomass: 10, Other: 9 }, majorConsumers: ["Iron Ore Mines", "Government Buildings", "Rubber Plantations", "Ports"] }] },
  { name: "Togo", code: "TG", population: 8_800_000, totalDemandGwhMonth: 120, avgKwhPerHousehold: 12, sources: { Gas: 30, Import: 25, Hydro: 15, Solar: 12, Oil: 8, Biomass: 5, Other: 5 }, sectorBreakdown: { Residential: 42, Industrial: 22, Commercial: 18, Agriculture: 10, Other: 8 }, states: [{ name: "Lomé", population: 2_000_000, households: 400_000, avgKwhPerHousehold: 18, sources: { Gas: 28, Import: 25, Hydro: 12, Solar: 15, Oil: 8, Other: 12 }, majorConsumers: ["Ports", "Phosphate Mining", "Government Buildings", "Markets"] }] },
  { name: "Benin", code: "BJ", population: 13_000_000, totalDemandGwhMonth: 150, avgKwhPerHousehold: 10, sources: { Import: 55, Gas: 15, Solar: 12, Oil: 8, Hydro: 5, Biomass: 3, Other: 2 }, sectorBreakdown: { Residential: 42, Commercial: 22, Industrial: 18, Agriculture: 10, Other: 8 }, states: [{ name: "Cotonou", population: 800_000, households: 180_000, avgKwhPerHousehold: 18, sources: { Import: 50, Gas: 18, Solar: 12, Oil: 8, Hydro: 5, Other: 7 }, majorConsumers: ["Ports", "Cotton Processing", "Government Buildings", "Markets"] }] },
  { name: "Guinea", code: "GN", population: 14_000_000, totalDemandGwhMonth: 200, avgKwhPerHousehold: 12, sources: { Hydro: 50, Oil: 20, Solar: 12, Biomass: 8, Import: 5, Other: 5 }, sectorBreakdown: { Residential: 42, Mining: 28, Commercial: 12, Government: 10, Other: 8 }, states: [{ name: "Conakry", population: 2_000_000, households: 400_000, avgKwhPerHousehold: 20, sources: { Hydro: 48, Oil: 22, Solar: 12, Biomass: 8, Other: 10 }, majorConsumers: ["Bauxite Mines", "Government Buildings", "Markets", "Ports"] }] },
  { name: "Eritrea", code: "ER", population: 3_600_000, totalDemandGwhMonth: 40, avgKwhPerHousehold: 10, sources: { Oil: 55, Solar: 18, Wind: 10, Hydro: 5, Biomass: 8, Other: 4 }, sectorBreakdown: { Residential: 48, Mining: 18, Government: 15, Commercial: 12, Other: 7 }, states: [{ name: "Asmara", population: 900_000, households: 200_000, avgKwhPerHousehold: 15, sources: { Oil: 50, Solar: 20, Wind: 12, Hydro: 5, Other: 13 }, majorConsumers: ["Mining Companies", "Military", "Government Buildings", "Hospitals"] }] },
  { name: "Libya", code: "LY", population: 7_000_000, totalDemandGwhMonth: 3_000, avgKwhPerHousehold: 350, sources: { Gas: 50, Oil: 35, Solar: 8, Wind: 4, Other: 3 }, sectorBreakdown: { Residential: 40, Industrial: 22, Commercial: 18, Government: 12, Other: 8 }, states: [{ name: "Tripoli", population: 1_200_000, households: 300_000, avgKwhPerHousehold: 380, sources: { Gas: 48, Oil: 35, Solar: 10, Wind: 4, Other: 3 }, majorConsumers: ["Oil Refineries", "AC Systems", "Government Buildings", "Ports"] }] },

  // ===== MISSING ASIA / CAUCASUS =====
  { name: "Timor-Leste", code: "TL", population: 1_400_000, totalDemandGwhMonth: 30, avgKwhPerHousehold: 20, sources: { Oil: 55, Hydro: 15, Solar: 15, Biomass: 8, Other: 7 }, sectorBreakdown: { Residential: 45, Government: 22, Commercial: 15, Agriculture: 10, Other: 8 }, states: [{ name: "Dili", population: 280_000, households: 60_000, avgKwhPerHousehold: 30, sources: { Oil: 52, Solar: 18, Hydro: 12, Biomass: 8, Other: 10 }, majorConsumers: ["Government Buildings", "UN Facilities", "Hotels", "Hospitals"] }] },
  { name: "Georgia", code: "GE", population: 3_700_000, totalDemandGwhMonth: 1_100, avgKwhPerHousehold: 220, sources: { Hydro: 70, Gas: 12, Wind: 5, Solar: 5, Import: 5, Other: 3 }, sectorBreakdown: { Residential: 35, Industrial: 25, Commercial: 22, Agriculture: 10, Other: 8 }, states: [{ name: "Tbilisi", population: 1_200_000, households: 400_000, avgKwhPerHousehold: 250, sources: { Hydro: 65, Gas: 15, Wind: 5, Solar: 5, Import: 5, Other: 5 }, majorConsumers: ["Metro System", "Government Buildings", "Wine Industry", "Hospitals", "Tourism"] }] },
  { name: "Armenia", code: "AM", population: 2_800_000, totalDemandGwhMonth: 600, avgKwhPerHousehold: 200, sources: { Nuclear: 30, Hydro: 28, Gas: 25, Solar: 8, Wind: 4, Other: 5 }, sectorBreakdown: { Residential: 32, Industrial: 28, Commercial: 22, Agriculture: 10, Other: 8 }, states: [{ name: "Yerevan", population: 1_100_000, households: 350_000, avgKwhPerHousehold: 220, sources: { Nuclear: 32, Gas: 25, Hydro: 25, Solar: 8, Wind: 5, Other: 5 }, majorConsumers: ["Government Buildings", "IT Sector", "Metro System", "Mining HQs"] }] },
  { name: "Azerbaijan", code: "AZ", population: 10_200_000, totalDemandGwhMonth: 2_500, avgKwhPerHousehold: 200, sources: { Gas: 75, Hydro: 10, Solar: 6, Wind: 5, Other: 4 }, sectorBreakdown: { Industrial: 35, Residential: 28, Commercial: 18, Agriculture: 12, Other: 7 }, states: [{ name: "Baku", population: 2_300_000, households: 650_000, avgKwhPerHousehold: 250, sources: { Gas: 78, Solar: 8, Wind: 6, Hydro: 4, Other: 4 }, majorConsumers: ["Oil & Gas Industry", "Government Buildings", "Metro System", "Flame Towers"] }] },
  { name: "Syria", code: "SY", population: 22_000_000, totalDemandGwhMonth: 1_000, avgKwhPerHousehold: 60, sources: { Gas: 35, Oil: 25, Hydro: 15, Solar: 10, Import: 8, Other: 7 }, sectorBreakdown: { Residential: 42, Industrial: 20, Commercial: 15, Agriculture: 15, Other: 8 }, states: [{ name: "Damascus", population: 2_500_000, households: 500_000, avgKwhPerHousehold: 80, sources: { Gas: 38, Oil: 22, Solar: 12, Hydro: 10, Import: 10, Other: 8 }, majorConsumers: ["Government Buildings", "Hospitals", "Markets", "Water Pumping"] }] },
];

// ===== UTILITY FUNCTIONS =====

export const defaultSectorModel = {
  urban: { Residential: 45, Commercial: 30, Industrial: 10, Public: 12, Strategic: 3 },
  industrial: { Residential: 30, Commercial: 15, Industrial: 40, Public: 12, Strategic: 3 },
  remote: { Residential: 55, Commercial: 15, Industrial: 5, Public: 20, Strategic: 5 },
};

export function validateSectorTotal(model: Record<string, number>): boolean {
  const total = Object.values(model).reduce((a, b) => a + b, 0);
  if (total !== 100) {
    throw new Error(`Sector distribution must total 100%, got ${total}%`);
  }
  return true;
}

export function calculateAreaDemand(households: number, avgKwh: number, sectorType: keyof typeof defaultSectorModel = "urban") {
  const model = defaultSectorModel[sectorType];
  validateSectorTotal(model);

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

  const n = data.length;
  const values = data.map(d => d.value);
  const avg = values.reduce((a, b) => a + b, 0) / n;

  const half = Math.floor(n / 2);
  const firstHalf = values.slice(0, half).reduce((a, b) => a + b, 0) / half;
  const secondHalf = values.slice(half).reduce((a, b) => a + b, 0) / (n - half);
  const dailyTrend = (secondHalf - firstHalf) / (n / 2);

  const weekPattern = [1.0, 0.98, 0.97, 0.96, 0.99, 1.03, 1.07];

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

// ===== ADVANCED ANALYTICS =====

// Confidence Interval
export function calculateConfidenceRange(baseValue: number, uncertaintyPercent: number = 8) {
  const min = baseValue * (1 - uncertaintyPercent / 100);
  const max = baseValue * (1 + uncertaintyPercent / 100);
  return { min: Math.round(min * 100) / 100, max: Math.round(max * 100) / 100, label: "Estimated range based on uncertainty assumptions" };
}

// Scenario multipliers
export const scenarios = {
  normal: { label: "🔘 Normal", multiplier: 1.0, description: "Baseline demand" },
  hotSummer: { label: "🔥 Hot Summer", multiplier: 1.15, description: "+15% cooling demand" },
  evAdoption: { label: "🚗 EV Adoption", multiplier: 1.10, description: "+10% vehicle charging" },
  solarRooftop: { label: "☀️ Solar Rooftop", multiplier: 0.92, description: "-8% grid dependency" },
  energyEfficiency: { label: "💡 Energy Efficiency", multiplier: 0.95, description: "-5% consumption" },
} as const;

export type ScenarioKey = keyof typeof scenarios;

export function applyScenario(baseDemand: number, scenarioKey: ScenarioKey): number {
  return Math.round(baseDemand * scenarios[scenarioKey].multiplier * 100) / 100;
}

// Assumptions Panel Data
export const assumptions = {
  avgHouseholdSize: 4.2,
  annualGrowthRate: "3.5%",
  sectorDistributionSource: "Standard energy planning ratios",
  urbanRuralFactor: "Urban bias applied (1.15x)",
  referenceYear: "2024",
  historicalNote: "Historical baseline aligned with publicly reported averages",
};

// Source reliability / risk tags
export const energySourceRisk: Record<string, { risk: string; color: string }> = {
  Solar: { risk: "Weather dependent", color: "hsl(45, 100%, 55%)" },
  Wind: { risk: "Weather dependent", color: "hsl(45, 100%, 55%)" },
  Coal: { risk: "Base load", color: "hsl(150, 100%, 45%)" },
  Nuclear: { risk: "Base load", color: "hsl(150, 100%, 45%)" },
  Gas: { risk: "Import risk", color: "hsl(25, 100%, 55%)" },
  Hydro: { risk: "Seasonal variability", color: "hsl(200, 100%, 60%)" },
  Oil: { risk: "Import risk / Volatile pricing", color: "hsl(0, 85%, 55%)" },
  Geothermal: { risk: "Base load", color: "hsl(150, 100%, 45%)" },
  Biomass: { risk: "Supply chain dependent", color: "hsl(45, 100%, 55%)" },
  Import: { risk: "Geopolitical risk", color: "hsl(0, 85%, 55%)" },
};

export function getSourceRisk(sourceName: string): { risk: string; color: string } {
  return energySourceRisk[sourceName] || { risk: "Standard reliability", color: "hsl(220, 30%, 50%)" };
}

// Per-capita electricity metric
export function calculatePerCapita(totalMonthlyKwh: number, population: number): number {
  if (population === 0) return 0;
  return Number((totalMonthlyKwh / population).toFixed(2));
}

// CO₂ emissions estimate (kg CO₂ per kWh by source)
export const emissionFactors: Record<string, number> = {
  Coal: 0.9, Gas: 0.5, Oil: 0.75, Solar: 0.05, Wind: 0.02, Hydro: 0.04, Nuclear: 0.01, Geothermal: 0.03, Biomass: 0.23, Import: 0.4, Other: 0.4,
};

export function estimateCO2(totalGwh: number, sources: Record<string, number>): number {
  let totalCO2 = 0;
  for (const [source, pct] of Object.entries(sources)) {
    const factor = emissionFactors[source] || 0.4;
    totalCO2 += (totalGwh * 1_000_000 * (pct / 100)) * factor; // kg
  }
  return Math.round(totalCO2 / 1000); // tonnes
}

// Renewable penetration score
export function renewableScore(sources: Record<string, number>): number {
  const renewables = ["Solar", "Wind", "Hydro", "Geothermal", "Biomass"];
  return renewables.reduce((sum, r) => sum + (sources[r] || 0), 0);
}

// Peak load stress indicator
export function peakStress(peak: number, average: number): { label: string; color: string } {
  const ratio = peak / average;
  if (ratio > 1.3) return { label: "High stress", color: "hsl(0, 85%, 55%)" };
  if (ratio > 1.15) return { label: "Moderate stress", color: "hsl(45, 100%, 55%)" };
  return { label: "Normal", color: "hsl(150, 100%, 45%)" };
}

// Urbanization impact factor
export function urbanImpact(isUrban: boolean): number {
  return isUrban ? 1.15 : 0.95;
}

// Country-specific 5-year (2026→2031) electricity demand growth rates (%)
// Based on GDP growth, industrialization, electrification, and EV adoption trends
export const countryGrowthRates: Record<string, number> = {
  // Asia
  IN: 38, CN: 18, JP: 5, KR: 8, ID: 32, PK: 28, BD: 35, TH: 14, VN: 40, PH: 25,
  MY: 15, SG: 8, TW: 7, MM: 30, KH: 42, LA: 38, MN: 20, NP: 35, LK: 22, BN: 6,
  BT: 30, MV: 18, TL: 45, AF: 25, UZ: 22, KZ: 18, TM: 15, KG: 20, TJ: 25,
  // Middle East
  SA: 12, AE: 10, QA: 8, KW: 7, BH: 9, OM: 11, IQ: 28, IR: 15, JO: 14, LB: 20,
  SY: 35, YE: 30, IL: 10, PS: 22,
  // Europe (mature markets, slower growth)
  GB: 6, FR: 5, DE: 4, IT: 3, ES: 5, PT: 6, NL: 5, BE: 4, AT: 4, CH: 3,
  SE: 8, NO: 7, DK: 6, FI: 5, IE: 7, PL: 10, CZ: 6, RO: 12, HU: 8, BG: 10,
  HR: 8, SK: 7, SI: 5, RS: 12, BA: 10, ME: 12, MK: 11, AL: 15, XK: 18,
  UA: 15, BY: 8, MD: 14, LT: 9, LV: 8, EE: 7, GR: 6, CY: 8, MT: 7,
  IS: 5, LU: 4, LI: 3, MC: 3, AD: 4, SM: 3, VA: 2,
  // Russia & CIS
  RU: 8, GE: 14, AM: 12, AZ: 15,
  // Africa (high growth, electrification drive)
  NG: 35, ZA: 10, EG: 18, KE: 30, ET: 45, GH: 28, TZ: 35, UG: 38, RW: 40,
  SN: 30, CI: 25, CM: 22, AO: 20, MZ: 32, ZW: 18, ZM: 25, MW: 35, MG: 28,
  ML: 30, BF: 32, NE: 28, TD: 25, CD: 30, CG: 22, GA: 15, GQ: 18, CF: 25,
  BJ: 28, TG: 26, SL: 35, LR: 30, GN: 28, GW: 25, GM: 22, CV: 18, ST: 20,
  KM: 22, MU: 12, SC: 10, DJ: 25, ER: 30, SS: 40, SO: 35, BI: 38, LS: 20,
  SZ: 15, BW: 12, NA: 14, LY: 18, TN: 12, DZ: 14, MA: 15, MR: 22,
  // Americas
  US: 8, CA: 6, MX: 14, BR: 12, AR: 10, CO: 15, CL: 10, PE: 18, VE: 8,
  EC: 16, BO: 18, PY: 15, UY: 7, GY: 35, SR: 12, CU: 10, HT: 28, DO: 14,
  JM: 12, TT: 8, BS: 10, BB: 8, BZ: 15, GT: 20, HN: 22, SV: 15, NI: 25,
  CR: 10, PA: 14,
  // Oceania
  AU: 8, NZ: 6, FJ: 15, PG: 28, WS: 12, TO: 10, VU: 18, SB: 22, KI: 15,
  MH: 12, FM: 14, PW: 10, NR: 8, TV: 10,
};

export function getCountryGrowthRate(code: string): number {
  return countryGrowthRates[code] ?? 15; // default 15% if not found
}

export function getProjectedDemand(currentDemand: number, code: string): number {
  const rate = getCountryGrowthRate(code);
  return Math.round(currentDemand * (1 + rate / 100));
}
