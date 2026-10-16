# Lifeon — Next.js

The Lifeon website runs on Next.js 16 and React 19. All 18 pages are editable React components, with a shared header and footer. The design, local assets, Home Version 1, simplified navigation, and current hero positioning are preserved from the [original Awaiken template](https://html.awaikenthemes.com/lifeon/).

## Develop with automatic updates

Use Node.js 22 or newer. Install dependencies once:

```sh
npm install
```

Start development:

```sh
npm run dev
```

Open **http://localhost:3000**. Leave the terminal running while editing. Next.js Fast Refresh updates the browser when you save React or CSS files. You do not need to rebuild during development.

If another server is using that port, stop it or run `npm run dev -- --port 3001` and open the URL printed in the terminal.

## Where to make changes

| Change | File |
| --- | --- |
| Homepage content | `app/page.jsx` |
| Other pages | `app/about/page.jsx`, `app/services/page.jsx`, etc. |
| Main styles, including hero positioning | `app/globals.css` |
| Styles for React interactions | `app/next.css` |
| Shared desktop and mobile navigation | `components/SiteHeader.jsx` |
| Shared footer | `components/SiteFooter.jsx` |
| Forms, sliders, FAQs, gallery, and video popups | `components/interactive.jsx` |
| Scroll animations and cursor effects | `components/PageEffects.jsx` |
| Images, fonts, and vendor styles | `public/` |

`public/` holds assets, not duplicate HTML pages. The old `dist/` workflow is removed. Next.js uses the ignored `.next/` directory for generated files; do not edit it.

Pages use routes such as `/about` and `/contact`. Previous `.html` URLs redirect to the corresponding Next.js route. Unknown URLs show the custom 404 page.

## Production

Build only when preparing a production release:

```sh
npm run build
npm start
```

Development and production are separate workflows. Stop the development server before starting production on the same port.

## Verification

```sh
npm run check
npm run build
```

With `npm run dev` running in another terminal:

```sh
npm run test:browser
npm run test:refresh
```

Browser checks use installed Google Chrome on Windows. Override `CHROME_PATH` for another installation and `TEST_BASE_URL` for another server URL. Screenshots and reports are written to `.qa/`. The refresh check temporarily edits and then restores the homepage and stylesheet to verify automatic updates.

Contact, appointment, and newsletter forms still save demo entries in this browser's local storage (`lifeon-demo-*`). They do not send email or create real appointments. Google Maps and YouTube embeds require internet access. The original author credits remain in the stylesheet.
