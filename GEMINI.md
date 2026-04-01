# Gemini CLI Project Memory: Fuwari Website

This file serves as a persistent context for Gemini CLI when working on this project. It ensures that future sessions "remember" the architectural decisions, custom features, and preferences established in previous chats.

## Project Overview
- **Framework**: Astro 5 (using the Fuwari theme)
- **Styling**: TailwindCSS
- **Components**: Svelte & Astro
- **Content**: Managed via Astro Content Collections (posts, teaching, spec)

## Custom Features & Architectural Decisions

### 1. Dev-Only Resources Page
- **Location**: `src/pages/resources.astro`
- **Data Source**: `src/data/resources.json`
- **Logic**: 
    - The page is accessible during development (`pnpm dev`).
    - In production (`import.meta.env.PROD`), the page redirects to `/404/`.
    - The "Resources" link in `src/components/Navbar.astro` is filtered out in production.
- **Purpose**: Used for tracking local PDF files and internal resources without exposing them on the public site.
### 2. Google Analytics (GA4)
- **Measurement ID**: `G-9TMZNHK1JN`
- **Implementation**: Global Site Tag (`gtag.js`) is added to `src/layouts/Layout.astro`.
- **Constraint**: Tracking is only enabled in **production** (`import.meta.env.PROD`) to ensure dev/staging data doesn't skew your analytics.

### 3. Academic Publication Standards
...
- **Preference**: Prioritize official journal citations and DOIs over arXiv preprints.
- **Source**: data in `src/data/publications.json` should ideally match InspireHEP or official journal metadata.
- **Example**: "Secluded Dark Composites and Remnant Binding Fields" is updated to its JCAP version: `J. Cosmol. Astropart. Phys. 12 (2025) 034`.

### 3. Teaching Collection
- **Schema**: Defined in `src/content/config.ts`.
- **Handling**: Supports both `string` and `date` types for the `date` field to accommodate different frontmatter formats.
- **Components**: `src/pages/teaching/[slug].astro` uses `entry.id` (Astro 5 standard) instead of `entry.slug`.

## Maintenance Notes
- Always run `pnpm check` and `pnpm lint` after modifications to ensure type safety and code quality.
- The `public/resources/` directory contains static PDF files linked from the dev-only resources page.

## Future Roadmap / Pending Tasks
- [ ] Monitor if any other pages should be restricted to dev-only.
- [ ] Keep `src/data/publications.json` updated as new papers are published.
