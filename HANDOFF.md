# Handoff

Last updated: 2026-10-04.

## Goal
Run the Baker Vaughn site (fork of `bconclub/bakervaughn`) from `nishafmusthafa/bvcl`, deployed on Vercel, with versioned, verified releases. The process is in `CLAUDE.md`.

## Live state
- Local: `C:\Builds\BVCL`, git on `main`. Remotes: `origin` = nishafmusthafa/bvcl, `upstream` = bconclub/bakervaughn.
- Version: 0.2.3 (tag `v0.2.3`). Seven products: Smartsite, PROXe, Dialgen.AI, VisorFlow, Faircode ERPNext, MyAIM, Marketing & branding (`lib/content.ts` `services`). Releases v0.0.2 onward are tagged.
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
