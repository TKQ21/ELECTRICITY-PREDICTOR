import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Globe, Search, MapPin, Factory, Building2, Zap, TrendingUp, AlertTriangle, Leaf, Users } from "lucide-react";
import { countriesData, type CountryData, type StateData, calculateAreaDemand, getSourceRisk, calculatePerCapita, estimateCO2, renewableScore, calculateConfidenceRange, energySourceRisk } from "@/data/countryData";

const SOURCE_COLORS: Record<string, string> = {
  Coal: "hsl(25, 100%, 55%)", Gas: "hsl(45, 100%, 55%)", Solar: "hsl(50, 100%, 60%)", Wind: "hsl(185, 100%, 50%)",
  Hydro: "hsl(200, 100%, 60%)", Nuclear: "hsl(330, 100%, 60%)", Biomass: "hsl(150, 100%, 45%)", Oil: "hsl(0, 85%, 55%)",
  Geothermal: "hsl(15, 80%, 50%)", Import: "hsl(270, 100%, 65%)", Other: "hsl(220, 30%, 50%)", Oil_Shale: "hsl(30, 60%, 45%)",
};

const getColor = (key: string) => SOURCE_COLORS[key] || "hsl(220, 30%, 50%)";
const SECTOR_COLORS = ["hsl(185, 100%, 50%)", "hsl(150, 100%, 45%)", "hsl(45, 100%, 55%)", "hsl(25, 100%, 55%)", "hsl(330, 100%, 60%)", "hsl(0, 85%, 55%)"];

// Neon tooltip style for Recharts
const neonTooltipStyle = {
  background: "hsl(230, 40%, 12%)",
  border: "1px solid hsl(185, 100%, 50%)",
  borderRadius: 10,
  boxShadow: "0 0 15px hsl(185, 100%, 50%, 0.3), 0 0 30px hsl(185, 100%, 50%, 0.1)",
  padding: "10px 14px",
};

const NeonChartTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={neonTooltipStyle}>
      {label && <div className="text-xs font-display text-neon-skyblue mb-1">{label}</div>}
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2 text-sm font-body">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color || p.fill }} />
          <span className="text-neon-cyan/80">{p.name}:</span>
          <span className="font-display text-neon-green">{typeof p.value === 'number' ? p.value.toFixed(1) : p.value}%</span>
        </div>
      ))}
    </div>
  );
};

const NeonSectorTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ ...neonTooltipStyle, borderColor: "hsl(330, 100%, 60%)", boxShadow: "0 0 15px hsl(330, 100%, 60%, 0.3)" }}>
      {label && <div className="text-xs font-display text-neon-pink mb-1">{label}</div>}
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2 text-sm font-body">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color || p.fill }} />
          <span className="text-neon-yellow/80">{p.name || 'Value'}:</span>
          <span className="font-display text-neon-orange">{typeof p.value === 'number' ? p.value.toFixed(1) : p.value}%</span>
        </div>
      ))}
    </div>
  );
};

// Neon border color cycle for cards
const NEON_BORDER_COLORS = [
  "border-neon-darkblue/50 shadow-[0_0_8px_hsl(230,80%,55%,0.15)]",
  "border-neon-green/50 shadow-[0_0_8px_hsl(150,100%,45%,0.15)]",
  "border-neon-yellow/50 shadow-[0_0_8px_hsl(45,100%,55%,0.15)]",
  "border-neon-purple/50 shadow-[0_0_8px_hsl(270,100%,65%,0.15)]",
  "border-neon-pink/50 shadow-[0_0_8px_hsl(330,100%,60%,0.15)]",
  "border-neon-cyan/50 shadow-[0_0_8px_hsl(185,100%,50%,0.15)]",
];

const CountryExplorer = () => {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [selectedState, setSelectedState] = useState<StateData | null>(null);

  const filtered = useMemo(() => {
    if (!search) return countriesData;
    const q = search.toLowerCase();
    return countriesData.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.states.some(s => s.name.toLowerCase().includes(q))
    );
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

        {/* Search - improved */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-cyan/60 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by country name, code, or state... (e.g. India, US, California, Tokyo)"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="neon-input w-full pl-12 text-sm"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-neon-cyan text-xs font-body">
              ✕ Clear
            </button>
          )}
          {search && (
            <div className="absolute right-20 top-1/2 -translate-y-1/2 text-xs text-neon-green/60 font-body">
              {filtered.length} results
            </div>
          )}
        </div>

        {/* Country Grid with neon borders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6 max-h-[400px] overflow-y-auto pr-2">
          {filtered.map((country, idx) => (
            <button key={country.code} onClick={() => { setSelectedCountry(country); setSelectedState(null); }}
              className={`p-3 rounded-lg border-2 transition-all duration-300 text-left font-body ${
                selectedCountry?.code === country.code
                  ? "border-neon-cyan bg-neon-cyan/5 shadow-[0_0_15px_hsl(185,100%,50%,0.2)]"
                  : `${NEON_BORDER_COLORS[idx % NEON_BORDER_COLORS.length]} bg-card hover:bg-muted/30`
              }`}>
              <div className="font-display text-sm text-foreground">{country.name}</div>
              <div className="text-xs text-muted-foreground">{(country.population / 1e6).toFixed(0)}M pop</div>
              <div className="text-[10px] text-neon-cyan/50 mt-0.5">{country.states.length} states</div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedCountry && (
            <motion.div key={selectedCountry.code} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
              {/* Country Stats with neon borders */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { label: "Population", value: selectedCountry.population >= 1e9 ? `${(selectedCountry.population / 1e9).toFixed(2)}B` : `${(selectedCountry.population / 1e6).toFixed(1)}M`, color: "text-neon-cyan", border: "border-neon-darkblue/40" },
                  { label: "Monthly Demand", value: `${selectedCountry.totalDemandGwhMonth >= 1000 ? `${(selectedCountry.totalDemandGwhMonth / 1000).toFixed(0)}K` : selectedCountry.totalDemandGwhMonth} GWh`, color: "text-neon-orange", border: "border-neon-orange/30" },
                  { label: "Avg/Household", value: `${selectedCountry.avgKwhPerHousehold} kWh`, sub: confidenceRange ? `Range: ${confidenceRange.min}–${confidenceRange.max}` : "", color: "text-neon-green", border: "border-neon-green/30" },
                  { label: "Per Capita", value: perCapita.toFixed(1), sub: "kWh/person/mo", icon: <Users className="w-3 h-3" />, color: "text-neon-skyblue", border: "border-neon-purple/30" },
                  { label: "Renewable", value: `${renScore}%`, sub: "penetration score", icon: <Leaf className="w-3 h-3" />, color: renScore >= 60 ? "text-neon-green" : renScore >= 30 ? "text-neon-yellow" : "text-neon-red", border: "border-neon-yellow/30" },
                  { label: "CO₂ Estimate", value: co2 >= 1e6 ? `${(co2 / 1e6).toFixed(1)}M` : co2 >= 1000 ? `${(co2 / 1000).toFixed(0)}K` : `${co2}`, sub: "tonnes/month", color: "text-neon-pink", border: "border-neon-pink/30" },
                ].map((stat, i) => (
                  <div key={stat.label} className={`bg-card rounded-lg p-4 border-2 ${stat.border}`}>
                    <div className="text-xs text-muted-foreground font-body flex items-center gap-1">{stat.icon}{stat.label}</div>
                    <div className={`text-xl font-display ${stat.color}`}>{stat.value}</div>
                    {stat.sub && <div className="text-[10px] text-muted-foreground">{stat.sub}</div>}
                  </div>
                ))}
              </div>

              {/* States */}
              <div>
                <h3 className="font-display text-lg text-neon-skyblue mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Select State / Region ({selectedCountry.states.length})
                </h3>
                <div className="flex flex-wrap gap-2 max-h-[200px] overflow-y-auto">
                  {selectedCountry.states.map((state, idx) => (
                    <button key={state.name} onClick={() => setSelectedState(selectedState?.name === state.name ? null : state)}
                      className={`px-4 py-2 rounded-lg border-2 text-sm font-body transition-all ${
                        selectedState?.name === state.name
                          ? "border-neon-green bg-neon-green/5 text-neon-green shadow-[0_0_10px_hsl(150,100%,45%,0.2)]"
                          : `${NEON_BORDER_COLORS[idx % NEON_BORDER_COLORS.length]} text-muted-foreground hover:text-foreground`
                      }`}>
                      {state.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* State details */}
              {selectedState && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl p-4 space-y-4 border-2 border-neon-green/20">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: "Population", value: `${(selectedState.population / 1e6).toFixed(1)}M`, color: "text-neon-cyan", border: "border-neon-darkblue/30" },
                      { label: "Households", value: `${(selectedState.households / 1e6).toFixed(1)}M`, color: "text-neon-green", border: "border-neon-green/30" },
                      { label: "Avg kWh/HH", value: `${selectedState.avgKwhPerHousehold}`, sub: `Range: ${calculateConfidenceRange(selectedState.avgKwhPerHousehold).min}–${calculateConfidenceRange(selectedState.avgKwhPerHousehold).max}`, color: "text-neon-yellow", border: "border-neon-yellow/30" },
                      { label: "Per Capita", value: `${calculatePerCapita(selectedState.households * selectedState.avgKwhPerHousehold, selectedState.population).toFixed(1)}`, sub: "kWh/person/mo", color: "text-neon-skyblue", border: "border-neon-purple/30" },
                    ].map(stat => (
                      <div key={stat.label} className={`bg-muted rounded-lg p-3 border ${stat.border}`}>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                        <div className={`font-display ${stat.color}`}>{stat.value}</div>
                        {stat.sub && <div className="text-[10px] text-muted-foreground">{stat.sub}</div>}
                      </div>
                    ))}
                  </div>

                  {/* Major Consumers */}
                  <div>
                    <h4 className="text-sm font-display text-neon-orange mb-2 flex items-center gap-2"><Factory className="w-4 h-4" /> Major Electricity Consumers</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedState.majorConsumers.map(c => (
                        <span key={c} className="px-3 py-1 rounded-full border border-neon-orange/30 text-xs text-neon-orange font-body bg-card">⚡ {c}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Charts */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Energy Sources Pie */}
                <div className="bg-card rounded-xl p-4 border-2 border-neon-yellow/20">
                  <h3 className="font-display text-sm text-neon-yellow mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Electricity Sources (%)
                    <span className="text-xs text-muted-foreground ml-auto">{selectedState?.name || selectedCountry.name}</span>
                  </h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                      <Pie data={sourceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={({ name, value }) => `${name} ${value}%`} labelLine={false}>
                        {sourceData.map((entry) => (<Cell key={entry.name} fill={getColor(entry.name)} />))}
                      </Pie>
                      <Tooltip content={<NeonChartTooltip />} />
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
                <div className="bg-card rounded-xl p-4 border-2 border-neon-pink/20">
                  <h3 className="font-display text-sm text-neon-pink mb-4 flex items-center gap-2"><Building2 className="w-4 h-4" /> Sector-wise Demand (%)</h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={sectorData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(230, 40%, 20%)" />
                      <XAxis dataKey="name" tick={{ fill: "hsl(185, 40%, 55%)", fontSize: 11 }} />
                      <YAxis tick={{ fill: "hsl(185, 40%, 55%)", fontSize: 12 }} />
                      <Tooltip content={<NeonSectorTooltip />} />
                      <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                        {sectorData.map((_, i) => (<Cell key={i} fill={SECTOR_COLORS[i % SECTOR_COLORS.length]} />))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Future Projection */}
              {futureDemand && (
                <div className="bg-card rounded-xl p-4 border-2 border-neon-green/20">
                  <h3 className="font-display text-sm text-neon-green mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> Future Demand Projection ({selectedCountry.name})
                    <span className="text-[10px] text-muted-foreground ml-auto">Reference baseline year: 2024</span>
                  </h3>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { label: "Current (2026)", value: futureDemand.current, color: "text-neon-cyan", border: "border-neon-cyan/30" },
                      { label: "2027", value: futureDemand.year1, color: "text-neon-green", border: "border-neon-green/30" },
                      { label: "2029", value: futureDemand.year3, color: "text-neon-yellow", border: "border-neon-yellow/30" },
                      { label: "2031", value: futureDemand.year5, color: "text-neon-orange", border: "border-neon-orange/30" },
                    ].map(item => (
                      <div key={item.label} className={`text-center bg-muted rounded-lg p-3 border ${item.border}`}>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                        <div className={`font-display text-lg ${item.color}`}>{item.value >= 1000 ? `${(item.value / 1000).toFixed(0)}K` : item.value}</div>
                        <div className="text-[10px] text-muted-foreground">GWh/mo</div>
                        <div className="text-[9px] text-neon-purple/60">{calculateConfidenceRange(item.value).min}–{calculateConfidenceRange(item.value).max}</div>
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
        <div className="mt-4 p-3 rounded-lg bg-muted/50 border border-neon-purple/20">
          <p className="text-xs text-muted-foreground font-body italic text-center">
            ⚠️ All figures are model-based estimates derived from household consumption and standard sectoral ratios. Actual demand may vary based on real-time usage, weather, and policy factors.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default CountryExplorer;
