import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleForm from "../../../../../../components/admin/ArticleForm";
import { getArticleById } from "../../../../../../lib/blog-admin";
import { listCategories, formatDate } from "../../../../../../lib/blog";

async function EditArticleContent({ params }) {
  const { id } = await params;
  const article = await getArticleById(id);
  if (!article) notFound();

  const categories = await listCategories();

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-navy">Editar artículo</h1>
          <p className="mt-1 text-sm text-muted">
            {article.status === 'published'
              ? `Publicado el ${formatDate(article.published_at)}`
              : 'Borrador'}
          </p>
        </div>
        <Link href="/dashboard/articulos" className="button button-outline">
          ← Volver a artículos
        </Link>
      </header>
      <ArticleForm
        mode="edit"
        categories={categories}
        article={article}
        submitLabel="Guardar cambios"
      />
    </div>
  );
}

export default function EditArticlePage({ params }) {
  return (
    <Suspense fallback={<div className="h-[70vh]" />}>
      <EditArticleContent params={params} />
    </Suspense>
  );
}