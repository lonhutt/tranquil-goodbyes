import { defineConfig } from "astro/config";

// Optional SITE/BASE overrides; Cloudflare serves from the root, so the defaults apply.
export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE ?? "/",
});
