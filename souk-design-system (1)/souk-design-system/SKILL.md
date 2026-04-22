# SKILL — Working in the Mahatta · Souk system

Read this before building anything new in this project.

## Before you write any JSX or CSS
1. **Read `README.md`** to know which of the four products you're touching.
2. **Open the existing kit** (`ui-kits/<product>/index.html`) and read its screen array. Nine times out of ten, what you need already exists nearby.
3. **Skim `tokens.css`** so you use the right variable. Don't invent colors.

## Hard rules
- **Arabic first.** Every new surface ships RTL. English text is optional; Arabic text is not.
- **Tokens, not literals.** Use `var(--m-purple)`, not `#7F77DD`. Use `var(--m-grad)`, never rewrite the gradient.
- **Cairo is the font.** No Inter for body copy, no system-ui fallback in visual mockups.
- **Currency format is `١٢٠ ر.س`** in AR, `120 SAR` in EN. Currency follows the number in both languages.
- **Touch targets ≥ 44px** on mobile screens.
- **The gradient is reserved.** Primary CTAs, logo, active indicators, discount badges, cart bubble. Nowhere else.

## Conventions by product

### Mobile app (375 × 812, RTL)
- Body text 13px, headings 16–22px, hero 26px.
- `BottomNav` is fixed at `bottom: 0`, height 68px. Content region gets `paddingBottom: 68`.
- `TopBar` is sticky; use `back` + `onBack` for subscreens.
- Every product card uses `<ProductCard>` from `Components.jsx`. Don't reinvent.

### Marketplace web (1280px)
- Max content width 1280, gutter 48px. Header is 64px sticky.
- Product grids: 4 columns on home, 3 on listings (compact cards).
- Language toggle lives in the header. RTL is default; LTR flips `direction` + mirrors padding.

### Seller dashboard (1440px, RTL)
- Left sidebar 220px dark (`--m-ink-deep`). Content area white on `--m-bg-faint`.
- Every page opens with a KPI row (3–4 cards), then primary content.
- Alert banners (new order, payout ready) sit at the top, above the KPI row.

### Admin panel (1440px, RTL)
- Same chrome as seller dashboard, different data scope.
- Tables: header row `--m-bg-faint`, row hover `--m-purple-50`, 52px row height.
- Action menus are `···` dropdown buttons — never inline buttons in table cells.

## Components that already exist — use these first

| Need | Where |
|---|---|
| Primary / secondary / outline / ghost / danger button | `Btn` in `ui-kits/app/Components.jsx` or `.btn-*` classes in `preview/components.html` |
| Product tile | `ProductCard` in both `Components.jsx` and `WebComponents.jsx` |
| Influencer chip ("بواسطة سارة") | `InfluencerChip` in `Components.jsx` |
| Star rating | `StarRating` in `Components.jsx` |
| Status pill (paid/pending/shipped) | `.status.s-*` in `preview/components.html` |
| KPI card | `KpiCard` inline in admin `index.html`; `.kpi` in preview |
| Influencer avatar with purple ring | `Avatar border` in `Components.jsx` |

## When to deviate
- If the user wants a **new visual direction**, explore it as a Tweak on an existing screen first, not a fresh codebase.
- If the user wants a **new product** (e.g. driver app), start from the closest existing kit (likely the customer app), not from `tokens.css` alone.
- Never import an external icon library on top of the emoji vocabulary — commit fully to one or the other.

## Output checklist before handing back
- [ ] `dir="rtl"` on root (unless explicitly EN)
- [ ] `font-family: Cairo` somewhere in the chain
- [ ] No hard-coded `#7F77DD` / `#D4537E` / gradient strings
- [ ] Numbers in Arabic-Indic when inside AR screens
- [ ] At least one CTA uses the gradient; at most two on any screen
- [ ] Cards use `--m-r-2xl` (16px) radius
- [ ] Shadows use the tinted tokens, not neutral gray
