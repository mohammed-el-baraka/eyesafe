# EyeSafe Website (eyesafe.ma)

Internal repository documentation for the EyeSafe engineering and product team. This repository is private and maintained for internal development and updates to the official website.

---

## Website Overview

- **Domain:** [eyesafe.ma](https://eyesafe.ma)
- **Purpose:** Official presentation website and pilot request portal for EyeSafe, a sovereign edge computer vision platform for industrial safety, logistics gate tracking, and academic integrity.
- **Hosting / Root:** Statically hosted from the `/docs` directory (configured for GitHub Pages with custom domain `eyesafe.ma`).
- **Tech Stack:** Vanilla HTML5, CSS3, and JavaScript (zero build steps, zero external package dependencies).

---

## Repository Structure

```text
eyesafe-website/
├── docs/                      # Web root directory (deployed to eyesafe.ma)
│   ├── index.html             # Semantic single-page landing structure with EN/FR copy
│   ├── styles.css             # Responsive styling, design tokens, and dark theme
│   ├── app.js                 # Language toggle (EN/FR), mobile navigation, and animations
│   └── assets/                # Media files and visual assets
│       ├── demo-video-1.mp4   # Industrial safety demonstration clip
│       ├── demo-video-2.mp4   # Hero background video demonstration
│       ├── hero-bg.jpeg       # Video fallback / poster image
│       ├── exam-proctor-cctv.jpg # Academic supervision showcase graphic
│       └── gate-anpr-cctv.jpg # Gate access & logistics showcase graphic
├── eyesafe-logo.svg           # Official EyeSafe SVG brand mark
├── candidature_launch_space.md# Internal startup application notes (Station F / Launch Space)
└── README.md                  # Internal technical documentation
```

---

## Key Website Components

1. **Bilingual Content (EN / FR):**
   - Implemented without external libraries.
   - Elements declare translations using `data-en="..."` and `data-fr="..."`.
   - `docs/app.js` updates DOM text content on toggle and stores the user preference in `localStorage` (`eyesafe-language`).

2. **Core Landing Sections:**
   - **Hero:** Brand statement, live edge status pill, and background video loop.
   - **Expertise (Platform):** Three-stage visual pipeline: Perceive, Interpret, Respond.
   - **Applications:** Use case breakdowns for Industrial Safety, Gate Logistics (ANPR), and Academic Integrity.
   - **Architecture:** Explains the 100% on-premise edge appliance data flow (sub-25ms inference, zero cloud video exfiltration).
   - **Approach:** Three-step pilot integration methodology (Understand site, Validate in context, Deploy with control).
   - **Contact:** Direct pilot consultation inquiry path via email.

3. **Performance & Clean Code:**
   - No build tools, bundlers, or heavy frameworks required.
   - Reveal-on-scroll animations powered natively by `IntersectionObserver`.

---

## Local Development & Testing

To test or preview changes locally, run an HTTP server from the project root or inside `docs`:

### Option 1: Python 3
```bash
python3 -m http.server 8080 --directory docs
```

### Option 2: Node.js (npx)
```bash
npx -y serve docs
```

After starting the server, open:
```text
http://localhost:8080
```

---

## Deployment & Updates

1. Make edits to files inside `docs/`.
2. Commit and push your changes to the `main` branch.
3. GitHub Pages automatically rebuilds and serves the live site on `eyesafe.ma`.

---

## Team Contact

- **Lead:** Mohammed El Baraka
- **Email:** mohammed.elbaraka@emines.um6p.ma
- **Location:** Casablanca / Benguerir, Morocco
