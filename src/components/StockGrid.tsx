import { TrendingUp, TrendingDown } from "lucide-react";

export function StockGrid({ stocks, isLoading }) {
  const formatVolume = (volume) => {
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(2)}M`;
    }
    if (volume >= 1000) {
      return `${(volume / 1000).toFixed(2)}K`;
    }
    return volume.toString();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-[#b0b0b0]">Loading results...</div>
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
            <th className="text-left py-3 px-4 text-[#b0b0b0]">Stock Name</th>
            <th className="text-right py-3 px-4 text-[#b0b0b0]">Price</th>
            <th className="text-right py-3 px-4 text-[#b0b0b0]">Volume</th>
            <th className="text-right py-3 px-4 text-[#b0b0b0]">% Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr
              key={stock.id}
              className="border-b border-[#454545] hover:bg-[#3a3a3a] transition-colors"
            >
              <td className="py-3 px-4 text-[#909090]">{index + 1}</td>
              <td className="py-3 px-4 text-white">{stock.symbol}</td>
              <td className="py-3 px-4 text-[#b0b0b0]">{stock.name}</td>
              <td className="py-3 px-4 text-right text-white">
                ${stock.price.toFixed(2)}
              </td>
              <td className="py-3 px-4 text-right text-[#b0b0b0]">
                {formatVolume(stock.volume)}
              </td>
              <td className="py-3 px-4 text-right">
                <div
                  className={`flex items-center justify-end gap-1 ${
                    stock.change >= 0 ? "text-[#00c853]" : "text-[#ff1744]"
                  }`}
                >
                  {stock.change >= 0 ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}
                  {stock.change >= 0 ? "+" : ""}
                  {stock.change.toFixed(2)}%
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile-friendly cards for smaller screens */}
      <div className="md:hidden space-y-3">
        {stocks.map((stock, index) => (
          <div
            key={stock.id}
            className="bg-[#3a3a3a] border border-[#505050] rounded-lg p-4"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-white mb-1">
                  #{index + 1} {stock.symbol}
                </div>
                <div className="text-[#909090]">{stock.name}</div>
              </div>
              <div
                className={`flex items-center gap-1 ${
                  stock.change >= 0 ? "text-[#00c853]" : "text-[#ff1744]"
                }`}
              >
                {stock.change >= 0 ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                {stock.change >= 0 ? "+" : ""}
                {stock.change.toFixed(2)}%
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="text-[#909090]">Price</div>
                <div className="text-white">${stock.price.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-[#909090]">Volume</div>
                <div className="text-[#b0b0b0]">{formatVolume(stock.volume)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}