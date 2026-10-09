'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        setError('Correo o contraseña incorrectos.');
        return;
      }
      const params = new URLSearchParams(window.location.search);
      router.push(params.get('callbackUrl') ?? '/dashboard');
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-border bg-white p-8 shadow-sm"
      >
        <h1 className="mb-6 text-center font-serif text-2xl text-navy">
          Iniciar sesión
        </h1>
        {error && <p className="mb-4 text-sm text-pink">{error}</p>}
        <label className="mb-2 block text-sm text-navy">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg border border-border px-3 py-2 text-sm"
          required
          autoComplete="email"
        />
        <label className="mb-2 block text-sm text-navy">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-lg border border-border px-3 py-2 text-sm"
          required
          autoComplete="current-password"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-pink px-4 py-2 text-sm font-semibold text-white hover:bg-pink/90 disabled:opacity-60"
        >
          {loading ? 'Entrando…' : 'Iniciar sesión'}
        </button>
      </form>
    </div>
  );
}