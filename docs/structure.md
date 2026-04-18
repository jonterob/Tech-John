# Project Structure

## Repository Layout

```text
Tech-John/
├─ index.html
├─ assets/
│  ├─ css/
│  │  └─ asset-styles.css
│  └─ js/
│     └─ asset-main.js
├─ components/
├─ images/
├─ legal/
│  ├─ privacy.html
│  └─ terms.html
├─ pages/
│  ├─ about.html
│  ├─ contact.html
│  └─ projects.html
├─ docs/
│  ├─ README.md
│  ├─ overview.md
│  ├─ structure.md
│  ├─ technologies.md
│  └─ development.md
└─ README.md
```

## File Responsibilities

- `index.html`
  - Main landing page with hero, about, projects, clients, and contact sections.
  - Includes meta tags, icons, font preloading, and external style imports.

- `assets/css/asset-styles.css`
  - Custom styling for cards, client sections, form controls, toast notifications, responsive breakpoints, and UI components.
  - Contains accessibility-focused styles for focus-visible states.

- `assets/js/asset-main.js`
  - Handles EmailJS form submission and validation.
  - Implements smooth scrolling for anchor navigation.
  - Adds scroll effects to the navbar.
  - Displays toast notifications for success and error states.

- `images/`
  - Stores branding and portfolio imagery used on the website.

- `legal/`
  - `privacy.html` — privacy policy page.
  - `terms.html` — terms and conditions page.

- `components/`
  - Reserved for reusable HTML or component fragments, if needed.

- `pages/`
  - `about.html` — about page.
  - `projects.html` — projects showcase page.
  - `contact.html` — contact page.

## Notes

- `index.html` is the entrypoint for the whole site.
- The site uses external CDN assets for Bootstrap, Font Awesome, and Google Fonts.
- Client card content and project cards are defined directly in HTML and can be updated manually.
