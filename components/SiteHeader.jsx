import { Suspense } from 'react';
import { connection } from 'next/server';
import { auth } from '../auth.js';
import Header from './Header';

async function HeaderWithSession() {
  await connection();
  const session = await auth();
  return <Header isLoggedIn={Boolean(session?.user)} />;
}

export default function SiteHeader() {
  return (
    <Suspense fallback={<Header isLoggedIn={false} />}>
      <HeaderWithSession />
    </Suspense>
  );
}