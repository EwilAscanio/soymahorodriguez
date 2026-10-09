import { Suspense } from "react";
import { listCategoriesAdmin } from "../../../../lib/blog-admin";
import CategoryManager from "../../../../components/admin/CategoryManager";

async function CategoriesAdminContent() {
  const categories = await listCategoriesAdmin();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-serif text-3xl text-navy">Categorías</h1>
        <p className="mt-1 text-sm text-muted">
          Agrupa los artículos para que tus lectores encuentren lo que buscan.
        </p>
      </header>
      <CategoryManager categories={categories} />
    </div>
  );
}

export default function CategoriesAdminPage() {
  return (
    <Suspense fallback={<div className="h-[70vh]" />}>
      <CategoriesAdminContent />
    </Suspense>
  );
}