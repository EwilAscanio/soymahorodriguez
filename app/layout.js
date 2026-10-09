import { DM_Sans, DM_Serif_Display, Caveat } from "next/font/google";
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
  title: "Soy Maho Rodríguez | Fe, Propósito y Transformación",
  description:
    "Historias, recursos, libros e ideas creativas para vivir, enseñar y compartir la fe en familia.",
  metadataBase: new URL("https://www.soymahorodriguez.com"),
  alternates: {
    canonical: "https://www.soymahorodriguez.com/",
  },
  openGraph: {
    title: "Soy Maho Rodríguez | Fe, Propósito y Transformación",
    description:
      "Historias, recursos, libros e ideas creativas para vivir, enseñar y compartir la fe en familia.",
    type: "website",
    url: "https://www.soymahorodriguez.com/",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = { themeColor: "#fff7fa" };

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${dmSerif.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
