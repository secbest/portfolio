# Portfolio

Personal portfolio of Jasper Teo Kheng Cher, built with React and Vite for K0126002 Web Programming at Gachon University.

Live site: https://secbest.github.io/portfolio/

## React concepts used

- Components and props: `Section`, `Nav`, `Hero`, `About`, `Skills`, `Education`, `Projects` (with `FilterBar` and `ProjectCard`), `Contact`
- `children`: `Section` wraps whatever each section shows
- Lists and keys: skills, projects, education and certifications are rendered with `.map()` from `src/data.js`
- State (`useState`): project filter, skill tabs, education dialog, copy-email feedback
- Effects (`useEffect`): typewriter role, active nav link (IntersectionObserver), theme sync
- Custom hook: `useTheme` (dark mode that remembers your choice)
- Conditional rendering: project links, dialog content, "Copied!" message

## Quality

- Semantic HTML with a skip link, native `<dialog>`, keyboard friendly controls
- WCAG AA colour contrast in light and dark themes, respects reduced motion
- Responsive down to phone width
- Lighthouse: Accessibility 100, Best Practices 100, SEO 100 (see `public/evidence/`)

## Run it

```
npm install
npm run dev
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repo, Settings → Pages → Source must be set to **GitHub Actions**.
