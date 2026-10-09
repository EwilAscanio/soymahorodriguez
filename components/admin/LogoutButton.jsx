'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function logout() {
    setBusy(true);
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
    } finally {
      router.push('/login');
      router.refresh();
    }
  }

  return (
    <button
      type="button"
      onClick={logout}
      disabled={busy}
      className="w-full rounded-xl border border-border px-4 py-2 text-sm font-medium text-pink transition hover:border-pink hover:bg-[#fdf1f7]"
    >
      {busy ? '…' : 'Cerrar sesión'}
    </button>
  );
}