<div align="center">

# ✦ Anish Chand — Portfolio

**A high-performance, immersive frontend experience built for the modern web.**

<br />

### 🔴 **[View Live Site →](https://anishchand.vercel.app)**

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

<br />

---

## 📖 Overview

This portfolio is an **Awwwards-tier personal website** engineered from the ground up to deliver a cinematic, scroll-driven experience without sacrificing a single point of performance. Every interaction—from fluid page transitions to micro-animated UI elements—is purpose-built with GSAP and React Lenis, resulting in a site that **scores 100/100 across all four Lighthouse audit categories**.

---

## ⚡ Performance & Architecture

Achieving a perfect Lighthouse score isn't accidental—it's architectural.

| Metric | Score |
| :--- | :---: |
| **Performance** | 💯 |
| **Accessibility** | 💯 |
| **Best Practices** | 💯 |
| **SEO** | 💯 |

**Key optimizations include:**

- **Dynamic Imports** — Heavy animation libraries and below-the-fold components are code-split and lazy-loaded, keeping the initial JS bundle minimal and the LCP fast.
- **Semantic HTML & ARIA** — Fully semantic document structure with appropriate ARIA attributes, logical focus states, and keyboard navigability for complete accessibility compliance.
- **LCP & CLS Mitigation** — Critical assets are prioritized with `priority` hints, layout shifts are eliminated through explicit dimensions, and fonts are preloaded to prevent FOIT.
- **Server Components by Default** — Leveraging the Next.js App Router's React Server Component model to ship zero unnecessary client-side JavaScript.

---

## ✨ Features

- 🎯 **Custom GSAP Wheel-Scroll Matching** — Bespoke scroll-linked animations synchronized to native wheel input for a buttery, 1:1 parallax feel.
- 📱 **Intersection Observer Mobile Strategy** — Animation triggers gracefully degrade to performant `IntersectionObserver` patterns on mobile devices, preserving battery and frame rate.
- 🧈 **React Lenis Smooth Scrolling** — Globally integrated smooth-scroll layer via `@studio-freight/react-lenis`, providing a premium, momentum-based scroll experience across all viewports.
- 💫 **Micro-Interactions** — Hover states, magnetic cursor effects, and staggered reveals that bring the UI to life without overwhelming the user.
- 📐 **Advanced Responsive Design** — Fluid typography, container queries, and breakpoint-aware animation choreography ensure a pixel-perfect experience from 320px to 4K.
- 🎬 **Framer Motion Integration** — Page-level transitions and layout animations powered by Framer Motion for seamless component-level orchestration.

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, RSC) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Animation** | [GSAP 3.15](https://greensock.com/gsap/) · [Framer Motion](https://www.framer.com/motion/) |
| **Smooth Scroll** | [@studio-freight/react-lenis](https://github.com/darkroomengineering/lenis) |
| **Deployment** | [Vercel](https://vercel.com/) |
| **Linting** | ESLint 9 with `eslint-config-next` |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Local Development

```bash
# Clone the repository
git clone https://github.com/anishchand/portfolio.git
cd portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm run dev
```

The app will be running at **[http://localhost:3000](http://localhost:3000)**.

### Production Build

```bash
# Create an optimized production build
npm run build

# Serve the production build locally
npm start
```

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Anish Chand

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📬 Contact

**Anish Chand**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anish-chand-577717270/)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://anishchand.vercel.app)

---

<div align="center">
<sub>Designed & engineered with precision by <strong>Anish Chand</strong>.</sub>
</div>
