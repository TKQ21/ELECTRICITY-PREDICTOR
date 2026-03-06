import type { CountryData } from "../countryData";

export const oceaniaCountries: CountryData[] = [
  {
    name: "Australia", code: "AU", population: 26_500_000, totalDemandGwhMonth: 22_000, avgKwhPerHousehold: 630,
    sources: { Coal: 30, Gas: 20, Solar: 22, Wind: 15, Hydro: 8, Other: 5 },
    sectorBreakdown: { Residential: 32, Commercial: 28, Industrial: 30, Transport: 10 },
    states: [
      { name: "New South Wales", population: 8_200_000, households: 3_200_000, avgKwhPerHousehold: 600, sources: { Coal: 40, Solar: 20, Wind: 12, Gas: 15, Hydro: 8, Other: 5 }, majorConsumers: ["Sydney Metro", "Mining Ops", "Data Centers", "Hospitals", "Universities"] },
      { name: "Victoria", population: 6_700_000, households: 2_600_000, avgKwhPerHousehold: 550, sources: { Gas: 30, Wind: 25, Solar: 20, Coal: 15, Hydro: 5, Other: 5 }, majorConsumers: ["Melbourne Trams", "Manufacturing", "Ports", "Hospitals"] },
      { name: "Queensland", population: 5_400_000, households: 2_000_000, avgKwhPerHousehold: 700, sources: { Coal: 40, Solar: 25, Gas: 15, Wind: 10, Hydro: 5, Other: 5 }, majorConsumers: ["Mining (Coal, Bauxite)", "LNG Plants", "Tourism", "Airports", "Agriculture"] },
      { name: "Western Australia", population: 2_900_000, households: 1_100_000, avgKwhPerHousehold: 750, sources: { Gas: 45, Solar: 20, Wind: 15, Coal: 10, Other: 10 }, majorConsumers: ["Iron Ore Mines", "LNG Facilities", "Desalination", "Ports", "Agriculture"] },
      { name: "South Australia", population: 1_800_000, households: 750_000, avgKwhPerHousehold: 580, sources: { Wind: 40, Solar: 25, Gas: 20, Import: 8, Other: 7 }, majorConsumers: ["Tesla Big Battery", "Wind Farms", "Manufacturing", "Wine Industry", "Data Centers"] },
      { name: "Tasmania", population: 570_000, households: 250_000, avgKwhPerHousehold: 620, sources: { Hydro: 80, Wind: 12, Solar: 3, Gas: 3, Other: 2 }, majorConsumers: ["Aluminium Smelters", "Hydropower", "Agriculture", "Tourism", "Data Centers"] },
      { name: "Northern Territory", population: 250_000, households: 80_000, avgKwhPerHousehold: 800, sources: { Gas: 60, Solar: 20, Oil: 10, Wind: 5, Other: 5 }, majorConsumers: ["LNG Plants", "Mining", "Military Bases", "AC Systems"] },
      { name: "ACT (Canberra)", population: 460_000, households: 180_000, avgKwhPerHousehold: 500, sources: { Wind: 35, Solar: 25, Import: 25, Gas: 10, Other: 5 }, majorConsumers: ["Government Buildings", "Data Centers", "Hospitals", "Universities"] },
    ],
  },
  {
    name: "New Zealand", code: "NZ", population: 5_200_000, totalDemandGwhMonth: 3_500, avgKwhPerHousehold: 600,
    sources: { Hydro: 55, Geothermal: 18, Wind: 10, Gas: 10, Solar: 3, Other: 4 },
    sectorBreakdown: { Industrial: 35, Residential: 28, Commercial: 25, Agriculture: 7, Other: 5 },
    states: [
      { name: "Auckland", population: 1_700_000, households: 550_000, avgKwhPerHousehold: 580, sources: { Hydro: 50, Geothermal: 18, Wind: 12, Gas: 10, Solar: 5, Other: 5 }, majorConsumers: ["Ports", "Data Centers", "Airports", "Hospitals", "Manufacturing"] },
      { name: "Canterbury (Christchurch)", population: 650_000, households: 250_000, avgKwhPerHousehold: 650, sources: { Hydro: 70, Wind: 10, Geothermal: 5, Gas: 8, Solar: 4, Other: 3 }, majorConsumers: ["Dairy Processing", "Agriculture", "Irrigation", "Hospitals", "University"] },
      { name: "Wellington", population: 215_000, households: 80_000, avgKwhPerHousehold: 580, sources: { Hydro: 55, Wind: 18, Geothermal: 12, Gas: 8, Solar: 3, Other: 4 }, majorConsumers: ["Government Buildings", "Ports", "Tech Industry", "Hospitals"] },
      { name: "Waikato", population: 500_000, households: 180_000, avgKwhPerHousehold: 630, sources: { Hydro: 40, Geothermal: 30, Wind: 10, Gas: 10, Solar: 5, Other: 5 }, majorConsumers: ["Dairy Industry", "Geothermal Plants", "Steel Mill", "Agriculture"] },
      { name: "Bay of Plenty", population: 330_000, households: 120_000, avgKwhPerHousehold: 600, sources: { Geothermal: 45, Hydro: 25, Wind: 10, Gas: 10, Solar: 5, Other: 5 }, majorConsumers: ["Port of Tauranga", "Kiwifruit Industry", "Geothermal Plants", "Forestry"] },
    ],
  },
  {
    name: "Papua New Guinea", code: "PG", population: 10_000_000, totalDemandGwhMonth: 300, avgKwhPerHousehold: 20,
    sources: { Hydro: 35, Gas: 30, Oil: 15, Solar: 8, Geothermal: 5, Biomass: 5, Other: 2 },
    sectorBreakdown: { Industrial: 40, Residential: 30, Commercial: 15, Mining: 10, Other: 5 },
    states: [
      { name: "Port Moresby (NCD)", population: 400_000, households: 80_000, avgKwhPerHousehold: 40, sources: { Gas: 35, Hydro: 30, Oil: 15, Solar: 10, Other: 10 }, majorConsumers: ["LNG Plant", "Government Buildings", "Mining HQs", "Ports"] },
      { name: "Lae (Morobe)", population: 250_000, households: 50_000, avgKwhPerHousehold: 25, sources: { Hydro: 40, Gas: 25, Oil: 15, Solar: 8, Other: 12 }, majorConsumers: ["Ports", "Manufacturing", "Coffee Processing", "Mining"] },
    ],
  },
  {
    name: "Fiji", code: "FJ", population: 930_000, totalDemandGwhMonth: 80, avgKwhPerHousehold: 70,
    sources: { Hydro: 45, Oil: 20, Solar: 15, Biomass: 10, Wind: 5, Other: 5 },
    sectorBreakdown: { Residential: 35, Commercial: 30, Industrial: 18, Tourism: 12, Other: 5 },
    states: [
      { name: "Suva (Central)", population: 95_000, households: 25_000, avgKwhPerHousehold: 80, sources: { Hydro: 45, Oil: 20, Solar: 15, Biomass: 10, Other: 10 }, majorConsumers: ["Tourism Hotels", "Government Buildings", "Ports", "Hospitals"] },
      { name: "Nadi (Western)", population: 70_000, households: 18_000, avgKwhPerHousehold: 75, sources: { Hydro: 40, Solar: 20, Oil: 18, Biomass: 10, Wind: 5, Other: 7 }, majorConsumers: ["Nadi Airport", "Tourism Resorts", "Sugar Mills"] },
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
];
