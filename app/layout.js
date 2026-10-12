import { DM_Sans, DM_Serif_Display, Caveat } from "next/font/google";
import { externalLinks } from "../data/navigation";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.soymahorodriguez.com"),
  title: {
    default: "Soy Maho Rodríguez | Fe, Propósito y Transformación",
    template: "%s | Soy Maho Rodríguez",
  },
  description:
    "Historias, recursos, libros e ideas creativas para vivir, enseñar y compartir la fe en familia.",
  openGraph: {
    title: "Soy Maho Rodríguez | Fe, Propósito y Transformación",
    description:
      "Historias, recursos, libros e ideas creativas para vivir, enseñar y compartir la fe en familia.",
    type: "website",
    url: "https://www.soymahorodriguez.com/",
    siteName: "Soy Maho Rodríguez",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soy Maho Rodríguez | Fe, Propósito y Transformación",
    description:
      "Historias, recursos, libros e ideas creativas para vivir, enseñar y compartir la fe en familia.",
  },
};

export const viewport = { themeColor: "#fff7fa" };

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Soy Maho Rodríguez",
  url: "https://www.soymahorodriguez.com/",
  inLanguage: "es",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Soy Maho Rodríguez",
  url: "https://www.soymahorodriguez.com/",
  logo: "https://www.soymahorodriguez.com/favicon.ico",
  sameAs: [externalLinks.instagram, externalLinks.youtube, externalLinks.tiktok].filter(Boolean),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${dmSerif.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}