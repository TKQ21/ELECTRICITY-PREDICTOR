import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Papa from "papaparse";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Upload, Download, Zap, FileSpreadsheet } from "lucide-react";
import { simplePredict } from "@/data/countryData";

const CSVPredictor = () => {
  const [historicalData, setHistoricalData] = useState<{ date: string; value: number }[]>([]);
  const [predictions, setPredictions] = useState<{ date: string; predicted: number }[]>([]);
  const [fileName, setFileName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setIsProcessing(true);

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const data = results.data as Record<string, string>[];
        
        // Try to find date and consumption columns
        const dateCol = Object.keys(data[0] || {}).find(k => 
          /date|time|day|month/i.test(k)
        );
        const valueCol = Object.keys(data[0] || {}).find(k => 
          /consumption|kwh|usage|demand|value|electricity|power/i.test(k)
        );

        if (!dateCol || !valueCol) {
          alert("CSV must have a Date column and a Consumption/kWh column");
          setIsProcessing(false);
          return;
        }

        const parsed = data
          .filter(row => row[dateCol] && row[valueCol])
          .map(row => ({
            date: row[dateCol],
            value: parseFloat(row[valueCol]) || 0,
          }))
          .filter(d => !isNaN(d.value) && d.value > 0);

        setHistoricalData(parsed);
        const preds = simplePredict(parsed, 30);
        setPredictions(preds);
        setIsProcessing(false);
      },
      error: () => {
        alert("Error reading CSV file");
        setIsProcessing(false);
      },
    });
  };

  const downloadPrediction = () => {
    const csv = "Date,Predicted_kWh\n" + predictions.map(p => `${p.date},${p.predicted}`).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "prediction_30days.csv";
    link.click();
  };

  const chartData = [
    ...historicalData.slice(-30).map(d => ({ date: d.date, actual: d.value })),
    ...predictions.map(p => ({ date: p.date, predicted: p.predicted })),
  ];

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
          <FileSpreadsheet className="text-neon-cyan w-7 h-7" />
          <h2 className="text-2xl font-display text-foreground">CSV Electricity Predictor</h2>
        </div>

        <p className="text-muted-foreground font-body mb-4">
          Upload your electricity consumption CSV (columns: Date, Consumption_kWh) → Get 30-day AI forecast
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            ref={fileRef}
            type="file"
            accept=".csv,.xlsx"
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            onClick={() => fileRef.current?.click()}
            className="neon-button flex items-center gap-2"
          >
            <Upload className="w-5 h-5" />
            {fileName || "Upload CSV File"}
          </button>

          {predictions.length > 0 && (
            <button onClick={downloadPrediction} className="neon-button-green neon-button flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Prediction CSV
            </button>
          )}
        </div>

        {isProcessing && (
          <div className="mt-6 flex items-center gap-2 text-neon-yellow font-body">
            <Zap className="w-5 h-5 animate-pulse" />
            Processing data & generating forecast...
          </div>
        )}

        {chartData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-8"
          >
            <h3 className="text-lg font-display text-neon-skyblue mb-4">
              Historical vs Predicted Electricity (kWh)
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="gradActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(185, 100%, 50%)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(185, 100%, 50%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradPredicted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(150, 100%, 45%)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(150, 100%, 45%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(185, 80%, 20%)" />
                <XAxis dataKey="date" tick={{ fill: "hsl(185, 40%, 55%)", fontSize: 11 }} angle={-45} textAnchor="end" height={60} />
                <YAxis tick={{ fill: "hsl(185, 40%, 55%)", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ background: "hsl(220, 20%, 7%)", border: "1px solid hsl(185, 100%, 50%)", borderRadius: 8, color: "hsl(185, 100%, 50%)" }}
                />
                <Area type="monotone" dataKey="actual" stroke="hsl(185, 100%, 50%)" fill="url(#gradActual)" strokeWidth={2} name="Actual kWh" />
                <Area type="monotone" dataKey="predicted" stroke="hsl(150, 100%, 45%)" fill="url(#gradPredicted)" strokeWidth={2} strokeDasharray="5 5" name="Predicted kWh" />
              </AreaChart>
            </ResponsiveContainer>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-muted rounded-lg p-3 text-center">
                <div className="text-xs text-muted-foreground font-body">Avg Predicted</div>
                <div className="text-lg font-display text-neon-cyan">
                  {(predictions.reduce((a, b) => a + b.predicted, 0) / predictions.length).toFixed(1)} kWh
                </div>
              </div>
              <div className="bg-muted rounded-lg p-3 text-center">
                <div className="text-xs text-muted-foreground font-body">Peak Day</div>
                <div className="text-lg font-display text-neon-orange">
                  {predictions.reduce((a, b) => b.predicted > a.predicted ? b : a, predictions[0])?.predicted.toFixed(1)} kWh
                </div>
              </div>
              <div className="bg-muted rounded-lg p-3 text-center">
                <div className="text-xs text-muted-foreground font-body">30-Day Total</div>
                <div className="text-lg font-display text-neon-green">
                  {predictions.reduce((a, b) => a + b.predicted, 0).toFixed(0)} kWh
                </div>
              </div>
              <div className="bg-muted rounded-lg p-3 text-center">
                <div className="text-xs text-muted-foreground font-body">Data Points</div>
                <div className="text-lg font-display text-neon-pink">{historicalData.length}</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default CSVPredictor;
