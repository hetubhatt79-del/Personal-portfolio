# Hetu Bhatt — Creative Personal Portfolio Website

> **"Learning Today. Building Tomorrow."**  
> A premium, dark-futuristic personal portfolio designed for **Hetu Bhatt**, a first-year BTech Computer Science & Engineering student. Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## ✨ Features & Architecture

- **Visual Theme & Aesthetics**:
  - **Color Palette**: Deep midnight black (`#050814`) with **Electric Violet** (`#8b5cf6`) and **Neon Cyan** (`#06b6d4`) accents.
  - **Cyber Details**: Soft ambient glow halos, subtle 40px cyber grid, glassmorphism panels, and thin glowing borders.
  - **Constellation Particles**: Interactive HTML5 canvas particle network connecting nodes on proximity and cursor attraction (respects `prefers-reduced-motion`).
  - **Typography**:
    - **Space Grotesk**: Headings and section titles.
    - **Inter**: Body typography and interface controls.
    - **JetBrains Mono**: Terminal snippets, code metadata, and tech tags.
  - **Desktop Cyber Cursor**: Smooth trailing ring and pinpoint cyan center for fine pointer devices.

- **10 Core Sections**:
  1. **Navigation Bar**: Sticky header with blur glassmorphism, geometric `HB` monogram, active scroll spy, mobile drawer, and top scroll progress indicator.
  2. **Hero / Introduction**: Animated badge (`BTech CSE Student • Class of 2029/2030`), large headline, 3D-inspired rotating cyber core orb with orbiting satellite chips (`C99`, `Frontend`, `AI`), quick stats, and smooth scroll indicator.
  3. **About Me**: Editorial layout highlighting academic foundation from **RBSE, Banswada, Rajasthan**, interactive `journey_init.c` console card, and modular educational focus cards.
  4. **Technical Skills**: Honest badges (`Beginner`, `Learning`, `Exploring`, `Currently Exploring`) without misleading percentage meters, category filters, and card hover glow.
  5. **Tech Stack Ecosystem**: Grouped into Programming, Web Development, Developer Tools, and AI Tools, clearly differentiating *Regularly Used* from *Currently Learning*.
  6. **Projects & Experiments**: Modern card grid featuring *Personal Portfolio Website*, *C Programming Practice Lab*, *Mini Web Experiments*, and *Problem Solving Hub* with status badges, highlights, and source code links.
  7. **My Learning Journey**: Vertical glowing node timeline tracing milestones from Senior Secondary to Engineering, C programming, web development, and future horizons.
  8. **Hobbies & Interests**: Dynamic card grid with animated music equalizer bars, tech discovery, and curiosity drivers.
  9. **Currently Exploring ("What's on My Radar")**: Live study snapshot cards with mini animated visualizations (interactive pointer memory terminal, layout wireframe, and neural node cluster).
  10. **Contact & Socials**: Copy-to-clipboard email interaction with celebratory confetti, status badge (*Open to learning and collaboration*), simulated fast transmission message form, and social link placeholders.

---

## 🛠️ How to Edit Content

All personal information, links, projects, skills, and milestones are centralized in a single configuration file:

📁 **[`src/data/portfolioData.ts`](file:///d:/Personal%20portfolio/src/data/portfolioData.ts)**

To update your portfolio:
1. Open [`src/data/portfolioData.ts`](file:///d:/Personal%20portfolio/src/data/portfolioData.ts).
2. Edit:
   - `personal.email` &mdash; your actual email address.
   - `personal.social` &mdash; your GitHub, LinkedIn, or Instagram profile URLs.
   - `skills` &mdash; add or adjust skills as you progress in college.
   - `projects` &mdash; add new semester projects, lab assignments, or hackathon entries.
   - `journey` &mdash; update milestone statuses from *In Progress* to *Completed*.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js LTS (v20+ or v24+)
- npm (v10+)

### Running the Development Server
```bash
npm run dev
```
Open your browser at the local URL displayed (typically `http://localhost:5173/`).

### Building for Production
```bash
npm run build
```
Generates an optimized, tree-shaken static production bundle in `dist/`.

### Previewing the Production Build
```bash
npm run preview
```

---

## 📄 License
Created for Hetu Bhatt. Free to customize, expand, and deploy on Vercel, Netlify, or GitHub Pages.
