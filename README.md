# Sanket Joice — Portfolio

Personal portfolio website built with React + Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 16+
- npm

### Install & Run

```bash
npm install
npm start
```

The site opens at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

## Deploy to Vercel (Easiest)

1. Push this folder to a GitHub repo
2. Go to vercel.com, import the repo
3. Click Deploy — Vercel auto-detects Create React App

## Project Structure

```
src/
  components/
    Navbar.jsx      — Sticky nav with open-to-work indicator
    Hero.jsx        — Hero with photo, typed animation, stats
    About.jsx       — About + creative cert cards
    Skills.jsx      — Colored skill chips by category
    Experience.jsx  — Timeline work history
    Projects.jsx    — Project cards
    Contact.jsx     — Contact section
    Footer.jsx      — Footer
  sanket.jpg        — Profile photo
  App.js
  index.css         — Global styles + animations
```

## Customise

- **Accent color** — `#ff6b35` throughout. Find & replace to change.
- **Content** — Edit each .jsx component directly.
- **Photo** — Replace `src/sanket.jpg` with your own JPEG.
