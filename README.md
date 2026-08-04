# Snark™ — Because Sincerity Was Getting Exhausting

The world's first Sarcasm-as-a-Service platform. A fully static, mobile-first
satirical SaaS site built with **Astro 4** + **Tailwind CSS**.

> Version 2.0: Now 40% More Passive-Aggressive.

## Stack

- **Astro 4.x** — static output, zero framework JS; interactivity via native `<script>` tags
- **Tailwind CSS 3.x** — strict mobile-first classes (`sm:` / `md:` / `lg:` expand upward)
- **Design system** — Dark Obsidian `#0F0F11`, Surface `#18181B`, Stroke `#27272A`,
  Electric Lime `#A3E635`, Hot Pink `#F43F5E`, Monospace Grey `#A1A1AA`
- All interactive elements meet a 48px minimum touch target

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Local dev server at `localhost:4321`         |
| `npm run build`   | Production build to `./dist/`                |
| `npm run preview` | Preview the production build locally         |

## Project structure

```
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── layouts/
    │   └── Layout.astro          # head, OG meta, fonts, global dark bg
    ├── components/
    │   ├── Logo.astro            # inline SVG chat-bubble mascot (eye-roll on hover)
    │   ├── Header.astro          # sticky nav + mobile hamburger
    │   ├── Hero.astro            # headline, version badge, CTAs, fake trust bar
    │   ├── Ticker.astro          # the Snark Exchange™ marquee
    │   ├── SnarkGenerator.astro  # random snark + category filter + copy-to-clipboard
    │   ├── RoastMyText.astro     # paste text, receive a diagnosis
    │   ├── ArticleGrid.astro     # 1-col mobile → 3-col desktop satirical articles
    │   ├── Testimonials.astro    # the Wall of Mild Praise
    │   ├── About.astro           # the Manifesto, styled as a mission statement
    │   ├── ContactForm.astro     # Level-of-Disregard slider + confirmation modal
    │   └── Footer.astro          # socials, ironic copyright, cookie banner
    └── pages/
        ├── index.astro
        ├── pricing.astro         # three tiers of administered contempt
        ├── docs.astro            # the REST API nobody can call
        ├── support.astro         # help center: accurate answers, zero help
        ├── status.astro          # all systems judging you
        ├── legal.astro           # Terms of Disservice
        └── 404.astro             # the page that ghosted you
```

## Deploying

### Vercel (easiest)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Astro. Accept the defaults, hit **Deploy**. Done.

### GitHub Pages

1. Add `.github/workflows/deploy.yml` (included in this repo).
2. Push to `main`, then in the repo: **Settings → Pages → Source → GitHub Actions**.
3. The site publishes automatically on every push.

**On a custom domain** (this repo's current setup, `snarksnark.com`):

```js
site: 'https://snarksnark.com',
// no `base` — the site is served from the root
```

`public/CNAME` holds the domain so it survives every deploy. Set the same
domain under **Settings → Pages → Custom domain** and leave **Enforce HTTPS**
on.

**On a project path** (`YOUR_USERNAME.github.io/YOUR_REPO`):

```js
site: 'https://YOUR_USERNAME.github.io',
base: '/YOUR_REPO_NAME',
```

Getting this wrong is the classic blank page: the HTML loads, every
`/YOUR_REPO/_astro/*.css` and `*.js` 404s, and you are left staring at a black
rectangle wondering what you did. `base` must match the path the site is
actually served from, and on a custom domain that path is `/`.

**DNS**, for the apex domain — four `A` records:
`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
For `www`, one `CNAME` to `YOUR_USERNAME.github.io`.

## License

MIT-ish. Take it. We were done with it anyway.
