# Dhrubo Dev Pramanik — Portfolio

A single-page portfolio site built with plain HTML/CSS/JS (no build step needed).

## What changed from the previous version

- **Fixed broken markup.** The old `index.html` had a second, nested
  `<!DOCTYPE html><html>...<body>` block in the middle of the page (for the
  testimonials slider), which is invalid HTML and was likely the root cause
  of odd/broken behavior in some browsers. The whole page is now one valid
  document.
- **Fixed "Download CV."** The button now links to `assets/Dhrubo_Dev_Pramanik_CV.pdf`
  (included in this zip) with a `download` attribute, so it actually
  downloads the file. Swap that PDF for a newer version any time — keep the
  same filename or update the two `href`s in `index.html` that point to it.
- **Fixed "Contact."** The form now works with zero backend: submitting it
  opens the visitor's email app with the subject/message pre-filled and
  addressed to your Gmail. See "Upgrading the contact form" below if you'd
  rather have messages land straight in an inbox without opening the
  visitor's mail client.
- **Content updated from your CV**, including education dates/CGPA, the
  Netro Systems internship dates and description, real GitHub links for
  each project (pulled from the links embedded in your CV PDF), and your
  current location (Bogura).
- **Sections added**, inspired by the structure of utshabkg.github.io:
  - **Research & Publications** — your thesis (CAN-FL) and the IEEE
    SPICSCON 2026 paper.
  - **Skills** — a proper grouped skills section (there wasn't one before).
  - **Leadership & Awards** — cultural club, band society, and your
    department rank.
- **Sections removed:**
  - The "Reviews" / testimonials carousel — it quoted made-up-sounding
    blurbs about friends unrelated to your work, which doesn't read as
    credible on a professional portfolio, and it was also the section
    causing the broken nested-HTML bug above.
  - The empty "Blogs" nav link, which pointed at unused/placeholder markup.
  - The "Graphic Design" project category, replaced with "Computer Vision"
    (Face & Eye Detection), which actually matches your CV.
- Removed unused images (stock template photos, friends' photos used only
  by the removed testimonials) to keep the repo small.
- Advisor/reference phone numbers from the CV were **not** published on the
  site — that's personal contact information for other people, not
  something to put on a public web page.

## Deploying to GitHub Pages

1. Create a repository named `<your-username>.github.io` on GitHub (this
   exact naming is what makes GitHub Pages serve it at the root domain).
2. Upload the contents of this zip (not the zip itself) to the repo —
   `index.html`, `style.css`, `utilities.css`, `app.js`, `images/`, and
   `assets/` should all sit at the repo root.
3. In the repo, go to **Settings → Pages**, set **Source** to
   "Deploy from a branch", branch `main`, folder `/ (root)`, then Save.
4. Wait a minute or two — your site will be live at
   `https://<your-username>.github.io`.

## Upgrading the contact form (optional)

The current form uses a `mailto:` link, which always works but opens the
visitor's own email app. For a form that delivers straight to your inbox
without that step:

1. Sign up at [Formspree](https://formspree.io) (free tier is enough) and
   create a form to get an endpoint like
   `https://formspree.io/f/xxxxxxx`.
2. In `index.html`, change the `<form class="contact-form" id="contact-form">`
   tag to `<form class="contact-form" action="https://formspree.io/f/xxxxxxx" method="POST">`.
3. Delete the `contact-form` submit handler in `app.js` (the whole
   `if (contactForm) {...}` block) so the form submits normally.
4. Add `name="name"`, `name="email"`, `name="message"` attributes to the
   respective inputs/textarea so Formspree can read them.

## Certifications & Blogs (new, needs your content)

Two new sections were added — `#certifications` and `#blogs` in `index.html`
— each with 3 placeholder cards clearly marked with an HTML comment. They
use fake text like "Certification Name" and "Blog Post Title" on purpose,
since I don't have your real certificates or blog posts. To fill them in:

- **Certifications:** for each `.cert-card`, edit the `<h4>` (name), the
  `.cert-issuer` (who issued it), `.cert-date`, and the `href="#"` (link to
  the credential/PDF if you have one — or just remove the `<a>` if not).
- **Blogs:** for each `.blog-card`, edit `.blog-platform`, the `<h4>`
  (post title), the `<p>` (one-line summary), `.blog-date`, and the
  `href="#"` on the card itself to point at the real post.

Copy/paste one of the existing cards to add more than 3.

## Fixed this round

- **Hero photo on the dark header:** the photo is a real transparent PNG,
  but its subject tones are dark (black hair, dark shirt), so on the
  near-black header it looked washed out/invisible. It now renders with a
  small brightness/contrast boost and a soft teal glow so it reads clearly
  against the header instead of disappearing into it.
- **Diagonal header/CTA cutout on mobile:** the decorative diagonal
  clip-path on the header and the dark CTA band was sized for desktop. On
  mobile the content stacks taller, so the same cutout exposed a large
  triangle of plain white page background — it now flattens to a normal
  rectangle below 992px width instead.
- **Projects section:** replaced the plain text-link list with proper
  cards — banner icon, short description, tech tags, and a "View on
  GitHub" button for each project.

## Keeping things up to date

- **New projects:** add a `<li><a href="...">Project Name</a></li>` inside
  the relevant category in the `#projects` section.
- **New publications/awards:** follow the existing `.research-card` /
  `.resume-entry` markup patterns — copy one, edit the text.
- **CV file:** replace `assets/Dhrubo_Dev_Pramanik_CV.pdf` whenever you have
  a newer version, keeping the same filename so the download links keep
  working.
