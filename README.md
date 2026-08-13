# Faculty of Computers and Data Science (FCDS)

Modern bilingual React website for Alexandria University’s Faculty of Computers and Data Science, built for the TechTrek React.js course project.

Inspired by the official faculty site: [fcds.alexu.edu.eg](https://fcds.alexu.edu.eg/index.php/ar/)
live link :https://fcds-faculty-website.vercel.app/
## Features

- Responsive academic UI (desktop, tablet, mobile)
- Arabic / English support with **react-i18next**
- RTL / LTR switching with language persistence (`localStorage`)
- React Router pages: Home, About, Departments, Programs, News, Announcements, Faculty, Services, Events, Contact, 404
- Detail routes for departments, programs, news, faculty, and events
- Search and category/department filters
- Contact form validation (name, email, phone, message)
- Loading, empty, and error states on list pages
- Organized mock data files with bilingual content

## Technologies

- React 18
- Vite
- React Router DOM
- i18next / react-i18next
- Lucide React
- CSS (design tokens, no heavy template lock-in)

## Project structure

```text
src/
├── assets/
├── components/
├── pages/
├── layouts/
├── data/
├── hooks/
├── utils/
├── routes/
├── locales/
│   ├── ar/translation.json
│   └── en/translation.json
├── App.jsx
├── main.jsx
├── i18n.js
└── index.css
```

## Installation

```bash
cd fcds-site
npm install
```

## Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## i18n and RTL / LTR

- Translation files live in `src/locales/en/translation.json` and `src/locales/ar/translation.json`.
- `src/i18n.js` initializes i18next, restores the saved language from `localStorage` (`app_lang`), and sets `document.documentElement.lang` / `dir`.
- The navbar language switcher toggles between English (LTR) and Arabic (RTL).
- Static UI strings use `t('...')` keys.
- Content entities (news, departments, programs, faculty, etc.) store bilingual fields such as `{ en: "...", ar: "..." }` and are localized in components via the `useLanguage` hook.

## Brand assets (from official FCDS site)

Downloaded locally into `src/assets/` from [fcds.alexu.edu.eg](https://fcds.alexu.edu.eg/index.php/ar/):

| Path | Source |
|------|--------|
| `src/assets/logos/fcds-logo.jpg` | Official FCDS / Alexandria University header logo |
| `src/assets/logos/alexu-logo.png` | University logo used in the site footer (`LogoUni.png`) |
| `src/assets/images/dean-magda.jpg` | Dean photo (Dr. Magda Madboly) |
| `src/assets/campus/*` | Hero slider photos from the faculty site |
| `src/assets/images/news-*.jpg` | News thumbnails from the faculty site |
| `src/assets/stock/*` | Generic Unsplash stock images used only in highlight cards |

Colors follow the live site: cyan nav `#00AEEF` / `#22b8f0`, with Cairo for Arabic.

## Screenshots

Add screenshots under `docs/screenshots/` after running the app:

- Home (EN / AR)
- News list + details
- Contact form validation
- Mobile navigation

## Notes

- Content is realistic mock data adapted from public FCDS information (programs, dean message themes, campus news style).
- No backend is required; form submission is client-side only and shows a success message when validation passes.
