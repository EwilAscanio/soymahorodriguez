'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ITEMS = [
  { href: '/dashboard', label: 'Resumen' },
  { href: '/dashboard/articulos', label: 'Artículos' },
  { href: '/dashboard/categorias', label: 'Categorías' },
];

export default function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className="space-y-1">
      {ITEMS.map((item) => {
        const active =
          item.href === '/dashboard'
            ? pathname === '/dashboard'
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              active
                ? 'bg-pink text-white'
                : 'text-navy hover:bg-[#fdf1f7] hover:text-pink'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}