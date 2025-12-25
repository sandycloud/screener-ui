import { API_CONFIG } from '../config/api';

// Type definition matching StockAdxCriteriaDto from backend
export interface StockAdxCriteriaDto {
  isin: string;
  sym: string;
  prcPerChange: number | null | undefined;
  pchange: number | null | undefined;
  volume: number | null | undefined;
  averageVolume: number | null | undefined;
}

/**
 * Fetches stocks matching ADX criteria from the backend API
 * @param timeframe - The timeframe (e.g., "5min", "15min", "1hr")
 * @param trend - The trend direction ("uptrend" or "downtrend")
 * @returns Promise resolving to array of StockAdxCriteriaDto
 */
export async function getAdxCriteriaStocks(
  timeframe: string,
  trend: string
): Promise<StockAdxCriteriaDto[]> {
  try {
    const url = new URL(`${API_CONFIG.BASE_URL}/api/stock/adx-criteria-stocks`);
    url.searchParams.append('timeframe', timeframe);
    url.searchParams.append('trend', trend);

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}. ${errorText}`
      );
    }

    const data: StockAdxCriteriaDto[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching ADX criteria stocks:', error);
    throw error;
  }
}

