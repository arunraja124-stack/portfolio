# Arunraja N – Developer Portfolio

React + Vite + Tailwind CSS portfolio. Content lives in `src/data.js`; the photo (`public/arunraja.jpg`) and resume (`public/Arunraja_N_Resume.pdf`) are served from `public/`, so they work after deployment.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview    # test the production build
```
Requires Node.js 18 or newer.

## Upload to GitHub
```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/arunraja124-stack/<repo-name>.git
git push -u origin main
```
Create an empty repository named `<repo-name>` on GitHub first (no README).

## Deploy on Vercel
1. Sign in at vercel.com with GitHub and choose **Add New → Project**.
2. Import the portfolio repository.
3. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). Click **Deploy**.
4. Every push to `main` redeploys the site.

## Updating content
- Text, projects, skills and links: `src/data.js`
- New resume: replace `public/Arunraja_N_Resume.pdf` (keep the filename)
- Phone number: remove the `Phone` line in `src/components/Contact.jsx` if you prefer not to publish it
