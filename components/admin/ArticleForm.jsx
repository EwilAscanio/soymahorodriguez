'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TiptapEditor from './TiptapEditor';

const EMPTY_DOC = { type: 'doc', content: [{ type: 'paragraph' }] };

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, '-');
}

export default function ArticleForm({ mode, categories, article = null, submitLabel }) {
  const router = useRouter();
  const [title, setTitle] = useState(article?.title || '');
  const [slug, setSlug] = useState(article?.slug || '');
  const [slugTouched, setSlugTouched] = useState(Boolean(article?.slug));
  const [excerpt, setExcerpt] = useState(article?.excerpt || '');
  const [coverImage, setCoverImage] = useState(article?.cover_image || '');
  const [categoryId, setCategoryId] = useState(article?.category_id || '');
  const [status, setStatus] = useState(article?.status || 'draft');
  const [content, setContent] = useState(article?.content || EMPTY_DOC);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  function onTitleChange(value) {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  }

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const payload = {
        title,
        slug,
        excerpt,
        cover_image: coverImage,
        category_id: categoryId || null,
        status,
        content,
      };
      const res =
        mode === 'edit'
          ? await fetch(`/api/admin/articles/${article.id}`, {
              method: 'PATCH',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(payload),
            })
          : await fetch('/api/admin/articles', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(payload),
            });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'No se pudo guardar el artículo.');
        return;
      }
      if (mode === 'edit') {
        router.push('/dashboard/articulos');
        router.refresh();
      } else {
        router.push(`/dashboard/articulos/${data.id}/editar`);
        router.refresh();
      }
    } catch {
      setError('Error de red. Inténtalo de nuevo.');
    } finally {
      setBusy(false);
    }
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-navy outline-none transition focus:border-pink';
  const labelClass = 'mb-1.5 block text-sm font-medium text-navy';

  return (
    <form onSubmit={submit} className="space-y-6">
      {error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div>
            <label htmlFor="title" className={labelClass}>Título *</label>
            <input
              id="title"
              className={inputClass}
              value={title}
              onChange={(event) => onTitleChange(event.target.value)}
              required
              maxLength={255}
            />
          </div>

          <div>
            <label htmlFor="excerpt" className={labelClass}>Extracto</label>
            <textarea
              id="excerpt"
              rows={3}
              className={inputClass}
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              placeholder="Resumen breve que aparece en las tarjetas del blog"
            />
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label htmlFor="content-input" className={labelClass}>Contenido</label>
              <span className="text-xs text-muted">Editor de bloques</span>
            </div>
            <TiptapEditor content={content} onChange={setContent} />
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="slug" className={labelClass}>Slug (URL)</label>
            <input
              id="slug"
              className={inputClass}
              value={slug}
              onChange={(event) => {
                setSlugTouched(true);
                setSlug(event.target.value);
              }}
              placeholder="mi-primer-articulo"
            />
            <p className="mt-1 text-xs text-muted">{slug ? `/blog/${slug}` : 'Se genera desde el título.'}</p>
          </div>

          <div>
            <label htmlFor="cover_image" className={labelClass}>URL de portada</label>
            <input
              id="cover_image"
              className={inputClass}
              value={coverImage}
              onChange={(event) => setCoverImage(event.target.value)}
              placeholder="https://…"
            />
            {coverImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={coverImage}
                alt="Vista previa de la portada"
                className="mt-3 aspect-[16/9] w-full rounded-xl border border-border object-cover"
              />
            )}
          </div>

          <div>
            <label htmlFor="category_id" className={labelClass}>Categoría</label>
            <select
              id="category_id"
              className={inputClass}
              value={categoryId}
              onChange={(event) => setCategoryId(event.target.value)}
            >
              <option value="">Sin categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="status" className={labelClass}>Estado</label>
            <select
              id="status"
              className={inputClass}
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="draft">Borrador</option>
              <option value="published">Publicado</option>
            </select>
          </div>

          <button type="submit" className="button w-full" disabled={busy}>
            {busy ? 'Guardando…' : submitLabel}
          </button>
        </div>
      </div>
    </form>
  );
}