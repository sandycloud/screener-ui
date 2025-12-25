import { useState } from "react";
import { Search } from "lucide-react";

export function FilterSection({ onSubmit, isLoading }) {
  const [timeframe, setTimeframe] = useState("5min");
  const [trend, setTrend] = useState("uptrend");
  const [volume, setVolume] = useState("");
  const [adx, setAdx] = useState("");
  const [ema, setEma] = useState("10");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ timeframe, trend, volume, adx, ema });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {/* Timeframe */}
        <div>
          <label className="block text-[#b0b0b0] mb-2">Timeframe</label>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="w-full bg-[#2a2a2a] border border-[#505050] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#0066ff] transition-colors"
          >
            <option value="5min">5 mins</option>
            <option value="15min">15 mins</option>
            <option value="1hr">1 hr</option>
          </select>
        </div>

        {/* Trend */}
        <div>
          <label className="block text-[#b0b0b0] mb-2">Trend</label>
          <select
            value={trend}
            onChange={(e) => setTrend(e.target.value)}
            className="w-full bg-[#2a2a2a] border border-[#505050] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#0066ff] transition-colors"
          >
            <option value="up">Uptrend</option>
            <option value="down">Downtrend</option>
          </select>
        </div>

        {/* Volume */}
        <div>
          <label className="block text-[#b0b0b0] mb-2">Volume</label>
          <input
            type="text"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            placeholder="Enter volume"
            className="w-full bg-[#2a2a2a] border border-[#505050] rounded-lg px-4 py-2.5 text-white placeholder:text-[#606060] focus:outline-none focus:border-[#0066ff] transition-colors"
          />
        </div>

        {/* ADX */}
        <div>
          <label className="block text-[#b0b0b0] mb-2">ADX</label>
          <input
            type="text"
            value={adx}
            onChange={(e) => setAdx(e.target.value)}
            placeholder="Enter ADX"
            className="w-full bg-[#2a2a2a] border border-[#505050] rounded-lg px-4 py-2.5 text-white placeholder:text-[#606060] focus:outline-none focus:border-[#0066ff] transition-colors"
          />
        </div>

        {/* EMA */}
        <div>
          <label className="block text-[#b0b0b0] mb-2">EMA</label>
          <select
            value={ema}
            onChange={(e) => setEma(e.target.value)}
            className="w-full bg-[#2a2a2a] border border-[#505050] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#0066ff] transition-colors"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-[#0066ff] hover:bg-[#0052cc] disabled:bg-[#505050] disabled:cursor-not-allowed text-white px-8 py-2.5 rounded-lg transition-colors flex items-center gap-2"
      >
        <Search size={18} />
        {isLoading ? "Searching..." : "Submit"}
      </button>
    </form>
  );
}