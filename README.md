# Bima Adityo Kurniawan — portfolio

A concise, static Next.js App Router portfolio with TypeScript, Tailwind CSS, shadcn/ui primitives, Radix dropdown behavior, Lucide icons, and the official shadcn `next-themes` integration.

## Development

Node.js 20.9 or newer. Run `npm ci`, `npm run dev`. Run `npm run build` for static output in `out/`, and `npm run typecheck` for TypeScript verification. The lockfile records exact installed versions. Deploy `out/` to a static host; the source also runs as a standard Next.js project. No runtime server or credentials are required for Phase 1.

Set `SITE_URL` before building when changing domains. It controls the canonical, Open Graph URLs, Person/WebSite JSON-LD, sitemap, and robots. The current URL is the registered preview origin. Private preview access prevents public search indexing until the deployment is deliberately made public.

## Content and Phase 2 boundary

`src/content/portfolio.ts` owns plain typed profile, social, experience, education, certification, project, skill, and publication data. Stable IDs provide identity; array order controls display. `src/app/page.tsx` renders these records as a Server Component. Source attribution is recorded in `CONTENT_SOURCES.md`.

For Phase 2, replace the static import with a server-side content reader that returns the same `Portfolio` shape. Filter published records and apply ordering in that reader. The existing presentation can remain intact. Articles, media administration, CRUD, authentication, database schemas, API routes, and admin interfaces are deliberately not implemented. The Phase 1 experience, education, certification, project, skill, and publication records are plain data so they can later be read from a database or API without changing the page structure. Add publishing fields and other domain types when their requirements are known; no speculative repository abstraction exists.

The page remains static. Only the theme provider and header dropdowns require client execution. Theme preferences use `next-themes`, default to system, and persist between visits. Radix handles keyboard focus and menu behavior. Native anchors handle navigation and contact links. Project context and experience details use native `details`/`summary`, so they support keyboard interaction and work without client JavaScript. All content is included in the static HTML.

## Design and assets

A cobalt and ink-blue palette, compact monogram, asymmetric introduction, numbered section rail, featured case study, and expandable work history give the page an editorial structure. Projects appear before the biography and experience so the work is easy to find. Light and dark modes share semantic CSS tokens.

Geist and Geist Mono are self-hosted with `next/font/local`; their Latin WOFF2 files and SIL Open Font License are included in `src/app/fonts`. Builds and visitors do not need to contact a font service. Bima’s real portrait comes from the public EnergyMate repository, with its source recorded in `CONTENT_SOURCES.md`. The image has explicit dimensions and descriptive alt text. The existing social-preview graphic is preserved.

Motion is CSS-only: a short hero entrance, link feedback, and a brief reveal when details open. No animation package, scroll listener, or always-running animation is used. Reduced-motion preferences disable movement and smooth scrolling. Content remains visible when animation is unavailable.

## SEO and accessibility

Semantic sections, one h1, descriptive links, skip navigation, focus outlines, reduced-motion support, mobile navigation, canonical/OG/Twitter metadata, static robots and sitemap, Person/WebSite/ScholarlyArticle JSON-LD, 404 page, and social image. The private preview cannot demonstrate real-world Core Web Vitals; those require field data from a public deployment.
