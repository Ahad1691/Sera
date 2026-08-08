import { APP_NAME, REFERRAL_URL, SOURCE_TAG } from "../config";
import { PoweredBySera } from "./PoweredBySera";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__brand">{APP_NAME}</p>
          <p className="site-footer__copy">
            Original build on Sera Protocol. Tag repos with{" "}
            <code>built-on-sera</code> so the daily sync can credit you.
          </p>
        </div>
        <div className="site-footer__links">
          <a href={REFERRAL_URL} target="_blank" rel="noreferrer">
            Refer link
          </a>
          <a href="https://agents.sera.cx/" target="_blank" rel="noreferrer">
            Agents docs
          </a>
          <a href="https://docs.sera.cx/" target="_blank" rel="noreferrer">
            Protocol docs
          </a>
          <a href="https://github.com/sera-cx" target="_blank" rel="noreferrer">
            sera-cx
          </a>
        </div>
        <div className="site-footer__powered">
          <PoweredBySera />
          <code>source: {SOURCE_TAG}</code>
        </div>
      </div>
    </footer>
  );
}
