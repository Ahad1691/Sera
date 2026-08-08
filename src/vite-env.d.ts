/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERA_REFERRAL_URL: string;
  readonly VITE_SERA_SOURCE_TAG: string;
  readonly VITE_SERA_API_BASE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
