import { useState } from "react";
import { FilterSection } from "./FilterSection";
import { StockGrid } from "./StockGrid";

const mockStocks = [
  { id: 1, symbol: "AAPL", name: "Apple Inc.", price: 182.45, volume: 58234567, change: 2.34 },
  { id: 2, symbol: "MSFT", name: "Microsoft Corporation", price: 378.92, volume: 42156789, change: 1.87 },
  { id: 3, symbol: "GOOGL", name: "Alphabet Inc.", price: 141.23, volume: 35678912, change: -0.45 },
  { id: 4, symbol: "AMZN", name: "Amazon.com Inc.", price: 155.67, volume: 48923456, change: 3.21 },
  { id: 5, symbol: "TSLA", name: "Tesla Inc.", price: 238.45, volume: 125678934, change: -1.56 },
  { id: 6, symbol: "META", name: "Meta Platforms Inc.", price: 352.89, volume: 28456123, change: 4.12 },
  { id: 7, symbol: "NVDA", name: "NVIDIA Corporation", price: 495.22, volume: 67234891, change: 5.67 },
  { id: 8, symbol: "JPM", name: "JPMorgan Chase & Co.", price: 178.34, volume: 18765432, change: 0.89 },
];

export function StockScreener() {
  const [stocks, setStocks] = useState(mockStocks);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (criteria) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, this would filter based on criteria
      // For now, we'll just shuffle the mock data
      const shuffled = [...mockStocks].sort(() => Math.random() - 0.5);
      setStocks(shuffled);
      setIsLoading(false);
    }, 800);
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

      {/* Results Grid */}
      <div className="p-6">
        <StockGrid stocks={stocks} isLoading={isLoading} />
      </div>
    </div>
  );
}