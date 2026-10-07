# Handoff

Last updated: 2026-10-07.

## Goal
Run the Baker Vaughn site (fork of `bconclub/bakervaughn`) from `nishafmusthafa/bvcl`, deployed on Vercel, with versioned, verified releases. The process is in `CLAUDE.md`.

## Latest (2026-10-07, Claude cloud session)
- Commits v0.5.11 (Nitish Nair, Growth advisor), v0.6.0 (technology partners row + advisor logos) and v0.7.0 (homepage copy: nine services + Reelme) were made in a cloud session that could not push (GitHub 403 on this repo). They were sent to the user as `git am` patches. Check `git log origin/main` before continuing: if they are not on `main`, apply the patches or redo from `CHANGELOG.md`.
- Live site (Vercel) is v0.5.10 until those land.
- Supabase: run `20261007120000_people_nitish_nair.sql` (or add him in /admin > Team), else the live advisory board will not show him.
- Logos still needed: Bridgeway (upload in /admin > Team > Headshot), Soft Served Web and BCON Club (`partners` in `lib/content.ts`).
- AI Plugins & integrations row copy in `services` was drafted (T65).

## Live state
- Local: `C:\Builds\BVCL`, git on `main`. Remotes: `origin` = nishafmusthafa/bvcl, `upstream` = bconclub/bakervaughn.
- Version: 0.5.10 (tag `v0.5.10`). Team: Austin Walters, Ninil Shyam, Nishaf Musthafa. Photos: austin.jpg (reference: 768x960, eyes at (329,246) and (427,237)); ninil-office.jpg and nishaf-office.jpg are cut out (rembg) and placed on Austin's background at his face size and eye line. New team photos should follow the same framing. Supabase also needs `20261006140000_people_austin_walters.sql` run. All three leadership cards have photos and lines. Ninil's and Nishaf's photos were cut out with rembg (isnet-general-use, onnxruntime 1.20.1; 1.30 crashes on this machine), put on a light studio backdrop and tone-matched to Austin's. When replacing a public image, use a new file name so caches don't serve the old one. Stock photos are credited in `public/unsplash/_credits.json`. Real project photos live in `public/work/`. Case studies: Khaleej Mandi House, 1 Key Solution, Arabian Grill. Supabase still needs migrations `20261006120000` (anon grant) and `20261006130000` (case studies) run by hand. Founded 2018. Contact email connect@bvcl.uk. Team headshots in `public/team/`; code photos fill in when an /admin person has none. Head office: Business Development Centre, Treforest, Wales CF37 5UR (`offices` in `lib/content.ts`). Contact details live in `contact` (`lib/content.ts`). Product logos live in `public/brands/` and map to products in `serviceLogo` (`components/Logos.tsx`). Nine services, in this order: PROXe, Smartsite, MyAIM, Dialgen.AI, VisorFlow, Faircodeme ERPNext, Marketing & branding, Reelme, AI Plugins & integrations (`lib/content.ts` `services`, from v0.7.0). Footer order is its own list, `footerServices`. Releases v0.0.2 onward are tagged.
- Vercel: project `bvcl`, framework Next.js, production deploys on push to `main`. Domain `bvcl-bvcl.vercel.app`, currently behind Vercel Authentication (visitors see a Vercel login).
- Supabase: keys in `.env.local` (git-ignored) and in Vercel env vars. Public CMS reads fail until the v0.0.6 grant is run.
- Dev server: `npm run dev` on :3000. `C:\Builds\.claude\launch.json` has the `bvcl-dev` config for the Claude browser pane.

## Done
See `TODO.md` (T1 to T14) and `CHANGELOG.md`.

## Pending
- T15: `aria-invalid` on radio inputs, `components/enquiry/EnquiryDialog.tsx:226` and `:267` (lint warnings).
- T16: `npm audit` reports 5 high severity vulnerabilities.
- T17: enquiry form end to end, 3 runs. Writes to the live `enquiries` table; do after T10.
- T20: hide the decorative hero collage from screen readers.

## Blockers (user acts)
- T3: revoke the GitHub token pasted in chat.
- T10: run `grant execute on function public.is_cms_admin() to anon;` in the Supabase SQL editor.
- T11: turn off Vercel Authentication (Settings > Deployment Protection) or add a custom domain.
- T12: decide whether `nextlevelbuilder/ui-ux-pro-max-skill` is installed as a skill or just downloaded.

## Key files and links
- `CLAUDE.md` (project facts and process), `TODO.md`, `CHANGELOG.md`, `ADMIN.md`, `DESIGN.md`
- `package.json` (version source; `next.config.ts` passes it to `lib/version.ts`)
- `components/home/HeroVisual.tsx` (hero collage, one card per product), `components/Logos.tsx` (`serviceColor`)
- `supabase/migrations/` (run new ones in Supabase by hand)
- https://github.com/nishafmusthafa/bvcl, https://vercel.com/bvcl/bvcl

## Decisions
- Kept upstream history instead of a fresh repo, so `git pull upstream main` still works.
- Commit author is `nishafmusthafa` with the GitHub noreply email (repo-local config).
- SemVer from `package.json` (replaced `CHANGE_COUNTER`, which could not do MINOR/MAJOR bumps). Keep `package-lock.json` in step. Docs-only and refactor commits do not bump.
- Turbopack dev can serve stale Tailwind CSS after new arbitrary classes. If a new class has no effect, stop the dev server and delete `.next/dev`.
- `HeroVisual` keeps its synchronous first measurement. The ResizeObserver's first callback needs a paint, and without that measurement the stage stays hidden.

## Next action
Once the user finishes T10 and T11, load `https://bvcl-bvcl.vercel.app` and confirm the CMS sections render without 401s in the Vercel runtime logs. Then T15, T16, T17.
