# Dora Appiah — Developer Portfolio

Personal portfolio site for Dora Appiah, a Software Engineer and AI/ML practitioner based in Accra, Ghana. Built to showcase work experience, technical and soft skills, and featured projects.

**Live site:** _add your deployed Vercel URL here once deployed_

## Pages

- **Home** — hero introduction, highlight stats, and a skills teaser
- **About** — bio, quick facts, work experience & education timeline, and leadership/community involvement
- **Skills** — technical skill categories plus a "Beyond the Code" soft skills section
- **Projects** — featured web, mobile, and UI/UX design projects with live/repo/Figma links
- **Contact** — contact details and a mailto-based contact form

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for tooling and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) for styling (navy `#28396C` / cream `#EAE6BC` palette, defined in `src/index.css`)
- [React Router DOM](https://reactrouter.com/) for client-side routing
- [Motion](https://motion.dev/) for animations (scroll reveals, page transitions, hero entrance)
- [Lucide](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/) for iconography

## Project Structure

```
src/
  assets/       # profile photo and project screenshots
  components/
    layout/     # Navbar, Footer, Layout, ScrollToTop
    ui/         # Button, Card, SectionHeading, Reveal
  data/         # editable content: profile, skills, experience, projects
  pages/        # Home, About, Skills, Projects, Contact, NotFound
```

Site content (bio, skills, experience, and projects) lives entirely in `src/data/` — update those files to change what's displayed without touching component code.

## Development

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run lint      # run oxlint
npm run preview   # preview the production build locally
```

## Deployment

Deployed on [Vercel](https://vercel.com/) — framework preset "Vite", build command `npm run build`, output directory `dist`.
