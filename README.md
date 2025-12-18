# FX Studio - Photography Portfolio

A minimal, high-end photography portfolio website showcasing commercial photography with elegant design and performance.

## 🎯 Features

- **Full-screen Hero Slider** - Immersive first impression with rotating featured images
- **Portfolio Gallery** - Grid layout with lightbox viewing experience
- **Responsive Design** - Optimized for all devices
- **Performance Optimized** - Fast loading with Next.js image optimization
- **Clean Navigation** - Apple-inspired minimal interface

## 🛠 Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **GitHub Pages** - Static site hosting

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build

```bash
# Create production build
npm run build

# Preview production build
npm start
```

## 📦 Deployment

This site automatically deploys to GitHub Pages when pushing to the `main` branch.

**Live URL:** `https://oceanrich.github.io/FX-Studio/`

### Setup GitHub Pages

1. Go to repository Settings → Pages
2. Source: Select "GitHub Actions"
3. Push to main branch to trigger deployment

## 📁 Project Structure

```
fx-studio/
├── app/
│   ├── components/      # Reusable components
│   │   ├── Logo.tsx
│   │   ├── Navigation.tsx
│   │   └── HeroSlider.tsx
│   ├── portfolio/       # Portfolio page
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/
│   └── images/         # Photography assets
└── .github/
    └── workflows/      # GitHub Actions
```

## 🎨 Design Philosophy

- **Minimal & Clean** - Let the photography speak
- **High-end Feel** - Premium typography and spacing
- **Performance First** - Optimized loading and interactions
- **Apple-inspired** - Refined, intentional design choices

## 📝 License

© 2024 FX Studio. All rights reserved.
