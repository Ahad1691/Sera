import { REFERRAL_URL } from "../config";

type PoweredBySeraProps = {
  className?: string;
  compact?: boolean;
};

export function PoweredBySera({ className = "", compact = false }: PoweredBySeraProps) {
  return (
    <a
      className={`powered-by ${compact ? "powered-by--compact" : ""} ${className}`.trim()}
      href={REFERRAL_URL}
      target="_blank"
      rel="noreferrer"
    >
      <span className="powered-by__mark" aria-hidden="true" />
      <span>
        Powered by Sera — start here <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}
