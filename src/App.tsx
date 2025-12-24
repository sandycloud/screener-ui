import { StockScreener } from "./components/StockScreener";
import { useState } from "react";
import { Settings } from "lucide-react";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#2a2a2a");
  const [showSettings, setShowSettings] = useState(false);

  const presetColors = [
    { name: "Medium Dark Grey", value: "#2a2a2a" },
    { name: "Dark Grey", value: "#1a1a1a" },
    { name: "Slate Grey", value: "#2d3748" },
    { name: "Dark Blue", value: "#1e293b" },
    { name: "Dark Green", value: "#1a2e1a" },
  ];

  return (
    <div className="min-h-screen p-4 md:p-6" style={{ backgroundColor }}>
      {/* Settings Button */}
      <div className="max-w-7xl mx-auto mb-4 flex justify-end">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 border border-[#505050]"
        >
          <Settings size={18} />
          Settings
        </button>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="max-w-7xl mx-auto mb-4 bg-[#353535] border border-[#505050] rounded-lg p-4">
          <h3 className="text-white mb-3">Background Color</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {presetColors.map((preset) => (
              <button
                key={preset.value}
                onClick={() => setBackgroundColor(preset.value)}
                className={`px-3 py-2 rounded-lg border transition-colors ${
                  backgroundColor === preset.value
                    ? "border-[#0066ff] bg-[#0066ff] text-white"
                    : "border-[#505050] bg-[#2a2a2a] text-[#b0b0b0] hover:border-[#606060]"
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <label className="text-[#b0b0b0]">Custom Color:</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="h-10 w-20 rounded cursor-pointer bg-transparent"
            />
            <input
              type="text"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="bg-[#2a2a2a] border border-[#505050] rounded px-3 py-2 text-white flex-1 max-w-xs focus:outline-none focus:border-[#0066ff]"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto border border-[#505050] rounded-lg">
        <StockScreener />
      </div>
    </div>
  );
}