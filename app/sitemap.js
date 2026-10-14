import { listPublishedArticles } from "../lib/blog";

const SITE_URL = "https://www.soymahorodriguez.com";

export default async function sitemap() {
  const articles = await listPublishedArticles({ page: 1, pageSize: 1000 });

  const lastModified = articles[0]?.published_at
    ? new Date(articles[0].published_at)
    : new Date();

  const articleEntries = articles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: article.published_at ? new Date(article.published_at) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...articleEntries,
  ];
}