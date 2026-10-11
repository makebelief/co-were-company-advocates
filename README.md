# C.O. Were & Company Advocates — website

A complete, responsive eight-page static website built for **C.O. Were & Company Advocates**, Witeithie House, 2nd Floor, Thika Town, Kenya. The information architecture follows the public Joyce Ndehi & Company Advocates reference website, but all page markup, styling and editorial copy here are independently written. No third-party source code or the other firm's photos have been copied.

**Pages:** `/`, `/about/`, `/practice-areas/`, `/managing-partner/`, `/insights/`, `/contact/`, `/privacy/`, `/terms/`.

## Launch in GitHub + Vercel (Ubuntu/Linux/macOS Terminal)

### Prerequisites

- Install [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/), [GitHub CLI](https://cli.github.com/) and the Vercel CLI (`npm install -g vercel`).
- Sign in once: `gh auth login` and `vercel login`.
- Unzip the downloaded archive and open Terminal inside its `CO_Were_Production_Website` folder.

### One-command publish

```bash
./deploy.sh
```

The script (1) creates a local Git repo if needed, (2) commits the website, (3) creates a **private** GitHub repository and pushes to the main branch, (4) deploys with Vercel to production, and (5) prints the `https://...vercel.app` live website address to the Terminal. To create a public GitHub repository instead, run:

```bash
VISIBILITY=--public ./deploy.sh
```

If Git requests your identity before committing, run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-github-email@example.com"
```

### Equivalent manual GitHub / Vercel commands

```bash
cd CO_Were_Production_Website
git init -b main
git add .
git commit -m "Initial law firm website"
gh auth login
gh repo create co-were-company-advocates --private --source=. --remote=origin --push
npm install -g vercel
vercel login
vercel deploy --prod --yes
```

The **last command outputs the live URL**. Run `vercel deploy --prod --yes` again after editing the website. For ongoing *automatic* deployment on every GitHub push, connect that GitHub repository in Vercel's Project Settings → Git; the initial CLI deployment does not necessarily establish continuous Git-triggered deployments.

## Preview on your computer

No `npm install` or web development framework is required. The deployable website is entirely in the `public/` folder.

```bash
cd CO_Were_Production_Website/public
python3 -m http.server 8000
```

Visit **http://localhost:8000**. Test `/about/`, `/practice-areas/`, etc. The separate mobile navigation is in `assets/site.js`, with breakpoints at 950px, 700px and 400px in `assets/site.css`.

## Update content

- `tools/generate_site.py` is the page content and HTML generator; edit branding, headings, biography and practice descriptions there, then run `python3 tools/generate_site.py` from the project root. **Regeneration overwrites** the HTML pages in `public/`.
- Change the desktop/mobile presentation in `public/assets/site.css`.
- Replace images in `public/assets/` and any practice-area URLs at the top of `tools/generate_site.py`.
- `public/assets/site.js` contains the menu/form behaviours.
- `vercel.json` configures the static deployment and security response headers.

## Design and assets

- **Colour palette:** deep navy `#081637`, royal blue `#1726A2`, gold `#BD8E26`, warm off-white `#F8F6F1`.
- The logo and **two portraits** came from user-supplied assets. Some logo source material was low-resolution; the mark has been optimised for web use, but a master SVG should be commissioned for large-format printing.
- The hero background is a bespoke visual generated for this project and bundled locally, alongside all CSS and JavaScript.
- Practice-area photographs load from externally hosted **Unsplash image URLs**. Their availability is subject to an external service. If an image fails, the page automatically uses a locally bundled fallback. Replace with independently licensed, locally hosted photos for a fully self-contained build. Verify licences/attribution requirements for any new images.
- The map iframe displays the **general Thika Town area**, not a pin verified at Witeithie House.
- Google Fonts and OpenStreetMap embeds also require an internet connection; sensible font fallbacks exist.

## What the contact form does

The contact form validates user input and launches the visitor's installed email application with a drafted email addressed to `cwerelaw@gmail.com`. The visitor must click Send in that application. No messages are submitted to a server by this website, and there is **no paid API**, SMTP account, or secret to configure. Telephone links use `tel:+2547917880673`. A WhatsApp button is deliberately not enabled because the supplied telephone number has not been confirmed as a WhatsApp number. If server-side sending is required, add a protected email service and rate limiting before launch.

## IMPORTANT: pre-publication review

The site compiles and is deployable, but **professional and client approval remains necessary before public advertising**:

1. Verify that all six proposed practice areas are actually offered by the firm. The firm must confirm its professional details, biography and admission/qualification facts. The advocate page currently avoids inventing those facts.
2. **Kenyan Advocates (Marketing and Advertising) Rules, 2014, Rule 5(2)(b) restrict advocates' photographs in advertisements** (and websites are covered by Rule 7). Supplied portrait files are bundled as assets but not rendered publicly by default. Do not enable them without a specific legal/professional compliance check. The opt-in switch (disabled) is near the bottom of `public/assets/site.js`.
3. Review all page content, practice descriptions, calls to action and privacy terms with the firm for adherence to the advertising and professional ethics rules. No endorsements, case results or claimed specialist designations are invented.
4. Confirm the office address, whether the phone supports WhatsApp, the exact map pin, and consent/retention details in the privacy notice before launch.
5. If a permanent custom domain is later supplied, add it to the Vercel project. Update search engine metadata, canonical links and a hostname-specific sitemap once the domain is fixed.
6. Because this is a static site, no CMS, real-time chat, online payments or actual appointment booking are included.

**Reference research:** https://joycendehiadvocates.co.ke/ (structure and general information architecture); Kenyan Advocates (Marketing and Advertising) Rules: https://new.kenyalaw.org/akn/ke/act/ln/2014/42/eng@2014-05-02 .

© 2026 C.O. Were & Company Advocates website source. Client-supplied branding and photos remain the firm's own assets.
