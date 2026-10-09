'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const inputClass =
  'w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-navy outline-none transition focus:border-pink';
const labelClass = 'mb-1.5 block text-sm font-medium text-navy';

export default function CategoryManager({ categories }) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  async function create(event) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/categories', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, slug, description }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'No se pudo crear la categoría.');
        return;
      }
      setName('');
      setSlug('');
      setDescription('');
      router.refresh();
    } catch {
      setError('Error de red. Inténtalo de nuevo.');
    } finally {
      setBusy(false);
    }
  }

  async function remove(id) {
    if (!window.confirm('¿Eliminar esta categoría?')) return;
    setDeletingId(id);
    try {
      await fetch('/api/admin/categories', {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      router.refresh();
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="space-y-8">
      <section className="max-w-xl rounded-2xl border border-border bg-white p-6 shadow-sm">
        <h2 className="font-serif text-xl text-navy">Nueva categoría</h2>
        <form onSubmit={create} className="mt-4 space-y-4">
          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>
          )}
          <div>
            <label htmlFor="cat-name" className={labelClass}>Nombre *</label>
            <input
              id="cat-name"
              className={inputClass}
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              maxLength={120}
            />
          </div>
          <div>
            <label htmlFor="cat-slug" className={labelClass}>Slug</label>
            <input
              id="cat-slug"
              className={inputClass}
              placeholder="fe, familia, …"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
            />
            <p className="mt-1 text-xs text-muted">Se genera solo si se deja vacío.</p>
          </div>
          <div>
            <label htmlFor="cat-description" className={labelClass}>Descripción</label>
            <textarea
              id="cat-description"
              rows={2}
              className={inputClass}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <button type="submit" className="button w-full" disabled={busy}>
            {busy ? 'Creando…' : 'Crear categoría'}
          </button>
        </form>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy">Categorías existentes</h2>
        {categories.length === 0 ? (
          <p className="mt-4 rounded-2xl border border-border bg-white p-8 text-center text-muted">
            No hay categorías todavía.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {categories.map((category) => (
              <li
                key={category.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm"
              >
                <div>
                  <p className="font-serif text-lg text-navy">{category.name}</p>
                  <p className="text-xs text-muted">
                    /blog?categoria={category.slug} · {category.articles}{' '}
                    {category.articles === 1 ? 'artículo' : 'artículos'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => remove(category.id)}
                  disabled={deletingId === category.id}
                  className="button button-outline !px-3 !py-2 !text-xs !border-red-200 !text-red-600 hover:!bg-red-50"
                >
                  {deletingId === category.id ? '…' : 'Eliminar'}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}