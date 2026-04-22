# Mahatta · Souk — Design System

**محطة** (Mahatta, "station / hub") is the parent company; **سوق** (Souk, "market") is the consumer marketplace brand it operates in Saudi Arabia. Four products share this system.

| Product | Who | Scope |
|---|---|---|
| [Souk App](ui-kits/app/index.html) | Customers | 375px mobile · RTL · 8 screens |
| [Souk Marketplace Web](ui-kits/web/index.html) | Customers | 1280px desktop · RTL + LTR · 5 pages |
| [Seller Dashboard](ui-kits/seller/index.html) | Merchants & influencers | 1440px desktop · RTL · 5 screens |
| [Admin Panel](ui-kits/admin/index.html) | Platform ops | 1440px desktop · RTL · 5 screens |

---

## CONTENT FUNDAMENTALS

### Arabic is the first language, not a translation
Every surface is designed for Arabic readers first. English is a fallback shown on the marketplace web via a language toggle; admin and seller dashboards are Arabic-only. Don't treat RTL as a layout mirror — treat it as the default.

### Numbers
- **Prices in AR UI:** Arabic-Indic numerals (`١٢٠ ر.س`), currency after the number.
- **Prices in EN UI:** Western numerals (`120 SAR`), currency after.
- **Order IDs, SKUs, invoices:** Western numerals everywhere (database truth).
- **Follower / sales counts:** AR uses AR numerals with K/M suffixes preserved (`١٢٠K`).

### Voice
Warm, direct, friendly — like a trusted friend recommending something. Avoid corporate distance ("dear valued customer"), startup swagger ("disrupting commerce"), and filler modifiers ("amazing", "ultimate"). Use real names of influencers, brands, cities.

### Microcopy patterns
- CTAs are verbs, 2–3 words max: `اشتر الآن`, `أضف للسلة`, `+ متابعة`, `إتمام الشراء`.
- Empty states name the next action, not the absence: "Add products to continue" not "Your cart is empty."
- Free-shipping unlock is celebratory: ✓ `مبروك! شحن مجاني على طلبك`.

---

## VISUAL FOUNDATIONS

See `preview/colors.html`, `preview/type.html`, `preview/spacing.html` for full swatches and tokens. All tokens live in `tokens.css`.

### The gradient is sacred
`linear-gradient(135deg, #7F77DD → #D4537E)` is the brand signature. Reserve it for:
- Primary CTAs (`اشتر الآن`, `إتمام الشراء`)
- Logo container, active nav indicator
- Discount badges (`-٢٥٪`), cart count bubble
- Wallet panel on the profile screen

Don't paint it across wide surfaces or behind body text — it cheapens. Use `--m-grad-soft` (10% alpha) if a large surface needs a gradient hint.

### Colors in one breath
- **Solid purple** `#7F77DD` — workhorse accent: active tabs, hyperlinks, by-influencer chips, key numbers.
- **Pink** `#D4537E` — lives inside the gradient and as cart/badge counts only.
- **Gold** `#C8A84B` — the basket handle on the logo. Used nowhere else in UI.
- **Ink deep** `#1A1A2E` — footers, sidebars, dark overlays on hero images.
- **Neutrals** do ~80% of the work. Don't pull from the brand palette for chrome.

### Type
**Cairo** for everything. 400 / 500 / 600 / 700 / 800 / 900. **Inter** only as a Latin fallback for monospace-like tokens (SKUs, hex codes). Scale runs 11 → 52px. App body is 13px; web body is 14px; dashboard body is 14px.

### Radius is generous
Buttons 14px, cards 16px, hero cards 20px, pills 999px. Souk is friendly, not sharp. No 4px radius except on small chips and input icons.

### Shadows are tinted
`--m-shadow-2` on CTAs is pink-tinted (`rgba(212,83,126,0.3)`); hover lift on cards is purple-tinted. Never use neutral gray drop shadows — the color-carry is part of the brand.

### Spacing
4px base grid. Common rhythm: cards 16–24 padding, page gutters 32–48, section gaps 32–48. Touch targets ≥ 44px on mobile.

---

## ICONOGRAPHY

Today the product uses **emoji as placeholder icons** (🛒 ♡ 🏠 📦 etc.) throughout the app. This is pragmatic, not aspirational. Until we commission or license a custom set:

- **Do:** use the existing emoji in their current positions. They carry meaning users already recognize.
- **Do:** use the solid-filled Unicode glyphs (⌂ ◎ ⊡ ◉ ←) for bottom-nav icons to match the existing app.
- **Don't:** add new emoji beyond the vocabulary in `ui-kits/app/Components.jsx`.
- **Don't:** mix emoji styles (Apple vs. Google renderings) — keep them all platform-native.
- **Future:** commission a 24px line-icon set in Mahatta purple to replace emoji across all four products. Priority order: app nav → dashboard nav → inline product actions → decorative.

The **logo** (`assets/logo.svg`, `assets/logo-mark.svg`) is a reconstruction of the physical signage in `assets/mahatta-logo-original.jpg` — a basket with two curved handles forming a stylized checkmark/arrow. Use the mark alone below 48px; the full lockup above.

---

## USING THIS SYSTEM

### Tokens
```html
<link rel="stylesheet" href="tokens.css">
```
All tokens are CSS custom properties prefixed `--m-*`. The JSX UI kits (`ui-kits/*/`) each declare their own `COLORS` / `grad` objects mirrored from these tokens — if you edit `tokens.css`, mirror the change into `Components.jsx` and `WebComponents.jsx`.

### JSX components
- Mobile app: `ui-kits/app/Components.jsx` (BottomNav, TopBar, ProductCard, Badge, Avatar, Btn, StarRating, InfluencerChip)
- Web marketplace: `ui-kits/web/WebComponents.jsx` (SiteHeader, SiteFooter, ProductCard, InfluencerCard)
- Seller & Admin: see their `index.html` — shared components are defined inline (Sidebar, TopBar, KpiCard, StatusBadge, Table, FilterBar).

### New screens — decision flow
1. **Which product?** Pick the right kit's `index.html` as your host.
2. **Does a screen already exist?** Copy it and edit — don't start from scratch.
3. **Does a component already exist?** Same rule — look before you build.
4. **New visual element?** Compose from tokens (`var(--m-*)`). Never hard-code brand hex.

### Caveats
- Emoji icons are placeholder-quality. Commissioning a real icon set is the highest-impact visual upgrade.
- The mobile app is single-file React with inline Babel; the three web kits are the same. This is deliberate for design fidelity, not production architecture.
- The logo SVG is a faithful reconstruction, not the original vector file. If/when the original is provided, replace `assets/logo.svg` and `assets/logo-mark.svg`.
- No dark mode yet. Ink-deep surfaces (`--m-ink-deep`) are used for footers and admin sidebar only.
- Imagery is currently Unsplash — acceptable for mockups, must be replaced with licensed product/influencer photography before launch.
