export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://davidolarinde.com/sitemap.xml",
  };
}
