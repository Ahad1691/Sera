import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Onboarding } from "./components/Onboarding";
import { RateBoard } from "./components/RateBoard";
import { CORRIDORS, ONBOARDING_KEY } from "./config";
import { fetchFxRate, type FxRate } from "./lib/sera";
import "./styles/app.css";

function emptyRates(): FxRate[] {
  return CORRIDORS.map(({ base, quote }) => ({
    pair: `${base}/${quote}`,
    base,
    quote,
    rate: NaN,
    asOf: null,
    changePct: null,
  }));
}

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(
    () => localStorage.getItem(ONBOARDING_KEY) !== "1",
  );
  const [rates, setRates] = useState<FxRate[]>(emptyRates);
  const [loading, setLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState<number | null>(null);
  const [refreshTick, setRefreshTick] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    async function load() {
      setLoading(true);
      const next = await Promise.all(
        CORRIDORS.map(({ base, quote }) =>
          fetchFxRate(base, quote, controller.signal),
        ),
      );
      if (cancelled) return;
      setRates(next);
      setLastRefresh(Date.now());
      setLoading(false);
    }

    void load().catch((err) => {
      if (err instanceof DOMException && err.name === "AbortError") return;
      if (!cancelled) setLoading(false);
    });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [refreshTick]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRefreshTick((n) => n + 1);
    }, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="app-shell">
      <Onboarding
        open={showOnboarding}
        onComplete={() => setShowOnboarding(false)}
      />
      <Header
        lastRefresh={lastRefresh}
        loading={loading}
        onRefresh={() => setRefreshTick((n) => n + 1)}
      />
      <main>
        <RateBoard rates={rates} loading={loading} />
      </main>
      <Footer />
    </div>
  );
}
