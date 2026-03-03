import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Globe, Search, MapPin, Factory, Building2, Zap, TrendingUp, AlertTriangle, Leaf, Users } from "lucide-react";
import { countriesData, type CountryData, type StateData, calculateAreaDemand, getSourceRisk, calculatePerCapita, estimateCO2, renewableScore, calculateConfidenceRange, energySourceRisk } from "@/data/countryData";

const SOURCE_COLORS: Record<string, string> = {
  Coal: "hsl(25, 100%, 55%)", Gas: "hsl(45, 100%, 55%)", Solar: "hsl(50, 100%, 60%)", Wind: "hsl(185, 100%, 50%)",
  Hydro: "hsl(200, 100%, 60%)", Nuclear: "hsl(330, 100%, 60%)", Biomass: "hsl(150, 100%, 45%)", Oil: "hsl(0, 85%, 55%)",
  Geothermal: "hsl(15, 80%, 50%)", Import: "hsl(270, 70%, 60%)", Other: "hsl(220, 30%, 50%)", Oil_Shale: "hsl(30, 60%, 45%)",
};

const getColor = (key: string) => SOURCE_COLORS[key] || "hsl(220, 30%, 50%)";
const SECTOR_COLORS = ["hsl(185, 100%, 50%)", "hsl(150, 100%, 45%)", "hsl(45, 100%, 55%)", "hsl(25, 100%, 55%)", "hsl(330, 100%, 60%)", "hsl(0, 85%, 55%)"];

const CountryExplorer = () => {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [selectedState, setSelectedState] = useState<StateData | null>(null);

  const filtered = useMemo(() => {
    if (!search) return countriesData;
    const q = search.toLowerCase();
    return countriesData.filter(c => c.name.toLowerCase().includes(q) || c.states.some(s => s.name.toLowerCase().includes(q)));
  }, [search]);

  const currentSources = selectedState?.sources || selectedCountry?.sources || {};
  const sourceData = Object.entries(currentSources).map(([name, value]) => ({ name, value }));
  const currentSectors = selectedCountry?.sectorBreakdown || {};
  const sectorData = Object.entries(currentSectors).map(([name, value]) => ({ name, value }));

  const futureDemand = selectedCountry ? {
    current: selectedCountry.totalDemandGwhMonth,
    year1: Math.round(selectedCountry.totalDemandGwhMonth * 1.04),
    year3: Math.round(selectedCountry.totalDemandGwhMonth * 1.12),
    year5: Math.round(selectedCountry.totalDemandGwhMonth * 1.22),
  } : null;

  const perCapita = selectedCountry ? calculatePerCapita(selectedCountry.totalDemandGwhMonth * 1_000_000, selectedCountry.population) : 0;
  const co2 = selectedCountry ? estimateCO2(selectedCountry.totalDemandGwhMonth, selectedCountry.sources) : 0;
  const renScore = selectedCountry ? renewableScore(selectedCountry.sources) : 0;
  const confidenceRange = selectedCountry ? calculateConfidenceRange(selectedCountry.avgKwhPerHousehold) : null;

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative z-10">
      <div className="neon-card">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="text-neon-green w-7 h-7" />
          <h2 className="text-2xl font-display text-foreground">Country & State Explorer</h2>
          <span className="ml-auto text-xs text-muted-foreground font-body bg-muted px-2 py-1 rounded-full">{countriesData.length} Countries</span>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input type="text" placeholder="Search country or state... (India, California, Tokyo...)" value={search} onChange={e => setSearch(e.target.value)} className="neon-input w-full pl-10" />
        </div>

        {/* Country Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6 max-h-[400px] overflow-y-auto pr-2">
          {filtered.map(country => (
            <button key={country.code} onClick={() => { setSelectedCountry(country); setSelectedState(null); }}
              className={`p-3 rounded-lg border transition-all duration-300 text-left font-body ${selectedCountry?.code === country.code ? "border-neon-cyan bg-muted shadow-[0_0_15px_hsl(185,100%,50%,0.2)]" : "border-border hover:border-neon-cyan/50 bg-card"}`}>
              <div className="font-display text-sm text-foreground">{country.name}</div>
              <div className="text-xs text-muted-foreground">{(country.population / 1e6).toFixed(0)}M pop</div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedCountry && (
            <motion.div key={selectedCountry.code} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
              {/* Country Stats - Extended */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-xs text-muted-foreground font-body">Population</div>
                  <div className="text-xl font-display text-neon-cyan">{selectedCountry.population >= 1e9 ? `${(selectedCountry.population / 1e9).toFixed(2)}B` : `${(selectedCountry.population / 1e6).toFixed(1)}M`}</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-xs text-muted-foreground font-body">Monthly Demand</div>
                  <div className="text-xl font-display text-neon-orange">{selectedCountry.totalDemandGwhMonth >= 1000 ? `${(selectedCountry.totalDemandGwhMonth / 1000).toFixed(0)}K` : selectedCountry.totalDemandGwhMonth} GWh</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-xs text-muted-foreground font-body">Avg/Household</div>
                  <div className="text-xl font-display text-neon-green">{selectedCountry.avgKwhPerHousehold} kWh</div>
                  {confidenceRange && <div className="text-[10px] text-muted-foreground">Range: {confidenceRange.min}–{confidenceRange.max}</div>}
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-xs text-muted-foreground font-body flex items-center gap-1"><Users className="w-3 h-3" /> Per Capita</div>
                  <div className="text-xl font-display text-neon-skyblue">{perCapita.toFixed(1)}</div>
                  <div className="text-[10px] text-muted-foreground">kWh/person/mo</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-xs text-muted-foreground font-body flex items-center gap-1"><Leaf className="w-3 h-3" /> Renewable</div>
                  <div className={`text-xl font-display ${renScore >= 60 ? "text-neon-green" : renScore >= 30 ? "text-neon-yellow" : "text-neon-red"}`}>{renScore}%</div>
                  <div className="text-[10px] text-muted-foreground">penetration score</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-xs text-muted-foreground font-body">CO₂ Estimate</div>
                  <div className="text-xl font-display text-neon-pink">{co2 >= 1e6 ? `${(co2 / 1e6).toFixed(1)}M` : co2 >= 1000 ? `${(co2 / 1000).toFixed(0)}K` : co2}</div>
                  <div className="text-[10px] text-muted-foreground">tonnes/month</div>
                </div>
              </div>

              {/* States */}
              <div>
                <h3 className="font-display text-lg text-neon-skyblue mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Select State / Region ({selectedCountry.states.length})
                </h3>
                <div className="flex flex-wrap gap-2 max-h-[200px] overflow-y-auto">
                  {selectedCountry.states.map(state => (
                    <button key={state.name} onClick={() => setSelectedState(selectedState?.name === state.name ? null : state)}
                      className={`px-4 py-2 rounded-lg border text-sm font-body transition-all ${selectedState?.name === state.name ? "border-neon-green bg-muted text-neon-green shadow-[0_0_10px_hsl(150,100%,45%,0.3)]" : "border-border text-muted-foreground hover:border-neon-green/50"}`}>
                      {state.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* State details */}
              {selectedState && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-muted rounded-xl p-4 space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div>
                      <div className="text-xs text-muted-foreground">Population</div>
                      <div className="font-display text-neon-cyan">{(selectedState.population / 1e6).toFixed(1)}M</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Households</div>
                      <div className="font-display text-neon-green">{(selectedState.households / 1e6).toFixed(1)}M</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Avg kWh/HH</div>
                      <div className="font-display text-neon-yellow">{selectedState.avgKwhPerHousehold}</div>
                      <div className="text-[10px] text-muted-foreground">Range: {calculateConfidenceRange(selectedState.avgKwhPerHousehold).min}–{calculateConfidenceRange(selectedState.avgKwhPerHousehold).max}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Per Capita</div>
                      <div className="font-display text-neon-skyblue">{calculatePerCapita(selectedState.households * selectedState.avgKwhPerHousehold, selectedState.population).toFixed(1)}</div>
                      <div className="text-[10px] text-muted-foreground">kWh/person/mo</div>
                    </div>
                  </div>

                  {/* Major Consumers */}
                  <div>
                    <h4 className="text-sm font-display text-neon-orange mb-2 flex items-center gap-2"><Factory className="w-4 h-4" /> Major Electricity Consumers</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedState.majorConsumers.map(c => (
                        <span key={c} className="px-3 py-1 rounded-full border border-neon-orange/30 text-xs text-neon-orange font-body bg-background/50">⚡ {c}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Charts */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Energy Sources Pie with Risk Tags */}
                <div className="bg-muted rounded-xl p-4">
                  <h3 className="font-display text-sm text-neon-yellow mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Electricity Sources (%)
                    <span className="text-xs text-muted-foreground ml-auto">{selectedState?.name || selectedCountry.name}</span>
                  </h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                      <Pie data={sourceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={({ name, value }) => `${name} ${value}%`} labelLine={false}>
                        {sourceData.map((entry) => (<Cell key={entry.name} fill={getColor(entry.name)} />))}
                      </Pie>
                      <Tooltip contentStyle={{ background: "hsl(220, 20%, 7%)", border: "1px solid hsl(185, 100%, 50%)", borderRadius: 8, color: "hsl(185, 100%, 50%)" }} />
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Risk Tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {sourceData.map(s => {
                      const risk = getSourceRisk(s.name);
                      return (
                        <span key={s.name} className="inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] font-body border border-border" style={{ color: risk.color }}>
                          <AlertTriangle className="w-2.5 h-2.5" /> {s.name}: {risk.risk}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Sector Breakdown Bar */}
                <div className="bg-muted rounded-xl p-4">
                  <h3 className="font-display text-sm text-neon-pink mb-4 flex items-center gap-2"><Building2 className="w-4 h-4" /> Sector-wise Demand (%)</h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={sectorData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(185, 80%, 20%)" />
                      <XAxis dataKey="name" tick={{ fill: "hsl(185, 40%, 55%)", fontSize: 11 }} />
                      <YAxis tick={{ fill: "hsl(185, 40%, 55%)", fontSize: 12 }} />
                      <Tooltip contentStyle={{ background: "hsl(220, 20%, 7%)", border: "1px solid hsl(330, 100%, 60%)", borderRadius: 8, color: "hsl(330, 100%, 60%)" }} />
                      <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                        {sectorData.map((_, i) => (<Cell key={i} fill={SECTOR_COLORS[i % SECTOR_COLORS.length]} />))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Future Projection */}
              {futureDemand && (
                <div className="bg-muted rounded-xl p-4">
                  <h3 className="font-display text-sm text-neon-green mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> Future Demand Projection ({selectedCountry.name})
                    <span className="text-[10px] text-muted-foreground ml-auto">Reference baseline year: 2024</span>
                  </h3>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { label: "Current (2026)", value: futureDemand.current, color: "text-neon-cyan" },
                      { label: "2027", value: futureDemand.year1, color: "text-neon-green" },
                      { label: "2029", value: futureDemand.year3, color: "text-neon-yellow" },
                      { label: "2031", value: futureDemand.year5, color: "text-neon-orange" },
                    ].map(item => (
                      <div key={item.label} className="text-center">
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                        <div className={`font-display text-lg ${item.color}`}>{item.value >= 1000 ? `${(item.value / 1000).toFixed(0)}K` : item.value}</div>
                        <div className="text-[10px] text-muted-foreground">GWh/mo</div>
                        <div className="text-[9px] text-muted-foreground">{calculateConfidenceRange(item.value).min}–{calculateConfidenceRange(item.value).max}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-2 italic text-center">Historical baseline aligned with publicly reported averages</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Disclaimer */}
        <div className="mt-4 p-3 rounded-lg bg-muted/50 border border-border/50">
          <p className="text-xs text-muted-foreground font-body italic text-center">
            ⚠️ All figures are model-based estimates derived from household consumption and standard sectoral ratios. Actual demand may vary based on real-time usage, weather, and policy factors.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default CountryExplorer;