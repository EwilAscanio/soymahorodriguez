'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ArticleActions({ article }) {
  const router = useRouter();
  const [busyAction, setBusyAction] = useState(null);

  async function run(action) {
    if (action === 'delete' && !window.confirm('¿Eliminar este artículo?')) return;
    setBusyAction(action);
    try {
      const url =
        action === 'status'
          ? `/api/admin/articles/${article.id}/status`
          : `/api/admin/articles/${article.id}`;
      const res = await fetch(url, {
        method: action === 'delete' ? 'DELETE' : 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(
          action === 'status'
            ? { status: article.status === 'published' ? 'draft' : 'published' }
            : {}
        ),
      });
      if (res.ok) router.refresh();
    } finally {
      setBusyAction(null);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => run('status')}
        disabled={busyAction !== null}
        className="button button-outline !px-3 !py-2 !text-xs"
      >
        {busyAction === 'status' ? '…' : article.status === 'published' ? 'Despublicar' : 'Publicar'}
      </button>
      <button
        type="button"
        onClick={() => run('delete')}
        disabled={busyAction !== null}
        className="button button-outline !px-3 !py-2 !text-xs !border-red-200 !text-red-600 hover:!bg-red-50"
      >
        {busyAction === 'delete' ? '…' : 'Eliminar'}
      </button>
    </>
  );
}