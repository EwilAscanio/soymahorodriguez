import Link from "next/link";

export const metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no existe o cambió de dirección.",
};

export default function NotFound() {
  return (
    <main id="contenido" className="section-pad bg-cream">
      <div className="container" style={{ textAlign: "center", maxWidth: 640, marginInline: "auto" }}>
        <p className="eyebrow">ERROR 404</p>
        <h1 className="font-serif text-navy" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "12px 0 16px" }}>
          No encontramos esta página
        </h1>
        <p className="text-muted" style={{ marginBottom: 28 }}>
          Puede que el enlace esté roto o que la página se haya movido. Sigamos explorando desde el inicio.
        </p>
        <div className="button-row justify-center">
          <Link href="/" className="button">Volver al inicio</Link>
          <Link href="/blog" className="button button-outline">Ir al blog</Link>
        </div>
      </div>
    </main>
  );
}
