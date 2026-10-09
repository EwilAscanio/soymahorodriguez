import { Suspense } from "react";
import Link from "next/link";
import { formatDate } from "../../../../lib/blog";
import { listAllArticles } from "../../../../lib/blog-admin";
import ArticleActions from "../../../../components/admin/ArticleActions";

async function ArticlesAdminList() {
  const articles = await listAllArticles();

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-navy">Artículos</h1>
          <p className="mt-1 text-sm text-muted">
            {articles.length} {articles.length === 1 ? "artículo" : "artículos"} en total.
          </p>
        </div>
        <Link href="/dashboard/articulos/nuevo" className="button">
          + Nuevo artículo
        </Link>
      </header>

      {articles.length === 0 ? (
        <p className="rounded-2xl border border-border bg-white p-8 text-center text-muted">
          Todavía no hay artículos. Crea el primero.
        </p>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          <div className="divide-y divide-border">
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        article.status === 'published'
                          ? 'bg-[#e9f7ef] text-[#1d7a44]'
                          : 'bg-[#f7efe4] text-[#8a5a14]'
                      }`}
                    >
                      {article.status === 'published' ? 'Publicado' : 'Borrador'}
                    </span>
                    {article.category_name && (
                      <span className="text-xs font-medium text-pink">{article.category_name}</span>
                    )}
                    <span className="text-xs text-muted">{article.views} vistas</span>
                  </div>
                  <h2 className="mt-1 truncate font-serif text-xl text-navy">{article.title}</h2>
                  <p className="truncate text-xs text-muted">
                    /blog/{article.slug}
                    {article.published_at && ` · Publicado el ${formatDate(article.published_at)}`}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="button button-outline !px-3 !py-2 !text-xs"
                  >
                    Ver
                  </Link>
                  <ArticleActions article={article} />
                  <Link
                    href={`/dashboard/articulos/${article.id}/editar`}
                    className="button !px-3 !py-2 !text-xs"
                  >
                    Editar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ArticlesAdminPage() {
  return (
    <Suspense fallback={<div className="h-[70vh]" />}>
      <ArticlesAdminList />
    </Suspense>
  );
}