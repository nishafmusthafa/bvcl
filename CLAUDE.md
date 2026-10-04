# Baker Vaughn site (bvcl)

Next.js 16 / React 19 site with a Supabase-backed admin panel. See README.md, ADMIN.md and DESIGN.md.

- Repo: https://github.com/nishafmusthafa/bvcl (`origin`), forked from https://github.com/bconclub/bakervaughn (`upstream`).
- Deploy: Vercel project `bvcl`, production on push to `main`.
- Env: see `.env.example`. Real values live in `.env.local` (git-ignored) and Vercel project settings.
- Version: `package.json` is the source (`next.config.ts` passes it to `lib/version.ts`). Bump with `npm version <x.y.z> --no-git-tag-version`, never find-and-replace (it hits dependencies with the same version).
- Check: `npx tsc --noEmit`, `npm run lint`, `npm run build`. No test suite yet.

## Build process (follow on every task)

1. **Track.** Keep `TODO.md` current. Pull every action item from each message (voice notes, lists, screenshots, casual "fix this"). Each item: ID, description, status (todo / doing / done / blocked), how it was verified. Show open items at the end of every reply.
2. **Understand first.** Read the files you change and the ones around them. Match existing style. If ambiguous, pick the sensible default, say so, keep going. Ask only when the decision is the user's.
3. **Small slices.** One logical change per commit, no unrelated refactors. Loop plan, implement, verify, fix until done.
4. **Verify.** Run build, typecheck, lint, tests; fix failures. UI: run the dev server, check desktop and 375px mobile, console errors, interactions. Flows (forms, chat, checkout): run end to end at least 3 times with different inputs. Record verification in `TODO.md`.
5. **Review before commit.** Read your own diff as a strict reviewer: bugs, edge cases, dead code, duplication, simpler options. Security: no secrets in code or client bundles, inputs validated, auth checks present, env vars in `.env.example`. Performance: no needless re-renders, oversized images, blocking scripts.
6. **Versioning.** SemVer: breaking = MAJOR, feature = MINOR, fix/tweak = PATCH. Conventional commits (`feat:`, `fix:`, `refactor:`, `perf:`, `chore:`, `docs:`, `style:`, `test:`, optional scope). `CHANGELOG.md` in Keep a Changelog format, newest first, version and date; preserve encoding and line endings and read it back after editing. Tag releases `vX.Y.Z`. Never rewrite pushed history, force-push `main` or skip hooks. Commit and push after each verified item; risky work goes on a branch with a PR.
7. **Design consistency.** Use existing tokens (colors, spacing, radius, fonts) and shared components. One visual language. Accessibility: contrast, focus states, alt text, tap targets 44px or more.
8. **Report** at the end of every reply: Done (what, files, how verified), Left, Blocked (what and who acts), Version (current version and last commit hash).
9. **Handoff.** When the conversation gets long or the session ends, update `HANDOFF.md`: goal, live state, done, pending, blockers, key files and links, decisions, next action. A fresh session must be able to continue from it alone.

Style: short and direct. If something failed, say so with the error output. Never claim done without verifying.
