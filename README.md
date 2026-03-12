# Genara Labs

Research-grade peptide supplier — a modern Vite/React storefront.

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS** + shadcn/ui components
- **Framer Motion** — page & element animations
- **React Router DOM v6** — client-side routing
- **TanStack Query** — data fetching & caching
- **Sonner** — toast notifications
- **Lucide React** — icons
- **Base44 SDK** — backend (entities, auth, integrations)

## Project Structure

```
src/
  pages/          # Route-level page components
  components/
    shared/       # Navbar, Footer, Logo, DisclaimerBanner, LegalPageLayout
    products/     # ProductCard
    cart/         # useCart hook
    ui/           # shadcn/ui primitives
  lib/            # utilities (cn)
  utils.js        # createPageUrl helper
  main.jsx        # App entry + React Router setup
  Layout.jsx      # Global layout wrapper
  globals.css     # Custom CSS variables & base styles
  index.css       # Tailwind directives
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, trust indicators, catalog teaser |
| `/products` | Products — launching soon with category preview |
| `/product-detail?id=` | ProductDetail — specs, COA download, add to cart |
| `/about` | About — company story, values, QA process |
| `/contact` | Contact — form + contact info |
| `/cart` | Cart — quantity management, order summary |
| `/checkout` | Checkout — shipping form + research confirmation |
| `/order-confirmation` | OrderConfirmation — post-purchase screen |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |
| `/disclaimer` | Disclaimer |
| `/shipping-policy` | Shipping Policy |
| `/refund-policy` | Refund Policy |

## Getting Started

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel will auto-detect Vite; build settings are preconfigured in `vercel.json`
4. Set any required environment variables in Vercel dashboard

Build command: `npm run build`
Output directory: `dist`

## Legal Notice

All products are **For Research Use Only**.
Not for Human Consumption. Not FDA Approved.
Not a Dietary Supplement.

## Contact

support@genaralabs.com
