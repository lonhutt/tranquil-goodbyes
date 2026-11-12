// Placeholder contact details; replace with Rachael's real ones before launch.
export const site = {
  name: "Tranquil Goodbyes",
  phone: "(303) 555-0100",
  phoneHref: "tel:+13035550100",
  email: "hello@example.com",
  nav: [
    { href: "/how-it-works", label: "How it works" },
    { href: "/about", label: "About" },
    { href: "/service-area", label: "Service area" },
    { href: "/faq", label: "FAQ" },
  ],
};

// Prefixes internal links with the deploy base path (e.g. /repo-name on GitHub Pages).
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, "") + path;
