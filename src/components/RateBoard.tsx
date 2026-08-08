import type { FxRate } from "../lib/sera";
import { formatAsOf, formatChange, formatRate } from "../lib/sera";

type RateBoardProps = {
  rates: FxRate[];
  loading: boolean;
};

export function RateBoard({ rates, loading }: RateBoardProps) {
  return (
    <section className="board container rise rise-delay-3" aria-live="polite">
      <div className="board__head">
        <h2>Corridors</h2>
        <p>Aggregated mid + 24h change via <code>GET /fx/rate</code>.</p>
      </div>

      <div className="board__grid">
        {rates.map((rate) => {
          const up = (rate.changePct ?? 0) > 0;
          const down = (rate.changePct ?? 0) < 0;
          return (
            <article key={rate.pair} className="rate-card" data-loading={loading ? "true" : "false"}>
              <div className="rate-card__pair">
                <span>{rate.base}</span>
                <span className="rate-card__slash">/</span>
                <span>{rate.quote}</span>
              </div>
              <p className="rate-card__rate" key={`${rate.pair}-${rate.rate}`}>
                {rate.error ? "—" : formatRate(rate.rate)}
              </p>
              <div className="rate-card__meta">
                <span
                  className={
                    up ? "chg chg--up" : down ? "chg chg--down" : "chg"
                  }
                >
                  {formatChange(rate.changePct)}
                </span>
                <span className="asof">{rate.error ?? formatAsOf(rate.asOf)}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
