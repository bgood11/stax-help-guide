# STAX User Help Guide

An interactive, web-based guidebook for the STAX finance application platform. Converts the original 48-page PDF help guide into a searchable, navigable, and beautifully designed web application.

## Features

- **16 Interactive Sections** covering every aspect of using STAX
- **Sidebar Navigation** with collapsible table of contents
- **Full-text Search** (Ctrl/Cmd + K) across all sections
- **Progress Tracking** — mark sections as complete, tracked in localStorage
- **Click-to-Zoom Screenshots** — all original annotated screenshots preserved
- **Responsive Design** — works on desktop, tablet, and mobile
- **Animated Transitions** — smooth section transitions with Framer Motion
- **Deep Linking** — share direct links to any section via URL hash

## Sections

1. Logging into STAX
2. Clearing Browsing Data
3. Dashboard Glossary
4. Understanding the STAX Dashboard
5. Searching in STAX
6. Applications Sent to the Customer
7. Customer Follow Up Hints & Tips
8. Credit Agreement Expiry
9. Documents Sent to a Customer
10. Minimum Lender Criteria
11. Application Summary Page
12. STAX Button Summary
13. Cancelling an Application
14. Troubleshooting
15. Solar PV & Battery Storage EPVS Validation
16. Loan Amendments

## Tech Stack

- **React 19** + TypeScript
- **Vite 8** — fast builds and HMR
- **Tailwind CSS 4** — utility-first styling with custom Stax brand theme
- **Framer Motion** — smooth animations and transitions
- **Lucide React** — consistent iconography

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  App.tsx                    # Main shell — sidebar + content + search
  index.css                  # Tailwind theme with Stax brand colors
  data/sections.ts           # Section metadata and search keywords
  hooks/                     # useActiveSection, useProgress, useSearch
  components/
    layout/                  # Header, Sidebar, ContentArea
    ui/                      # ImageZoom, Callout, DataTable, StepIndicator, VideoLink
    sections/                # 16 section content components
public/
  images/
    logos/                   # Stax brand logos
    screenshots/             # Extracted PDF page screenshots
```

## Deployment

Built as a static SPA — deploy to any static hosting (Vercel, Netlify, GitHub Pages, etc.).

```bash
npm run build
# Output in dist/
```

---

Built by BG Consulting Ltd
