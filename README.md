# Doğukan HAN — static personal website

A faithful static copy of the landing page at https://dogukanhan.com, captured 14 November 2026. The original portrait, colors, typography, education, skills, certification headings, course descriptions, certificate images, and all 65 linked PDF files are included. The existing empty `/blog/` page is retained as a static archive.

## Deploy

Upload the **contents of `dist/`** to the document root of any static web host. There is no build step, WordPress installation, PHP runtime, database, or JavaScript framework. Serve the directory over HTTP; opening the file directly is not supported because the preserved routes use root-relative URLs.

For a local preview:

```sh
python3 -m http.server 4173 --directory dist
```

Then visit http://localhost:4173.

The `dist/` folder is portable. Point dogukanhan.com to your chosen static host using that host's custom-domain and DNS instructions. DNS and the existing live WordPress installation have not been changed.

## Editing

- `dist/index.html`: landing page content and original appearance rules.
- `dist/static.js`: standalone certificate accordion and menu controls, including keyboard interaction.
- `dist/static.css`: small accessibility and responsive behavior corrections.
- `dist/assets/`: local images, fonts, stylesheets, and certificates. No runtime assets depend on WordPress.
- `dist/blog/index.html`: snapshot of the existing blog page, which returned no published posts at capture time. WordPress search cannot run on a static host; the search form reports that this archive has no posts.

The six social icons without URLs in the original source remain visible and disabled. Medium retains its original working URL. The original Contact button pointed to `#`; this copy points to the social row. Set your preferred contact destination and missing profile URLs in `dist/index.html` when available. Original content and existing typos were deliberately preserved.

## Migration record

`source/` contains the original public HTML snapshots. `scripts/prepare.py` normalizes the HTML, removes WordPress runtime scripts, rewrites asset paths, and preserves page content. It requires Beautiful Soup. `scripts/download-assets.mjs` downloads referenced assets and recursively copies stylesheet dependencies with Node.js 18+. `scripts/asset-results.json` records the source URLs and any download failures.

For later content edits, edit `dist/` directly. Re-running migration scripts replaces the HTML with the archived original snapshots.
