# Changelog

All notable changes to this project are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/).

## [0.8.0] - 2026-10-08

### Added
- Brand Reel (AI Ad Film Director) as service 09: "The AI ad film director that gives life to your ideas, from the first concept to a finished ad film." In the services list (with its own mark and colour) and the footer links, after Reelme. AI Plugins & integrations moves to 10.

### Changed
- "Nine services" is now "ten" in the leaks subhead, the line under the feed and the services heading.

## [0.7.0] - 2026-10-07

### Added
- Reelme (AI Brand Shoots) as service 08: services list, problem list ("Content takes weeks", after MyAIM), footer links and the Attract step.
- AI Plugins & integrations is now service 09 in the services list, replacing the "Optional AI plugins & integrations" line.

### Changed
- Leaks section: new headline ("AI won't replace your business. It will replace the leaks."), subhead and line under the feed; "seven services" is now "nine" there and in the services heading.
- Live feed: nine new cards, one per service (#0145 to #0153), printing in number order; header reads "AI on shift 24/7". The "Scripted preview · synthetic data" note stays.
- How it connects, Attract: Smartsite + MyAIM + Reelme + Marketing, now mentioning brand content.
- Hero card renamed "Faircodeme ERPNext" to match the rest of the site.
- Footer services links follow a fixed list (`footerServices` in `lib/content.ts`).

## [0.6.0] - 2026-10-07

### Added
- Technology partners row under the advisory board: Soft Served Web (softservedweb.com) and BCON Club (bconclub.com), each linking to its site in a new tab. Names show as text until logo files are added (`partners` in `lib/content.ts`).
- Advisors can show a logo instead of their name: set `logo` in `lib/content.ts`, or upload an image in /admin > Team (the Headshot field). Used for Bridgeway Investments once its logo is uploaded.

## [0.5.11] - 2026-10-07

### Added
- Nitish Nair on the advisory board (Growth), straight after Bridgeway Investments. In code (`lib/content.ts`) and in /admin via migration `20261007120000_people_nitish_nair.sql`.

## [0.5.10] - 2026-10-05

### Changed
- Ninil's and Nishaf's team photos now sit on Austin's own frosted-glass office background, at his face size and eye position, so all three look like one set. Austin's photo is unchanged. Where their original photos ended at the sides, the blazer is continued with fabric from its own edge. Faces are not altered. Files: `ninil-office.jpg`, `nishaf-office.jpg`.

### Fixed
- Date on the 0.5.9 entry.

## [0.5.9] - 2026-10-05

### Fixed
- Austin's surname is Walters (was "Walter"). Migration `20261006140000_people_austin_walters.sql` renames him in /admin too, so his photo and line still match.

## [0.5.8] - 2026-10-05

### Changed
- Team photos aligned to Austin's: his original photo is the reference, and Ninil's and Nishaf's headshots are scaled so the face size and eye position match his (eye centres within a few pixels). Where a scaled photo did not reach the frame edge, the background is extended with a blurred mirror of its own edges. Faces and clothing are not altered. Files: `austin.jpg` (unchanged), `ninil-matched.jpg`, `nishaf-matched.jpg`.

## [0.5.7] - 2026-10-05

### Changed
- Ninil's and Nishaf's team photos replaced with new professional headshots (`*-pro.jpg`), cropped to 768x960 only. The 0.5.5 studio versions are removed.

## [0.5.6] - 2026-10-05

### Fixed
- Hero phone mockup looked squashed (236x370, ratio 1.57). It is now 180x370 (ratio 2.06, like a real phone) and centred in its column. Chat bubbles are a little wider so the conversation still fits, and the trailing typing indicator is removed (its unused CSS too).

## [0.5.5] - 2026-10-05

### Changed
- Ninil's and Nishaf's team photos: original backgrounds replaced with a soft light-grey studio backdrop like Austin's, and brightness, contrast and colour warmth matched to Austin's photo (exposure from the face, partial adjustment). Global tone and colour only; faces and features unchanged. New file names (`*-studio.jpg`) so browsers and the CDN don't show the old versions.

## [0.5.4] - 2026-10-05

### Added
- Team photos for Ninil Shyam and Nishaf Musthafa (`public/team/`), cropped to 768x960 head-and-shoulders portraits from the supplied photos. Crop and resize only; nothing retouched.
- Ninil's line: "Committed to going the extra mile to keep every customer satisfied."

### Changed
- Team photos are anchored to the top of the frame so no one's head is cut off.

## [0.5.3] - 2026-10-05

### Changed
- "How it connects" title is now "One loop. Every service feeds the next." (was "First click to payroll. Nothing re-typed."), with an intro that describes the loop.
- Attract step includes Smartsite ("Smartsite + MyAIM + Marketing"), so all seven services appear on the map. Run step reads "Faircodeme ERPNext".

## [0.5.2] - 2026-10-05

### Changed
- Arabian Grill case study: stock photo is now Arabian-style grilled food (kofta skewers, flatbread, hummus; Unsplash, Husien Bisky), credited in `public/unsplash/_credits.json`. The unrun case-studies migration matches.

## [0.5.1] - 2026-10-05

### Changed
- Khaleej Mandi House case study uses a real photo from khaleejmandi.co.uk (`public/work/khaleej-mandi.webp`, 1200px, 56 KB) instead of a stock photo.
- 1 Key Solution case study: business type "Marketing and branding"; stock photo changed to the shop-window image.
- The case-studies migration carries the same changes (it has not been run yet).

## [0.5.0] - 2026-10-05

### Added
- Case studies: Khaleej Mandi House (AI Receptionist deployment, Dialgen.AI), 1 Key Solution (lead conversion implementation, PROXe) and Arabian Grill (ERP system and digital marketing). Challenge lines are drafts to confirm; outcomes stay `[ADD RESULT]` until there are real figures.
- Migration `supabase/migrations/20261006130000_work_case_studies.sql` archives the old projects and inserts the new ones, so /admin matches once collections are readable.

### Removed
- Case studies: Souq Al Samak, KLUCK and Norwood survey (archived in the database, not deleted).

## [0.4.5] - 2026-10-05

### Changed
- Team section: the `[ADD: founding year and team size]` placeholder now reads "Founded 2018".

## [0.4.4] - 2026-10-05

### Changed
- Team: Austin's line reads "The visionary mind behind our growth strategy. Started his first business at 14, sold two before 21, and brings business-rescue experience that finds options others miss." (drawn from his SDA bio). When the team loads from /admin, an empty bio or photo falls back to the code entry.

### Fixed
- Contact email is connect@bvcl.uk (0.4.1 had connect@bvcl.com).

## [0.4.3] - 2026-10-05

### Added
- Team section: Austin's headshot (`public/team/austin.jpg`, from sdabusinessrescue.co.uk/about-us). Team photos are framed toward the top so faces are not cropped. If the team later loads from /admin with no photo, the photo in code is used.

### Changed
- Footer offices: the "Office" label is removed from each city (head office keeps its label and address), and Aberdeen is removed.

## [0.4.2] - 2026-10-05

### Changed
- Footer offices: the local-time clocks are removed (label now "Offices"). The head office shows its address: Business Development Centre, Treforest, Wales CF37 5UR.
- Closing contact section: the email and phone added in 0.4.1 are removed; they stay in the footer.

## [0.4.1] - 2026-10-05

### Added
- Contact details: email connect@bvcl.com and phone 07770 077784, as tap-to-email and tap-to-call links in the closing contact section and the footer (replacing the footer's `[EMAIL ADDRESS]` and `[PHONE NUMBER]` placeholders). Both read from `contact` in `lib/content.ts`.

## [0.4.0] - 2026-10-05

### Changed
- "Why we exist" section now covers all seven services: seven everyday problems in services-menu order, each tagged with the service that fixes it (with its colour) and a short explanation of how it helps the business. New subtitle and closing line.
- The sample-ticket panel beside the list is sticky on desktop, so it stays in view instead of stretching to the longer list.

## [0.3.3] - 2026-10-05

### Fixed
- Services, Faircode row: "Faircodeme" is the main title and "ERPNext" the line above it (0.3.2 had them swapped). The footer link reads "Faircodeme".

## [0.3.2] - 2026-10-05

### Changed
- Services, Faircode row: the line above the title reads "Faircodeme" and the title reads "ERPNext" (was "ERP platform" / "Faircode ERPNext"). The footer link follows the title.

## [0.3.1] - 2026-10-05

### Added
- Services: a final line under the seven services, "Optional AI plugins & integrations".

### Changed
- Services order: PROXe, Smartsite, MyAIM, Dialgen.AI, VisorFlow, Faircode ERPNext, Marketing & branding. The footer follows the same order.

## [0.3.0] - 2026-10-05

### Added
- Product logos in `public/brands/`: the official PROXe, Dialgen.AI and Faircode marks (from goproxe.com, dialgen.ai and faircodeme.com), and new Smartsite and MyAIM logos (mark, plus full logo in light and dark versions).
- `ServiceLogo` shows a product's logo mark, falling back to the placeholder mark for products without one (VisorFlow, Marketing).

### Changed
- Services list: each product tile shows its logo mark (desktop panel and mobile tile).
- Hero cards: the colour dot in each product label becomes the product's logo mark where there is one.

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

[0.5.10]: https://github.com/nishafmusthafa/bvcl/compare/v0.5.9...v0.5.10
[0.5.9]: https://github.com/nishafmusthafa/bvcl/compare/v0.5.8...v0.5.9
[0.5.8]: https://github.com/nishafmusthafa/bvcl/compare/v0.5.7...v0.5.8
[0.5.7]: https://github.com/nishafmusthafa/bvcl/compare/v0.5.6...v0.5.7
[0.5.6]: https://github.com/nishafmusthafa/bvcl/compare/v0.5.5...v0.5.6
[0.5.5]: https://github.com/nishafmusthafa/bvcl/compare/v0.5.4...v0.5.5
[0.5.4]: https://github.com/nishafmusthafa/bvcl/compare/v0.5.3...v0.5.4
[0.5.3]: https://github.com/nishafmusthafa/bvcl/compare/v0.5.2...v0.5.3
[0.5.2]: https://github.com/nishafmusthafa/bvcl/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/nishafmusthafa/bvcl/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/nishafmusthafa/bvcl/compare/v0.4.5...v0.5.0
[0.4.5]: https://github.com/nishafmusthafa/bvcl/compare/v0.4.4...v0.4.5
[0.4.4]: https://github.com/nishafmusthafa/bvcl/compare/v0.4.3...v0.4.4
[0.4.3]: https://github.com/nishafmusthafa/bvcl/compare/v0.4.2...v0.4.3
[0.4.2]: https://github.com/nishafmusthafa/bvcl/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/nishafmusthafa/bvcl/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/nishafmusthafa/bvcl/compare/v0.3.3...v0.4.0
[0.3.3]: https://github.com/nishafmusthafa/bvcl/compare/v0.3.2...v0.3.3
[0.3.2]: https://github.com/nishafmusthafa/bvcl/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/nishafmusthafa/bvcl/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/nishafmusthafa/bvcl/compare/v0.2.5...v0.3.0
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
