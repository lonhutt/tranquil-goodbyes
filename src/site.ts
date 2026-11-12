export const site = {
  name: "Tranquil Goodbyes",
  phone: "(720) 593-8636",
  phoneHref: "tel:+17205938636",
  smsHref: "sms:+17205938636",
  email: "kubikrachael@gmail.com",
  nav: [
    { href: "/how-it-works", label: "How it works" },
    { href: "/about", label: "About" },
    { href: "/service-area", label: "Service area" },
    { href: "/faq", label: "FAQ" },
  ],
};

// Prefixes internal links with the deploy base path (e.g. /repo-name on GitHub Pages).
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, "") + path;
