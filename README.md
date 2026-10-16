# Lifeon local clone

A local copy of the public [Lifeon template demo](https://html.awaikenthemes.com/lifeon/), retaining its original markup, styling, imagery, fonts, and animation libraries. The original Awaiken author credits are preserved in the source files.

## Run

Node.js 22 or newer is recommended. The website itself has no installation step or runtime dependencies.

```sh
npm run dev
```

Open **http://localhost:3000**. Use `npm run dev -- --port=3001` for a different port.

## Build and verify

```sh
npm run check
npm run build
npm start
```

The build copies the complete static website into `dist/`, ready for static hosting. `public/` contains the editable source: HTML pages, `css/custom.css`, JavaScript, images, locally hosted webfonts, and the alternate homepages. All navigation works without a framework router.

For browser checks, run `npm install` followed by `npm run test:browser`. The browser check uses an installed Chrome browser and writes screenshots and its report to `.qa/`.

## Behavior

Original responsive navigation, scroll effects, sliders, pricing switches, FAQ accordions, and image lightboxes are preserved. Contact, appointment, and newsletter submissions validate fields and save demo entries to this browser's local storage. They do not send email or create a real appointment. Their storage keys begin with `lifeon-demo-`.

Google Maps and YouTube embeds require an internet connection. Fonts and site assets are stored locally. The theme seller's floating purchase/customization panel is omitted.

`scripts/mirror.mjs` records how the public pages and assets were downloaded. `mirror-report.json` lists the downloaded files. No server-side PHP source is included: browser developer tools only expose files sent to the browser.
