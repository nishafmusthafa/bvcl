# Changelog

All notable changes to this project are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/).

## [0.2.5] - 2026-10-04

### Changed
- Services list: the Smartsite description now starts "AI-enabled customer-facing website" (was "A complete customer-facing website").

## [0.2.4] - 2026-10-04

### Changed
- Hero VisorFlow card: label "VisorFlow" with the description "HR & Compliance, UKVI" (was "VisorFlow · Payroll"). The card moves up slightly so it no longer touches the Marketing card.

## [0.2.3] - 2026-10-04

### Changed
- Hero Faircode card: label shows the full product name "Faircode ERPNext" with the description "System built to any scale"; the stock alert is one line.

### Fixed
- `package-lock.json`: restored `yocto-queue` to 0.1.0 after version bumps since 0.2.0 overwrote it.

## [0.2.2] - 2026-10-04

### Changed
- Hero MyAIM card label reads "MyAIM · AI Social Media Manager" (was "MyAIM · Social"). The "2.4k reach" figure is removed to keep the label on one line.

## [0.2.1] - 2026-10-04

### Changed
- Hero Smartsite card: the placeholder lines are replaced by the description "Make your business smarter in one day". The phone is 10px shorter so the taller card clears its message bar.

## [0.2.0] - 2026-10-04

### Added
- New product: MyAIM, an AI Social Media Manager specialised for convenience stores (Think · Create · Market · Sales). It appears in the services list (with its own mark and colour), the footer, the enquiry form ("Social media for my store") and the hero collage.

### Changed
- Services heading now reads "Seven services. One brain behind them."
- The Attract step in "How it connects" includes MyAIM and daily social posts.
- Hero: the MyAIM card replaces the Instagram lead pill; the phone moves down and is 60px shorter to make room.

## [0.1.0] - 2026-10-04

### Added
- Hero collage shows all six products: a new Smartsite card (website with enquiry capture) and a Marketing card (enquiries from ads).

### Changed
- Every hero card names its product (PROXe, Dialgen.AI, Faircode ERPNext, VisorFlow, Smartsite, Marketing) and uses that product's colour from `serviceColor`.
- The generic Data card is replaced by the Marketing card; the Instagram lead notification moves above the phone.
- The version now comes from `package.json` (SemVer) instead of `CHANGE_COUNTER`.

## [0.0.7] - 2026-10-04

### Fixed
- Lint errors (`react-hooks/set-state-in-effect`): `useReady` and the hero's fine-pointer check now use `useSyncExternalStore` instead of setting state inside an effect. The fine-pointer check also follows changes to the pointer type.

## [0.0.6] - 2026-10-04

### Fixed
- Public CMS reads (work, people, testimonials, brands) failed for anonymous visitors with "permission denied for function is_cms_admin". New migration `supabase/migrations/20261006120000_cms_admin_anon_execute.sql` grants `anon` execute on `public.is_cms_admin()`. It returns false without a signed-in email, so nothing is exposed. Must be run in Supabase to take effect.

### Added
- `SKILL.md` (caveman skill) at the repo root.

## [0.0.5] - 2026-10-04

### Added
- Smartsite service in the services menu, with its own mark and colour, and as an option in the enquiry form.

## [0.0.4] - 2026-10-04

### Changed
- Admin app shell: sidebar with icons, active state, new-enquiry badge, user chip with sign-out, slide-out menu on mobile.
- Admin dashboard: greeting, quick-add buttons, KPI cards, 30-day enquiries chart, pipeline, latest enquiries, recently edited items and a content-health check.

## [0.0.3] - 2026-10-04

### Added
- Admin collections: Brands, Testimonials, Work and Team, each with draft/published/archived status, featured flag, ordering and delete.
- Image uploads to a public Supabase Storage bucket with admin-only writes.
- Enquiries inbox: the consultation form stores every request; admins set status and notes.
- Home page reads published collection items and falls back to the content in code.

### Changed
- Collections replace the section text editor in `/admin`.

## [0.0.2] - 2026-10-04

### Added
- Every Supabase login is an admin, with a username and display name.
- Admin sign-in with a username or email, and a show/hide password toggle.
- Version shown on the admin login page and in the admin header.

## [0.0.1] - 2026-10-03

### Added
- Baker Vaughn website redesign.
- Supabase-backed admin panel for editing site sections, using row-level security (no service-role key in the app).

[0.2.5]: https://github.com/nishafmusthafa/bvcl/compare/v0.2.4...v0.2.5
[0.2.4]: https://github.com/nishafmusthafa/bvcl/compare/v0.2.3...v0.2.4
[0.2.3]: https://github.com/nishafmusthafa/bvcl/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/nishafmusthafa/bvcl/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/nishafmusthafa/bvcl/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/nishafmusthafa/bvcl/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/nishafmusthafa/bvcl/compare/v0.0.7...v0.1.0
[0.0.7]: https://github.com/nishafmusthafa/bvcl/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/nishafmusthafa/bvcl/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/nishafmusthafa/bvcl/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/nishafmusthafa/bvcl/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/nishafmusthafa/bvcl/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/nishafmusthafa/bvcl/releases/tag/v0.0.2
[0.0.1]: https://github.com/nishafmusthafa/bvcl/commit/e66e65f
