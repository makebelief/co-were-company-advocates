# C.O. WERE & COMPANY ADVOCATES — REVISED PRODUCTION SITE

Version 3 — revised to follow the information architecture of joycendehiadvocates.co.ke (not copied code or proprietary content).

## What changed
- Client-supplied official full logo, and a LARGE header emblem with legible typography.
- One supplied formal portrait appears on the Advocate page in a circular gold frame. Another supplied portrait remains in the assets folder but is not displayed.
- All AI-generated imagery is REMOVED. Service-area / banner imagery uses real Pexels photographs via their CDN.
- Home, About, Practice Areas, Our Advocate, Insights, Contact, Privacy, Terms.
- Accessibility-conscious navigation, native semantic HTML, keyboard controls and responsive CSS.
- Contact form prepares an email draft; not a server-backed form.

## Client-directed refinements
- The decorative serif headings are replaced with modern, legible Manrope sans-serif.
- The navy C · W badge on the introduction photo is completely removed.
- A floating green WhatsApp button appears at bottom right on every page and opens https://wa.me/2547917880673.
- The Our Advocate page shows ONE image in a circular gold frame.

## Updating existing GitHub repository and Vercel project
Run the one-paste terminal block in the ChatGPT delivery message. You must copy this ZIP into `~/Downloads` first. The updater protects `.git` and `.vercel`. It updates the existing remote, pushes, and publishes using `vercel deploy --prod`.

## Photography (Pexels free licence)
Photographs served from `https://images.pexels.com/photos/...` (Internet required). The following source pages identify the assets and their photographers:

- Hero scales and gavel — https://www.pexels.com/photo/judgement-scale-and-gavel-in-judge-office-5669602/ (Sora Shimazaki).
- Interior legal desk — https://www.pexels.com/photo/judges-desk-with-gavel-and-scales-5669619/ (Sora Shimazaki).
- Civil litigation gavel — https://www.pexels.com/photo/close-up-photo-of-wooden-gavel-5668473/ (Sora Shimazaki).
- Commercial transactions — https://www.pexels.com/photo/people-shaking-their-hands-in-close-deal-business-contract-8112180/ (Pavel Danilyuk).
- Property — https://www.pexels.com/photo/a-person-handing-the-keys-8112184/ (Pavel Danilyuk).
- Family & succession — https://www.pexels.com/photo/a-man-signing-a-document-with-their-real-estate-agent-7415115/ (MART PRODUCTION).
- Employment & labour — https://www.pexels.com/photo/man-couple-love-woman-7979432/ (Kindel Media).
- Tenancy / mediation — https://www.pexels.com/photo/people-at-the-meeting-at-lawyers-office-8112162/ (Pavel Danilyuk).
- Negotiation section — https://www.pexels.com/photo/people-in-office-talking-8550843/ (Edmond Dantès).

Pexels licence: https://www.pexels.com/license/ — no attribution required for website use; no implied endorsement. Images are externally hosted, not generated with AI.

## Legal publication checklist
Kenya's Advocates (Marketing and Advertising) Rules 2014, Rule 5(2)(b) restrict photographs of advocates in advertisements, including websites under Rule 7. The client expressly requested their use in this demonstration. **Obtain Kenyan advocate/LSK compliance clearance before publishing the portrait-bearing version.** The site is a preview until this is cleared. Verify individual name, qualifications and office particulars.

## No unverified claims
No client testimonials, case results, admission dates, awards or credentials are invented.

## Contact details (provided by client)
Witeithie House, Second Floor, Thika Town, Kenya
+254 791 788 0673
cwerelaw@gmail.com

## Build
All static: `public/` is served by Vercel. Content is in `tools/generate_site.py`, regenerate with `python3 tools/generate_site.py`. Styling in `public/assets/site.css`. No npm dependencies.
