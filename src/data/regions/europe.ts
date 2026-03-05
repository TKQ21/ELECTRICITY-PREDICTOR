import type { CountryData } from "../countryData";

export const europeCountries: CountryData[] = [
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
      { name: "Bavaria (Bayern)", population: 13_200_000, households: 5_500_000, avgKwhPerHousehold: 310, sources: { Gas: 25, Solar: 22, Hydro: 20, Wind: 10, Biomass: 12, Coal: 11 }, majorConsumers: ["BMW Factories", "Siemens Plants", "Munich Airport", "Beer Breweries"] },
      { name: "North Rhine-Westphalia (NRW)", population: 18_000_000, households: 8_000_000, avgKwhPerHousehold: 300, sources: { Coal: 35, Wind: 20, Gas: 18, Solar: 10, Biomass: 10, Other: 7 }, majorConsumers: ["Steel Works", "Chemical Plants", "Rhine Ports", "Rail Networks"] },
      { name: "Baden-Württemberg", population: 11_000_000, households: 4_800_000, avgKwhPerHousehold: 280, sources: { Solar: 20, Gas: 18, Wind: 15, Hydro: 12, Coal: 10, Biomass: 10, Other: 15 }, majorConsumers: ["Mercedes-Benz", "Porsche Plants", "SAP HQ", "Bosch Manufacturing"] },
      { name: "Lower Saxony (Niedersachsen)", population: 8_000_000, households: 3_400_000, avgKwhPerHousehold: 300, sources: { Wind: 40, Gas: 20, Coal: 12, Solar: 10, Biomass: 10, Other: 8 }, majorConsumers: ["VW Wolfsburg", "Wind Farms", "Agriculture", "Ports"] },
      { name: "Hesse (Hessen)", population: 6_300_000, households: 2_800_000, avgKwhPerHousehold: 280, sources: { Gas: 22, Wind: 18, Solar: 15, Coal: 12, Biomass: 10, Nuclear: 8, Other: 15 }, majorConsumers: ["Frankfurt Airport", "Banking Data Centers", "Chemical Industry", "Opel Plants"] },
      { name: "Berlin", population: 3_700_000, households: 2_000_000, avgKwhPerHousehold: 250, sources: { Gas: 35, Wind: 18, Solar: 15, Coal: 10, Import: 12, Biomass: 5, Other: 5 }, majorConsumers: ["U-Bahn/S-Bahn", "Government Buildings", "Data Centers", "Hospitals", "Universities"] },
      { name: "Hamburg", population: 1_900_000, households: 1_000_000, avgKwhPerHousehold: 280, sources: { Wind: 25, Gas: 25, Coal: 15, Solar: 8, Biomass: 10, Import: 10, Other: 7 }, majorConsumers: ["Hamburg Port", "Airbus Factory", "Shipbuilding", "Refineries"] },
      { name: "Saxony (Sachsen)", population: 4_000_000, households: 2_100_000, avgKwhPerHousehold: 270, sources: { Coal: 30, Wind: 22, Solar: 18, Gas: 12, Biomass: 10, Other: 8 }, majorConsumers: ["Semiconductor Fabs (Dresden)", "VW/Porsche Plants", "Coal Mines"] },
      { name: "Schleswig-Holstein", population: 2_900_000, households: 1_400_000, avgKwhPerHousehold: 300, sources: { Wind: 55, Gas: 12, Solar: 8, Biomass: 12, Import: 8, Other: 5 }, majorConsumers: ["Wind Energy", "Agriculture", "Ports", "Shipbuilding", "Tourism"] },
      { name: "Brandenburg", population: 2_500_000, households: 1_200_000, avgKwhPerHousehold: 290, sources: { Wind: 35, Coal: 22, Solar: 18, Gas: 8, Biomass: 10, Other: 7 }, majorConsumers: ["Tesla Gigafactory", "Coal Mining", "Wind Parks", "Agriculture"] },
      { name: "Rhineland-Palatinate", population: 4_100_000, households: 1_900_000, avgKwhPerHousehold: 280, sources: { Wind: 28, Gas: 18, Solar: 15, Hydro: 8, Biomass: 12, Coal: 8, Other: 11 }, majorConsumers: ["BASF Chemical Plants", "Wine Industry", "US Military Bases", "Pharmaceuticals"] },
      { name: "Thuringia (Thüringen)", population: 2_100_000, households: 1_100_000, avgKwhPerHousehold: 260, sources: { Wind: 25, Solar: 20, Gas: 15, Biomass: 18, Coal: 10, Other: 12 }, majorConsumers: ["Auto Parts Manufacturing", "Optics Industry (Zeiss/Jenoptik)", "Agriculture"] },
    ],
  },
  {
    name: "France", code: "FR", population: 68_000_000, totalDemandGwhMonth: 40_000, avgKwhPerHousehold: 400,
    sources: { Nuclear: 65, Hydro: 12, Wind: 10, Solar: 5, Gas: 5, Other: 3 },
    sectorBreakdown: { Residential: 35, Industrial: 28, Commercial: 25, Transport: 7, Other: 5 },
    states: [
      { name: "Île-de-France (Paris)", population: 12_000_000, households: 5_000_000, avgKwhPerHousehold: 350, sources: { Nuclear: 70, Wind: 8, Solar: 5, Gas: 8, Hydro: 4, Other: 5 }, majorConsumers: ["Paris Metro", "CDG Airport", "La Défense Business District", "Hospitals", "Museums"] },
      { name: "Provence-Alpes-Côte d'Azur", population: 5_000_000, households: 2_200_000, avgKwhPerHousehold: 380, sources: { Nuclear: 55, Solar: 18, Hydro: 10, Wind: 8, Gas: 5, Other: 4 }, majorConsumers: ["Tourism Hotels", "Ports", "Agriculture", "Petrochemicals", "Airports"] },
      { name: "Auvergne-Rhône-Alpes", population: 8_000_000, households: 3_500_000, avgKwhPerHousehold: 420, sources: { Nuclear: 60, Hydro: 22, Wind: 5, Solar: 5, Gas: 5, Other: 3 }, majorConsumers: ["Ski Resorts", "Pharmaceuticals", "Chemical Plants", "Lyon Metro", "Hydropower"] },
      { name: "Occitanie", population: 6_000_000, households: 2_800_000, avgKwhPerHousehold: 370, sources: { Nuclear: 55, Solar: 15, Hydro: 12, Wind: 10, Gas: 5, Other: 3 }, majorConsumers: ["Airbus Toulouse", "Wine Industry", "Solar Farms", "Tourism", "Agriculture"] },
      { name: "Nouvelle-Aquitaine", population: 6_100_000, households: 2_800_000, avgKwhPerHousehold: 390, sources: { Nuclear: 60, Hydro: 12, Wind: 10, Solar: 8, Gas: 5, Biomass: 3, Other: 2 }, majorConsumers: ["Bordeaux Wine Industry", "Aerospace", "Agriculture", "Tourism"] },
      { name: "Hauts-de-France", population: 6_000_000, households: 2_600_000, avgKwhPerHousehold: 380, sources: { Nuclear: 65, Wind: 15, Gas: 8, Solar: 5, Other: 7 }, majorConsumers: ["Eurotunnel", "Steel Industry", "Auto Manufacturing", "Agriculture", "Ports"] },
      { name: "Grand Est", population: 5_500_000, households: 2_400_000, avgKwhPerHousehold: 400, sources: { Nuclear: 65, Hydro: 8, Wind: 12, Solar: 5, Gas: 5, Other: 5 }, majorConsumers: ["Nuclear Plants (Cattenom)", "Wine Industry", "Auto Parts", "Agriculture"] },
      { name: "Brittany (Bretagne)", population: 3_400_000, households: 1_500_000, avgKwhPerHousehold: 370, sources: { Nuclear: 40, Wind: 20, Import: 15, Solar: 8, Biomass: 8, Hydro: 4, Other: 5 }, majorConsumers: ["Agriculture", "Fisheries", "Telecoms (Orange)", "Food Processing"] },
      { name: "Normandy (Normandie)", population: 3_300_000, households: 1_500_000, avgKwhPerHousehold: 380, sources: { Nuclear: 60, Wind: 15, Gas: 8, Solar: 5, Hydro: 5, Other: 7 }, majorConsumers: ["Nuclear Plants (Flamanville)", "Ports (Le Havre)", "Dairy Industry", "Oil Refinery"] },
    ],
  },
  {
    name: "Italy", code: "IT", population: 59_000_000, totalDemandGwhMonth: 26_000, avgKwhPerHousehold: 250,
    sources: { Gas: 42, Solar: 15, Hydro: 12, Wind: 10, Biomass: 5, Coal: 3, Import: 8, Other: 5 },
    sectorBreakdown: { Industrial: 38, Residential: 22, Commercial: 25, Transport: 10, Other: 5 },
    states: [
      { name: "Lombardy (Lombardia)", population: 10_000_000, households: 4_200_000, avgKwhPerHousehold: 280, sources: { Gas: 45, Hydro: 20, Solar: 12, Wind: 5, Import: 10, Biomass: 5, Other: 3 }, majorConsumers: ["Milan Metro", "Fashion Industry", "Manufacturing", "Data Centers", "Hospitals"] },
      { name: "Lazio", population: 5_700_000, households: 2_500_000, avgKwhPerHousehold: 240, sources: { Gas: 50, Solar: 15, Wind: 10, Import: 10, Hydro: 5, Biomass: 5, Other: 5 }, majorConsumers: ["Rome Metro", "Government Buildings", "Vatican", "Tourism", "Hospitals"] },
      { name: "Sicily (Sicilia)", population: 4_800_000, households: 2_000_000, avgKwhPerHousehold: 200, sources: { Gas: 35, Solar: 20, Wind: 18, Oil: 10, Import: 8, Biomass: 5, Other: 4 }, majorConsumers: ["Refineries", "Tourism", "Agriculture", "Ports", "Wind Farms"] },
      { name: "Veneto", population: 4_900_000, households: 2_100_000, avgKwhPerHousehold: 260, sources: { Gas: 45, Hydro: 18, Solar: 12, Wind: 8, Biomass: 8, Import: 5, Other: 4 }, majorConsumers: ["Manufacturing SMEs", "Venice Tourism", "Agriculture", "Ports", "Fashion"] },
      { name: "Piedmont (Piemonte)", population: 4_300_000, households: 2_000_000, avgKwhPerHousehold: 270, sources: { Gas: 40, Hydro: 22, Solar: 12, Wind: 5, Nuclear: 0, Biomass: 8, Import: 8, Other: 5 }, majorConsumers: ["Fiat/Stellantis Factories", "Ferrero", "Turin Metro", "Wine Industry"] },
      { name: "Emilia-Romagna", population: 4_500_000, households: 2_000_000, avgKwhPerHousehold: 270, sources: { Gas: 48, Solar: 15, Wind: 8, Hydro: 5, Biomass: 10, Import: 8, Other: 6 }, majorConsumers: ["Ferrari/Lamborghini", "Food Industry (Parma)", "Agriculture", "Ceramics"] },
      { name: "Campania", population: 5_700_000, households: 2_200_000, avgKwhPerHousehold: 210, sources: { Gas: 42, Solar: 18, Wind: 15, Geothermal: 5, Import: 10, Other: 10 }, majorConsumers: ["Naples Metro", "Ports", "Agriculture", "Aerospace (Leonardo)"] },
      { name: "Sardinia (Sardegna)", population: 1_600_000, households: 700_000, avgKwhPerHousehold: 240, sources: { Wind: 25, Solar: 20, Gas: 20, Coal: 12, Import: 12, Biomass: 5, Other: 6 }, majorConsumers: ["Aluminium Smelters", "Tourism", "Mining", "Agriculture", "Wind Farms"] },
    ],
  },
  {
    name: "Spain", code: "ES", population: 47_500_000, totalDemandGwhMonth: 22_000, avgKwhPerHousehold: 280,
    sources: { Wind: 25, Nuclear: 20, Gas: 15, Solar: 18, Hydro: 10, Coal: 2, Other: 10 },
    sectorBreakdown: { Industrial: 35, Residential: 25, Commercial: 28, Transport: 7, Other: 5 },
    states: [
      { name: "Catalonia (Catalunya)", population: 7_800_000, households: 3_200_000, avgKwhPerHousehold: 270, sources: { Nuclear: 30, Wind: 18, Solar: 18, Gas: 15, Hydro: 10, Other: 9 }, majorConsumers: ["Barcelona Metro", "Tourism Hotels", "Auto Factories", "Ports", "Airports"] },
      { name: "Madrid", population: 6_800_000, households: 2_800_000, avgKwhPerHousehold: 260, sources: { Gas: 25, Nuclear: 22, Wind: 18, Solar: 18, Hydro: 8, Other: 9 }, majorConsumers: ["Madrid Metro", "Government Buildings", "Data Centers", "Airports", "Shopping Centers"] },
      { name: "Andalusia (Andalucía)", population: 8_500_000, households: 3_400_000, avgKwhPerHousehold: 250, sources: { Solar: 30, Wind: 25, Gas: 18, Hydro: 8, Nuclear: 10, Other: 9 }, majorConsumers: ["Tourism Hotels", "Agriculture", "Solar Farms", "Ports", "Wind Farms"] },
      { name: "Valencia", population: 5_100_000, households: 2_100_000, avgKwhPerHousehold: 260, sources: { Nuclear: 35, Solar: 20, Wind: 15, Gas: 15, Hydro: 5, Other: 10 }, majorConsumers: ["Ceramics Industry", "Auto Manufacturing", "Tourism", "Ports", "Agriculture"] },
      { name: "Basque Country (Euskadi)", population: 2_200_000, households: 950_000, avgKwhPerHousehold: 290, sources: { Wind: 22, Gas: 20, Nuclear: 15, Solar: 12, Hydro: 15, Biomass: 8, Other: 8 }, majorConsumers: ["Bilbao Port", "Steel Industry", "Guggenheim Tourism", "Auto Parts"] },
      { name: "Galicia", population: 2_700_000, households: 1_100_000, avgKwhPerHousehold: 280, sources: { Wind: 35, Hydro: 22, Gas: 15, Nuclear: 10, Solar: 5, Biomass: 8, Other: 5 }, majorConsumers: ["Wind Farms", "Fisheries", "Ports (Vigo)", "Citroën Factory", "Agriculture"] },
      { name: "Castilla y León", population: 2_400_000, households: 1_050_000, avgKwhPerHousehold: 300, sources: { Wind: 35, Nuclear: 25, Hydro: 15, Solar: 12, Gas: 5, Other: 8 }, majorConsumers: ["Wind Farms", "Agriculture", "Auto Manufacturing", "Nuclear Plants"] },
    ],
  },
  {
    name: "Poland", code: "PL", population: 38_000_000, totalDemandGwhMonth: 15_000, avgKwhPerHousehold: 250,
    sources: { Coal: 55, Wind: 15, Gas: 10, Solar: 8, Biomass: 5, Hydro: 2, Other: 5 },
    sectorBreakdown: { Industrial: 38, Residential: 28, Commercial: 22, Transport: 7, Other: 5 },
    states: [
      { name: "Masovia (Mazowieckie/Warsaw)", population: 5_500_000, households: 2_200_000, avgKwhPerHousehold: 260, sources: { Coal: 50, Gas: 15, Wind: 12, Solar: 10, Biomass: 5, Other: 8 }, majorConsumers: ["Warsaw Metro", "Government HQ", "Data Centers", "Shopping Centers", "Factories"] },
      { name: "Silesia (Śląskie)", population: 4_500_000, households: 1_800_000, avgKwhPerHousehold: 280, sources: { Coal: 70, Wind: 8, Solar: 8, Gas: 5, Biomass: 5, Other: 4 }, majorConsumers: ["Coal Mines", "Steel Plants", "Chemical Industry", "Railways"] },
      { name: "Greater Poland (Wielkopolskie)", population: 3_500_000, households: 1_400_000, avgKwhPerHousehold: 260, sources: { Coal: 45, Wind: 22, Solar: 12, Gas: 8, Biomass: 8, Other: 5 }, majorConsumers: ["VW Factory (Poznań)", "Agriculture", "Food Processing", "Wind Farms"] },
      { name: "Lesser Poland (Małopolskie)", population: 3_400_000, households: 1_300_000, avgKwhPerHousehold: 250, sources: { Coal: 52, Gas: 15, Solar: 12, Wind: 8, Hydro: 5, Biomass: 5, Other: 3 }, majorConsumers: ["Steel Plants", "Tourism (Kraków)", "IT Industry", "Salt Mines"] },
      { name: "Pomerania (Pomorskie)", population: 2_400_000, households: 950_000, avgKwhPerHousehold: 270, sources: { Coal: 40, Wind: 28, Gas: 10, Solar: 8, Biomass: 8, Other: 6 }, majorConsumers: ["Gdańsk Port", "Shipbuilding", "Oil Refinery", "Wind Farms", "Tourism"] },
      { name: "Lower Silesia (Dolnośląskie)", population: 2_900_000, households: 1_200_000, avgKwhPerHousehold: 260, sources: { Coal: 55, Wind: 15, Solar: 10, Gas: 8, Hydro: 5, Other: 7 }, majorConsumers: ["LG/Toyota Factories", "Copper Mining", "IT Industry (Wrocław)"] },
    ],
  },
  {
    name: "Netherlands", code: "NL", population: 17_800_000, totalDemandGwhMonth: 10_000, avgKwhPerHousehold: 290,
    sources: { Gas: 40, Wind: 25, Solar: 15, Biomass: 5, Coal: 5, Nuclear: 3, Import: 5, Other: 2 },
    sectorBreakdown: { Industrial: 35, Commercial: 30, Residential: 22, Transport: 8, Other: 5 },
    states: [
      { name: "South Holland (Zuid-Holland)", population: 3_800_000, households: 1_600_000, avgKwhPerHousehold: 280, sources: { Gas: 38, Wind: 22, Solar: 15, Nuclear: 5, Import: 8, Coal: 5, Other: 7 }, majorConsumers: ["Rotterdam Port", "Refineries", "Data Centers", "The Hague Government"] },
      { name: "North Holland (Noord-Holland)", population: 2_900_000, households: 1_300_000, avgKwhPerHousehold: 270, sources: { Gas: 35, Wind: 25, Solar: 15, Biomass: 8, Import: 8, Other: 9 }, majorConsumers: ["Schiphol Airport", "Amsterdam Canal District", "Data Centers", "Banking Sector"] },
      { name: "North Brabant (Noord-Brabant)", population: 2_600_000, households: 1_100_000, avgKwhPerHousehold: 300, sources: { Gas: 35, Wind: 18, Solar: 20, Biomass: 10, Coal: 8, Other: 9 }, majorConsumers: ["ASML Semiconductor", "Philips", "DAF Trucks", "Agriculture"] },
      { name: "Gelderland", population: 2_100_000, households: 900_000, avgKwhPerHousehold: 290, sources: { Gas: 38, Wind: 20, Solar: 18, Biomass: 10, Import: 8, Other: 6 }, majorConsumers: ["Food Industry", "Agriculture", "Logistics Hubs", "Universities"] },
    ],
  },
  {
    name: "Belgium", code: "BE", population: 11_600_000, totalDemandGwhMonth: 7_500, avgKwhPerHousehold: 350,
    sources: { Nuclear: 40, Gas: 22, Wind: 15, Solar: 8, Biomass: 5, Import: 5, Other: 5 },
    sectorBreakdown: { Industrial: 35, Residential: 25, Commercial: 28, Transport: 7, Other: 5 },
    states: [
      { name: "Flanders (Vlaanderen)", population: 6_700_000, households: 2_800_000, avgKwhPerHousehold: 360, sources: { Nuclear: 40, Gas: 22, Wind: 15, Solar: 10, Biomass: 5, Other: 8 }, majorConsumers: ["Antwerp Port", "Chemical Plants", "Diamond Industry", "Data Centers"] },
      { name: "Brussels", population: 1_200_000, households: 550_000, avgKwhPerHousehold: 300, sources: { Gas: 35, Nuclear: 30, Wind: 10, Solar: 8, Import: 10, Other: 7 }, majorConsumers: ["EU Institutions", "NATO HQ", "Metro System", "Hotels", "Government Buildings"] },
      { name: "Wallonia (Wallonie)", population: 3_700_000, households: 1_600_000, avgKwhPerHousehold: 360, sources: { Nuclear: 42, Gas: 18, Wind: 15, Hydro: 5, Biomass: 8, Solar: 5, Other: 7 }, majorConsumers: ["Steel Industry", "GSK Pharmaceuticals", "Agriculture", "Universities"] },
    ],
  },
  {
    name: "Sweden", code: "SE", population: 10_500_000, totalDemandGwhMonth: 12_000, avgKwhPerHousehold: 700,
    sources: { Hydro: 40, Nuclear: 30, Wind: 20, Solar: 3, Biomass: 5, Other: 2 },
    sectorBreakdown: { Industrial: 38, Residential: 28, Commercial: 22, Transport: 7, Other: 5 },
    states: [
      { name: "Stockholm", population: 2_400_000, households: 1_000_000, avgKwhPerHousehold: 600, sources: { Nuclear: 35, Hydro: 30, Wind: 20, Solar: 5, Biomass: 5, Other: 5 }, majorConsumers: ["Stockholm Metro", "Ericsson HQ", "Data Centers", "Hospitals", "Ports"] },
      { name: "Västra Götaland (Gothenburg)", population: 1_750_000, households: 750_000, avgKwhPerHousehold: 680, sources: { Hydro: 38, Nuclear: 28, Wind: 20, Biomass: 8, Solar: 3, Other: 3 }, majorConsumers: ["Volvo Factories", "SKF", "Ports", "Oil Refineries", "Wind Farms"] },
      { name: "Skåne (Malmö)", population: 1_400_000, households: 600_000, avgKwhPerHousehold: 650, sources: { Wind: 35, Nuclear: 25, Hydro: 15, Import: 10, Solar: 5, Biomass: 5, Other: 5 }, majorConsumers: ["Øresund Bridge Traffic", "Agriculture", "Wind Farms", "Ports", "Universities"] },
      { name: "Norrbotten", population: 250_000, households: 120_000, avgKwhPerHousehold: 1200, sources: { Hydro: 70, Wind: 15, Nuclear: 5, Biomass: 5, Other: 5 }, majorConsumers: ["LKAB Iron Mines", "SSAB Steel (Green Hydrogen)", "Data Centers", "Forestry"] },
    ],
  },
  {
    name: "Norway", code: "NO", population: 5_500_000, totalDemandGwhMonth: 12_500, avgKwhPerHousehold: 1400,
    sources: { Hydro: 88, Wind: 8, Gas: 2, Other: 2 },
    sectorBreakdown: { Industrial: 42, Residential: 30, Commercial: 18, Transport: 5, Other: 5 },
    states: [
      { name: "Oslo", population: 700_000, households: 320_000, avgKwhPerHousehold: 1200, sources: { Hydro: 90, Wind: 5, Solar: 2, Other: 3 }, majorConsumers: ["Data Centers", "EV Charging", "Government Buildings", "Hospitals", "Metro"] },
      { name: "Rogaland (Stavanger)", population: 500_000, households: 200_000, avgKwhPerHousehold: 1500, sources: { Hydro: 85, Wind: 10, Gas: 3, Other: 2 }, majorConsumers: ["Oil & Gas Industry", "Aluminium Smelters", "Fish Processing", "Ports"] },
      { name: "Vestland (Bergen)", population: 640_000, households: 280_000, avgKwhPerHousehold: 1400, sources: { Hydro: 92, Wind: 5, Other: 3 }, majorConsumers: ["Fish Farming", "Ports", "Aluminium", "Universities", "Tourism"] },
      { name: "Trøndelag (Trondheim)", population: 470_000, households: 210_000, avgKwhPerHousehold: 1350, sources: { Hydro: 85, Wind: 10, Biomass: 3, Other: 2 }, majorConsumers: ["NTNU University", "Agriculture", "Wind Farms", "Fish Processing"] },
    ],
  },
  {
    name: "Denmark", code: "DK", population: 5_900_000, totalDemandGwhMonth: 3_000, avgKwhPerHousehold: 320,
    sources: { Wind: 55, Solar: 10, Gas: 10, Biomass: 12, Import: 8, Coal: 3, Other: 2 },
    sectorBreakdown: { Residential: 28, Commercial: 30, Industrial: 30, Transport: 7, Other: 5 },
    states: [
      { name: "Capital Region (Copenhagen)", population: 1_900_000, households: 800_000, avgKwhPerHousehold: 280, sources: { Wind: 55, Solar: 10, Biomass: 12, Gas: 8, Import: 10, Other: 5 }, majorConsumers: ["Metro System", "Ørsted HQ", "Data Centers", "Hospitals", "Maersk Ports"] },
      { name: "Central Denmark (Midtjylland)", population: 1_300_000, households: 570_000, avgKwhPerHousehold: 340, sources: { Wind: 60, Biomass: 15, Solar: 10, Gas: 8, Other: 7 }, majorConsumers: ["Vestas Wind Turbine Factory", "Agriculture", "Lego HQ (Billund)", "Ports"] },
      { name: "Southern Denmark (Syddanmark)", population: 1_200_000, households: 530_000, avgKwhPerHousehold: 330, sources: { Wind: 52, Biomass: 15, Gas: 12, Solar: 10, Import: 5, Other: 6 }, majorConsumers: ["Offshore Wind Farms", "Agriculture", "Ports", "Manufacturing"] },
    ],
  },
  {
    name: "Finland", code: "FI", population: 5_600_000, totalDemandGwhMonth: 7_500, avgKwhPerHousehold: 700,
    sources: { Nuclear: 35, Hydro: 18, Wind: 20, Biomass: 12, Gas: 5, Import: 5, Other: 5 },
    sectorBreakdown: { Industrial: 45, Residential: 25, Commercial: 20, Transport: 5, Other: 5 },
    states: [
      { name: "Uusimaa (Helsinki)", population: 1_700_000, households: 750_000, avgKwhPerHousehold: 600, sources: { Nuclear: 35, Wind: 20, Hydro: 15, Biomass: 10, Gas: 8, Import: 7, Other: 5 }, majorConsumers: ["Nokia HQ", "Data Centers", "Metro System", "Ports", "Heating Networks"] },
      { name: "Pirkanmaa (Tampere)", population: 520_000, households: 240_000, avgKwhPerHousehold: 680, sources: { Nuclear: 30, Hydro: 18, Wind: 22, Biomass: 15, Gas: 5, Other: 10 }, majorConsumers: ["Paper Mills", "Manufacturing", "Universities", "Heating Systems"] },
      { name: "Southwest Finland (Turku)", population: 490_000, households: 220_000, avgKwhPerHousehold: 660, sources: { Nuclear: 40, Wind: 22, Hydro: 12, Biomass: 12, Other: 14 }, majorConsumers: ["Shipbuilding (Meyer Turku)", "Pharmaceutical Industry", "Ports", "Agriculture"] },
    ],
  },
  {
    name: "Switzerland", code: "CH", population: 8_900_000, totalDemandGwhMonth: 5_500, avgKwhPerHousehold: 400,
    sources: { Hydro: 55, Nuclear: 30, Solar: 8, Wind: 2, Biomass: 3, Other: 2 },
    sectorBreakdown: { Industrial: 30, Residential: 30, Commercial: 28, Transport: 7, Other: 5 },
    states: [
      { name: "Zürich", population: 1_600_000, households: 700_000, avgKwhPerHousehold: 380, sources: { Hydro: 50, Nuclear: 30, Solar: 10, Wind: 3, Other: 7 }, majorConsumers: ["Banking Sector", "Data Centers", "Railways", "Hospitals", "Universities"] },
      { name: "Bern", population: 1_050_000, households: 450_000, avgKwhPerHousehold: 400, sources: { Hydro: 55, Nuclear: 30, Solar: 8, Biomass: 4, Other: 3 }, majorConsumers: ["Government Buildings", "Railways", "Hospitals", "Chocolate Industry", "Tourism"] },
      { name: "Geneva", population: 510_000, households: 220_000, avgKwhPerHousehold: 380, sources: { Hydro: 60, Nuclear: 20, Solar: 10, Import: 5, Other: 5 }, majorConsumers: ["CERN", "UN/WHO/WTO HQs", "Banking", "Watch Industry", "Airports"] },
      { name: "Valais", population: 350_000, households: 150_000, avgKwhPerHousehold: 450, sources: { Hydro: 85, Solar: 8, Nuclear: 3, Other: 4 }, majorConsumers: ["Hydropower Plants", "Aluminium Smelters", "Ski Resorts", "Agriculture"] },
    ],
  },
  {
    name: "Austria", code: "AT", population: 9_100_000, totalDemandGwhMonth: 6_000, avgKwhPerHousehold: 380,
    sources: { Hydro: 55, Wind: 12, Gas: 12, Solar: 8, Biomass: 8, Coal: 2, Other: 3 },
    sectorBreakdown: { Industrial: 35, Residential: 28, Commercial: 25, Transport: 7, Other: 5 },
    states: [
      { name: "Vienna (Wien)", population: 2_000_000, households: 950_000, avgKwhPerHousehold: 350, sources: { Gas: 25, Hydro: 30, Wind: 15, Solar: 10, Biomass: 10, Import: 5, Other: 5 }, majorConsumers: ["U-Bahn Metro", "Government Buildings", "Hospitals", "Tourism", "Opera House"] },
      { name: "Upper Austria (Oberösterreich)", population: 1_500_000, households: 650_000, avgKwhPerHousehold: 400, sources: { Hydro: 55, Gas: 15, Wind: 10, Solar: 8, Biomass: 8, Other: 4 }, majorConsumers: ["voestalpine Steel", "Auto Industry", "Chemical Plants", "Agriculture"] },
      { name: "Styria (Steiermark)", population: 1_250_000, households: 540_000, avgKwhPerHousehold: 390, sources: { Hydro: 48, Gas: 15, Wind: 12, Biomass: 10, Solar: 8, Coal: 4, Other: 3 }, majorConsumers: ["Magna Auto Parts", "Steel Industry", "Agriculture", "Universities (Graz)"] },
      { name: "Tyrol (Tirol)", population: 760_000, households: 310_000, avgKwhPerHousehold: 420, sources: { Hydro: 80, Solar: 5, Wind: 3, Biomass: 5, Gas: 4, Other: 3 }, majorConsumers: ["Ski Resorts (Innsbruck)", "Swarovski", "Tourism", "Hydropower Plants"] },
    ],
  },
  {
    name: "Portugal", code: "PT", population: 10_300_000, totalDemandGwhMonth: 4_500, avgKwhPerHousehold: 230,
    sources: { Wind: 25, Hydro: 20, Gas: 25, Solar: 15, Biomass: 5, Import: 5, Other: 5 },
    sectorBreakdown: { Industrial: 32, Residential: 28, Commercial: 28, Transport: 7, Other: 5 },
    states: [
      { name: "Lisbon (Lisboa)", population: 2_900_000, households: 1_200_000, avgKwhPerHousehold: 240, sources: { Gas: 28, Wind: 22, Hydro: 18, Solar: 15, Biomass: 5, Import: 7, Other: 5 }, majorConsumers: ["Lisbon Metro", "Tourism Hotels", "Ports", "Data Centers", "Government HQ"] },
      { name: "Porto (Norte)", population: 3_600_000, households: 1_400_000, avgKwhPerHousehold: 230, sources: { Hydro: 28, Wind: 25, Gas: 20, Solar: 10, Biomass: 8, Other: 9 }, majorConsumers: ["Porto Metro", "Wine Industry (Douro Valley)", "Textile Industry", "Ports"] },
      { name: "Algarve", population: 450_000, households: 200_000, avgKwhPerHousehold: 250, sources: { Solar: 30, Wind: 20, Gas: 22, Hydro: 10, Biomass: 5, Other: 13 }, majorConsumers: ["Tourism Hotels", "Golf Resorts", "Airports", "Agriculture", "Fisheries"] },
    ],
  },
  {
    name: "Greece", code: "GR", population: 10_400_000, totalDemandGwhMonth: 4_500, avgKwhPerHousehold: 300,
    sources: { Gas: 35, Solar: 20, Wind: 20, Coal: 8, Hydro: 8, Import: 5, Other: 4 },
    sectorBreakdown: { Industrial: 25, Residential: 35, Commercial: 25, Tourism: 10, Other: 5 },
    states: [
      { name: "Attica (Athens)", population: 3_800_000, households: 1_500_000, avgKwhPerHousehold: 310, sources: { Gas: 38, Solar: 18, Wind: 15, Coal: 8, Import: 8, Hydro: 5, Other: 8 }, majorConsumers: ["Athens Metro", "Government Buildings", "Ports (Piraeus)", "Tourism", "Hospitals"] },
      { name: "Central Macedonia (Thessaloniki)", population: 1_900_000, households: 750_000, avgKwhPerHousehold: 300, sources: { Gas: 35, Wind: 20, Solar: 18, Coal: 10, Hydro: 8, Other: 9 }, majorConsumers: ["Port of Thessaloniki", "Agriculture", "Oil Refinery", "Universities"] },
      { name: "Crete (Kriti)", population: 630_000, households: 270_000, avgKwhPerHousehold: 300, sources: { Oil: 30, Solar: 28, Wind: 22, Gas: 10, Other: 10 }, majorConsumers: ["Tourism Resorts", "Agriculture", "Airports", "Wind Farms", "Olive Oil Processing"] },
      { name: "South Aegean (Cyclades/Dodecanese)", population: 340_000, households: 150_000, avgKwhPerHousehold: 310, sources: { Oil: 35, Solar: 25, Wind: 25, Import: 8, Other: 7 }, majorConsumers: ["Tourism (Mykonos, Santorini)", "Hotels", "Desalination", "Ferries"] },
    ],
  },
  {
    name: "Czech Republic", code: "CZ", population: 10_800_000, totalDemandGwhMonth: 6_000, avgKwhPerHousehold: 300,
    sources: { Nuclear: 35, Coal: 25, Gas: 12, Solar: 8, Wind: 5, Biomass: 8, Hydro: 3, Other: 4 },
    sectorBreakdown: { Industrial: 38, Residential: 28, Commercial: 22, Transport: 7, Other: 5 },
    states: [
      { name: "Prague (Praha)", population: 1_350_000, households: 600_000, avgKwhPerHousehold: 280, sources: { Nuclear: 35, Gas: 18, Solar: 12, Wind: 8, Coal: 10, Import: 8, Other: 9 }, majorConsumers: ["Prague Metro", "Data Centers", "Tourism Hotels", "Government Buildings", "Hospitals"] },
      { name: "Moravia-Silesia", population: 1_200_000, households: 500_000, avgKwhPerHousehold: 320, sources: { Coal: 40, Nuclear: 25, Gas: 10, Solar: 8, Wind: 5, Biomass: 7, Other: 5 }, majorConsumers: ["Třinec Steel Works", "Coal Mines", "Auto Parts", "Chemical Plants"] },
      { name: "South Moravia (Brno)", population: 1_200_000, households: 500_000, avgKwhPerHousehold: 300, sources: { Nuclear: 40, Gas: 15, Solar: 15, Wind: 8, Biomass: 8, Coal: 8, Other: 6 }, majorConsumers: ["Auto Industry (Brno)", "Electronics", "Wine Industry", "Universities"] },
    ],
  },
  {
    name: "Romania", code: "RO", population: 19_000_000, totalDemandGwhMonth: 5_000, avgKwhPerHousehold: 200,
    sources: { Hydro: 25, Nuclear: 18, Gas: 18, Coal: 15, Wind: 12, Solar: 6, Biomass: 3, Other: 3 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 20, Agriculture: 8, Other: 7 },
    states: [
      { name: "Bucharest (București)", population: 1_800_000, households: 850_000, avgKwhPerHousehold: 250, sources: { Gas: 25, Nuclear: 20, Hydro: 18, Wind: 12, Solar: 10, Coal: 8, Other: 7 }, majorConsumers: ["Metro System", "Government Buildings", "Data Centers", "Shopping Malls"] },
      { name: "Cluj-Napoca (Transylvania)", population: 330_000, households: 140_000, avgKwhPerHousehold: 230, sources: { Hydro: 28, Nuclear: 20, Gas: 18, Wind: 12, Solar: 10, Biomass: 5, Other: 7 }, majorConsumers: ["IT Industry", "Universities", "Manufacturing", "Tourism"] },
      { name: "Constanța (Black Sea)", population: 280_000, households: 120_000, avgKwhPerHousehold: 240, sources: { Wind: 25, Gas: 20, Nuclear: 18, Coal: 12, Solar: 10, Hydro: 8, Other: 7 }, majorConsumers: ["Constanța Port", "Oil Refineries", "Tourism", "Shipbuilding", "Wind Farms"] },
      { name: "Timișoara (Banat)", population: 320_000, households: 140_000, avgKwhPerHousehold: 230, sources: { Gas: 22, Hydro: 20, Nuclear: 18, Solar: 15, Wind: 12, Coal: 5, Other: 8 }, majorConsumers: ["Continental Factory", "IT Sector", "Agriculture", "Universities"] },
    ],
  },
  {
    name: "Hungary", code: "HU", population: 9_700_000, totalDemandGwhMonth: 4_000, avgKwhPerHousehold: 280,
    sources: { Nuclear: 45, Gas: 18, Solar: 12, Coal: 5, Wind: 5, Biomass: 5, Import: 5, Other: 5 },
    sectorBreakdown: { Industrial: 32, Residential: 30, Commercial: 25, Transport: 8, Other: 5 },
    states: [
      { name: "Budapest", population: 1_750_000, households: 800_000, avgKwhPerHousehold: 270, sources: { Nuclear: 42, Gas: 22, Solar: 10, Import: 8, Wind: 5, Other: 13 }, majorConsumers: ["Budapest Metro", "Government Buildings", "Hospitals", "Universities", "Tourism"] },
      { name: "Győr-Moson-Sopron", population: 460_000, households: 180_000, avgKwhPerHousehold: 300, sources: { Nuclear: 48, Gas: 18, Solar: 12, Wind: 8, Biomass: 8, Other: 6 }, majorConsumers: ["Audi Factory", "Auto Parts Manufacturing", "Agriculture"] },
      { name: "Borsod-Abaúj-Zemplén", population: 650_000, households: 260_000, avgKwhPerHousehold: 280, sources: { Nuclear: 40, Coal: 15, Gas: 15, Solar: 10, Biomass: 10, Other: 10 }, majorConsumers: ["Steel Industry (Miskolc)", "Chemical Plants", "Mining", "Agriculture"] },
    ],
  },
  {
    name: "Ireland", code: "IE", population: 5_200_000, totalDemandGwhMonth: 2_800, avgKwhPerHousehold: 400,
    sources: { Wind: 35, Gas: 35, Solar: 5, Biomass: 5, Import: 10, Hydro: 5, Other: 5 },
    sectorBreakdown: { Commercial: 35, Residential: 30, Industrial: 25, Transport: 5, Other: 5 },
    states: [
      { name: "Dublin (Leinster)", population: 2_000_000, households: 650_000, avgKwhPerHousehold: 380, sources: { Gas: 38, Wind: 30, Import: 10, Solar: 5, Biomass: 5, Other: 12 }, majorConsumers: ["Data Centers (Google, Meta, AWS)", "Tech HQs", "Dublin Port", "Hospitals", "LUAS Tram"] },
      { name: "Cork (Munster)", population: 600_000, households: 220_000, avgKwhPerHousehold: 400, sources: { Wind: 40, Gas: 30, Hydro: 8, Solar: 5, Biomass: 8, Other: 9 }, majorConsumers: ["Pharmaceutical Plants (Pfizer, Eli Lilly)", "Cork Port", "Apple EU HQ", "Agriculture"] },
      { name: "Galway (Connacht)", population: 260_000, households: 90_000, avgKwhPerHousehold: 420, sources: { Wind: 48, Gas: 22, Hydro: 10, Biomass: 8, Solar: 3, Other: 9 }, majorConsumers: ["Medtronic", "Wind Farms", "Universities", "Tourism", "Aquaculture"] },
    ],
  },
  { name: "Iceland", code: "IS", population: 380_000, totalDemandGwhMonth: 1_600, avgKwhPerHousehold: 1200, sources: { Hydro: 70, Geothermal: 25, Wind: 3, Other: 2 }, sectorBreakdown: { Industrial: 75, Residential: 12, Commercial: 10, Other: 3 }, states: [
    { name: "Reykjavik", population: 140_000, households: 55_000, avgKwhPerHousehold: 900, sources: { Hydro: 65, Geothermal: 30, Wind: 3, Other: 2 }, majorConsumers: ["Aluminium Smelters", "Data Centers", "Geothermal Plants", "Government Buildings"] },
    { name: "Akureyri (Northeast)", population: 20_000, households: 8_000, avgKwhPerHousehold: 1100, sources: { Hydro: 75, Geothermal: 20, Other: 5 }, majorConsumers: ["Fisheries", "Agriculture", "Tourism", "University"] },
  ] },
  { name: "Luxembourg", code: "LU", population: 660_000, totalDemandGwhMonth: 550, avgKwhPerHousehold: 450, sources: { Import: 75, Wind: 10, Solar: 5, Gas: 5, Hydro: 3, Other: 2 }, sectorBreakdown: { Industrial: 30, Residential: 25, Commercial: 30, Transport: 10, Other: 5 }, states: [
    { name: "Luxembourg City", population: 130_000, households: 55_000, avgKwhPerHousehold: 460, sources: { Import: 75, Wind: 10, Solar: 5, Gas: 5, Other: 5 }, majorConsumers: ["Banking Sector", "EU Institutions", "Steel Plants", "Data Centers"] },
  ] },
  { name: "Malta", code: "MT", population: 530_000, totalDemandGwhMonth: 220, avgKwhPerHousehold: 300, sources: { Gas: 65, Import: 15, Solar: 12, Oil: 5, Other: 3 }, sectorBreakdown: { Residential: 30, Commercial: 28, Industrial: 20, Tourism: 15, Other: 7 }, states: [
    { name: "Valletta Region", population: 400_000, households: 160_000, avgKwhPerHousehold: 310, sources: { Gas: 65, Import: 15, Solar: 12, Oil: 5, Other: 3 }, majorConsumers: ["Tourism Hotels", "Desalination", "Government Buildings", "Ports"] },
  ] },
  { name: "Cyprus", code: "CY", population: 1_250_000, totalDemandGwhMonth: 450, avgKwhPerHousehold: 350, sources: { Oil: 45, Solar: 20, Gas: 15, Wind: 10, Import: 5, Other: 5 }, sectorBreakdown: { Residential: 32, Commercial: 28, Industrial: 20, Tourism: 12, Other: 8 }, states: [
    { name: "Nicosia", population: 350_000, households: 120_000, avgKwhPerHousehold: 360, sources: { Oil: 42, Solar: 22, Gas: 15, Wind: 10, Other: 11 }, majorConsumers: ["AC Systems", "Tourism", "Government Buildings", "Desalination"] },
    { name: "Limassol", population: 240_000, households: 85_000, avgKwhPerHousehold: 370, sources: { Oil: 40, Solar: 25, Gas: 15, Wind: 12, Other: 8 }, majorConsumers: ["Shipping Companies", "Tourism Hotels", "Ports", "Technology Hub"] },
  ] },
  { name: "Estonia", code: "EE", population: 1_350_000, totalDemandGwhMonth: 800, avgKwhPerHousehold: 320, sources: { Wind: 25, Oil_Shale: 30, Biomass: 15, Solar: 8, Gas: 10, Import: 7, Other: 5 }, sectorBreakdown: { Industrial: 32, Residential: 28, Commercial: 25, Transport: 10, Other: 5 }, states: [
    { name: "Tallinn (Harju)", population: 600_000, households: 250_000, avgKwhPerHousehold: 330, sources: { Wind: 25, Oil_Shale: 25, Gas: 15, Solar: 10, Import: 12, Biomass: 8, Other: 5 }, majorConsumers: ["Data Centers", "IT Sector (e-Estonia)", "Ports", "Government Buildings"] },
    { name: "Ida-Viru (Narva)", population: 140_000, households: 60_000, avgKwhPerHousehold: 350, sources: { Oil_Shale: 55, Wind: 15, Gas: 10, Solar: 5, Other: 15 }, majorConsumers: ["Oil Shale Power Plants", "Chemical Industry", "Mining"] },
  ] },
  { name: "Latvia", code: "LV", population: 1_850_000, totalDemandGwhMonth: 650, avgKwhPerHousehold: 250, sources: { Hydro: 30, Gas: 25, Wind: 18, Biomass: 12, Solar: 5, Import: 5, Other: 5 }, sectorBreakdown: { Industrial: 28, Residential: 30, Commercial: 25, Transport: 10, Other: 7 }, states: [
    { name: "Riga", population: 620_000, households: 260_000, avgKwhPerHousehold: 260, sources: { Gas: 28, Hydro: 25, Wind: 18, Biomass: 12, Solar: 5, Import: 7, Other: 5 }, majorConsumers: ["Ports", "Manufacturing", "Government Buildings", "Hospitals"] },
    { name: "Liepāja", population: 70_000, households: 30_000, avgKwhPerHousehold: 260, sources: { Wind: 30, Hydro: 22, Gas: 18, Biomass: 15, Other: 15 }, majorConsumers: ["Ports", "Metal Industry", "Wind Farms", "Military Base"] },
  ] },
  { name: "Lithuania", code: "LT", population: 2_800_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 260, sources: { Wind: 22, Gas: 18, Solar: 12, Biomass: 15, Import: 20, Hydro: 5, Other: 8 }, sectorBreakdown: { Industrial: 30, Residential: 28, Commercial: 25, Transport: 10, Other: 7 }, states: [
    { name: "Vilnius", population: 590_000, households: 250_000, avgKwhPerHousehold: 270, sources: { Gas: 22, Wind: 20, Solar: 12, Import: 18, Biomass: 15, Other: 13 }, majorConsumers: ["IT Industry", "Government Buildings", "Laser Industry", "Universities"] },
    { name: "Kaunas", population: 300_000, households: 130_000, avgKwhPerHousehold: 260, sources: { Wind: 22, Gas: 20, Biomass: 18, Import: 15, Solar: 12, Hydro: 5, Other: 8 }, majorConsumers: ["Manufacturing", "Food Processing", "Logistics", "Free Economic Zone"] },
  ] },
  { name: "Croatia", code: "HR", population: 3_900_000, totalDemandGwhMonth: 1_500, avgKwhPerHousehold: 280, sources: { Hydro: 30, Gas: 22, Wind: 15, Solar: 10, Coal: 5, Import: 10, Biomass: 5, Other: 3 }, sectorBreakdown: { Industrial: 25, Residential: 32, Commercial: 25, Tourism: 12, Other: 6 }, states: [
    { name: "Zagreb", population: 800_000, households: 340_000, avgKwhPerHousehold: 290, sources: { Gas: 28, Hydro: 25, Wind: 12, Solar: 10, Import: 12, Biomass: 5, Other: 8 }, majorConsumers: ["Government Buildings", "Manufacturing", "Tram System", "Hospitals"] },
    { name: "Split-Dalmatia", population: 455_000, households: 190_000, avgKwhPerHousehold: 280, sources: { Hydro: 30, Wind: 22, Solar: 18, Gas: 12, Import: 8, Other: 10 }, majorConsumers: ["Tourism Hotels", "Cement Plants", "Ports", "Wind Farms"] },
    { name: "Istria", population: 210_000, households: 95_000, avgKwhPerHousehold: 300, sources: { Wind: 25, Hydro: 20, Gas: 18, Solar: 15, Import: 12, Other: 10 }, majorConsumers: ["Tourism", "Wine Industry", "Shipbuilding", "Ports"] },
  ] },
  { name: "Serbia", code: "RS", population: 6_800_000, totalDemandGwhMonth: 3_200, avgKwhPerHousehold: 350, sources: { Coal: 55, Hydro: 25, Gas: 5, Wind: 5, Solar: 3, Import: 4, Other: 3 }, sectorBreakdown: { Residential: 35, Industrial: 30, Commercial: 20, Agriculture: 8, Other: 7 }, states: [
    { name: "Belgrade", population: 1_700_000, households: 650_000, avgKwhPerHousehold: 360, sources: { Coal: 50, Hydro: 20, Gas: 10, Wind: 5, Solar: 5, Import: 5, Other: 5 }, majorConsumers: ["Government Buildings", "Manufacturing", "Belgrade Metro (planned)", "Shopping Centers"] },
    { name: "Vojvodina", population: 1_850_000, households: 700_000, avgKwhPerHousehold: 340, sources: { Coal: 45, Wind: 15, Gas: 12, Hydro: 10, Solar: 8, Biomass: 5, Other: 5 }, majorConsumers: ["Agriculture", "Oil Refineries (Pančevo)", "Food Processing", "Wind Farms"] },
  ] },
  { name: "Bulgaria", code: "BG", population: 6_500_000, totalDemandGwhMonth: 3_500, avgKwhPerHousehold: 320, sources: { Nuclear: 32, Coal: 25, Hydro: 10, Wind: 8, Solar: 8, Gas: 8, Biomass: 5, Other: 4 }, sectorBreakdown: { Industrial: 32, Residential: 30, Commercial: 22, Agriculture: 8, Other: 8 }, states: [
    { name: "Sofia", population: 1_350_000, households: 550_000, avgKwhPerHousehold: 330, sources: { Nuclear: 35, Gas: 15, Coal: 15, Solar: 12, Wind: 8, Hydro: 5, Other: 10 }, majorConsumers: ["Sofia Metro", "Government Buildings", "IT Industry", "Shopping Centers"] },
    { name: "Plovdiv", population: 340_000, households: 140_000, avgKwhPerHousehold: 310, sources: { Nuclear: 30, Coal: 20, Solar: 15, Wind: 10, Gas: 10, Hydro: 8, Other: 7 }, majorConsumers: ["Manufacturing", "Agriculture", "Tourism", "Electronics"] },
    { name: "Varna", population: 340_000, households: 150_000, avgKwhPerHousehold: 320, sources: { Nuclear: 28, Wind: 18, Coal: 15, Solar: 12, Gas: 10, Hydro: 5, Other: 12 }, majorConsumers: ["Ports", "Tourism Hotels", "Chemical Plants", "Ship Repair"] },
  ] },
  { name: "Slovakia", code: "SK", population: 5_400_000, totalDemandGwhMonth: 2_600, avgKwhPerHousehold: 280, sources: { Nuclear: 52, Hydro: 15, Gas: 10, Solar: 8, Coal: 5, Wind: 3, Biomass: 4, Other: 3 }, sectorBreakdown: { Industrial: 38, Residential: 28, Commercial: 22, Transport: 7, Other: 5 }, states: [
    { name: "Bratislava", population: 475_000, households: 200_000, avgKwhPerHousehold: 300, sources: { Nuclear: 50, Gas: 15, Hydro: 10, Solar: 10, Wind: 5, Other: 10 }, majorConsumers: ["VW Factory", "Government Buildings", "Ports", "IT Industry"] },
    { name: "Košice", population: 240_000, households: 100_000, avgKwhPerHousehold: 290, sources: { Nuclear: 48, Coal: 12, Gas: 10, Hydro: 12, Solar: 8, Other: 10 }, majorConsumers: ["U.S. Steel Košice", "IT Sector", "Government Buildings"] },
  ] },
  { name: "Slovenia", code: "SI", population: 2_100_000, totalDemandGwhMonth: 1_200, avgKwhPerHousehold: 350, sources: { Nuclear: 35, Hydro: 30, Gas: 10, Solar: 8, Coal: 8, Biomass: 5, Other: 4 }, sectorBreakdown: { Industrial: 32, Residential: 30, Commercial: 25, Transport: 8, Other: 5 }, states: [
    { name: "Ljubljana", population: 290_000, households: 120_000, avgKwhPerHousehold: 340, sources: { Nuclear: 35, Hydro: 28, Gas: 12, Solar: 10, Coal: 5, Other: 10 }, majorConsumers: ["Government Buildings", "Pharmaceutical Industry", "Tourism", "Universities"] },
    { name: "Maribor", population: 115_000, households: 50_000, avgKwhPerHousehold: 360, sources: { Nuclear: 32, Hydro: 25, Coal: 15, Solar: 10, Gas: 8, Biomass: 5, Other: 5 }, majorConsumers: ["Auto Industry (TAM)", "Wine Industry", "Agriculture", "University"] },
  ] },
  { name: "Albania", code: "AL", population: 2_800_000, totalDemandGwhMonth: 600, avgKwhPerHousehold: 180, sources: { Hydro: 85, Solar: 5, Import: 5, Wind: 3, Other: 2 }, sectorBreakdown: { Residential: 40, Industrial: 22, Commercial: 20, Agriculture: 10, Other: 8 }, states: [
    { name: "Tirana", population: 900_000, households: 250_000, avgKwhPerHousehold: 200, sources: { Hydro: 82, Solar: 6, Import: 5, Wind: 4, Other: 3 }, majorConsumers: ["Government Buildings", "Shopping Centers", "Hospitals", "Construction"] },
    { name: "Durrës", population: 200_000, households: 70_000, avgKwhPerHousehold: 180, sources: { Hydro: 80, Solar: 8, Import: 5, Wind: 4, Other: 3 }, majorConsumers: ["Ports", "Tourism Hotels", "Manufacturing", "Fisheries"] },
  ] },
  { name: "North Macedonia", code: "MK", population: 2_100_000, totalDemandGwhMonth: 650, avgKwhPerHousehold: 250, sources: { Coal: 40, Hydro: 20, Gas: 12, Import: 10, Solar: 8, Wind: 5, Other: 5 }, sectorBreakdown: { Residential: 35, Industrial: 30, Commercial: 20, Transport: 8, Other: 7 }, states: [
    { name: "Skopje", population: 600_000, households: 180_000, avgKwhPerHousehold: 270, sources: { Coal: 38, Hydro: 18, Gas: 15, Import: 10, Solar: 10, Other: 9 }, majorConsumers: ["Steel Plants", "Government Buildings", "Shopping Centers"] },
  ] },
  { name: "Montenegro", code: "ME", population: 620_000, totalDemandGwhMonth: 300, avgKwhPerHousehold: 350, sources: { Hydro: 55, Coal: 20, Import: 10, Solar: 5, Wind: 5, Other: 5 }, sectorBreakdown: { Residential: 38, Industrial: 22, Commercial: 22, Tourism: 12, Other: 6 }, states: [
    { name: "Podgorica", population: 200_000, households: 65_000, avgKwhPerHousehold: 360, sources: { Hydro: 52, Coal: 20, Import: 10, Solar: 8, Wind: 5, Other: 5 }, majorConsumers: ["Aluminium Smelter", "Tourism", "Government Buildings"] },
  ] },
  { name: "Bosnia and Herzegovina", code: "BA", population: 3_200_000, totalDemandGwhMonth: 1_100, avgKwhPerHousehold: 280, sources: { Coal: 45, Hydro: 35, Wind: 5, Solar: 5, Import: 5, Other: 5 }, sectorBreakdown: { Industrial: 30, Residential: 35, Commercial: 20, Transport: 8, Other: 7 }, states: [
    { name: "Sarajevo", population: 280_000, households: 100_000, avgKwhPerHousehold: 300, sources: { Coal: 40, Hydro: 35, Wind: 5, Solar: 8, Import: 7, Other: 5 }, majorConsumers: ["Government Buildings", "Tram System", "Hospitals", "Shopping Centers"] },
    { name: "Banja Luka", population: 185_000, households: 70_000, avgKwhPerHousehold: 290, sources: { Hydro: 40, Coal: 35, Gas: 8, Solar: 5, Wind: 5, Other: 7 }, majorConsumers: ["Government Buildings", "Manufacturing", "Food Processing", "Agriculture"] },
  ] },
  { name: "Moldova", code: "MD", population: 2_600_000, totalDemandGwhMonth: 400, avgKwhPerHousehold: 120, sources: { Import: 65, Gas: 15, Wind: 5, Solar: 5, Biomass: 5, Other: 5 }, sectorBreakdown: { Residential: 38, Industrial: 22, Commercial: 20, Agriculture: 12, Other: 8 }, states: [
    { name: "Chișinău", population: 700_000, households: 250_000, avgKwhPerHousehold: 140, sources: { Import: 60, Gas: 18, Solar: 8, Wind: 5, Other: 9 }, majorConsumers: ["Government Buildings", "Wine Industry", "Hospitals", "Markets"] },
  ] },
  { name: "Belarus", code: "BY", population: 9_200_000, totalDemandGwhMonth: 3_500, avgKwhPerHousehold: 280, sources: { Gas: 55, Nuclear: 25, Import: 5, Hydro: 3, Wind: 3, Solar: 3, Other: 6 }, sectorBreakdown: { Industrial: 38, Residential: 28, Commercial: 18, Agriculture: 10, Other: 6 }, states: [
    { name: "Minsk", population: 2_000_000, households: 800_000, avgKwhPerHousehold: 300, sources: { Gas: 50, Nuclear: 28, Import: 5, Solar: 5, Wind: 5, Other: 7 }, majorConsumers: ["Tractor Factories", "Government Buildings", "Metro System", "IT Sector"] },
    { name: "Gomel", population: 530_000, households: 210_000, avgKwhPerHousehold: 280, sources: { Gas: 52, Nuclear: 25, Solar: 5, Other: 18 }, majorConsumers: ["Chemical Plants", "Oil Refinery", "Agriculture", "Government Buildings"] },
  ] },
  {
    name: "Ukraine", code: "UA", population: 37_000_000, totalDemandGwhMonth: 12_000, avgKwhPerHousehold: 200,
    sources: { Nuclear: 50, Coal: 15, Hydro: 8, Gas: 8, Solar: 8, Wind: 5, Biomass: 3, Other: 3 },
    sectorBreakdown: { Industrial: 35, Residential: 30, Commercial: 18, Agriculture: 10, Other: 7 },
    states: [
      { name: "Kyiv", population: 3_000_000, households: 1_200_000, avgKwhPerHousehold: 240, sources: { Nuclear: 48, Gas: 15, Hydro: 10, Solar: 10, Wind: 5, Other: 12 }, majorConsumers: ["Metro System", "Government Buildings", "IT Industry", "Hospitals", "Universities"] },
      { name: "Dnipropetrovsk (Dnipro)", population: 3_200_000, households: 1_300_000, avgKwhPerHousehold: 220, sources: { Nuclear: 45, Coal: 18, Gas: 10, Hydro: 8, Solar: 8, Other: 11 }, majorConsumers: ["Steel Plants", "Rocket Industry", "Mining", "Agriculture"] },
      { name: "Kharkiv", population: 2_700_000, households: 1_100_000, avgKwhPerHousehold: 210, sources: { Nuclear: 48, Gas: 15, Coal: 12, Solar: 8, Wind: 5, Other: 12 }, majorConsumers: ["Tractor Factory", "IT Industry", "Universities", "Metro System"] },
      { name: "Lviv", population: 2_500_000, households: 950_000, avgKwhPerHousehold: 190, sources: { Nuclear: 45, Gas: 15, Hydro: 12, Solar: 10, Wind: 8, Biomass: 5, Other: 5 }, majorConsumers: ["IT Industry", "Tourism", "Coffee Processing", "Railways", "Government Buildings"] },
      { name: "Odesa", population: 2_400_000, households: 950_000, avgKwhPerHousehold: 200, sources: { Nuclear: 42, Gas: 18, Wind: 12, Solar: 10, Hydro: 5, Other: 13 }, majorConsumers: ["Ports", "Oil Refinery", "Tourism", "Agriculture", "Shipbuilding"] },
    ],
  },
  {
    name: "Russia", code: "RU", population: 144_000_000, totalDemandGwhMonth: 95_000, avgKwhPerHousehold: 350,
    sources: { Gas: 45, Nuclear: 20, Hydro: 18, Coal: 10, Wind: 2, Solar: 2, Other: 3 },
    sectorBreakdown: { Industrial: 40, Residential: 25, Commercial: 18, Transport: 10, Other: 7 },
    states: [
      { name: "Moscow", population: 13_000_000, households: 5_000_000, avgKwhPerHousehold: 350, sources: { Gas: 55, Nuclear: 25, Hydro: 5, Solar: 3, Wind: 2, Other: 10 }, majorConsumers: ["Moscow Metro", "Government Buildings", "Data Centers", "Hospitals", "Industries"] },
      { name: "Saint Petersburg", population: 5_400_000, households: 2_200_000, avgKwhPerHousehold: 330, sources: { Gas: 45, Nuclear: 30, Hydro: 8, Wind: 5, Solar: 2, Other: 10 }, majorConsumers: ["Ports", "Metro System", "Shipbuilding", "Gazprom HQ", "Hospitals"] },
      { name: "Sverdlovsk (Yekaterinburg)", population: 4_300_000, households: 1_700_000, avgKwhPerHousehold: 380, sources: { Gas: 38, Nuclear: 22, Coal: 18, Hydro: 12, Other: 10 }, majorConsumers: ["Steel Plants", "Copper Smelters", "Machine Building", "Mining"] },
      { name: "Krasnoyarsk Krai", population: 2_900_000, households: 1_100_000, avgKwhPerHousehold: 400, sources: { Hydro: 55, Coal: 20, Gas: 12, Nuclear: 5, Other: 8 }, majorConsumers: ["Krasnoyarsk Dam", "Aluminium Smelters", "Gold Mines", "Timber Industry"] },
      { name: "Tatarstan (Kazan)", population: 4_000_000, households: 1_500_000, avgKwhPerHousehold: 350, sources: { Gas: 55, Nuclear: 15, Hydro: 10, Oil: 10, Other: 10 }, majorConsumers: ["Oil Industry (Tatneft)", "Petrochemicals", "Auto Manufacturing (KAMAZ)", "Kazan Metro"] },
      { name: "Novosibirsk", population: 2_800_000, households: 1_100_000, avgKwhPerHousehold: 370, sources: { Coal: 35, Hydro: 25, Gas: 20, Nuclear: 10, Other: 10 }, majorConsumers: ["Akademgorodok Science Hub", "Metro System", "Manufacturing", "Mining HQs"] },
      { name: "Tyumen (Western Siberia)", population: 3_800_000, households: 1_400_000, avgKwhPerHousehold: 400, sources: { Gas: 65, Oil: 15, Hydro: 8, Coal: 5, Other: 7 }, majorConsumers: ["Oil & Gas Fields", "Pipelines", "Petrochemicals", "Heating Systems"] },
    ],
  },
  { name: "Turkey", code: "TR", population: 85_000_000, totalDemandGwhMonth: 28_000, avgKwhPerHousehold: 250, sources: { Gas: 25, Coal: 22, Hydro: 20, Wind: 12, Solar: 10, Nuclear: 5, Geothermal: 3, Other: 3 }, sectorBreakdown: { Industrial: 40, Residential: 25, Commercial: 22, Agriculture: 8, Other: 5 }, states: [
    { name: "Istanbul", population: 16_000_000, households: 5_500_000, avgKwhPerHousehold: 280, sources: { Gas: 35, Coal: 18, Wind: 12, Solar: 10, Hydro: 8, Import: 8, Nuclear: 5, Other: 4 }, majorConsumers: ["Istanbul Metro", "Bosphorus Bridges", "Shopping Malls", "Airports", "Hospitals"] },
    { name: "Ankara", population: 5_700_000, households: 2_000_000, avgKwhPerHousehold: 260, sources: { Gas: 30, Coal: 22, Wind: 12, Solar: 12, Hydro: 10, Nuclear: 8, Other: 6 }, majorConsumers: ["Government Buildings", "Ankara Metro", "Defense Industry", "Universities"] },
    { name: "Izmir", population: 4_400_000, households: 1_600_000, avgKwhPerHousehold: 270, sources: { Gas: 28, Wind: 20, Solar: 18, Geothermal: 12, Coal: 10, Hydro: 5, Other: 7 }, majorConsumers: ["Petrochemicals (Aliağa)", "Ports", "Tourism", "Izmir Metro", "Wind Farms"] },
    { name: "Bursa", population: 3_200_000, households: 1_100_000, avgKwhPerHousehold: 290, sources: { Gas: 32, Hydro: 18, Coal: 15, Wind: 12, Solar: 10, Geothermal: 8, Other: 5 }, majorConsumers: ["Auto Factories (Fiat, Renault)", "Textile Industry", "Agriculture", "Ski Resorts"] },
    { name: "Antalya", population: 2_600_000, households: 900_000, avgKwhPerHousehold: 280, sources: { Hydro: 25, Solar: 22, Gas: 20, Wind: 12, Coal: 10, Other: 11 }, majorConsumers: ["Tourism Hotels", "Agriculture (Greenhouses)", "Airports", "Ports"] },
    { name: "Adana", population: 2_300_000, households: 750_000, avgKwhPerHousehold: 280, sources: { Gas: 28, Hydro: 20, Solar: 18, Coal: 15, Wind: 10, Other: 9 }, majorConsumers: ["Agriculture", "Textile Industry", "Food Processing", "Petrochemicals"] },
  ] },
  { name: "Andorra", code: "AD", population: 80_000, totalDemandGwhMonth: 45, avgKwhPerHousehold: 400, sources: { Import: 80, Hydro: 15, Solar: 3, Other: 2 }, sectorBreakdown: { Tourism: 35, Residential: 28, Commercial: 25, Government: 7, Other: 5 }, states: [
    { name: "Andorra la Vella", population: 22_000, households: 9_000, avgKwhPerHousehold: 420, sources: { Import: 78, Hydro: 15, Solar: 4, Other: 3 }, majorConsumers: ["Ski Resorts", "Shopping Centers", "Hotels", "Government Buildings"] },
  ] },
  { name: "Monaco", code: "MC", population: 40_000, totalDemandGwhMonth: 50, avgKwhPerHousehold: 600, sources: { Import: 90, Solar: 5, Other: 5 }, sectorBreakdown: { Commercial: 40, Residential: 25, Tourism: 22, Government: 8, Other: 5 }, states: [
    { name: "Monaco", population: 40_000, households: 18_000, avgKwhPerHousehold: 600, sources: { Import: 90, Solar: 5, Other: 5 }, majorConsumers: ["Casinos", "Luxury Hotels", "Yachts", "F1 Circuit", "Government Buildings"] },
  ] },
  { name: "San Marino", code: "SM", population: 34_000, totalDemandGwhMonth: 25, avgKwhPerHousehold: 380, sources: { Import: 85, Solar: 8, Wind: 3, Other: 4 }, sectorBreakdown: { Residential: 30, Commercial: 28, Industrial: 22, Tourism: 12, Other: 8 }, states: [
    { name: "San Marino City", population: 4_500, households: 1_800, avgKwhPerHousehold: 400, sources: { Import: 85, Solar: 8, Wind: 3, Other: 4 }, majorConsumers: ["Tourism", "Government Buildings", "Shopping Centers"] },
  ] },
  { name: "Liechtenstein", code: "LI", population: 39_000, totalDemandGwhMonth: 35, avgKwhPerHousehold: 500, sources: { Import: 75, Hydro: 15, Solar: 5, Other: 5 }, sectorBreakdown: { Industrial: 35, Residential: 28, Commercial: 25, Government: 7, Other: 5 }, states: [
    { name: "Vaduz", population: 5_800, households: 2_500, avgKwhPerHousehold: 520, sources: { Import: 75, Hydro: 15, Solar: 5, Other: 5 }, majorConsumers: ["Manufacturing", "Banking Sector", "Government Buildings"] },
  ] },
  { name: "Vatican City", code: "VA", population: 800, totalDemandGwhMonth: 0.8, avgKwhPerHousehold: 0, sources: { Solar: 20, Import: 80 }, sectorBreakdown: { Government: 60, Commercial: 25, Other: 15 }, states: [
    { name: "Vatican City", population: 800, households: 200, avgKwhPerHousehold: 300, sources: { Import: 80, Solar: 20 }, majorConsumers: ["St. Peter's Basilica", "Vatican Museums", "Apostolic Palace", "Radio Vatican"] },
  ] },
];
