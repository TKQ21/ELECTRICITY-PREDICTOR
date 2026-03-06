import type { CountryData } from "../countryData";

export const middleEastCountries: CountryData[] = [
  {
    name: "Saudi Arabia", code: "SA", population: 36_000_000, totalDemandGwhMonth: 30_000, avgKwhPerHousehold: 850,
    sources: { Gas: 50, Oil: 40, Solar: 5, Wind: 3, Other: 2 },
    sectorBreakdown: { Residential: 50, Industrial: 20, Commercial: 18, Government: 12 },
    states: [
      { name: "Riyadh", population: 8_500_000, households: 1_800_000, avgKwhPerHousehold: 950, sources: { Gas: 55, Oil: 35, Solar: 8, Wind: 2 }, majorConsumers: ["AC Systems", "Desalination Plants", "Metro", "Malls", "Government HQ"] },
      { name: "Eastern Province", population: 5_000_000, households: 1_200_000, avgKwhPerHousehold: 900, sources: { Gas: 60, Oil: 30, Solar: 5, Wind: 3, Other: 2 }, majorConsumers: ["Aramco Facilities", "Refineries", "Desalination", "Ports", "Industrial Cities"] },
      { name: "Makkah", population: 9_000_000, households: 2_000_000, avgKwhPerHousehold: 800, sources: { Gas: 48, Oil: 42, Solar: 5, Other: 5 }, majorConsumers: ["Haramain Railway", "Hajj AC Systems", "Hotels", "Hospitals", "Holy Mosques"] },
      { name: "Madinah", population: 2_200_000, households: 500_000, avgKwhPerHousehold: 800, sources: { Gas: 50, Oil: 38, Solar: 8, Other: 4 }, majorConsumers: ["Prophet's Mosque", "Hotels", "AC Systems", "Hospitals", "Government Buildings"] },
      { name: "Asir", population: 2_300_000, households: 500_000, avgKwhPerHousehold: 700, sources: { Gas: 45, Oil: 40, Solar: 8, Wind: 4, Other: 3 }, majorConsumers: ["Tourism", "Agriculture", "AC Systems", "Government Buildings"] },
    ],
  },
  {
    name: "UAE", code: "AE", population: 10_000_000, totalDemandGwhMonth: 12_000, avgKwhPerHousehold: 900,
    sources: { Gas: 75, Solar: 10, Nuclear: 10, Oil: 3, Other: 2 },
    sectorBreakdown: { Residential: 35, Commercial: 30, Industrial: 22, Government: 8, Other: 5 },
    states: [
      { name: "Dubai", population: 3_600_000, households: 900_000, avgKwhPerHousehold: 950, sources: { Gas: 70, Solar: 18, Nuclear: 5, Other: 7 }, majorConsumers: ["Burj Khalifa District", "Dubai Metro", "Desalination", "Airports", "Malls"] },
      { name: "Abu Dhabi", population: 1_500_000, households: 350_000, avgKwhPerHousehold: 1100, sources: { Gas: 70, Nuclear: 18, Solar: 8, Other: 4 }, majorConsumers: ["ADNOC Facilities", "Desalination", "Barakah Nuclear", "Government HQ", "Masdar City"] },
      { name: "Sharjah", population: 1_800_000, households: 450_000, avgKwhPerHousehold: 850, sources: { Gas: 78, Solar: 10, Nuclear: 5, Other: 7 }, majorConsumers: ["Manufacturing", "AC Systems", "Shopping Centers", "Ports", "Universities"] },
      { name: "Ras Al Khaimah", population: 400_000, households: 100_000, avgKwhPerHousehold: 800, sources: { Gas: 75, Solar: 12, Nuclear: 5, Other: 8 }, majorConsumers: ["Cement Industry", "Tourism Resorts", "Manufacturing", "Ports"] },
    ],
  },
  {
    name: "Qatar", code: "QA", population: 3_000_000, totalDemandGwhMonth: 4_000, avgKwhPerHousehold: 1200,
    sources: { Gas: 95, Solar: 3, Other: 2 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 25, Government: 5, Other: 5 },
    states: [
      { name: "Doha", population: 2_400_000, households: 500_000, avgKwhPerHousehold: 1300, sources: { Gas: 95, Solar: 3, Other: 2 }, majorConsumers: ["LNG Plants", "AC Systems", "Doha Metro", "Qatar Foundation", "Lusail City"] },
      { name: "Al Wakrah", population: 400_000, households: 80_000, avgKwhPerHousehold: 1100, sources: { Gas: 95, Solar: 3, Other: 2 }, majorConsumers: ["Industrial Area", "Al Janoub Stadium", "Ports", "Manufacturing"] },
    ],
  },
  {
    name: "Kuwait", code: "KW", population: 4_300_000, totalDemandGwhMonth: 5_500, avgKwhPerHousehold: 1200,
    sources: { Gas: 55, Oil: 40, Solar: 3, Other: 2 },
    sectorBreakdown: { Residential: 48, Commercial: 22, Industrial: 15, Government: 10, Other: 5 },
    states: [
      { name: "Kuwait City (Al Asimah)", population: 600_000, households: 150_000, avgKwhPerHousehold: 1300, sources: { Gas: 55, Oil: 40, Solar: 3, Other: 2 }, majorConsumers: ["AC Systems", "Government Buildings", "Shopping Malls", "Kuwait Towers", "Hospitals"] },
      { name: "Ahmadi", population: 800_000, households: 200_000, avgKwhPerHousehold: 1200, sources: { Gas: 55, Oil: 40, Solar: 3, Other: 2 }, majorConsumers: ["Oil Refineries", "KOC Headquarters", "Desalination", "Industrial Zone"] },
    ],
  },
  {
    name: "Oman", code: "OM", population: 5_200_000, totalDemandGwhMonth: 3_200, avgKwhPerHousehold: 700,
    sources: { Gas: 85, Solar: 5, Oil: 5, Wind: 3, Other: 2 },
    sectorBreakdown: { Residential: 42, Industrial: 25, Commercial: 18, Government: 10, Other: 5 },
    states: [
      { name: "Muscat", population: 1_800_000, households: 400_000, avgKwhPerHousehold: 750, sources: { Gas: 85, Solar: 6, Oil: 4, Wind: 3, Other: 2 }, majorConsumers: ["Desalination Plants", "AC Systems", "Ports", "Government Buildings", "Hotels"] },
      { name: "Dhofar (Salalah)", population: 500_000, households: 110_000, avgKwhPerHousehold: 650, sources: { Gas: 80, Solar: 8, Oil: 5, Wind: 5, Other: 2 }, majorConsumers: ["Oil & Gas", "Ports", "Tourism", "Agriculture", "Government Buildings"] },
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
      { name: "Aqaba", population: 200_000, households: 50_000, avgKwhPerHousehold: 200, sources: { Gas: 45, Solar: 25, Wind: 12, Oil: 8, Other: 10 }, majorConsumers: ["Ports (Red Sea)", "Tourism Hotels", "Free Zone Industries", "Desalination"] },
      { name: "Irbid", population: 2_000_000, households: 450_000, avgKwhPerHousehold: 150, sources: { Gas: 50, Solar: 18, Wind: 10, Oil: 10, Import: 7, Other: 5 }, majorConsumers: ["Universities", "Agriculture", "Manufacturing", "Hospitals"] },
    ],
  },
  {
    name: "Lebanon", code: "LB", population: 5_500_000, totalDemandGwhMonth: 1_000, avgKwhPerHousehold: 130,
    sources: { Oil: 45, Gas: 15, Solar: 15, Hydro: 8, Import: 10, Wind: 4, Other: 3 },
    sectorBreakdown: { Residential: 38, Commercial: 25, Industrial: 18, Government: 12, Other: 7 },
    states: [
      { name: "Beirut", population: 2_400_000, households: 600_000, avgKwhPerHousehold: 150, sources: { Oil: 40, Solar: 18, Gas: 15, Import: 12, Hydro: 5, Other: 10 }, majorConsumers: ["Private Generators", "Government Buildings", "Hotels", "Hospitals", "Shopping Centers"] },
      { name: "Mount Lebanon", population: 2_000_000, households: 500_000, avgKwhPerHousehold: 130, sources: { Oil: 42, Solar: 15, Gas: 12, Hydro: 12, Import: 10, Other: 9 }, majorConsumers: ["Manufacturing", "Agriculture", "Tourism", "Hospitals"] },
    ],
  },
  {
    name: "Iraq", code: "IQ", population: 44_000_000, totalDemandGwhMonth: 8_000, avgKwhPerHousehold: 250,
    sources: { Gas: 50, Oil: 35, Hydro: 5, Solar: 5, Import: 3, Other: 2 },
    sectorBreakdown: { Residential: 48, Industrial: 18, Commercial: 15, Government: 14, Other: 5 },
    states: [
      { name: "Baghdad", population: 9_000_000, households: 2_000_000, avgKwhPerHousehold: 300, sources: { Gas: 55, Oil: 30, Solar: 7, Import: 5, Other: 3 }, majorConsumers: ["Government Buildings", "AC Systems", "Hospitals", "Markets", "Military"] },
      { name: "Basra", population: 3_000_000, households: 650_000, avgKwhPerHousehold: 280, sources: { Gas: 50, Oil: 38, Solar: 5, Other: 7 }, majorConsumers: ["Oil Fields", "Ports", "Refineries", "AC Systems"] },
      { name: "Erbil (Kurdistan)", population: 2_000_000, households: 450_000, avgKwhPerHousehold: 260, sources: { Gas: 55, Oil: 25, Solar: 10, Import: 5, Other: 5 }, majorConsumers: ["Oil Industry", "Shopping Malls", "Tourism Hotels", "Government Buildings"] },
      { name: "Mosul (Nineveh)", population: 2_500_000, households: 550_000, avgKwhPerHousehold: 200, sources: { Gas: 45, Oil: 30, Hydro: 12, Solar: 8, Other: 5 }, majorConsumers: ["Mosul Dam", "Cement Plants", "Agriculture", "Reconstruction"] },
    ],
  },
  {
    name: "Iran", code: "IR", population: 88_000_000, totalDemandGwhMonth: 28_000, avgKwhPerHousehold: 280,
    sources: { Gas: 65, Oil: 12, Hydro: 10, Nuclear: 5, Wind: 3, Solar: 3, Other: 2 },
    sectorBreakdown: { Industrial: 33, Residential: 33, Commercial: 18, Agriculture: 10, Other: 6 },
    states: [
      { name: "Tehran", population: 9_500_000, households: 3_000_000, avgKwhPerHousehold: 320, sources: { Gas: 70, Oil: 10, Hydro: 5, Nuclear: 5, Solar: 5, Other: 5 }, majorConsumers: ["Metro System", "Industries", "Government HQ", "Bazaars", "Hospitals"] },
      { name: "Isfahan", population: 2_200_000, households: 600_000, avgKwhPerHousehold: 300, sources: { Gas: 60, Hydro: 12, Nuclear: 8, Solar: 8, Oil: 7, Other: 5 }, majorConsumers: ["Steel Plants", "Petrochemicals", "Tourism", "Nuclear Facilities"] },
      { name: "Tabriz (East Azerbaijan)", population: 1_800_000, households: 500_000, avgKwhPerHousehold: 290, sources: { Gas: 68, Hydro: 12, Solar: 8, Wind: 5, Other: 7 }, majorConsumers: ["Petrochemicals", "Auto Assembly (Iran Khodro)", "Agriculture", "Trade Hub"] },
      { name: "Shiraz (Fars)", population: 1_900_000, households: 520_000, avgKwhPerHousehold: 300, sources: { Gas: 65, Solar: 12, Hydro: 8, Oil: 8, Wind: 4, Other: 3 }, majorConsumers: ["Petrochemicals", "Agriculture", "Tourism", "Oil Refineries"] },
      { name: "Khuzestan", population: 4_700_000, households: 1_100_000, avgKwhPerHousehold: 350, sources: { Gas: 55, Oil: 25, Hydro: 10, Solar: 5, Other: 5 }, majorConsumers: ["Oil Fields", "Petrochemicals", "Sugar Cane Industry", "Steel Plants"] },
      { name: "Mashhad (Razavi Khorasan)", population: 3_300_000, households: 900_000, avgKwhPerHousehold: 280, sources: { Gas: 72, Solar: 8, Wind: 8, Hydro: 5, Other: 7 }, majorConsumers: ["Imam Reza Shrine Tourism", "Saffron Processing", "Manufacturing", "Agriculture"] },
    ],
  },
  {
    name: "Israel", code: "IL", population: 10_000_000, totalDemandGwhMonth: 6_500, avgKwhPerHousehold: 500,
    sources: { Gas: 65, Solar: 15, Coal: 12, Wind: 3, Other: 5 },
    sectorBreakdown: { Residential: 30, Commercial: 28, Industrial: 22, Agriculture: 10, Other: 10 },
    states: [
      { name: "Tel Aviv District", population: 1_500_000, households: 550_000, avgKwhPerHousehold: 450, sources: { Gas: 70, Solar: 12, Coal: 8, Wind: 5, Other: 5 }, majorConsumers: ["Tech Startups", "Diamond Exchange", "Hospitals", "Universities", "Desalination"] },
      { name: "Negev (Southern)", population: 800_000, households: 200_000, avgKwhPerHousehold: 600, sources: { Solar: 40, Gas: 40, Coal: 10, Wind: 5, Other: 5 }, majorConsumers: ["Solar Farms", "Military Bases", "Agriculture", "Mining", "Desalination Plants"] },
      { name: "Haifa District", population: 1_000_000, households: 380_000, avgKwhPerHousehold: 480, sources: { Gas: 60, Coal: 15, Solar: 10, Wind: 8, Other: 7 }, majorConsumers: ["Oil Refineries", "Haifa Port", "Intel Fab", "Technion University"] },
      { name: "Jerusalem District", population: 1_200_000, households: 350_000, avgKwhPerHousehold: 420, sources: { Gas: 65, Solar: 15, Coal: 10, Other: 10 }, majorConsumers: ["Government Buildings", "Hospitals", "Tourism", "Universities", "Holy Sites"] },
    ],
  },
  {
    name: "Yemen", code: "YE", population: 34_000_000, totalDemandGwhMonth: 300, avgKwhPerHousehold: 15,
    sources: { Oil: 45, Solar: 25, Gas: 12, Wind: 5, Hydro: 3, Other: 10 },
    sectorBreakdown: { Residential: 55, Commercial: 15, Industrial: 10, Government: 12, Other: 8 },
    states: [
      { name: "Sana'a", population: 4_000_000, households: 700_000, avgKwhPerHousehold: 20, sources: { Solar: 35, Oil: 35, Gas: 12, Wind: 8, Other: 10 }, majorConsumers: ["Government Buildings", "Hospitals", "Markets", "Water Pumps"] },
      { name: "Aden", population: 1_000_000, households: 200_000, avgKwhPerHousehold: 25, sources: { Oil: 50, Solar: 22, Gas: 10, Wind: 8, Other: 10 }, majorConsumers: ["Aden Port", "Oil Refinery", "Government Buildings", "Hospitals"] },
    ],
  },
];
