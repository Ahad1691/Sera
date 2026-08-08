# Midboard

Live multi-currency FX midboard **built on [Sera Protocol](https://sera.cx)**.

Watch aggregated mids + 24h drift across USD, SGD, MYR, JPY, EUR and more — powered by Sera’s public `GET /fx/rate` feed. No wallet required to read the board.

Powered by Sera — start here → [https://community.sera.cx/ref/kenzy](https://community.sera.cx/ref/kenzy)

## Why this exists

Building on Sera pays on adoption — forks, originals tagged `built-on-sera`, referrals, and volume through your source tag. Midboard bakes the referral loop into the product:

| Surface | What ships |
| --- | --- |
| Onboarding | First-run screen with your Refer link CTA |
| README | This “Powered by Sera — start here →” link |
| UI footer | Persistent `Powered by Sera` attribution |
| Source tag | `midboard-kenzy` (override via env) for Build board / gSera volume |

## Quick start

```bash
npm install
cp .env.example .env   # set your own referral URL + source tag
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Configure your referral engine

1. Grab your link on the [Refer page](https://community.sera.cx/refer).
2. Put it in `.env`:

```bash
VITE_SERA_REFERRAL_URL=https://community.sera.cx/ref/YOUR_HANDLE
VITE_SERA_SOURCE_TAG=midboard-YOUR_HANDLE
```

3. Keep the same link in onboarding, this README, and the app footer (already wired via `src/config.ts` + `PoweredBySera`).

## GitHub topic (daily sync)

For original repos, add the topic **`built-on-sera`** in GitHub → About → Topics so the daily sync (06:00 SGT) can credit +300 XP (top 3).

```bash
gh repo edit --add-topic built-on-sera
```

## Stack

- Vite + React + TypeScript
- Sera public API via same-origin proxy (`/api/sera` → `https://api.sera.cx/api/v1`) so the browser is not blocked by CORS

Dev/preview proxy is in `vite.config.ts`. Deploy rewrites live in `vercel.json`.

## Scripts

| Command | |
| --- | --- |
| `npm run dev` | Local midboard |
| `npm run build` | Production bundle |
| `npm run preview` | Preview the build |

## License

MIT — build on it, fork it, ship something worth copying.
