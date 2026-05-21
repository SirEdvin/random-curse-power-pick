# Random Curse Power Pick

A funny fan-made Vite React TypeScript site that turns a nickname into a deterministic cursed power with anime-occult vibes. The same nickname always maps to the same result, so reloads and shared URLs stay stable.

This is original parody-style content. It uses themes like curses, domains, shikigami, binding vows, and reversed techniques without copying long copyrighted prose.

## Usage

Install dependencies and run the local app:

```sh
npm install
npm run dev
```

Production build:

```sh
npm run build
```

Verify the local dataset:

```sh
npm run verify:dataset
```

## GitHub Pages Deployment

The production site is configured for repository Pages at `https://siredvin.github.io/random-curse-power-pick/`.

GitHub Pages must use GitHub Actions as its source. Pushes to `main` run dataset verification, lint, and build, then deploy the `dist` artifact.

## How It Works

- The user enters a nickname in the accessible form.
- `src/powers.ts` normalizes and hashes the nickname with a deterministic FNV-style hash.
- The hash selects one entry from the local generated `cursePowers` dataset.
- The selected nickname is written to the `?name=` query parameter, keeping reloads and shared links stable.
- The X/Twitter share button uses an intent URL and includes the current deterministic result URL.

## Dataset Generation

The dataset is generated locally in source from original word banks in `src/powers.ts`:

- `CURSE_POWER_COUNT` is set to `6201`, which is more than the required 6000 powers.
- `cursePowers` is created with `Array.from({ length: CURSE_POWER_COUNT }, ...)`.
- Each generated power receives a stable id, name, category, grade, description, and drawback.
- No network calls are required to generate or pick results.

`scripts/verify-dataset.mjs` checks that the dataset count is above 6000, that the source generates from `CURSE_POWER_COUNT`, that deterministic picker exports exist, and that the MVP source does not use network calls.
