# CLAUDE.md - homepage.io

## Project Overview

Bilingual (Japanese/English) personal portfolio website for an iOS developer. Static HTML/CSS/JS site with a Unity WebGL game integration. No server-side rendering or framework — plain HTML pages with jQuery for dynamic content on the works listing pages.

## Repository Structure

```
/
├── index.html                  # Homepage (Japanese, entry point)
├── game.html                   # Unity WebGL game player (NinDon)
├── omokake.html                # Omokake iOS app landing page
├── privacypolicy[English].html # Privacy policy (JP/EN)
├── terms[English].html         # Terms of service (JP/EN)
├── css/
│   ├── main-desktop.css        # Desktop styles (≥700px)
│   ├── main-mobile.css         # Mobile styles (<700px)
│   ├── legal.css               # Privacy policy / terms pages
│   └── works-products.css      # Works listing page styles
├── js/
│   ├── jquery-3.7.1.min.js     # jQuery (vendored)
│   ├── underscore.js           # Underscore.js (vendored)
│   ├── works.js                # Works data + rendering (Japanese)
│   └── worksEng.js             # Works data + rendering (English)
├── mainContent/
│   ├── about[Eng].html         # Profile page (JP/EN)
│   ├── works[Eng].html         # Works listing (JP/EN)
│   ├── link[Eng].html          # Credits/links (JP/EN)
│   └── workDetail/
│       ├── job/                # Professional work detail pages
│       └── personal/           # Personal project detail pages
├── img/                        # Portfolio and project images
├── image/                      # Profile images
├── Build/                      # Unity WebGL build artifacts (NinDon)
├── TemplateData/               # Unity loader template assets
├── Makefile                    # Build automation
└── package.json                # npm dev dependencies
```

## Commands

### Setup
```sh
make setup          # Install npm dependencies (prettier, html-validate, marked)
```

### Development
```sh
make format         # Format all files with Prettier + normalize DOCTYPE
make validate       # Validate HTML (errors only)
make validate-all   # Validate HTML (errors + warnings)
make markDownToHTML SRC=path/to/input.md DEST=path/to/output.html  # Convert Markdown to HTML
```

Alternatively via npm:
```sh
npm run format
npm run validate
npm run validate:all
```

## Code Style & Conventions

### Formatting (Prettier)
- 2-space indentation, no tabs
- Single quotes
- Semicolons required
- 100-character line width
- Trailing commas (ES5 style)
- Run `make format` before committing

### HTML Validation
- Uses `html-validate` with the recommended ruleset
- `no-trailing-whitespace` and `void-style` rules are disabled
- Validation covers `*.html` and `mainContent/*.html` (not workDetail subdirectories)
- Run `make validate` to check for errors

### Bilingual Pattern
- Every content page has a Japanese version and an English version
- Naming: `filename.html` (Japanese) and `filenameEng.html` or `filename-eng.html` (English)
- Work detail pages in `mainContent/workDetail/` use the `-eng` suffix
- Each page includes language toggle links (`.chgEng` / `.chgJP` divs)

### Responsive Design
- Breakpoint at **700px** — two separate CSS files loaded via `<link media="...">`
  - `css/main-desktop.css`: `min-width: 700px`
  - `css/main-mobile.css`: `max-width: 699px`
- Desktop uses 2-column grids; mobile uses single-column stacked layout
- Font: Google Fonts "PT Sans"

### Navigation
- Consistent nav bar on every page: **top | profile | works | link**
- Work detail pages link back via "top" breadcrumb
- Works pages have auto-generated table of contents with anchor links

### Works Data
- Project listings are data-driven via JavaScript arrays in `js/works.js` and `js/worksEng.js`
- Each entry has: `imageFileName`, `life`, `title`, `descriptionURL`, `description`
- The `makeHTML()` function renders product cards with staggered fade-in animations
- To add a new project: add an object to the `allList` array in both `works.js` and `worksEng.js`

## Key Technical Details

- **No build step for HTML/CSS/JS** — files are served as-is (static site)
- **No package-lock.json** — intentionally gitignored
- **Vendored JS libraries** — jQuery and Underscore are committed directly in `js/`
- **Unity WebGL** — `game.html` loads a Unity build from `Build/` via `UnityLoader.js`
- **Dark mode** — legal pages (`legal.css`) support `prefers-color-scheme: dark`; omokake page uses a `.dark-theme` class
- **Prettier ignores** — `Build/`, `TemplateData/`, vendored JS, images, and binary files are excluded from formatting (see `.prettierignore`)

## Adding New Pages

1. Create the Japanese HTML file following the existing page structure (nav bar, content, footer)
2. Create the matching English version with `Eng` or `-eng` suffix
3. Use `css/main-desktop.css` and `css/main-mobile.css` via media-query `<link>` tags
4. Add language toggle links between the JP and EN versions
5. If it's a work detail page, also add the entry to `js/works.js` and `js/worksEng.js`
6. Run `make format` and `make validate` before committing
