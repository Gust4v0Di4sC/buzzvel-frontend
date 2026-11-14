# Luma Learning Landing Page

A responsive landing page implemented for the Buzzvel Front-End Engineer coding challenge. The page follows the supplied desktop and mobile Figma designs and uses Next.js App Router, TypeScript, Tailwind CSS, and local assets.

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

Both commands pass in the submitted version. The production build prerenders the landing page as static content.

## Implementation decisions

- Design tokens for colors, typography, spacing, radii, and shadows live in `app/globals.css` and are exposed to Tailwind where appropriate.
- The page is split into semantic sections and reusable components under `components/`.
- Server Components are used by default. Client-side JavaScript is limited to the mobile menu and contact form interactions.
- Figma raster and SVG assets are stored locally in `public/assets`; there are no temporary Figma URLs at runtime.
- `next/image` and `next/font` provide optimized images, stable image geometry, and optimized Inter/Plus Jakarta Sans font loading.
- The responsive layout follows the dedicated 402 px mobile frame, including the reordered hero, stacked cards, full-width calls to action, and mobile footer.
- Accessibility includes semantic landmarks and headings, a skip link, keyboard-operable controls, visible focus styles, form labels, descriptive image alternatives, polite form feedback, and reduced-motion support.

## Interactions

- The mobile navigation toggles with an accessible button and closes after choosing a link.
- Navigation and calls to action scroll to the corresponding landing-page sections.
- The contact form uses native validation and shows a local success message. No backend or CMS was required by the challenge.

## Known gaps

- Authentication, course detail pages, and form persistence are intentionally mocked because the challenge requests one landing page and does not require a backend.
- Footer links point back to the landing page because their destination pages are outside the supplied design.

## Validation performed

- ESLint and TypeScript checks
- Next.js production build
- Runtime compilation and error inspection through the Next.js development server
- Desktop (1280 px) and mobile (402 px) browser review against the Figma screenshots
- Keyboard-accessible mobile menu and form submission checks
- Automated WCAG A/AA audit with no reported violations

## AI usage

OpenAI Codex was used to inspect the challenge brief and Figma frames, download the exact design assets, scaffold components, and assist with implementation and review. The result was checked with ESLint, the production build, Next.js runtime diagnostics, browser interaction tests, responsive screenshots, and an automated accessibility audit. All generated code was reviewed and adapted to the project architecture.

Approximate implementation and review time: 2 hours.
