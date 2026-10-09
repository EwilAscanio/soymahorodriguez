import { Suspense } from "react";
import ArticleForm from "../../../../../components/admin/ArticleForm";
import { listCategories } from "../../../../../lib/blog";

async function NewArticleContent() {
  const categories = await listCategories();
  return (
    <ArticleForm
      mode="create"
      categories={categories}
      submitLabel="Crear artículo"
    />
  );
}

export default function NewArticlePage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl text-navy">Nuevo artículo</h1>
        <p className="mt-1 text-sm text-muted">Escribe y publícalo cuando esté listo.</p>
      </header>
      <Suspense fallback={<div className="h-[60vh]" />}>
        <NewArticleContent />
      </Suspense>
    </div>
  );
}