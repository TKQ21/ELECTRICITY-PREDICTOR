import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer, PieChart, Pie } from "recharts";
import { MapPin, Home, Zap, Calculator, Info, SlidersHorizontal } from "lucide-react";
import { calculateAreaDemand, defaultSectorModel, countriesData, calculateConfidenceRange, applyScenario, scenarios, type ScenarioKey, assumptions } from "@/data/countryData";

const SECTOR_COLORS = ["hsl(185, 100%, 50%)", "hsl(150, 100%, 45%)", "hsl(45, 100%, 55%)", "hsl(25, 100%, 55%)", "hsl(330, 100%, 60%)"];

const AreaPredictor = () => {
  const [households, setHouseholds] = useState("");
  const [avgKwh, setAvgKwh] = useState("");
  const [areaType, setAreaType] = useState<"urban" | "industrial" | "remote">("urban");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateAreaDemand> | null>(null);
  const [useCountryData, setUseCountryData] = useState(false);
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>("normal");
  const [showAssumptions, setShowAssumptions] = useState(false);

  const countryObj = countriesData.find(c => c.name === selectedCountry);
  const stateObj = countryObj?.states.find(s => s.name === selectedState);

  const handlePredict = () => {
    let h = parseInt(households);
    let avg = parseFloat(avgKwh);
    if (useCountryData && stateObj) {
      h = h || stateObj.households;
      avg = avg || stateObj.avgKwhPerHousehold;
    }
    if (!h || !avg) { alert("Please enter households and average kWh, or select a country/state"); return; }
    const res = calculateAreaDemand(h, avg, areaType);
    setResult(res);
  };

  const handleCountryChange = (name: string) => {
    setSelectedCountry(name);
    setSelectedState("");
    const c = countriesData.find(cc => cc.name === name);
    if (c) setAvgKwh(c.avgKwhPerHousehold.toString());
  };

  const handleStateChange = (name: string) => {
    setSelectedState(name);
    const s = countryObj?.states.find(ss => ss.name === name);
    if (s) { setHouseholds(s.households.toString()); setAvgKwh(s.avgKwhPerHousehold.toString()); }
  };

  const scenarioMultiplied = result ? applyScenario(result.totalDemandGwhPerMonth, activeScenario) : 0;
  const confidenceRange = result ? calculateConfidenceRange(scenarioMultiplied) : null;

  const sectorData = result
    ? Object.entries(result.sectorBreakdownGwh).map(([name, value]) => ({ name, value: Math.round(applyScenario(value, activeScenario) * 100) / 100 }))
    : [];

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative z-10">
      <div className="neon-card">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="text-neon-orange w-7 h-7" />
          <h2 className="text-2xl font-display text-foreground">Area Electricity Predictor</h2>
        </div>

        {/* Toggle */}
        <div className="flex gap-3 mb-6">
          <button onClick={() => setUseCountryData(false)} className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${!useCountryData ? "neon-button" : "border border-border text-muted-foreground hover:border-neon-cyan/50"}`}>Manual Input</button>
          <button onClick={() => setUseCountryData(true)} className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${useCountryData ? "neon-button-green neon-button" : "border border-border text-muted-foreground hover:border-neon-green/50"}`}>
            <MapPin className="w-4 h-4 inline mr-1" /> Country / State Data
          </button>
        </div>

        {useCountryData && (
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <select value={selectedCountry} onChange={e => handleCountryChange(e.target.value)} className="neon-input">
              <option value="">Select Country</option>
              {countriesData.map(c => (<option key={c.code} value={c.name}>{c.name} ({(c.population / 1e6).toFixed(0)}M)</option>))}
            </select>
            <select value={selectedState} onChange={e => handleStateChange(e.target.value)} className="neon-input" disabled={!countryObj}>
              <option value="">Select State / Region</option>
              {countryObj?.states.map(s => (<option key={s.name} value={s.name}>{s.name} ({(s.population / 1e6).toFixed(1)}M)</option>))}
            </select>
          </div>
        )}

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="text-xs text-muted-foreground font-body mb-1 block"><Home className="w-3 h-3 inline mr-1" /> Number of Households</label>
            <input type="number" placeholder="e.g. 50000" value={households} onChange={e => setHouseholds(e.target.value)} className="neon-input w-full" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-body mb-1 block"><Zap className="w-3 h-3 inline mr-1" /> Avg kWh per Household/Month</label>
            <input type="number" placeholder="e.g. 185" value={avgKwh} onChange={e => setAvgKwh(e.target.value)} className="neon-input w-full" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-body mb-1 block">Area Type</label>
            <select value={areaType} onChange={e => setAreaType(e.target.value as any)} className="neon-input w-full">
              <option value="urban">Urban (City)</option>
              <option value="industrial">Industrial Zone</option>
              <option value="remote">Remote / Village</option>
            </select>
          </div>
        </div>

        <button onClick={handlePredict} className="neon-button-orange neon-button flex items-center gap-2 mx-auto">
          <Zap className="w-5 h-5" /> Predict Area Electricity Demand
        </button>

        {result && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 space-y-6">
            {/* Scenario Toggle */}
            <div className="bg-muted rounded-xl p-4">
              <h3 className="font-display text-sm text-neon-skyblue mb-3 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" /> Scenario Toggle (What-If Analysis)
              </h3>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(scenarios) as ScenarioKey[]).map(key => (
                  <button key={key} onClick={() => setActiveScenario(key)}
                    className={`px-3 py-2 rounded-lg text-xs font-body transition-all ${activeScenario === key ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 shadow-[0_0_10px_hsl(185,100%,50%,0.2)]" : "border border-border text-muted-foreground hover:border-neon-cyan/30"}`}>
                    {scenarios[key].label}
                    <div className="text-[9px] text-muted-foreground mt-0.5">{scenarios[key].description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Total Demand with Confidence Range */}
            <div className="text-center">
              <div className="text-sm text-muted-foreground font-body">Total Area Electricity Demand {activeScenario !== "normal" && `(${scenarios[activeScenario].label})`}</div>
              <div className="text-4xl font-display neon-gradient-text">{scenarioMultiplied.toFixed(2)} GWh/month</div>
              {confidenceRange && (
                <div className="text-sm text-neon-yellow font-body mt-1">
                  Likely Range: {confidenceRange.min.toFixed(2)} – {confidenceRange.max.toFixed(2)} GWh/month
                </div>
              )}
              <div className="text-[10px] text-muted-foreground font-body mt-1 italic">{confidenceRange?.label}</div>
              <div className="text-sm text-muted-foreground font-body mt-1">
                = {(scenarioMultiplied * 1000).toFixed(0)} MWh/month = {(scenarioMultiplied * 1_000_000).toFixed(0)} kWh/month
              </div>
            </div>

            {/* Assumptions Panel */}
            <div className="bg-muted rounded-xl p-4">
              <button onClick={() => setShowAssumptions(!showAssumptions)} className="w-full flex items-center gap-2 text-sm font-display text-neon-green">
                <Info className="w-4 h-4" /> Assumptions & Methodology
                <span className="ml-auto text-xs text-muted-foreground">{showAssumptions ? "▲ Hide" : "▼ Show"}</span>
              </button>
              {showAssumptions && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-3 space-y-2">
                  {[
                    { label: "Avg Household Size", value: assumptions.avgHouseholdSize },
                    { label: "Annual Growth Rate", value: assumptions.annualGrowthRate },
                    { label: "Sector % Source", value: assumptions.sectorDistributionSource },
                    { label: "Urban vs Rural Factor", value: assumptions.urbanRuralFactor },
                    { label: "Reference Year", value: assumptions.referenceYear },
                  ].map(item => (
                    <div key={item.label} className="flex justify-between items-center text-xs font-body py-1 border-b border-border/30">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="text-neon-cyan">{item.value}</span>
                    </div>
                  ))}
                  <p className="text-[10px] text-muted-foreground italic mt-2">{assumptions.historicalNote}</p>
                </motion.div>
              )}
            </div>

            {/* Sector Breakdown Charts */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-xl p-4">
                <h3 className="font-display text-sm text-neon-pink mb-3">Sector Breakdown (GWh/month)</h3>
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
              <div className="bg-muted rounded-xl p-4">
                <h3 className="font-display text-sm text-neon-yellow mb-3">Sector Distribution</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={sectorData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={({ name, value }) => `${name}: ${value}`}>
                      {sectorData.map((_, i) => (<Cell key={i} fill={SECTOR_COLORS[i % SECTOR_COLORS.length]} />))}
                    </Pie>
                    <Tooltip contentStyle={{ background: "hsl(220, 20%, 7%)", border: "1px solid hsl(45, 100%, 55%)", borderRadius: 8, color: "hsl(45, 100%, 55%)" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
              <p className="text-xs text-muted-foreground font-body italic text-center">
                ⚠️ All figures are model-based estimates derived from household consumption and standard sectoral ratios. Actual demand may vary based on real-time usage, weather, and policy factors.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default AreaPredictor;