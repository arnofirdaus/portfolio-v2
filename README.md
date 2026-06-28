# Arno Firdaus - Portfolio v2

This is the source code for my personal portfolio website, built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Quick Start

To get this project running locally, follow these steps:

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the local development server:**
   ```sh
   npm run dev
   ```
   The site will be available at `http://localhost:4321`.

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** GitHub Pages (via GitHub Actions)

## 📁 Project Structure

```text
/
├── .github/          # GitHub Actions workflows
├── public/           # Static assets like images and favicons
├── src/
│   ├── components/   # Reusable UI components (NavBar, ProjectCard, etc.)
│   ├── content/      # Markdown files for projects and experience
│   ├── layouts/      # Global layout wrapper
│   ├── pages/        # Astro pages and routing
│   └── styles/       # Global CSS (Tailwind)
└── astro.config.mjs  # Astro configuration
```

## 🚢 Deployment

This project is set up to deploy automatically to [GitHub Pages](https://pages.github.com/). 
When changes are pushed to the `main` branch, a GitHub Action (`.github/workflows/deploy.yml`) is triggered to build and deploy the site.

## 📝 Content Management

Projects and experiences are managed using Astro's Content Collections. 
To add or update content, edit the markdown files in `src/content/projects/` and `src/content/experience/`.
