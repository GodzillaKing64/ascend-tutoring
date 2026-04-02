# Ascend Tutoring

SAT tutoring landing page built with React + Vite.

---

## 🚀 Deploy to Vercel (Step-by-Step)

### 1. Install dependencies locally (optional — Vercel handles this)
```bash
npm install
npm run dev       # runs at http://localhost:5173
npm run build     # test production build locally
```

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Ascend Tutoring site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ascend-tutoring.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your GitHub username.  
> Create the repo on GitHub first (github.com → New Repository → name it `ascend-tutoring` → don't initialize with README).

### 3. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use your GitHub account)
2. Click **"Add New Project"**
3. Import your `ascend-tutoring` GitHub repo
4. Vercel auto-detects Vite — **no config changes needed**
5. Click **Deploy**
6. Your site is live at `ascend-tutoring.vercel.app` (or custom domain)

### 4. Auto-deploy on every push
Once connected, every `git push` to `main` auto-deploys. No extra steps.

---

## Project Structure

```
ascend-tutoring/
├── public/
│   └── favicon.svg
├── src/
│   ├── AscendTutoring.jsx   ← main component (edit this)
│   ├── index.css            ← global reset
│   └── main.jsx             ← React entry point
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## Tech Stack
- React 18
- Vite 5
- Google Fonts (Noto Serif + Noto Sans) via CDN
