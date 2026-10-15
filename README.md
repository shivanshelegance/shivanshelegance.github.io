# Shivansh Elegance — Next.js storefront

A six-page, mobile-first Next.js (App Router) site for a women's ethnic-wear store
that sells over WhatsApp. Every call to action opens WhatsApp with a prefilled,
context-specific message.

```
app/
├── layout.tsx        fonts, header/footer shell, metadata
├── page.tsx          Home
├── women/page.tsx    Women's collection (live shop)
├── men/page.tsx      Men — Coming Soon
├── kids/page.tsx     Child — Coming Soon
├── about/page.tsx    Our Story
├── contact/page.tsx  WhatsApp-first contact
└── globals.css       design system (tokens + components)
components/           Header, Footer, WhatsAppBar, CategoryGrid, ProductCard,
                      Features, Story, Quote, Cta, ComingSoon, Reveal, Icon
lib/site.ts           ALL config + content in one file
public/images/        18 product + category images
public/logo-gold.svg  traced gold logo
```

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start
```

Deploy anywhere that runs Node — Vercel, Netlify, or a VPS. Every page is statically
prerendered, so it also exports as static HTML.

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
`products`, `features`. Add a product by appending to the `products` array; the
Women page groups them by `category` automatically.

## Design system

| Token | Value | Use |
|---|---|---|
| `--espresso` | `#120D08` | page ground |
| `--ivory` | `#F8F3E9` | body text |
| `--gold` | `#C6A25C` | accents, rules, brand CTAs |
| `--gold-lt` | `#E3C98A` | highlights, prices |
| `--camel` / `--sand` | `#8E6554` / `#D1A083` | warm supports |
| `--wa` | `#25D366` | WhatsApp CTAs only |

Type: Cormorant Garamond (display) + Jost (UI), loaded via `next/font`.

## Quality

`npm run build` type-checks and prerenders all 9 routes. The site passes 12
automated checks per page at 1440×900 and 390×844: broken images, WhatsApp URL
well-formedness, horizontal overflow, console errors, WCAG AA contrast.

## Before going live

- Replace the WhatsApp placeholder number.
- Replace the stock photography (not licensed for commercial use) with real product shots.
- Confirm prices, opening hours and delivery copy.
