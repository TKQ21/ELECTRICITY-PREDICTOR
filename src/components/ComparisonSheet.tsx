import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowUpDown, Download, Search, TrendingUp, BarChart3, ChevronDown } from "lucide-react";
import { countriesData, getCountryGrowthRate, getProjectedDemand } from "@/data/countryData";

type SortKey = "name" | "population" | "demand" | "avgKwh" | "futureDemand";
type SortDir = "asc" | "desc";

const ComparisonSheet = () => {
  const [sortKey, setSortKey] = useState<SortKey>("demand");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [search, setSearch] = useState("");
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const allSources = useMemo(() => {
    const set = new Set<string>();
    countriesData.forEach(c => Object.keys(c.sources).forEach(s => set.add(s)));
    return Array.from(set).sort();
  }, []);

  const toggleSource = (s: string) => {
    setSelectedSources(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );
  };

  const displaySources = selectedSources.length > 0 ? selectedSources : allSources.slice(0, 6);

  const sorted = useMemo(() => {
    let list = [...countriesData];
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(c => c.name.toLowerCase().includes(q));
    }
    list.sort((a, b) => {
      let va: number, vb: number;
      switch (sortKey) {
        case "name": return sortDir === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        case "population": va = a.population; vb = b.population; break;
        case "demand": va = a.totalDemandGwhMonth; vb = b.totalDemandGwhMonth; break;
        case "avgKwh": va = a.avgKwhPerHousehold; vb = b.avgKwhPerHousehold; break;
        case "futureDemand": va = getProjectedDemand(a.totalDemandGwhMonth, a.code); vb = getProjectedDemand(b.totalDemandGwhMonth, b.code); break;
        default: va = 0; vb = 0;
      }
      return sortDir === "asc" ? va - vb : vb - va;
    });
    return list;
  }, [search, sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("desc"); }
  };

  const top10 = sorted.slice(0, 10);
  const remaining = sorted.slice(10);
  const displayRows = showAll ? sorted : top10;

  const downloadCSV = () => {
    const header = ["Country", "Population", "Current Demand (GWh/mo)", "Avg kWh/Household", "2031 Projected (GWh/mo)", "Growth %", ...displaySources.map(s => `${s} (%)`)];
    const rows = sorted.map(c => [
      c.name, c.population, c.totalDemandGwhMonth, c.avgKwhPerHousehold,
      Math.round(c.totalDemandGwhMonth * (1 + getCountryGrowthRate(c.code) / 100)),
      getCountryGrowthRate(c.code),
      ...displaySources.map(s => c.sources[s] || 0),
    ]);
    const csv = [header.join(","), ...rows.map(r => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "electricity_comparison.csv";
    link.click();
  };

  const growthColor = (g: number) => {
    if (g >= 35) return "text-neon-red";
    if (g >= 20) return "text-neon-orange";
    if (g >= 10) return "text-neon-yellow";
    return "text-neon-green";
  };

  const SortHeader = ({ label, field }: { label: string; field: SortKey }) => (
    <th
      className="px-3 py-3 text-left text-xs font-display cursor-pointer hover:text-neon-cyan transition-colors select-none whitespace-nowrap bg-card sticky top-0 z-10"
      onClick={() => toggleSort(field)}
    >
      <span className="flex items-center gap-1">
        {label}
        <ArrowUpDown className={`w-3 h-3 ${sortKey === field ? "text-neon-cyan" : "text-muted-foreground"}`} />
      </span>
    </th>
  );

  const renderRow = (c: typeof countriesData[0], idx: number) => {
    const future = getProjectedDemand(c.totalDemandGwhMonth, c.code);
    const growth = getCountryGrowthRate(c.code);
    return (
      <tr key={c.code} className={`border-t border-border/30 transition-colors hover:bg-neon-cyan/5 ${idx % 2 === 0 ? "bg-card/50" : "bg-muted/20"}`}>
        <td className="px-3 py-2.5 font-display text-neon-skyblue whitespace-nowrap text-sm">{c.name}</td>
        <td className="px-3 py-2.5 font-body text-neon-purple/80 text-sm">
          {c.population >= 1e9 ? `${(c.population / 1e9).toFixed(2)}B` : `${(c.population / 1e6).toFixed(1)}M`}
        </td>
        <td className="px-3 py-2.5 font-display text-neon-cyan text-sm">
          {c.totalDemandGwhMonth >= 1000 ? `${(c.totalDemandGwhMonth / 1000).toFixed(0)}K` : c.totalDemandGwhMonth}
        </td>
        <td className="px-3 py-2.5 font-body text-neon-yellow text-sm">{c.avgKwhPerHousehold}</td>
        <td className="px-3 py-2.5 font-display text-neon-orange text-sm">
          {future >= 1000 ? `${(future / 1000).toFixed(0)}K` : future}
        </td>
        <td className={`px-3 py-2.5 font-display text-sm ${growthColor(growth)}`}>+{growth}%</td>
        {displaySources.map(s => (
          <td key={s} className="px-3 py-2.5 text-center font-body text-sm">
            {c.sources[s] ? (
              <span className="inline-flex items-center text-neon-green/80">
                <span className="inline-block w-2 h-2 rounded-full mr-1"
                  style={{ backgroundColor: c.sources[s] > 30 ? "hsl(150, 100%, 45%)" : c.sources[s] > 15 ? "hsl(45, 100%, 55%)" : "hsl(230, 80%, 55%)" }}
                />
                {c.sources[s]}
              </span>
            ) : <span className="text-muted-foreground/40">—</span>}
          </td>
        ))}
      </tr>
    );
  };

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative z-10">
      <div className="neon-card">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="text-neon-skyblue w-7 h-7" />
          <h2 className="text-2xl font-display text-foreground">Global Comparison Sheet</h2>
          <span className="ml-auto text-xs text-muted-foreground font-body bg-muted px-2 py-1 rounded-full">
            {countriesData.length} Countries
          </span>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input type="text" placeholder="Search country..." value={search} onChange={e => setSearch(e.target.value)} className="neon-input w-full pl-9 text-sm" />
          </div>
          <button onClick={downloadCSV} className="neon-button flex items-center gap-2 text-sm px-4 py-2">
            <Download className="w-4 h-4" /> Download CSV
          </button>
        </div>

        {/* Source Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs text-muted-foreground font-body py-1">Sources:</span>
          {allSources.map(s => (
            <button key={s} onClick={() => toggleSource(s)}
              className={`px-2 py-1 rounded text-xs font-body transition-all ${displaySources.includes(s)
                ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40"
                : "text-muted-foreground border border-border hover:border-neon-cyan/30"}`}>
              {s}
            </button>
          ))}
        </div>

        {/* Table with fixed header */}
        <div className="rounded-lg border border-neon-darkblue/30 overflow-hidden">
          <div className={`overflow-x-auto ${showAll ? "max-h-[600px] overflow-y-auto" : ""}`}>
            <table className="w-full text-sm">
              <thead className="bg-card text-muted-foreground sticky top-0 z-10">
                <tr className="border-b border-neon-purple/30">
                  <SortHeader label="Country" field="name" />
                  <SortHeader label="Population" field="population" />
                  <SortHeader label="Current GWh/mo" field="demand" />
                  <SortHeader label="Avg kWh/HH" field="avgKwh" />
                  <SortHeader label="2031 Projected" field="futureDemand" />
                  <th className="px-3 py-3 text-left text-xs font-display text-neon-green whitespace-nowrap bg-card sticky top-0 z-10">
                    <TrendingUp className="w-3 h-3 inline mr-1" />Growth
                  </th>
                  {displaySources.map(s => (
                    <th key={s} className="px-3 py-3 text-center text-xs font-display text-neon-purple/70 whitespace-nowrap bg-card sticky top-0 z-10">
                      {s} %
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayRows.map((c, idx) => renderRow(c, idx))}
              </tbody>
            </table>
          </div>

          {/* Show More / Less toggle */}
          {remaining.length > 0 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full py-3 flex items-center justify-center gap-2 text-sm font-display text-neon-cyan bg-card/80 border-t border-neon-darkblue/30 hover:bg-neon-cyan/5 transition-all"
            >
              <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
              {showAll ? "Show Top 10 Only" : `Show All ${sorted.length} Countries (+${remaining.length} more)`}
            </button>
          )}
        </div>

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

export default ComparisonSheet;
