import { Suspense } from "react";
import Link from "next/link";
import {
  getAdminStats,
  getArticlesByMonth,
  getViewsLastDays,
} from "../../../lib/blog-admin";
import ViewsChart from "../../../components/admin/ViewsChart";
import ArticlesChart from "../../../components/admin/ArticlesChart";

const STAT_CARDS = [
  { key: "published", label: "Publicados", sub: "Artículos en el blog" },
  { key: "drafts", label: "Borradores", sub: "Sin publicar" },
  { key: "total_views", label: "Visitas", sub: "Suma total" },
  { key: "total_categories", label: "Categorías", sub: "Activas" },
];

async function DashboardHome() {
  const [stats, viewsData, articlesData] = await Promise.all([
    getAdminStats(),
    getViewsLastDays(14),
    getArticlesByMonth(6),
  ]);

  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-serif text-3xl text-navy">Resumen</h1>
        <p className="mt-1 text-sm text-muted">Panorama general de tu blog.</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STAT_CARDS.map((card) => (
          <div
            key={card.key}
            className="rounded-2xl border border-border bg-white p-5 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              {card.label}
            </p>
            <p className="mt-2 font-serif text-4xl text-navy">{stats[card.key]}</p>
            <p className="mt-1 text-xs text-muted">{card.sub}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="font-serif text-xl text-navy">Visitas últimos 14 días</h2>
          <div className="mt-4">
            <ViewsChart data={viewsData} />
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="font-serif text-xl text-navy">Artículos publicados</h2>
          <div className="mt-4">
            <ArticlesChart data={articlesData} />
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-3">
        <Link href="/dashboard/articulos/nuevo" className="button">
          Nuevo artículo
        </Link>
        <Link href="/dashboard/categorias" className="button button-outline">
          Gestionar categorías
        </Link>
      </section>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="h-[70vh]" />}>
      <DashboardHome />
    </Suspense>
  );
}