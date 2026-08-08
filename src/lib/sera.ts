import { SERA_API_BASE } from "../config";

export type FxRate = {
  pair: string;
  base: string;
  quote: string;
  rate: number;
  asOf: number | null;
  changePct: number | null;
  error?: string;
};

type FxRateResponse = {
  pair: string;
  rate: string;
  as_of: number | null;
  change_pct: string | null;
};

export async function fetchFxRate(
  base: string,
  quote: string,
  signal?: AbortSignal,
): Promise<FxRate> {
  const url = new URL(`${SERA_API_BASE}/fx/rate`);
  url.searchParams.set("base", base);
  url.searchParams.set("quote", quote);

  try {
    const res = await fetch(url, { signal });
    if (!res.ok) {
      return {
        pair: `${base}/${quote}`,
        base,
        quote,
        rate: NaN,
        asOf: null,
        changePct: null,
        error: `HTTP ${res.status}`,
      };
    }

    const data = (await res.json()) as FxRateResponse;
    return {
      pair: data.pair ?? `${base}/${quote}`,
      base,
      quote,
      rate: Number(data.rate),
      asOf: data.as_of,
      changePct:
        data.change_pct == null || data.change_pct === ""
          ? null
          : Number(data.change_pct),
    };
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      throw err;
    }
    return {
      pair: `${base}/${quote}`,
      base,
      quote,
      rate: NaN,
      asOf: null,
      changePct: null,
      error: "Network error",
    };
  }
}

export function formatRate(rate: number): string {
  if (!Number.isFinite(rate)) return "—";
  if (rate >= 100) return rate.toFixed(3);
  if (rate >= 10) return rate.toFixed(4);
  return rate.toFixed(5);
}

export function formatChange(changePct: number | null): string {
  if (changePct == null || !Number.isFinite(changePct)) return "—";
  const sign = changePct > 0 ? "+" : "";
  return `${sign}${changePct.toFixed(2)}%`;
}

export function formatAsOf(asOf: number | null): string {
  if (asOf == null) return "stale";
  const ms = asOf < 1e12 ? asOf * 1000 : asOf;
  return new Date(ms).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
