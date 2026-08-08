import { APP_NAME, SOURCE_TAG } from "../config";
import { PoweredBySera } from "./PoweredBySera";

type HeaderProps = {
  lastRefresh: number | null;
  loading: boolean;
  onRefresh: () => void;
};

export function Header({ lastRefresh, loading, onRefresh }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="brand rise">
          <span className="brand__mark" aria-hidden="true" />
          <div>
            <p className="brand__name">{APP_NAME}</p>
            <p className="brand__tag">FX midboard · built on Sera</p>
          </div>
        </div>

        <div className="site-header__meta rise rise-delay-1">
          <div className="live-pill" data-loading={loading ? "true" : "false"}>
            <span className="live-pill__dot" aria-hidden="true" />
            <span>{loading ? "Syncing" : "Live mids"}</span>
          </div>
          <code className="source-tag" title="Volume source tag">
            src:{SOURCE_TAG}
          </code>
          <button type="button" className="btn btn--ghost btn--small" onClick={onRefresh}>
            Refresh
          </button>
          <PoweredBySera compact className="header-powered" />
        </div>
      </div>
      <div className="container site-header__sub rise rise-delay-2">
        <h1>Multi-currency mids, straight from Sera.</h1>
        <p>
          No wallet required to watch. Last refresh{" "}
          {lastRefresh
            ? new Date(lastRefresh).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })
            : "—"}
          .
        </p>
      </div>
    </header>
  );
}
