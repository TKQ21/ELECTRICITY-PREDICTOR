import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer, PieChart, Pie } from "recharts";
import { MapPin, Home, Zap, Calculator } from "lucide-react";
import { calculateAreaDemand, defaultSectorModel, countriesData } from "@/data/countryData";

const SECTOR_COLORS = ["hsl(185, 100%, 50%)", "hsl(150, 100%, 45%)", "hsl(45, 100%, 55%)", "hsl(25, 100%, 55%)", "hsl(330, 100%, 60%)"];

const AreaPredictor = () => {
  const [households, setHouseholds] = useState("");
  const [avgKwh, setAvgKwh] = useState("");
  const [areaType, setAreaType] = useState<"urban" | "industrial" | "remote">("urban");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateAreaDemand> | null>(null);
  const [useCountryData, setUseCountryData] = useState(false);

  const countryObj = countriesData.find(c => c.name === selectedCountry);
  const stateObj = countryObj?.states.find(s => s.name === selectedState);

  const handlePredict = () => {
    let h = parseInt(households);
    let avg = parseFloat(avgKwh);

    if (useCountryData && stateObj) {
      h = h || stateObj.households;
      avg = avg || stateObj.avgKwhPerHousehold;
    }

    if (!h || !avg) {
      alert("Please enter households and average kWh, or select a country/state");
      return;
    }

    const res = calculateAreaDemand(h, avg, areaType);
    setResult(res);
  };

  const handleCountryChange = (name: string) => {
    setSelectedCountry(name);
    setSelectedState("");
    const c = countriesData.find(cc => cc.name === name);
    if (c) {
      setAvgKwh(c.avgKwhPerHousehold.toString());
    }
  };

  const handleStateChange = (name: string) => {
    setSelectedState(name);
    const s = countryObj?.states.find(ss => ss.name === name);
    if (s) {
      setHouseholds(s.households.toString());
      setAvgKwh(s.avgKwhPerHousehold.toString());
    }
  };

  const sectorData = result
    ? Object.entries(result.sectorBreakdownGwh).map(([name, value]) => ({ name, value: Math.round(value * 100) / 100 }))
    : [];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative z-10"
    >
      <div className="neon-card">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="text-neon-orange w-7 h-7" />
          <h2 className="text-2xl font-display text-foreground">Area Electricity Predictor</h2>
        </div>

        {/* Toggle */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setUseCountryData(false)}
            className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${!useCountryData ? "neon-button" : "border border-border text-muted-foreground hover:border-neon-cyan/50"}`}
          >
            Manual Input
          </button>
          <button
            onClick={() => setUseCountryData(true)}
            className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${useCountryData ? "neon-button-green neon-button" : "border border-border text-muted-foreground hover:border-neon-green/50"}`}
          >
            <MapPin className="w-4 h-4 inline mr-1" />
            Country / State Data
          </button>
        </div>

        {useCountryData && (
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <select
              value={selectedCountry}
              onChange={e => handleCountryChange(e.target.value)}
              className="neon-input"
            >
              <option value="">Select Country</option>
              {countriesData.map(c => (
                <option key={c.code} value={c.name}>{c.name} ({(c.population / 1e6).toFixed(0)}M)</option>
              ))}
            </select>

            <select
              value={selectedState}
              onChange={e => handleStateChange(e.target.value)}
              className="neon-input"
              disabled={!countryObj}
            >
              <option value="">Select State / Region</option>
              {countryObj?.states.map(s => (
                <option key={s.name} value={s.name}>{s.name} ({(s.population / 1e6).toFixed(0)}M)</option>
              ))}
            </select>
          </div>
        )}

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="text-xs text-muted-foreground font-body mb-1 block">
              <Home className="w-3 h-3 inline mr-1" /> Number of Households
            </label>
            <input
              type="number"
              placeholder="e.g. 50000"
              value={households}
              onChange={e => setHouseholds(e.target.value)}
              className="neon-input w-full"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-body mb-1 block">
              <Zap className="w-3 h-3 inline mr-1" /> Avg kWh per Household/Month
            </label>
            <input
              type="number"
              placeholder="e.g. 185"
              value={avgKwh}
              onChange={e => setAvgKwh(e.target.value)}
              className="neon-input w-full"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-body mb-1 block">Area Type</label>
            <select
              value={areaType}
              onChange={e => setAreaType(e.target.value as any)}
              className="neon-input w-full"
            >
              <option value="urban">Urban (City)</option>
              <option value="industrial">Industrial Zone</option>
              <option value="remote">Remote / Village</option>
            </select>
          </div>
        </div>

        <button onClick={handlePredict} className="neon-button-orange neon-button flex items-center gap-2 mx-auto">
          <Zap className="w-5 h-5" />
          Predict Area Electricity Demand
        </button>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 space-y-6"
          >
            {/* Total Demand */}
            <div className="text-center">
              <div className="text-sm text-muted-foreground font-body">Total Area Electricity Demand</div>
              <div className="text-4xl font-display neon-gradient-text">
                {result.totalDemandGwhPerMonth.toFixed(2)} GWh/month
              </div>
              <div className="text-sm text-muted-foreground font-body mt-1">
                = {(result.totalDemandGwhPerMonth * 1000).toFixed(0)} MWh/month = {(result.totalDemandGwhPerMonth * 1_000_000).toFixed(0)} kWh/month
              </div>
            </div>

            {/* Sector Breakdown */}
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
                      {sectorData.map((_, i) => (
                        <Cell key={i} fill={SECTOR_COLORS[i % SECTOR_COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-muted rounded-xl p-4">
                <h3 className="font-display text-sm text-neon-yellow mb-3">Sector Distribution</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={sectorData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={({ name, value }) => `${name}: ${value}`}>
                      {sectorData.map((_, i) => (
                        <Cell key={i} fill={SECTOR_COLORS[i % SECTOR_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: "hsl(220, 20%, 7%)", border: "1px solid hsl(45, 100%, 55%)", borderRadius: 8, color: "hsl(45, 100%, 55%)" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default AreaPredictor;
