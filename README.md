# Random Curse Power Pick

A funny fan-made Vite React TypeScript site that turns a nickname into a deterministic cursed technique with anime-occult vibes. The same nickname always maps to the same result, so reloads and shared URLs stay stable.

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
- The hash selects one entry from the local `cursePowers` dataset of 500 cursed techniques.
- The result shows the technique name, category, grade, descriptive effect, binding drawback, and Domain Expansion details.
- The selected nickname is written to the `?name=` query parameter, keeping reloads and shared links stable.
- The X/Twitter share button uses an intent URL and includes the current deterministic result URL.

## Dataset Generation

The dataset is generated locally in source from curated seeds and original word banks in `src/powers.ts`:

- `CURSE_POWER_COUNT` is set to exactly `500`.
- The first entries are short, original/paraphrased fan interpretations inspired by named techniques from Jujutsu Kaisen.
- The remaining entries are original fan-made techniques generated from local word banks.
- `cursePowers` is created with `Array.from({ length: CURSE_POWER_COUNT }, ...)` so ids and nickname picks stay stable.
- Each technique receives a stable id, distinct name, category, grade, description, binding drawback, and Domain Expansion.
- Each Domain Expansion includes a domain name, environment, and sure-hit effect.
- No network calls are required to generate or pick results.

`scripts/verify-dataset.mjs` checks exactly 500 records, unique ids, unique technique names, unique domain names, required domain fields, deterministic picker exports/behavior, and no network calls.
