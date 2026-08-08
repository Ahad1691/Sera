export const REFERRAL_URL =
  import.meta.env.VITE_SERA_REFERRAL_URL?.trim() ||
  "https://community.sera.cx/ref/kenzy";

export const SOURCE_TAG =
  import.meta.env.VITE_SERA_SOURCE_TAG?.trim() || "midboard-kenzy";

export const SERA_API_BASE =
  import.meta.env.VITE_SERA_API_BASE?.trim() || "https://api.sera.cx/api/v1";

export const APP_NAME = "Midboard";

export const CORRIDORS = [
  { base: "USD", quote: "SGD" },
  { base: "USD", quote: "MYR" },
  { base: "USD", quote: "JPY" },
  { base: "USD", quote: "EUR" },
  { base: "USD", quote: "GBP" },
  { base: "EUR", quote: "SGD" },
  { base: "SGD", quote: "MYR" },
  { base: "USD", quote: "BRL" },
] as const;

export const ONBOARDING_KEY = "midboard-onboarding-v1";
