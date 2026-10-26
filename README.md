# `experimental.inlineCss`: a Server Action that redirects leaves an unused `<link rel="preload" as="style">`

Minimal reproduction for a Next.js issue.

```sh
npm install
npm run build
npm run start
```

1. Open http://localhost:3000 with DevTools open.
2. Click the button. The Server Action (`app/actions.ts`) calls `redirect("/done")`.
3. About 3 seconds later Chrome logs: *The resource http://localhost:3000/_next/static/chunks/….css was preloaded using link preload but not used within a few seconds from the window's load event.*
4. In the console: `document.querySelectorAll('link[rel=preload][as=style]').length` is `1`, next to the one `style[data-href]` for the same file.
5. Reload `/done`: `0` preloads, no warning.

Two conditions are needed: `experimental.inlineCss: true` (`next.config.mjs`) and a redirect target that renders per request (`app/done/page.tsx` awaits `connection()`). With a static `/done` there is no preload.
