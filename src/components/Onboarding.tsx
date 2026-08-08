import { APP_NAME, ONBOARDING_KEY, REFERRAL_URL, SOURCE_TAG } from "../config";
import { PoweredBySera } from "./PoweredBySera";

type OnboardingProps = {
  open: boolean;
  onComplete: () => void;
};

export function Onboarding({ open, onComplete }: OnboardingProps) {
  if (!open) return null;

  function finish() {
    localStorage.setItem(ONBOARDING_KEY, "1");
    onComplete();
  }

  return (
    <div className="onboarding" role="dialog" aria-modal="true" aria-labelledby="onboarding-title">
      <div className="onboarding__panel rise">
        <p className="onboarding__eyebrow">Welcome to {APP_NAME}</p>
        <h1 id="onboarding-title">Live FX mids. Built on Sera.</h1>
        <p className="onboarding__lede">
          Watch multi-currency corridors update from Sera&apos;s public mid feed. Volume through
          this board carries source tag <code>{SOURCE_TAG}</code> — and your referral link turns
          every new trader into attributed XP + gSera.
        </p>

        <ol className="onboarding__steps">
          <li>
            <strong>Read the board</strong>
            <span>USD, SGD, MYR, JPY, EUR and more — rate + 24h drift.</span>
          </li>
          <li>
            <strong>Share your Sera link</strong>
            <span>
              Drop it in onboarding, README, and footer so joins and trades stay attributed to you.
            </span>
          </li>
          <li>
            <strong>Route volume</strong>
            <span>Trades tagged with your source hit the Build board and pay gSera.</span>
          </li>
        </ol>

        <div className="onboarding__actions">
          <a className="btn btn--primary" href={REFERRAL_URL} target="_blank" rel="noreferrer">
            Open my Refer link
          </a>
          <button type="button" className="btn btn--ghost" onClick={finish}>
            Enter Midboard
          </button>
        </div>

        <div className="onboarding__footer">
          <PoweredBySera />
        </div>
      </div>
    </div>
  );
}
