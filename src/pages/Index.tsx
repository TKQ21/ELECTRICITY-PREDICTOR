import { motion } from "framer-motion";
import { Zap, Globe, BarChart3, Download } from "lucide-react";
import StarBackground from "@/components/StarBackground";
import CSVPredictor from "@/components/CSVPredictor";
import CountryExplorer from "@/components/CountryExplorer";
import AreaPredictor from "@/components/AreaPredictor";
import ComparisonSheet from "@/components/ComparisonSheet";
import { countriesData } from "@/data/countryData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <StarBackground />

      {/* Hero */}
      <header className="relative z-10 pt-12 pb-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-10 h-10 text-neon-cyan" />
            <h1 className="text-4xl md:text-6xl font-display neon-gradient-text">
              ElectriPredict
            </h1>
            <Zap className="w-10 h-10 text-neon-pink" />
          </div>
          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            Real-time Electricity Demand Prediction — Upload CSV, explore countries & states, predict area demand with sector-wise breakdown
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: <BarChart3 className="w-4 h-4" />, text: "30-Day Forecast" },
              { icon: <Globe className="w-4 h-4" />, text: `${countriesData.length} Countries` },
              { icon: <Download className="w-4 h-4" />, text: "CSV Download" },
              { icon: <Zap className="w-4 h-4" />, text: "Real-time Data" },
            ].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-body text-muted-foreground"
              >
                {item.icon} {item.text}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 pb-20 space-y-10">
        <CSVPredictor />
        <CountryExplorer />
        <ComparisonSheet />
        <AreaPredictor />
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-border">
        <p className="text-sm text-muted-foreground font-body">
          ⚡ ElectriPredict — Electricity Demand Forecasting System
        </p>
      </footer>
    </div>
  );
};

export default Index;
