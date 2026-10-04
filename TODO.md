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
