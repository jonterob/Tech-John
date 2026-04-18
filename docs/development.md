# Development & Local Setup

## Run Locally

1. Clone the repository:

```bash
git clone https://github.com/jonterob/Tech-John.git
```

2. Open `index.html` in your browser.

## Browser Requirements

- Modern browser with JavaScript enabled
- Internet access for external assets (Bootstrap, Font Awesome, Google Fonts, EmailJS)

## Contact Form Integration

The contact form is powered by EmailJS with the configuration stored in `assets/js/asset-main.js`:

- `PUBLIC_KEY`
- `SERVICE_ID`
- `TEMPLATE_ID`

To change the service or template, update these values in `asset-main.js`.

## Editing the Site

- Add or update featured projects inside the `#projects` section of `index.html`.
- Add or update client references inside the `#clients` section of `index.html`.
- Update visual styles in `assets/css/asset-styles.css`.
- Update or add JavaScript interactions in `assets/js/asset-main.js`.

## Accessibility & UX Notes

- Includes a skip link for keyboard users.
- Uses `aria-label`, `aria-labelledby`, and `role` attributes for better screen reader support.
- Focus states are styled for keyboard navigation.
- Uses lazy loading for images and preloaded fonts/styles.

## Deployment

This is a static website and can be deployed using GitHub Pages or any static host.

- For GitHub Pages, enable Pages in repository settings using the `main` branch.
- Make sure `index.html` is in the repository root.
