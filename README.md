# TOPBUILD

Professional construction and development website built with Next.js, React, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
├── app/                 # App Router pages and layouts
├── components/
│   ├── layout/          # Header, Footer, Container, Section
│   ├── sections/        # Page-level section compositions
│   ├── ui/              # Reusable UI primitives
│   └── shared/          # Shared brand elements (Logo)
├── data/                # Static content and page copy
├── lib/                 # Shared utilities
└── types/               # TypeScript domain types

public/images/           # Page-scoped static assets
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/services/[slug]` | Service detail |
| `/projects` | Projects |
| `/projects/[slug]` | Project detail |
| `/blog` | Insights & articles |
| `/blog/[slug]` | Article detail |
| `/testimonials` | Testimonials |
| `/faq` | FAQs |
| `/contact` | Contact Us |

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide icons
