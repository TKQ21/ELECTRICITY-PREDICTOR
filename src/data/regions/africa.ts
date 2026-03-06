import type { CountryData } from "../countryData";

export const africaCountries: CountryData[] = [
  {
    name: "South Africa", code: "ZA", population: 62_000_000, totalDemandGwhMonth: 19_000, avgKwhPerHousehold: 250,
    sources: { Coal: 65, Nuclear: 5, Wind: 10, Solar: 8, Gas: 5, Hydro: 4, Other: 3 },
    sectorBreakdown: { Industrial: 38, Residential: 25, Commercial: 22, Mining: 12, Other: 3 },
    states: [
      { name: "Gauteng", population: 16_000_000, households: 5_000_000, avgKwhPerHousehold: 300, sources: { Coal: 60, Solar: 12, Wind: 8, Nuclear: 8, Gas: 7, Other: 5 }, majorConsumers: ["Gold Mines", "Johannesburg CBD", "Gautrain", "Hospitals", "Factories"] },
      { name: "Western Cape", population: 7_500_000, households: 2_200_000, avgKwhPerHousehold: 280, sources: { Coal: 45, Wind: 20, Solar: 15, Nuclear: 10, Gas: 5, Other: 5 }, majorConsumers: ["Cape Town Port", "Tourism Hotels", "Wineries", "Data Centers", "Universities"] },
      { name: "KwaZulu-Natal", population: 12_000_000, households: 3_200_000, avgKwhPerHousehold: 220, sources: { Coal: 65, Solar: 10, Wind: 8, Gas: 5, Hydro: 5, Other: 7 }, majorConsumers: ["Durban Port", "Sugar Mills", "Petrochemicals", "Tourism", "Mining"] },
      { name: "Eastern Cape", population: 6_700_000, households: 1_800_000, avgKwhPerHousehold: 180, sources: { Coal: 55, Wind: 18, Solar: 12, Hydro: 5, Gas: 5, Other: 5 }, majorConsumers: ["Auto Manufacturing (VW, Mercedes)", "Wind Farms", "Agriculture", "Ports"] },
      { name: "Free State", population: 2_900_000, households: 900_000, avgKwhPerHousehold: 220, sources: { Coal: 70, Solar: 12, Wind: 8, Gas: 5, Other: 5 }, majorConsumers: ["Gold Mines", "Agriculture", "Petrochemicals (SASOL)", "Power Plants"] },
      { name: "Limpopo", population: 5_900_000, households: 1_600_000, avgKwhPerHousehold: 160, sources: { Coal: 72, Solar: 10, Wind: 5, Hydro: 5, Other: 8 }, majorConsumers: ["Platinum Mines", "Chrome Mines", "Agriculture", "Tourism (Kruger Park)"] },
      { name: "Mpumalanga", population: 4_700_000, households: 1_300_000, avgKwhPerHousehold: 200, sources: { Coal: 80, Solar: 8, Wind: 4, Gas: 3, Other: 5 }, majorConsumers: ["Coal Mines", "Power Plants (Eskom)", "Forestry", "Tourism"] },
      { name: "North West", population: 4_100_000, households: 1_200_000, avgKwhPerHousehold: 190, sources: { Coal: 65, Solar: 15, Wind: 8, Gas: 5, Other: 7 }, majorConsumers: ["Platinum Mines", "Agriculture", "Cement Plants", "Sun City Resort"] },
    ],
  },
  {
    name: "Nigeria", code: "NG", population: 225_000_000, totalDemandGwhMonth: 4_000, avgKwhPerHousehold: 30,
    sources: { Gas: 55, Hydro: 25, Solar: 8, Oil: 5, Wind: 3, Other: 4 },
    sectorBreakdown: { Residential: 50, Commercial: 20, Industrial: 18, Government: 7, Other: 5 },
    states: [
      { name: "Lagos", population: 22_000_000, households: 5_000_000, avgKwhPerHousehold: 50, sources: { Gas: 55, Solar: 15, Hydro: 10, Oil: 10, Wind: 5, Other: 5 }, majorConsumers: ["Industries", "Ports", "Markets", "Government Buildings", "Hospitals"] },
      { name: "Abuja (FCT)", population: 4_000_000, households: 800_000, avgKwhPerHousehold: 60, sources: { Gas: 50, Hydro: 20, Solar: 15, Oil: 5, Wind: 5, Other: 5 }, majorConsumers: ["Government Buildings", "Embassies", "Shopping Malls", "Hospitals"] },
      { name: "Kano", population: 4_500_000, households: 900_000, avgKwhPerHousehold: 25, sources: { Gas: 40, Hydro: 20, Solar: 20, Oil: 10, Other: 10 }, majorConsumers: ["Textile Industry", "Dye Pits", "Agriculture", "Markets"] },
      { name: "Rivers", population: 7_300_000, households: 1_500_000, avgKwhPerHousehold: 40, sources: { Gas: 65, Oil: 15, Solar: 8, Hydro: 5, Other: 7 }, majorConsumers: ["Oil Refineries", "LNG Plants", "Ports (Port Harcourt)", "Petrochemicals"] },
      { name: "Ogun", population: 5_200_000, households: 1_100_000, avgKwhPerHousehold: 35, sources: { Gas: 50, Solar: 18, Hydro: 12, Oil: 8, Other: 12 }, majorConsumers: ["Cement Plants (Dangote)", "Manufacturing", "Agriculture", "Free Trade Zones"] },
      { name: "Delta", population: 5_800_000, households: 1_200_000, avgKwhPerHousehold: 35, sources: { Gas: 60, Oil: 18, Solar: 8, Hydro: 5, Other: 9 }, majorConsumers: ["Oil & Gas Fields", "Petrochemicals", "Agriculture", "Ports"] },
    ],
  },
  {
    name: "Egypt", code: "EG", population: 106_000_000, totalDemandGwhMonth: 18_000, avgKwhPerHousehold: 180,
    sources: { Gas: 55, Oil: 10, Solar: 10, Wind: 10, Hydro: 8, Coal: 2, Other: 5 },
    sectorBreakdown: { Residential: 42, Industrial: 25, Commercial: 15, Agriculture: 8, Government: 5, Other: 5 },
    states: [
      { name: "Cairo (Al-Qāhirah)", population: 22_000_000, households: 5_500_000, avgKwhPerHousehold: 200, sources: { Gas: 55, Oil: 10, Solar: 10, Wind: 5, Hydro: 5, Other: 15 }, majorConsumers: ["Cairo Metro", "Government Buildings", "Hospitals", "Shopping Malls", "Hotels"] },
      { name: "Alexandria", population: 5_500_000, households: 1_400_000, avgKwhPerHousehold: 190, sources: { Gas: 55, Wind: 12, Solar: 10, Oil: 10, Hydro: 5, Other: 8 }, majorConsumers: ["Alexandria Port", "Petrochemicals", "Manufacturing", "Tourism", "Hospitals"] },
      { name: "Aswan", population: 1_500_000, households: 350_000, avgKwhPerHousehold: 160, sources: { Hydro: 50, Solar: 25, Gas: 15, Wind: 5, Other: 5 }, majorConsumers: ["Aswan Dam", "Tourism", "Agriculture", "Aluminium Smelter"] },
      { name: "Suez", population: 800_000, households: 200_000, avgKwhPerHousehold: 200, sources: { Gas: 50, Oil: 18, Solar: 12, Wind: 10, Other: 10 }, majorConsumers: ["Suez Canal Operations", "Oil Refineries", "Ports", "Desalination"] },
      { name: "Red Sea Governorate", population: 400_000, households: 100_000, avgKwhPerHousehold: 250, sources: { Wind: 30, Solar: 25, Gas: 25, Oil: 10, Other: 10 }, majorConsumers: ["Tourism Resorts (Hurghada)", "Wind Farms", "Oil Production", "Desalination"] },
    ],
  },
  {
    name: "Kenya", code: "KE", population: 56_000_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 50,
    sources: { Geothermal: 40, Hydro: 25, Wind: 15, Solar: 8, Gas: 5, Biomass: 5, Other: 2 },
    sectorBreakdown: { Industrial: 28, Residential: 35, Commercial: 25, Agriculture: 7, Other: 5 },
    states: [
      { name: "Nairobi", population: 5_000_000, households: 1_200_000, avgKwhPerHousehold: 80, sources: { Geothermal: 40, Hydro: 20, Wind: 15, Solar: 10, Gas: 8, Other: 7 }, majorConsumers: ["Nairobi SGR Railway", "Shopping Malls", "Data Centers", "Hospitals", "Government HQ"] },
      { name: "Mombasa", population: 1_300_000, households: 300_000, avgKwhPerHousehold: 65, sources: { Geothermal: 35, Hydro: 20, Solar: 15, Wind: 12, Gas: 10, Other: 8 }, majorConsumers: ["Mombasa Port", "Tourism Hotels", "Cement Plants", "Refineries"] },
      { name: "Rift Valley (Nakuru)", population: 2_200_000, households: 500_000, avgKwhPerHousehold: 45, sources: { Geothermal: 55, Hydro: 15, Solar: 12, Wind: 10, Other: 8 }, majorConsumers: ["Geothermal Plants (Olkaria)", "Agriculture", "Floriculture", "Tourism"] },
      { name: "Kisumu (Western)", population: 1_200_000, households: 280_000, avgKwhPerHousehold: 35, sources: { Hydro: 35, Geothermal: 25, Solar: 18, Wind: 10, Biomass: 8, Other: 4 }, majorConsumers: ["Sugar Mills", "Fisheries (Lake Victoria)", "Agriculture", "Ports"] },
    ],
  },
  {
    name: "Ethiopia", code: "ET", population: 126_000_000, totalDemandGwhMonth: 1_400, avgKwhPerHousehold: 25,
    sources: { Hydro: 85, Wind: 5, Solar: 4, Geothermal: 3, Biomass: 2, Other: 1 },
    sectorBreakdown: { Industrial: 35, Residential: 35, Commercial: 15, Agriculture: 10, Other: 5 },
    states: [
      { name: "Addis Ababa", population: 5_500_000, households: 1_200_000, avgKwhPerHousehold: 50, sources: { Hydro: 80, Wind: 5, Solar: 5, Geothermal: 5, Other: 5 }, majorConsumers: ["Light Rail", "Cement Plants", "Government Buildings", "AU Headquarters", "Hospitals"] },
      { name: "Oromia", population: 40_000_000, households: 8_000_000, avgKwhPerHousehold: 18, sources: { Hydro: 88, Solar: 4, Wind: 3, Geothermal: 3, Other: 2 }, majorConsumers: ["GERD Dam Construction", "Agriculture", "Coffee Processing", "Cement Plants"] },
      { name: "Amhara", population: 22_000_000, households: 4_500_000, avgKwhPerHousehold: 15, sources: { Hydro: 90, Solar: 4, Wind: 3, Other: 3 }, majorConsumers: ["Agriculture", "Tana Beles Hydropower", "Textile Factories", "Tourism (Lalibela)"] },
    ],
  },
  {
    name: "Ghana", code: "GH", population: 34_000_000, totalDemandGwhMonth: 1_500, avgKwhPerHousehold: 60,
    sources: { Hydro: 35, Gas: 35, Solar: 12, Oil: 8, Wind: 5, Other: 5 },
    sectorBreakdown: { Residential: 38, Industrial: 28, Commercial: 22, Agriculture: 7, Other: 5 },
    states: [
      { name: "Greater Accra", population: 5_500_000, households: 1_400_000, avgKwhPerHousehold: 80, sources: { Gas: 35, Hydro: 30, Solar: 15, Oil: 8, Wind: 5, Other: 7 }, majorConsumers: ["Tema Port", "Aluminium Smelter", "Government Buildings", "Shopping Malls"] },
      { name: "Ashanti", population: 5_800_000, households: 1_400_000, avgKwhPerHousehold: 55, sources: { Hydro: 40, Gas: 25, Solar: 15, Oil: 8, Wind: 5, Other: 7 }, majorConsumers: ["Gold Mines", "Cocoa Processing", "Timber Industry", "Kumasi Market"] },
      { name: "Western", population: 2_800_000, households: 650_000, avgKwhPerHousehold: 50, sources: { Gas: 40, Hydro: 25, Solar: 12, Oil: 10, Wind: 5, Other: 8 }, majorConsumers: ["Oil & Gas (Jubilee Field)", "Gold Mines", "Cocoa Farms", "Ports (Takoradi)"] },
    ],
  },
  {
    name: "Tanzania", code: "TZ", population: 65_000_000, totalDemandGwhMonth: 700, avgKwhPerHousehold: 20,
    sources: { Gas: 40, Hydro: 30, Solar: 10, Biomass: 8, Wind: 5, Oil: 5, Other: 2 },
    sectorBreakdown: { Industrial: 25, Residential: 40, Commercial: 18, Agriculture: 12, Other: 5 },
    states: [
      { name: "Dar es Salaam", population: 7_000_000, households: 1_800_000, avgKwhPerHousehold: 35, sources: { Gas: 45, Hydro: 25, Solar: 12, Oil: 8, Wind: 5, Other: 5 }, majorConsumers: ["Ports", "Cement Plants", "Breweries", "Government Buildings"] },
      { name: "Mwanza", population: 3_500_000, households: 800_000, avgKwhPerHousehold: 15, sources: { Hydro: 40, Gas: 25, Solar: 15, Biomass: 10, Other: 10 }, majorConsumers: ["Gold Mines", "Fisheries (Lake Victoria)", "Agriculture", "Cotton Processing"] },
      { name: "Dodoma", population: 2_800_000, households: 600_000, avgKwhPerHousehold: 12, sources: { Gas: 35, Solar: 22, Hydro: 20, Biomass: 12, Other: 11 }, majorConsumers: ["New Capital Construction", "Government Buildings", "Agriculture", "Wine Industry"] },
    ],
  },
  {
    name: "Morocco", code: "MA", population: 37_000_000, totalDemandGwhMonth: 3_500, avgKwhPerHousehold: 120,
    sources: { Coal: 30, Wind: 18, Solar: 15, Gas: 12, Hydro: 10, Oil: 5, Other: 10 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 20, Agriculture: 10, Other: 5 },
    states: [
      { name: "Casablanca-Settat", population: 7_000_000, households: 1_800_000, avgKwhPerHousehold: 150, sources: { Coal: 28, Wind: 18, Gas: 15, Solar: 15, Hydro: 8, Other: 16 }, majorConsumers: ["Casablanca Port", "Tram System", "Industries", "Shopping Malls", "Airports"] },
      { name: "Rabat-Salé-Kénitra", population: 4_800_000, households: 1_200_000, avgKwhPerHousehold: 130, sources: { Coal: 25, Wind: 20, Solar: 18, Gas: 12, Hydro: 10, Other: 15 }, majorConsumers: ["Government Buildings", "Tram System", "Kenitra Auto Plants", "Airports"] },
      { name: "Marrakech-Safi", population: 4_500_000, households: 1_000_000, avgKwhPerHousehold: 100, sources: { Solar: 25, Coal: 22, Wind: 18, Gas: 12, Hydro: 8, Other: 15 }, majorConsumers: ["Tourism Hotels", "Noor Solar Complex", "Agriculture", "Handicrafts"] },
      { name: "Tanger-Tétouan-Al Hoceïma", population: 3_800_000, households: 900_000, avgKwhPerHousehold: 110, sources: { Wind: 28, Coal: 20, Gas: 15, Solar: 12, Hydro: 10, Other: 15 }, majorConsumers: ["Tanger Med Port", "Renault Factory", "Wind Farms", "Tourism", "Free Trade Zones"] },
    ],
  },
  {
    name: "Algeria", code: "DZ", population: 45_000_000, totalDemandGwhMonth: 7_000, avgKwhPerHousehold: 200,
    sources: { Gas: 90, Solar: 3, Wind: 2, Hydro: 2, Oil: 2, Other: 1 },
    sectorBreakdown: { Residential: 42, Industrial: 25, Commercial: 15, Government: 10, Other: 8 },
    states: [
      { name: "Algiers", population: 4_000_000, households: 900_000, avgKwhPerHousehold: 230, sources: { Gas: 88, Solar: 5, Wind: 3, Hydro: 2, Other: 2 }, majorConsumers: ["Metro System", "Government Buildings", "Ports", "AC Systems", "Hospitals"] },
      { name: "Oran", population: 1_500_000, households: 400_000, avgKwhPerHousehold: 210, sources: { Gas: 90, Solar: 4, Wind: 3, Other: 3 }, majorConsumers: ["Ports", "Petrochemicals", "Desalination", "Universities"] },
      { name: "Constantine", population: 950_000, households: 250_000, avgKwhPerHousehold: 200, sources: { Gas: 88, Solar: 5, Wind: 3, Hydro: 2, Other: 2 }, majorConsumers: ["Tram System", "Manufacturing", "Hospitals", "Universities"] },
      { name: "Hassi Messaoud (Ouargla)", population: 200_000, households: 50_000, avgKwhPerHousehold: 350, sources: { Gas: 85, Solar: 8, Oil: 5, Other: 2 }, majorConsumers: ["Oil & Gas Fields", "Sonatrach Operations", "Desert Industries"] },
    ],
  },
  {
    name: "Tunisia", code: "TN", population: 12_000_000, totalDemandGwhMonth: 1_700, avgKwhPerHousehold: 140,
    sources: { Gas: 65, Wind: 10, Solar: 8, Oil: 8, Hydro: 2, Import: 4, Other: 3 },
    sectorBreakdown: { Residential: 32, Industrial: 32, Commercial: 20, Agriculture: 10, Other: 6 },
    states: [
      { name: "Tunis", population: 2_800_000, households: 700_000, avgKwhPerHousehold: 160, sources: { Gas: 62, Wind: 10, Solar: 10, Oil: 8, Import: 5, Other: 5 }, majorConsumers: ["Light Rail", "Tourism Hotels", "Olive Oil Processing", "Government Buildings"] },
      { name: "Sfax", population: 1_000_000, households: 260_000, avgKwhPerHousehold: 140, sources: { Gas: 65, Solar: 12, Wind: 8, Oil: 8, Other: 7 }, majorConsumers: ["Phosphate Processing", "Olive Oil Industry", "Ports", "Manufacturing"] },
    ],
  },
  {
    name: "DR Congo", code: "CD", population: 102_000_000, totalDemandGwhMonth: 800, avgKwhPerHousehold: 10,
    sources: { Hydro: 95, Solar: 2, Oil: 2, Other: 1 },
    sectorBreakdown: { Industrial: 45, Residential: 30, Commercial: 10, Mining: 10, Other: 5 },
    states: [
      { name: "Kinshasa", population: 17_000_000, households: 3_500_000, avgKwhPerHousehold: 15, sources: { Hydro: 92, Solar: 3, Oil: 3, Other: 2 }, majorConsumers: ["Mining Companies", "Government Buildings", "Markets", "Ports"] },
      { name: "Katanga (Haut-Katanga)", population: 7_000_000, households: 1_400_000, avgKwhPerHousehold: 18, sources: { Hydro: 90, Solar: 4, Coal: 3, Other: 3 }, majorConsumers: ["Copper & Cobalt Mines", "Smelters", "Lubumbashi Industries"] },
      { name: "Kivu (North & South)", population: 10_000_000, households: 2_000_000, avgKwhPerHousehold: 8, sources: { Hydro: 85, Solar: 5, Biomass: 5, Other: 5 }, majorConsumers: ["Mining (Coltan, Gold)", "Agriculture", "Government Buildings"] },
    ],
  },
  {
    name: "Angola", code: "AO", population: 36_000_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 40,
    sources: { Hydro: 60, Gas: 20, Oil: 10, Solar: 5, Wind: 3, Other: 2 },
    sectorBreakdown: { Industrial: 35, Residential: 35, Commercial: 15, Oil_Sector: 10, Other: 5 },
    states: [
      { name: "Luanda", population: 9_000_000, households: 2_000_000, avgKwhPerHousehold: 55, sources: { Hydro: 55, Gas: 22, Oil: 12, Solar: 5, Other: 6 }, majorConsumers: ["Oil Industry", "Government Buildings", "Ports", "Shopping Malls"] },
      { name: "Benguela", population: 2_500_000, households: 550_000, avgKwhPerHousehold: 35, sources: { Hydro: 65, Gas: 15, Solar: 8, Oil: 5, Other: 7 }, majorConsumers: ["Fishing Industry", "Ports", "Agriculture", "Manufacturing"] },
    ],
  },
  {
    name: "Libya", code: "LY", population: 7_000_000, totalDemandGwhMonth: 2_200, avgKwhPerHousehold: 300,
    sources: { Gas: 50, Oil: 40, Solar: 5, Wind: 2, Other: 3 },
    sectorBreakdown: { Residential: 40, Industrial: 22, Commercial: 15, Government: 15, Other: 8 },
    states: [
      { name: "Tripoli", population: 1_200_000, households: 300_000, avgKwhPerHousehold: 350, sources: { Gas: 48, Oil: 40, Solar: 7, Wind: 3, Other: 2 }, majorConsumers: ["Government Buildings", "Oil Industry HQs", "AC Systems", "Hospitals"] },
      { name: "Benghazi", population: 700_000, households: 180_000, avgKwhPerHousehold: 300, sources: { Gas: 45, Oil: 42, Solar: 8, Other: 5 }, majorConsumers: ["Oil Industry", "Ports", "Hospitals", "Universities"] },
    ],
  },
  {
    name: "Mozambique", code: "MZ", population: 33_000_000, totalDemandGwhMonth: 1_600, avgKwhPerHousehold: 25,
    sources: { Hydro: 65, Gas: 20, Solar: 5, Coal: 5, Wind: 3, Other: 2 },
    sectorBreakdown: { Industrial: 55, Residential: 25, Commercial: 10, Agriculture: 5, Other: 5 },
    states: [
      { name: "Maputo", population: 2_200_000, households: 500_000, avgKwhPerHousehold: 50, sources: { Hydro: 60, Gas: 22, Solar: 8, Coal: 5, Other: 5 }, majorConsumers: ["Aluminium Smelter (Mozal)", "Government Buildings", "Ports", "Hospitals"] },
      { name: "Sofala (Beira)", population: 2_200_000, households: 500_000, avgKwhPerHousehold: 20, sources: { Hydro: 60, Gas: 18, Solar: 8, Coal: 8, Other: 6 }, majorConsumers: ["Beira Port", "Coal Transport", "Agriculture", "Government Buildings"] },
    ],
  },
  {
    name: "Zimbabwe", code: "ZW", population: 16_000_000, totalDemandGwhMonth: 800, avgKwhPerHousehold: 50,
    sources: { Hydro: 35, Coal: 35, Solar: 12, Import: 8, Wind: 5, Other: 5 },
    sectorBreakdown: { Industrial: 30, Residential: 32, Mining: 18, Commercial: 12, Other: 8 },
    states: [
      { name: "Harare", population: 1_600_000, households: 400_000, avgKwhPerHousehold: 70, sources: { Hydro: 32, Coal: 32, Solar: 15, Import: 10, Other: 11 }, majorConsumers: ["Mining Companies", "Government Buildings", "Industry", "Hospitals"] },
      { name: "Bulawayo", population: 700_000, households: 200_000, avgKwhPerHousehold: 55, sources: { Coal: 40, Hydro: 28, Solar: 12, Import: 10, Other: 10 }, majorConsumers: ["Manufacturing", "Railways", "Mining", "Agriculture"] },
    ],
  },
  {
    name: "Zambia", code: "ZM", population: 20_000_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 55,
    sources: { Hydro: 80, Coal: 5, Solar: 8, Wind: 3, Other: 4 },
    sectorBreakdown: { Mining: 50, Residential: 25, Commercial: 12, Industrial: 8, Other: 5 },
    states: [
      { name: "Lusaka", population: 3_500_000, households: 700_000, avgKwhPerHousehold: 70, sources: { Hydro: 78, Solar: 10, Coal: 5, Other: 7 }, majorConsumers: ["Copper Mines", "Government Buildings", "Shopping Centers", "Hospitals"] },
      { name: "Copperbelt", population: 2_500_000, households: 550_000, avgKwhPerHousehold: 80, sources: { Hydro: 82, Coal: 8, Solar: 5, Other: 5 }, majorConsumers: ["Copper & Cobalt Mines", "Smelters", "Manufacturing"] },
    ],
  },
  {
    name: "Sudan", code: "SD", population: 46_000_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 30,
    sources: { Hydro: 50, Oil: 20, Solar: 12, Gas: 8, Wind: 5, Other: 5 },
    sectorBreakdown: { Residential: 45, Industrial: 20, Agriculture: 15, Commercial: 12, Other: 8 },
    states: [
      { name: "Khartoum", population: 6_000_000, households: 1_200_000, avgKwhPerHousehold: 45, sources: { Hydro: 45, Oil: 22, Solar: 15, Gas: 10, Other: 8 }, majorConsumers: ["Government Buildings", "Merowe Dam", "Hospitals", "Markets", "AC Systems"] },
      { name: "Gezira", population: 4_800_000, households: 950_000, avgKwhPerHousehold: 25, sources: { Hydro: 55, Solar: 18, Oil: 12, Gas: 8, Other: 7 }, majorConsumers: ["Gezira Irrigation Scheme", "Agriculture", "Sugar Mills", "Cotton Processing"] },
    ],
  },
  {
    name: "Uganda", code: "UG", population: 48_000_000, totalDemandGwhMonth: 400, avgKwhPerHousehold: 15,
    sources: { Hydro: 80, Solar: 8, Biomass: 5, Oil: 3, Wind: 2, Other: 2 },
    sectorBreakdown: { Industrial: 30, Residential: 35, Commercial: 18, Agriculture: 10, Other: 7 },
    states: [
      { name: "Kampala", population: 3_500_000, households: 700_000, avgKwhPerHousehold: 30, sources: { Hydro: 78, Solar: 10, Biomass: 5, Oil: 3, Other: 4 }, majorConsumers: ["Government Buildings", "Shopping Malls", "Hospitals", "Hotels", "Universities"] },
      { name: "Jinja", population: 400_000, households: 80_000, avgKwhPerHousehold: 25, sources: { Hydro: 90, Solar: 4, Other: 6 }, majorConsumers: ["Bujagali Dam", "Steel Plants", "Textile Mills", "Sugar Processing"] },
    ],
  },
  {
    name: "Cameroon", code: "CM", population: 28_000_000, totalDemandGwhMonth: 700, avgKwhPerHousehold: 25,
    sources: { Hydro: 55, Gas: 20, Oil: 10, Solar: 5, Biomass: 5, Other: 5 },
    sectorBreakdown: { Residential: 38, Industrial: 30, Commercial: 15, Agriculture: 10, Other: 7 },
    states: [
      { name: "Douala (Littoral)", population: 3_500_000, households: 750_000, avgKwhPerHousehold: 40, sources: { Hydro: 50, Gas: 25, Oil: 10, Solar: 5, Other: 10 }, majorConsumers: ["Ports", "Aluminium Smelter (Alucam)", "Manufacturing", "Brewing"] },
      { name: "Yaoundé (Centre)", population: 3_000_000, households: 650_000, avgKwhPerHousehold: 35, sources: { Hydro: 58, Gas: 18, Solar: 8, Oil: 8, Other: 8 }, majorConsumers: ["Government Buildings", "Universities", "Hospitals", "Embassies"] },
    ],
  },
  {
    name: "Senegal", code: "SN", population: 18_000_000, totalDemandGwhMonth: 450, avgKwhPerHousehold: 30,
    sources: { Gas: 40, Oil: 20, Solar: 15, Wind: 10, Coal: 8, Hydro: 3, Other: 4 },
    sectorBreakdown: { Residential: 40, Industrial: 25, Commercial: 18, Agriculture: 10, Other: 7 },
    states: [
      { name: "Dakar", population: 4_000_000, households: 800_000, avgKwhPerHousehold: 50, sources: { Gas: 42, Oil: 18, Solar: 15, Wind: 12, Coal: 5, Other: 8 }, majorConsumers: ["Ports", "Government Buildings", "Fish Processing", "Hotels", "BRT System"] },
      { name: "Thiès", population: 2_200_000, households: 450_000, avgKwhPerHousehold: 25, sources: { Gas: 35, Solar: 22, Wind: 15, Oil: 12, Coal: 8, Other: 8 }, majorConsumers: ["Cement Plants", "Agriculture", "Railway Junction", "Tourism"] },
    ],
  },
  {
    name: "Ivory Coast", code: "CI", population: 28_000_000, totalDemandGwhMonth: 900, avgKwhPerHousehold: 30,
    sources: { Gas: 45, Hydro: 25, Oil: 10, Solar: 8, Biomass: 5, Import: 3, Other: 4 },
    sectorBreakdown: { Industrial: 32, Residential: 35, Commercial: 18, Agriculture: 8, Other: 7 },
    states: [
      { name: "Abidjan", population: 5_500_000, households: 1_200_000, avgKwhPerHousehold: 50, sources: { Gas: 48, Hydro: 22, Solar: 10, Oil: 8, Other: 12 }, majorConsumers: ["Port (Abidjan Port)", "Cocoa Processing", "Government Buildings", "Shopping Centers"] },
      { name: "Yamoussoukro", population: 400_000, households: 90_000, avgKwhPerHousehold: 30, sources: { Gas: 40, Hydro: 30, Solar: 12, Biomass: 8, Other: 10 }, majorConsumers: ["Basilica (World's Largest Church)", "Government Buildings", "Agriculture"] },
    ],
  },
  {
    name: "Madagascar", code: "MG", population: 30_000_000, totalDemandGwhMonth: 200, avgKwhPerHousehold: 10,
    sources: { Hydro: 45, Oil: 30, Solar: 10, Biomass: 8, Wind: 4, Other: 3 },
    sectorBreakdown: { Residential: 45, Industrial: 20, Commercial: 18, Agriculture: 10, Other: 7 },
    states: [
      { name: "Antananarivo", population: 3_500_000, households: 700_000, avgKwhPerHousehold: 18, sources: { Hydro: 40, Oil: 30, Solar: 12, Biomass: 8, Other: 10 }, majorConsumers: ["Government Buildings", "Textile Factories", "Markets", "Hospitals"] },
      { name: "Toamasina", population: 350_000, households: 80_000, avgKwhPerHousehold: 15, sources: { Hydro: 35, Oil: 35, Solar: 12, Biomass: 10, Other: 8 }, majorConsumers: ["Main Port", "Nickel Mine", "Vanilla Processing"] },
    ],
  },
  {
    name: "Rwanda", code: "RW", population: 14_000_000, totalDemandGwhMonth: 70, avgKwhPerHousehold: 12,
    sources: { Hydro: 40, Solar: 20, Gas: 15, Import: 10, Biomass: 8, Other: 7 },
    sectorBreakdown: { Residential: 38, Industrial: 22, Commercial: 25, Agriculture: 8, Other: 7 },
    states: [
      { name: "Kigali", population: 1_200_000, households: 300_000, avgKwhPerHousehold: 25, sources: { Hydro: 38, Solar: 22, Gas: 15, Import: 10, Other: 15 }, majorConsumers: ["Convention Center", "Government Buildings", "Hotels", "IT Hub", "Hospitals"] },
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
    name: "Namibia", code: "NA", population: 2_600_000, totalDemandGwhMonth: 350, avgKwhPerHousehold: 120,
    sources: { Hydro: 25, Solar: 25, Import: 25, Coal: 10, Wind: 10, Other: 5 },
    sectorBreakdown: { Mining: 35, Residential: 25, Commercial: 20, Agriculture: 12, Other: 8 },
    states: [
      { name: "Windhoek (Khomas)", population: 450_000, households: 120_000, avgKwhPerHousehold: 150, sources: { Import: 30, Solar: 25, Hydro: 20, Coal: 10, Wind: 10, Other: 5 }, majorConsumers: ["Mining Companies", "Government Buildings", "Shopping Centers", "Hospitals"] },
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
];
