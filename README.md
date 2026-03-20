# Portfolio — Rachel Chertok

Starter Vite + React portfolio tailored for Product Manager applications.

Getting started

```bash
cd portfolio
npm install
npm run dev
```

Notes

- Resume: `public/resume.pdf` is the source for the downloadable resume and preview.
- Contact: Email(s) shown on the site are chertok.r@northeastern.edu and rchertok@gmail.com — update in `src/App.jsx` if you prefer alternatives.
- This starter emphasizes product thinking: concise resume download, projects with outcomes, and clear skills.
 - Resume: `public/resume.pdf` is the fallback. To embed a Google Drive resume, set `resumeEmbedUrl` in `src/App.jsx` to your share URL. The app will convert typical Drive share links to an embeddable preview.
 - Headshot: Replace `public/headshot.jpg` with your photo, or set `CONFIG.headshot` in `src/App.jsx` to an external URL.
 - Contact: Emails are set in `src/App.jsx` (`emailPrimary`, `emailSecondary`); add `linkedin`/`github` URLs there.
