const SITE_URL = "https://www.soymahorodriguez.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/api", "/login"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}