# Shivansh Elegance — Next.js storefront

A seven-page, mobile-first Next.js (App Router) site for a women's ethnic-wear
store that sells over WhatsApp. Every call to action opens WhatsApp with a
prefilled, context-specific message.

Static export — no server required.

```
app/
├── layout.tsx        fonts, header/footer shell, global metadata + JSON-LD
├── page.tsx          Home
├── women/page.tsx    Women's collection (live shop)
├── men/page.tsx      Men — Coming Soon
├── kids/page.tsx     Child — Coming Soon
├── about/page.tsx    Our Story
├── faq/page.tsx      FAQ (answer-first, for answer engines)
├── contact/page.tsx  WhatsApp-first contact
├── fonts.css         self-hosted @font-face declarations
├── globals.css       design system (tokens + components)
├── sitemap.ts        /sitemap.xml
└── robots.ts         /robots.txt
components/           Header, Footer, WhatsAppBar, CategoryGrid, ProductCard,
                      Features, Story, Quote, Cta, ComingSoon, Reveal, Icon,
                      JsonLd, PageHeader
lib/site.ts           ALL config + content in one file
lib/seo.ts            canonical/OG helpers, base-path aware asset prefixing
public/images/        18 product + category images
public/logo-gold.svg  traced gold logo
public/og-image.png   1200×630 social card
public/llms.txt       plain-text brand facts for generative engines
```

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export -> out/
npx serve out   # preview the export locally
```

`output: "export"` means there is no Node server and **`npm start` will not work**.
Every build writes plain HTML/CSS/JS to `out/`.

## Deploy: GitHub Pages

The site is built and published by `.github/workflows/deploy.yml` on every push
to `main`.

**One setting you must set by hand** (a deploy key cannot change repo settings):

> Settings → Pages → **Build and deployment → Source → _GitHub Actions_**

⚠️ The default is `Deploy from a branch` → `main` / `/ (root)`. That will **not**
work: the root of `main` is Next.js source code, not a built site, so Pages finds
no `index.html`. Choose **GitHub Actions** and the workflow publishes `out/`.

Live at **https://shivanshelegance.github.io/** (user-pages repo
`shivanshelegance.github.io`, served from the root domain).

### If you move the site into a project repo

Project repos are served from a subpath (`username.github.io/<repo>/`). Build with
the repo name as the base path and everything — links, images, canonicals,
sitemap — follows automatically:

```bash
NEXT_PUBLIC_BASE_PATH=/shivanshelegance npm run build
```

Also set that in the `env:` block of `.github/workflows/deploy.yml`. The default
is `""` (root domain).

## Connect your WhatsApp

`lib/site.ts` is the single source of truth:

```ts
export const site = {
  whatsapp: "919999999999",   // ← digits only, country code first
  catalogUrl: null,           // ← optional: https://wa.me/c/xxxxx
};
```

Set `catalogUrl` and every "shop" button opens your WhatsApp Business catalog
directly instead of starting a chat.

## Content

All copy, prices, categories and products live in `lib/site.ts` — `categories`,
`products`, `features`, `business`, `faqs`. Add a product by appending to the
`products` array; the Women page groups them by `category` automatically.

`business` (delivery, payments, returns, sizes, hours) and `faqs` feed the FAQ
page, the structured data and `llms.txt` — see the note in "Before going live".

## SEO / AEO / GEO

- **SEO** — per-page title, description and canonical; Open Graph + Twitter cards;
  `sitemap.xml`; `robots.txt`; one `h1` per page; descriptive alt text.
- **AEO** — JSON-LD on every route: `OnlineStore`, `WebSite`, `CollectionPage`,
  `ItemList`, `BreadcrumbList`, `ContactPage`, `FAQPage`. The `/faq` page is
  written answer-first so assistants can lift direct answers.
- **GEO** — `public/llms.txt` states the brand facts in plain text, and entity
  details (name, category, price range, hours, how to order) are stated
  consistently in prose, schema and llms.txt.

## Design system

| Token | Value | Use |
|---|---|---|
| `--espresso` | `#120D08` | page ground |
| `--ivory` | `#F8F3E9` | body text |
| `--gold` | `#C6A25C` | accents, rules, brand CTAs |
| `--gold-lt` | `#E3C98A` | highlights, prices |
| `--camel` / `--sand` | `#8E6554` / `#D1A083` | warm supports |
| `--wa` | `#25D366` | WhatsApp CTAs only |

Type: Cormorant Garamond (display) + Jost (UI). Both are variable fonts,
self-hosted as six woff2 files in `app/fonts/` (~155 KB) and declared in
`app/fonts.css`. Nothing is fetched from Google at build time, so builds work
offline and in CI.

## Quality

`npm run build` type-checks and prerenders all 12 routes. The site passes 12
automated checks per page at 1440×900 and 390×844: broken images, WhatsApp URL
well-formedness, horizontal overflow, console errors, WCAG AA contrast.

## Before going live

- Replace the WhatsApp placeholder number (`919999999999`).
- Replace the stock photography (not licensed for commercial use) with real
  product shots.
- **Replace the placeholder business facts** in `lib/site.ts` — `business`
  (delivery times, payment methods, exchange window, size range, opening hours)
  and the `faqs` entries. These were written to give the structured data and
  `llms.txt` something concrete to publish, so they must match your real policy
  before search engines and assistants start repeating them.
