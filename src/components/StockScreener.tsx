import { useState } from "react";
import { FilterSection } from "./FilterSection";
import { StockGrid } from "./StockGrid";
import { getAdxCriteriaStocks, StockAdxCriteriaDto } from "../services/stockApi";

export function StockScreener() {
  const [stocks, setStocks] = useState<StockAdxCriteriaDto[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (criteria: {
    timeframe: string;
    trend: string;
    volume?: string;
    adx?: string;
    ema?: string;
  }) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await getAdxCriteriaStocks(criteria.timeframe, criteria.trend);
      setStocks(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch stocks";
      setError(errorMessage);
      console.error("Error fetching stocks:", err);
      setStocks([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#353535] rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-[#3a3a3a] border-b border-[#505050] px-6 py-4">
        <h1 className="text-white">Stock Screener</h1>
      </div>

      {/* Filter Section */}
      <div className="p-6 border-b border-[#505050]">
        <FilterSection onSubmit={handleSubmit} isLoading={isLoading} />
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-6 border-b border-[#505050]">
          <div className="bg-[#ff1744] bg-opacity-20 border border-[#ff1744] rounded-lg px-4 py-3 text-[#ff1744]">
            <strong>Error:</strong> {error}
          </div>
        </div>
      )}

      {/* Results Grid */}
      <div className="p-6">
        <StockGrid stocks={stocks} isLoading={isLoading} />
      </div>
    </div>
  );
}