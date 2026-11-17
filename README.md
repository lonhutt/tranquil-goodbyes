# Tranquil Goodbyes

Site for Tranquil Goodbyes, an in-home pet euthanasia service for dogs and cats in Lone Tree and the Denver metro area. It's a static [Astro](https://astro.build) site; no backend, no database.

## Running it locally

Requires Node 22.

```sh
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the built dist/
```

## Layout

- `src/pages/` has one `.astro` file per page (home, how it works, about, service area, FAQ, contact)
- `src/layouts/Base.astro` is the shared shell (head, nav, footer)
- `src/site.ts` holds the business name, phone, email, and nav links; change contact info here, not in the pages
- `src/styles/global.css` has all the styling
- `public/` is copied as-is (favicon, headshot)

Internal links go through the `url()` helper in `src/site.ts` so the site still works if it's ever served from a sub-path.

## Deploying

Every push to `main` builds the site and deploys it to Cloudflare Workers (static assets) via `.github/workflows/deploy.yml`. It can also be run by hand from the Actions tab.

The workflow needs the following repo secrets:

- `CLOUDFLARE_API_TOKEN` (the "Edit Cloudflare Workers" token template is enough)
- `CLOUDFLARE_ACCOUNT_ID`

Worker config lives in `wrangler.jsonc`. To check a deploy without pushing anything:

```sh
npm run build && npx wrangler deploy --dry-run
```

The workflow pins Wrangler 4; the action's default (3.x) can't deploy an assets-only Worker with no `main`.

## Domains

`tranquil-goodbyes.com` is registered through Cloudflare, so DNS is already on Cloudflare's nameservers. Both `tranquil-goodbyes.com` and `www.tranquil-goodbyes.com` are attached to the Worker as custom domains in the `routes` block of `wrangler.jsonc`; deploying creates the DNS records and certificates.

The rest lives in the Cloudflare dashboard, not this repo:

- **Always Use HTTPS** (SSL/TLS → Edge Certificates) sends any `http://` request to `https://` with a 301
- A **redirect rule** (Rules → Redirect Rules, "Redirect from WWW to root") sends `www` to the bare domain with a 301, keeping the path and query string

Keep `www` in `wrangler.jsonc` even though it never reaches the Worker; that entry is what creates the `www` DNS record, and without it the redirect has nothing to run on.

HSTS is off for now. Turn it on (same Edge Certificates page) once the site has been stable on HTTPS for a while; it's hard to back out of once browsers have seen it.

## Search engines

Every page currently sets `noindex, nofollow` in `Base.astro`; the site isn't meant to show up in search yet. Remove that meta tag when it's ready to go public.
