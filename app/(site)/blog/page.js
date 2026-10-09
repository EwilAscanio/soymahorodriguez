import { Suspense } from "react";
import Link from "next/link";
import {
  countPublishedArticles,
  formatDate,
  listCategories,
  listPublishedArticles,
} from "../../../lib/blog";

const PAGE_SIZE = 9;

function categoryHref(category, page = 1) {
  const base = category ? `/blog?categoria=${encodeURIComponent(category)}` : "/blog";
  return page > 1 ? `${base}${category ? "&" : "?"}page=${page}` : base;
}

async function BlogListContent({ searchParams }) {
  const params = await searchParams;
  const category = typeof params.categoria === "string" ? params.categoria : undefined;
  const page = Math.max(1, parseInt(typeof params.page === "string" ? params.page : "1", 10) || 1);

  const [articles, total, categories] = await Promise.all([
    listPublishedArticles({ category, page, pageSize: PAGE_SIZE }),
    countPublishedArticles({ category }),
    listCategories(),
  ]);
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <main id="contenido" className="bg-cream pt-16 pb-24">
      <div className="container">
        <header className="mb-10 text-center">
          <p className="eyebrow">SOY MAHO</p>
          <h1 className="font-serif text-4xl text-navy md:text-5xl">Blog</h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Historias, ideas y recursos para vivir, enseñar y compartir la fe en familia.
          </p>
        </header>

        <nav className="mb-12 flex flex-wrap justify-center gap-2" aria-label="Filtrar por categoría">
          <Link
            href="/blog"
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              !category
                ? "border-pink bg-pink text-white"
                : "border-border bg-white text-navy hover:border-pink"
            }`}
          >
            Todas
          </Link>
          {categories.map((item) => (
            <Link
              key={item.id}
              href={categoryHref(item.slug)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                category === item.slug
                  ? "border-pink bg-pink text-white"
                  : "border-border bg-white text-navy hover:border-pink"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {articles.length === 0 ? (
          <p className="text-center text-muted">
            Todavía no hay artículos en esta sección.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="block aspect-[16/10] overflow-hidden bg-cream"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  {article.cover_image && (
                    <img
                      src={article.cover_image}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  )}
                </Link>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center justify-between gap-3 text-xs text-muted">
                    <time dateTime={article.published_at?.toISOString()}>
                      {formatDate(article.published_at)}
                    </time>
                    {article.category_name && (
                      <span className="font-semibold text-pink">{article.category_name}</span>
                    )}
                  </div>
                  <h2 className="font-serif text-xl leading-snug text-navy">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>
                  {article.excerpt && (
                    <p className="line-clamp-3 text-sm text-muted">{article.excerpt}</p>
                  )}
                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-auto pt-2 text-sm font-semibold text-pink transition hover:text-navy"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav className="mt-14 flex items-center justify-center gap-4" aria-label="Paginación">
            {page > 1 ? (
              <Link href={categoryHref(category, page - 1)} className="button button-outline">
                ← Anterior
              </Link>
            ) : (
              <span className="button button-outline" aria-disabled="true">← Anterior</span>
            )}
            <span className="text-sm text-muted">
              Página {page} de {totalPages}
            </span>
            {page < totalPages ? (
              <Link href={categoryHref(category, page + 1)} className="button">
                Siguiente →
              </Link>
            ) : (
              <span className="button" aria-disabled="true">Siguiente →</span>
            )}
          </nav>
        )}
      </div>
    </main>
  );
}

export default function BlogPage({ searchParams }) {
  return (
    <Suspense fallback={<div className="min-h-[60vh] bg-cream" />}>
      <BlogListContent searchParams={searchParams} />
    </Suspense>
  );
}