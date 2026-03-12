# Genara Labs

Research-grade peptide supplier website.

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Base44 (backend: entities, auth, integrations)
- Lucide React icons
- Sonner (toasts)
- TanStack Query

## Pages
- **Home** — Hero, trust indicators, catalog teaser, about preview
- **Products** — Catalog (launching soon view with blurred previews)
- **About** — Company story, values, quality process
- **Contact** — Contact form + info
- **Cart** — Shopping cart with quantity management
- **Checkout** — Order form with research confirmation
- **ProductDetail** — Individual product with specs, COA download, add to cart
- **OrderConfirmation** — Post-order confirmation page

## Legal Pages
- Terms of Service
- Privacy Policy
- Disclaimer
- Shipping Policy
- Refund Policy

## Components
- `Layout.jsx` — App wrapper with Navbar + Footer
- `Navbar` — Fixed nav with cart count, auth state
- `Footer` — Links, disclaimer, logo
- `Logo` — Reusable logo component
- `DisclaimerBanner` — Research-use disclaimer (compact + full)
- `LegalPageLayout` — Shared layout for legal pages
- `ProductCard` — Product grid card
- `useCart` — Cart state hook (localStorage-backed)

## Legal Notice
All products are **For Research Use Only**.
Not for Human Consumption. Not FDA Approved.

## Contact
support@genaralabs.com
