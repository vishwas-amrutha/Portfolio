# Personal Portfolio Website

A modern, responsive, and production-ready personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed for high performance, SEO optimization, and static deployment.

## 🚀 Key Features

*   **Next.js 14 (App Router)**: Utilizing the latest Next.js features for optimal performance and developer experience.
*   **Static Export**: Configured for `next export` to deploy easily on any static hosting (AWS S3, GitHub Pages, Vercel, Netlify).
*   **Dark/Light Mode**: Fully integrated theme switching with system preference detection and `next-themes`.
*   **Responsive Design**: Mobile-first approach using Tailwind CSS.
*   **SEO Optimized**: Dynamic metadata, Open Graph tags, sitemap, and robots.txt generation.
*   **Smooth Navigation**: Custom smooth scrolling for hash links and floating navigation buttons.
*   **Contact Form**: Functional contact form powered by **Formspree**.
*   **Animations**: Subtle enter and hover animations for a premium feel.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Heroicons](https://heroicons.com/) / SVGs
*   **Form Handling**: [Formspree](https://formspree.io/)
*   **Theming**: `next-themes`

## 📂 Project Structure

```
├── public/              # Static assets (images, pdfs)
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── contact/     # Contact page
│   │   ├── layout.tsx   # Root layout & providers
│   │   ├── page.tsx     # Homepage (Hero, About, Projects)
│   │   └── globals.css  # Global styles & theme variables
│   ├── components/      # Reusable UI components
│   │   ├── Header.tsx           # Navigation bar
│   │   ├── Footer.tsx           # Footer with social links
│   │   ├── ProjectCard.tsx      # Project display card
│   │   ├── ThemeToggle.tsx      # Dark/Light mode switch
│   │   ├── ContactForm.tsx      # Contact form component
│   │   ├── ScrollTopButton.tsx  # Floating scroll-to-top
│   │   └── ...
│   └── data/            # Static data files
│       ├── projects.ts  # Portfolio project details
│       └── skills.ts    # Skills data
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
└── ...
```

## ⚡ Getting Started

### Prerequisites

*   Node.js 18.17 or later
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/vishwas-amrutha/Portfolio.git
    cd Portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment (Static Export)

This project is configured for **Static Export**.

1.  Build the project:
    ```bash
    npm run build
    ```

2.  The static files will be generated in the `out/` directory.

3.  Deploy the contents of `out/` to any static hosting service (e.g., AWS S3 + CloudFront, GitHub Pages, Netlify).

## 🎨 Customization

*   **Projects**: Update `src/data/projects.ts` to add your own projects.
*   **Skills**: Update `src/data/skills.ts` to modify your skills list.
*   **Colors**: Modify `src/app/globals.css` CSS variables or `tailwind.config.ts` to change the theme.
*   **Contact**: Update the Formspree ID in `src/components/ContactForm.tsx`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
