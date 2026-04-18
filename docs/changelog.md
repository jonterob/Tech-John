# Changelog

All notable changes to the Tech-John portfolio project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Multi-page portfolio structure with dedicated `about.html`, `projects.html`, and `contact.html` pages
- Comprehensive documentation in `docs/` folder including project overview, structure, technologies, and development guide
- Updated navigation and footer links across all pages for consistent site structure
- Project overview documentation mirroring root README content

### Changed
- Updated root README.md to reference new documentation folder
- Modified site navigation from single-page anchors to multi-page links

### Fixed
- Aligned project structure documentation with actual repository layout
- Corrected footer quick links to use new page files

## [1.0.0] - 2026-04-18

### Added
- Initial portfolio website with hero, about, projects, clients, skills, and contact sections
- Responsive design using Bootstrap 5 and custom CSS
- Contact form integration with EmailJS
- Toast notification system for form feedback
- Accessibility features including skip links, ARIA labels, and focus management
- Performance optimizations with preloaded fonts and deferred styles
- Legal pages (privacy policy and terms of service) in `legal/` folder

### Technical
- HTML5 structure with semantic elements
- JavaScript for smooth scrolling, navbar effects, and form validation
- External CDN assets for Bootstrap, Font Awesome, and Google Fonts
- GitHub Pages deployment configuration