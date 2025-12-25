import { TrendingUp, TrendingDown } from "lucide-react";
import { StockAdxCriteriaDto } from "../services/stockApi";

export function StockGrid({ stocks, isLoading }: { stocks: StockAdxCriteriaDto[]; isLoading: boolean }) {
  const formatVolume = (volume: number | null | undefined) => {
    if (volume == null || isNaN(volume)) {
      return "N/A";
    }
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(2)}M`;
    }
    if (volume >= 1000) {
      return `${(volume / 1000).toFixed(2)}K`;
    }
    return volume.toString();
  };

  const formatNumber = (value: number | null | undefined): string => {
    if (value == null || isNaN(value)) {
      return "0.00";
    } else {
      //alert(`formatNumber ELSE condition - value: ${value}, type: ${typeof value}, formatted: ${value.toFixed(2)}`);
      return value.toFixed(2);
    }
  };

  const formatPercentChange = (value: number | null | undefined): string => {
    if (value == null || isNaN(value)) {
      //alert(`formatPercentChange IF condition TRUE - value: ${value}, type: ${typeof value}, isNull: ${value == null}, isNaN: ${isNaN(value as number)}`);
      return "0.00";
    } else {
      //alert(`formatPercentChange ELSE condition - value: ${value}, type: ${typeof value}, formatted: ${value.toFixed(2)}`);
      return value.toFixed(2);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-[#b0b0b0]">Loading results...</div>
      </div>
    );
  }

  if (stocks.length === 0 && !isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-[#b0b0b0]">No stocks found. Please submit a search.</div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      {/* Desktop Table View */}
      <table className="w-full hidden md:table">
        <thead>
          <tr className="border-b border-[#505050]">
            <th className="text-left py-3 px-4 text-[#b0b0b0]">#</th>
            <th className="text-left py-3 px-4 text-[#b0b0b0]">Symbol</th>
            <th className="text-left py-3 px-4 text-[#b0b0b0]">ISIN</th>
            <th className="text-right py-3 px-4 text-[#b0b0b0]">Price Change</th>
            <th className="text-right py-3 px-4 text-[#b0b0b0]">% Change</th>
            <th className="text-right py-3 px-4 text-[#b0b0b0]">Volume</th>
            <th className="text-right py-3 px-4 text-[#b0b0b0]">Avg Volume</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr
              key={stock.isin || index}
              className="border-b border-[#454545] hover:bg-[#3a3a3a] transition-colors"
            >
              <td className="py-3 px-4 text-[#909090]">{index + 1}</td>
              <td className="py-3 px-4 text-white font-medium">{stock.sym}</td>
              <td className="py-3 px-4 text-[#b0b0b0] text-sm">{stock.isin}</td>
              <td className="py-3 px-4 text-right text-white">
                {(stock.pchange ?? 0) >= 0 ? "+" : ""}
                {formatNumber(stock.pchange)}
              </td>
              <td className="py-3 px-4 text-right">
                <div
                  className={`flex items-center justify-end gap-1 ${
                    (stock.prcPerChange ?? 0) >= 0 ? "text-[#00c853]" : "text-[#ff1744]"
                  }`}
                >
                  {(stock.prcPerChange ?? 0) >= 0 ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}
                  {(stock.prcPerChange ?? 0) >= 0 ? "+" : ""}
                  {formatPercentChange(stock.prcPerChange)}%
                </div>
              </td>
              <td className="py-3 px-4 text-right text-[#b0b0b0]">
                {formatVolume(stock.volume)}
              </td>
              <td className="py-3 px-4 text-right text-[#b0b0b0]">
                {formatVolume(stock.averageVolume)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile-friendly cards for smaller screens */}
      <div className="md:hidden space-y-3">
        {stocks.map((stock, index) => (
          <div
            key={stock.isin || index}
            className="bg-[#3a3a3a] border border-[#505050] rounded-lg p-4"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-white mb-1 font-medium">
                  #{index + 1} {stock.sym}
                </div>
                <div className="text-[#909090] text-sm">{stock.isin}</div>
              </div>
              <div
                className={`flex items-center gap-1 ${
                  (stock.prcPerChange ?? 0) >= 0 ? "text-[#00c853]" : "text-[#ff1744]"
                }`}
              >
                {(stock.prcPerChange ?? 0) >= 0 ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                {(stock.prcPerChange ?? 0) >= 0 ? "+" : ""}
                {formatPercentChange(stock.prcPerChange)}%
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="text-[#909090]">Price Change</div>
                <div className="text-white">
                  {(stock.pchange ?? 0) >= 0 ? "+" : ""}
                  {formatNumber(stock.pchange)}
                </div>
              </div>
              <div>
                <div className="text-[#909090]">Volume</div>
                <div className="text-[#b0b0b0]">{formatVolume(stock.volume)}</div>
              </div>
              <div>
                <div className="text-[#909090]">Avg Volume</div>
                <div className="text-[#b0b0b0]">{formatVolume(stock.averageVolume)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}