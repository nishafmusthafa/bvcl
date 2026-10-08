# TODO

Status: todo / doing / done / blocked. Newest items at the bottom.

| ID | Item | Status | Verified / note |
|----|------|--------|-----------------|
| T1 | Download caveman `SKILL.md` into BVCL | done | File present; committed in `8b9f85d` |
| T2 | Latest caveman `main` version; delete its branches | done | Answered: v3.1.0 + merge `6571943`. Branch deletion declined: repo belongs to JuliusBrussee |
| T3 | Revoke GitHub token pasted in chat | blocked | User: revoke at github.com/settings/personal-access-tokens |
| T4 | Pull `bconclub/bakervaughn` into BVCL | done | Repo on upstream history; `git status` clean vs `upstream/main` |
| T5 | Create `.env.local` with Supabase keys | done | Both keys set (checked lengths, values not printed) |
| T6 | Run site locally | done | `npm run dev` on :3000, homepage renders |
| T7 | Push to `nishafmusthafa/bvcl` | done | GitHub API shows `main` at pushed commit |
| T8 | Fix Vercel 404 | done | Framework preset `nextjs`; deployment READY |
| T9 | Release v0.0.6 with version in commit | done | `cb474e0`, Vercel deployment READY |
| T10 | Run `grant execute on function public.is_cms_admin() to anon;` in Supabase | blocked | User: Supabase SQL editor. Local dev still logs 401s until done |
| T11 | Make live site public | blocked | User: Vercel > Settings > Deployment Protection > turn off Vercel Authentication, or add a custom domain |
| T12 | `nextlevelbuilder/ui-ux-pro-max-skill`: install as skill or download | blocked | User decision |
| T13 | Adopt build process: CLAUDE.md, TODO.md, CHANGELOG.md, .env.example, tags, HANDOFF.md | done | Files committed in `972bd8f` and the handoff commit; tags v0.0.2 to v0.0.7 pushed (`git push --tags` exit 0); `.env.local` confirmed still ignored |
| T14 | Fix lint errors (`react-hooks/set-state-in-effect` in `useReady.ts`, `HeroVisual.tsx`) | done | v0.0.7. tsc, lint (0 errors) and `next build` pass. Hero checked at 1440px (scale 0.94) and 375px (scale 0.55, no x-overflow); `cards-go` set, so `useReady` fires; no new console errors |
| T15 | Lint warnings: `aria-invalid` on radio inputs (`EnquiryDialog.tsx:226`, `:267`) | todo | |
| T16 | `npm audit`: 5 high severity vulnerabilities | todo | |
| T17 | Enquiry form end to end, 3 runs | todo | Writes rows to the live Supabase `enquiries` table; needs T10 first |
| T18 | Version from `package.json` so SemVer MINOR/MAJOR bumps work | done | `3db6b22`. tsc, lint, build pass; footer and admin login show v0.0.7; `package.json` not in client bundle |
| T19 | Landing hero: show all 6 products (Smartsite, PROXe, Dialgen.AI, VisorFlow, Faircode ERPNext, Marketing) in the collage style | done | v0.1.0. tsc, lint (0 errors), build pass. 1440px: 7 cards measured, no clipped tags, overlaps only at edges. 375px: scaled 0.55, all cards visible, no x-overflow, drag off. Drag tested on Smartsite, VisorFlow, Marketing; clamps to stage; double-click resets |
| T20 | Hero collage is read by screen readers (mockup text, fake "Book now"); consider `aria-hidden` plus a short text alternative | todo | Existed before T19 |
| T21 | Add product MyAIM (AI Social Media Manager; Think, Create, Market, Sales; for convenience stores): services list, enquiry form, hero, connect flow | done | v0.2.0. tsc, lint, build pass. Services shows 7 rows, MyAIM 06 with mark; footer and connect flow list it. Hero 1440px: 7 cards, tags one line, phone chat fits; 375px: scaled, no x-overflow. Enquiry form: option renders with hint and advances to step 2 (not submitted: live DB). Schema: 3 cases pass (MyAIM valid, existing valid, unknown rejected) |
| T23 | Hero MyAIM card label: "AI Social Media Manager" instead of "Social" | done | v0.2.2. tsc, lint, build pass. 1440px: label on one line (225 of 298px), card height unchanged (0 to 108). 375px: label present, no x-overflow |
| T24 | Lockfile: `yocto-queue` version corrupted by my find-and-replace bumps since v0.2.0 | done | Restored 0.1.0; node scan finds 0 version/tarball mismatches; `npm ci --dry-run` exit 0. Bumps now via `npm version` (CLAUDE.md) |
| T25 | Hero Faircode card: full name "Faircode ERPNext", description "System built to any scale" | done | v0.2.3. tsc, lint, build pass. 1440px: tag, description and stock line each one line; card height unchanged (154 to 241). 375px: description present, no x-overflow |
| T26 | Hero VisorFlow card: description "HR & Compliance, UKVI" | done | v0.2.4. tsc, lint, build pass. 1440px: description one line; card 250 to 455, clear of Stock (ends 241) and Marketing (starts 460). 375px: present, no x-overflow |
| T27 | Services list, Smartsite: description starts "AI-enabled customer-facing website" | done | v0.2.5. tsc, lint, build pass. Text renders in the Services row on desktop and at 375px, no x-overflow |
| T28 | Product logos: take PROXe, Dialgen.AI, Faircode logos from their sites; design Smartsite and MyAIM logos; show them on the site | done | v0.3.0. Logos in `public/brands/`. tsc, lint, build pass. Services: 5 logos load (PROXe lazy-loads on scroll, 788x565), VisorFlow/Marketing keep placeholder; mobile tiles 28px. Hero: 4 tags show marks, all one line. No console errors for images. 375px no x-overflow |
| T29 | VisorFlow and Marketing have no logo yet | todo | Needs logo files from the user |
| T33 | Second section ("Why we exist"): content for all 7 services, each a short explanation of how it helps businesses | done | v0.4.0. tsc, lint, build pass. 7 items render with service tag and explanation. Desktop: ticket panel sticky (720px, pinned at 96px while scrolling). 375px: stacked, no x-overflow. No invented figures |
| T35 | Contact details on the last page: email connect@bvcl.com, phone 07770077784 | done | v0.4.1. tsc, lint, build pass. mailto:connect@bvcl.com and tel:+447770077784 in contact section (44px tap targets) and footer; no placeholders left; 375px no x-overflow |
| T45 | Case studies: add Khaleej Mandi House (AI Receptionist deployment) and 1 Key Solution (lead conversion implementation); remove Souq Al Samak, Norwood survey, KLUCK; add Arabian Grill (ERP system and digital marketing) | done | v0.5.0. tsc, lint, build pass. 3 projects render in order with tags, images, 3 docket fields; old three gone. 375px no x-overflow. DB migration archives old, inserts new |
| T46 | Confirm the drafted case-study challenge lines; send real outcomes | blocked | User |
| T59 | Team photos: background matched to Austin's (unfinished from last session) | done | v0.5.10. Both on Austin's frosted-glass backdrop (rebuilt as a row x column grid, no ghost outline), at his face size and eye line; blazer edges continued from edge fabric with a sloped silhouette. All 3 load (200) on desktop and 375px; cards 540px; no x-overflow |
| T58 | Correct the name to Austin Walters | done | v0.5.9. Card name and photo alt read Austin Walters; no "Austin Walter" left on page; DB rename migration added |
| T57 | Re-arrange all 3 team photos: check alignment and sizing (Austin's photo is the reference) | done | v0.5.8. Face detection: eye centres within ~5px of Austin's in all 3; same eye line in cards (~125px at 400px wide); cards 540px each; 375px no x-overflow |
| T56 | Replace Nishaf and Shyam photos with new professional headshots | done | v0.5.7. Crop + resize only to 768x960; all 3 load on desktop and 375px; no x-overflow; tsc, lint, build pass |
| T55 | Hero phone mockup looks squashed (236x370, ratio 1.57); restore phone proportions | done | v0.5.6. Phone 180x370 (ratio 2.06); all 4 chat messages visible with 12px spare; tsc, lint, build pass; 375px chat fits, no x-overflow |
| T54 | Retouch Shyam and Nishaf photos: good background; match Austin's brightness, contrast and colour | done | v0.5.5. rembg (isnet) cut-out, studio backdrop, Lab match to Austin (skin exposure, partial contrast, light warmth). Clothing colours kept. All 3 load 768x960 on desktop and 375px; no x-overflow |
| T53 | Shyam's line: committed to going the extra mile for customer satisfaction | done | v0.5.4. Renders under Ninil Shyam; no placeholders left in team section |
| T52 | Team photos for Nishaf (blue shirt) and Ninil Shyam: crop to a professional portrait, no changes to features | done | v0.5.4. 768x960 crops (crop + resize only); all 3 load, object-top so heads not cut; 375px no x-overflow |
| T51 | "How it connects" title doesn't fit the idea; try something else | done | v0.5.3. Title "One loop. Every service feeds the next."; Smartsite added to Attract. 3 lines at 1280px; 375px no x-overflow |
| T50 | Arabian Grill case study: Arabian-style grilled food stock photo | done | v0.5.2. Unsplash 0gSpvtwdKuk (free licence), credited; loads 448x298 desktop and on 375px; no x-overflow; tsc, lint, build pass |
| T49 | Khaleej Mandi case study: real photo from khaleejmandi.co.uk | done | v0.5.1. carousel1 (chef with mandi, Khaleej apron), 1200px WebP 56 KB; loads at 448x298 desktop and on 375px; no stock tag; no x-overflow |
| T48 | 1 Key Solution: business type "Marketing and branding"; change stock photo | done | v0.5.1. Card reads Marketing and branding; shop-window photo loads |
| T47 | Run `20261006130000_work_case_studies.sql` in Supabase (with T10), else /admin shows the old projects | blocked | User |
| T44 | Team section: founding year 2018 (team size removed at user's request) | done | v0.4.5. tsc, lint, build pass. Note reads "Founded 2018"; no "team of" text on the page |
| T43 | Email is connect@bvcl.uk, not .com | done | v0.4.4. Footer mailto:connect@bvcl.uk; no bvcl.com left in page HTML |
| T42 | Team: Austin's line, "visionary mind and growth strategies", drawn from his SDA bio | done | v0.4.4. tsc, lint, build pass. Line renders as body text; three cards equal height (540px); 375px no x-overflow |
| T41 | Offices: remove "Office" label on each city; remove Aberdeen | done | v0.4.3. Board rows: Wales (HEAD OFFICE + address), Sheffield, Leicester; no other labels |
| T39 | Team section: Austin's photo from sdabusinessrescue.co.uk/about-us | done | v0.4.3. tsc, lint, build pass. Photo loads (768x960 source), framed 50% 20%, face in view at 1280px (400x319) and 375px (343x273); no x-overflow. Falls back to code photo if /admin row has none |
| T40 | Austin's surname: site says "Walter", SDA page says "Walters" | done | User confirmed "Walters" (T58) |
| T38 | Remove email and phone from the second-last section (orange contact section); keep in footer | done | v0.4.2. Contact section has only the consultation button; footer keeps mailto and tel links |
| T37 | Offices: remove local time; address only for HQ (Business Development Centre, Treforest, Wales CF37 5UR) | done | v0.4.2. tsc, lint, build pass. No clock digits in the board, label "Offices"; address under Wales in normal case; HEAD OFFICE on one line; 375px table 343px, no x-overflow |
| T36 | Footer company number still `[NUMBER]` | blocked | User: send company number |
| T34 | Real client results for Work section (all three still `[ADD RESULT]`) | blocked | User: send real outcomes per client |
| T32 | Correction to T31: main title "Faircodeme", line above it "ERPNext" | done | v0.3.3. tsc, lint, build pass. Row reads 06 ERPNext / Faircodeme; title one line at 375px, no x-overflow; footer link Faircodeme |
| T31 | Services, Faircode row: line above the title "Faircodeme", title "ERPNext" | done | v0.3.2. tsc, lint, build pass. Row reads 06 Faircodeme / ERPNext with the Faircode mark (desktop and 375px, no x-overflow); footer link reads ERPNext. Spelled to match faircodeme.com |
| T30 | Services order: PROXe, Smartsite, MyAIM, Dialgen.AI, VisorFlow, Faircode, Marketing; final line "Optional AI plugins & integrations" | done | v0.3.1. tsc, lint, build pass. Rows read 01 PROXe to 07 Marketing; footer same order; add-on line renders under the list (desktop, and one line at 375px, no x-overflow) |
| T22 | Hero Smartsite card description: "Make your business smarter in one day" | done | v0.2.1. tsc, lint, build pass. 1440px: headline 15px on 2 lines, card 468 to 640, phone ends 472 (4px edge overlap), chat fits. 375px: headline present, no x-overflow |
| T60 | Add Nitish Nair to the advisory board (Growth) | done | v0.5.11. tsc, lint (0 errors), build pass. Advisory board lists Bridgeway Investments, Nitish Nair, Abhilash Kollat, Thanzeel Ashruf, Aslej Salem at 1440px and 375px; no x-overflow, no console errors. Live site reads /admin: run migration `20261007120000_people_nitish_nair.sql` in Supabase (or add him in /admin > Team) |
| T61 | Technology partners: Soft Served Web and BCON Club, with logos from their sites | done | v0.6.0. tsc, lint (0 errors), build pass. Row renders under the advisory board at 1440px and 375px; links open in a new tab (rel noopener), 56px tap targets; no x-overflow, no console errors. Logos not added: both sites blocked from the build environment |
| T62 | Bridgeway Investments logo on the advisory board | blocked | Slot built and tested with a stand-in image (renders, alt text set). Needs the logo: upload it in /admin > Team > Bridgeway (Headshot field) or send the file |
| T63 | Logo files for Soft Served Web and BCON Club | blocked | User: send files or allow the domains in the session's network settings |
| T64 | Homepage copy: nine services + Reelme (leaks headline/subhead, 9 feed cards #0153 to #0145, "nine" everywhere, Reelme in problems/services/footer, Attract step, hero Faircodeme ERPNext, keep feed note) | done | v0.7.0. tsc, lint (0 errors), build pass. 17 checks pass at 1440px and 375px: all copy present, no "seven services", services 9 rows (08 Reelme, 09 AI Plugins), footer order exact, feed starts #0147/#0146/#0145 and "Call after hours" prints #0149 Clinic, no x-overflow, no console errors. AI Plugins row copy drafted (not in brief) |
| T65 | Confirm the drafted AI Plugins & integrations row copy (kind, line, tags) | todo | User |
| T66 | Add service Brand Reel: "The AI ad film Director that can give life to your ideas" | done | v0.8.0. tsc, lint (0 errors), build pass. 7 checks pass at 1440px and 375px: services 10 rows (09 Brand Reel, 10 AI Plugins), Brand Reel copy and mark, footer order, "ten" in subhead/feed line/heading, no "nine services", no x-overflow, no console errors |
