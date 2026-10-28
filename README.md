# Muhammed Ejas — portfolio website

A static, GitHub Pages-compatible portfolio built with HTML, CSS and vanilla JavaScript. It needs no build step, framework, API key or database. The design is intentionally light and text-first, with project facts and limitations easy to scan.

**Target URL:** <https://mhdejas.github.io/>  
**GitHub account:** `@mhdejas`  
**Repository name:** `mhdejas.github.io`

## Files to upload

Upload every item below to the repository’s top level, at the same level as `index.html`. No nested folders are required.

- `index.html` — portfolio content, metadata and structured data
- `styles.css` — responsive light design, interaction states and reduced-motion rules
- `script.js` — navigation, project filters, scroll progress and motion controls
- `404.html` — simple not-found page
- `robots.txt` and `sitemap.xml` — crawl guidance and homepage URL
- `favicon.svg`, `social-card.png` and `social-card.svg` — browser icon and share-card image/source
- `README.md` — this guide

The page is text-first and does not use project thumbnails or decorative map graphics. The social card is a simple typographic preview. Project images are not included because no specific image had confirmed redistribution rights. The site intentionally does not publish the private email address in the source CV.

## Create the GitHub Pages repository on Android

1. Sign in to GitHub as `@mhdejas` in a browser on your phone and open <https://github.com/new>.
2. Set **Owner** to `mhdejas` and the repository name to exactly **`mhdejas.github.io`**. Choose **Public** visibility.
3. Do not initialise the repository with a README, `.gitignore` or licence. Select **Create repository**.
4. Download and extract the supplied website ZIP on your phone. The extracted files should be directly inside the `mhdejas.github.io` folder.
5. In the new repository, choose **Add file → Upload files**. Select the ten site files from that folder. Make sure `index.html` is at the repository root, not inside another folder. If the Android file picker only allows one file at a time, upload the files in batches using the same page.
6. Wait for all files to appear, then choose **Commit changes** to the `main` branch. A message such as `Add portfolio website` is fine.

If GitHub’s mobile layout hides the upload control, open the browser menu, enable **Desktop site**, and reload the repository page. Do not upload only the ZIP: GitHub Pages needs the extracted HTML, CSS, JavaScript and support files at the repository root.

## Enable and test GitHub Pages

1. Open the repository’s **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select branch **`main`** and folder **`/ (root)`**, then save.
4. GitHub will show the Pages URL after deployment. Allow a few minutes for the first build, then open <https://mhdejas.github.io/> in a private/incognito tab.
5. Test the navigation, project filters, expandable project notes, social links, mobile menu, motion control and favicon. Try a made-up URL such as <https://mhdejas.github.io/not-a-page> to check the custom 404 page.
6. If the site is stale, hard-refresh or clear the browser cache. Check the latest Pages build in the repository’s **Actions** tab if anything fails. Confirm `index.html` is in the `main` branch root and Pages is set to `main` / `/ (root)`.

## Google Search Console (optional)

Search Console can help monitor crawling and request indexing; it cannot guarantee indexing, search ranking or a Knowledge Panel.

1. Open <https://search.google.com/search-console> and add a **URL-prefix** property: `https://mhdejas.github.io/`.
2. Choose **HTML tag** verification and copy the exact `<meta name="google-site-verification" content="…">` tag Google provides.
3. In `index.html`, paste that tag inside `<head>`, near the other meta tags. Upload and commit the updated file to `main`.
4. Wait for the deployed site to show the verification tag, return to Search Console and select **Verify**.
5. Under **Sitemaps**, submit `sitemap.xml`. Optionally use **URL inspection** on the homepage and request indexing.
6. Keep the site public and wait until the latest changes are live before requesting indexing.

## Update content safely

- Keep methods, results and limits faithful to the CV and linked project profiles.
- The coastal study and Wayanad article are described as exploratory; neither is presented as a validated erosion rate or landslide prediction.
- Crop-alert results are listed as the CV’s live imagery test, not field-confirmed crop diagnoses.
- Do not publish private emails, security disclosure details, private correspondence, access tokens or credentials.
- The EJA Global Youth Ambassador cohort is marked upcoming; update its status only after participation begins.
- If the domain changes, update the title, description, canonical URL, Open Graph URL and `sitemap.xml` together.
- If you change the share-card text, update both `social-card.svg` and `social-card.png` so link previews stay in sync.

## Content notes

- The CV labels the coastal working paper Version 6; its Zenodo record is separately versioned. The site links to the latest record at <https://zenodo.org/records/23503522>.
- The humanitarian-mapping section uses the task-area and feature counts in the CV and links to the public OpenStreetMap profile and HOT task.
- Certificates, acknowledgments and the upcoming EJA cohort follow the CV. Course names link to issuer pages.
- The portfolio uses no project screenshots because redistribution rights were not confirmed. Project claims link to their public source pages and state the reported limitations.

## Troubleshooting

- **404 or README shown instead of the site:** confirm `index.html` is at the repository root and Pages serves `main` / `/ (root)`.
- **CSS or images missing:** check filenames and letter case. The site uses root-relative paths for the username GitHub Pages domain.
- **Changes do not appear:** confirm the commit succeeded, check **Actions**, wait for deployment, and try a private tab or hard refresh.
- **Sitemap rejected:** open <https://mhdejas.github.io/sitemap.xml> directly and confirm the site is public and the canonical host matches.
- **Search Console verification fails:** confirm the exact meta tag is in the deployed `<head>` and the property includes `https://` and the trailing slash.
- **Mobile menu stays open:** reload after the latest `script.js` is deployed. With JavaScript disabled, the mobile menu and filters are unavailable; the page content and fallback navigation remain usable.

## Final deployment checklist

- [ ] Repository owner is `mhdejas`; repository name is exactly `mhdejas.github.io`.
- [ ] Repository is public and all ten files are at its root.
- [ ] GitHub Pages uses branch `main`, folder `/ (root)`.
- [ ] Homepage, mobile layout, navigation and 404 page load after deployment.
- [ ] Project filters, expandable notes, social links and motion control work.
- [ ] No private email, invented map, unsupported result or private disclosure detail is present.
- [ ] The social card and favicon are visible and match the light site design.
- [ ] Search Console verification and sitemap submission are complete, if desired.

## Pre-deployment checks

The source is static and uses only same-site CSS/JavaScript plus public profile links. Canonical metadata and Person structured data are included. The page was reviewed for mobile breakpoints, keyboard focus, semantic structure and reduced-motion support. These checks do not replace a live GitHub Pages build or a search-engine crawl; those can only be tested after upload. No repository has been created or published for this site.
