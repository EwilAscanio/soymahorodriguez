import Link from "next/link";
import { Suspense } from "react";
import { requireUser } from "../../lib/session";
import AdminNav from "../../components/admin/AdminNav";
import LogoutButton from "../../components/admin/LogoutButton";

async function Sidebar() {
  const user = await requireUser();
  return (
    <>
      <AdminNav />
      <div className="mt-auto space-y-3 pt-4">
        <Link
          href="/"
          className="block rounded-xl px-4 py-2.5 text-sm font-medium text-navy transition hover:text-pink"
        >
          Ver el sitio →
        </Link>
        <div className="rounded-xl border border-border bg-cream p-4">
          <p className="truncate text-sm font-semibold text-navy">{user.name || user.email}</p>
          <p className="text-xs text-muted">{user.email}</p>
        </div>
        <LogoutButton />
      </div>
    </>
  );
}

function SidebarFallback() {
  return (
    <div className="mt-auto space-y-3 pt-4">
      <div className="h-14 rounded-xl bg-[#fdf1f7]" />
      <div className="h-10 rounded-xl bg-[#fdf1f7]" />
    </div>
  );
}

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-cream md:flex">
      <aside className="flex flex-col gap-6 border-b border-border bg-white px-6 py-5 md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0 md:border-b-0 md:border-r">
        <div>
          <p className="eyebrow">PANEL DE ADMIN</p>
          <Link href="/dashboard" className="font-serif text-2xl text-navy">
            Soy Maho
          </Link>
        </div>

        <Suspense fallback={<SidebarFallback />}>
          <Sidebar />
        </Suspense>
      </aside>

      <main id="contenido" className="flex-1 px-6 py-8 md:px-10 lg:px-14">
        {children}
      </main>
    </div>
  );
}