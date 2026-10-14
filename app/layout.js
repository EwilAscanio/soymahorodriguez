import { DM_Sans, DM_Serif_Display, Caveat } from "next/font/google";
import Script from "next/script";
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
    site: "@soymahorodriguez",
    creator: "@soymahorodriguez",
    title: "Soy Maho Rodríguez | Fe, Propósito y Transformación",
    description:
      "Historias, recursos, libros e ideas creativas para vivir, enseñar y compartir la fe en familia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large", "max-snippet": -1 },
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
        {/* Google Tag Manager — código de Google Analytics (GTM-5KQMTD4W) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KQMTD4W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          id="google-analytics-gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5KQMTD4W');`,
          }}
        />
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