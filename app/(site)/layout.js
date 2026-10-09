import SiteHeader from "../../components/SiteHeader";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function SiteLayout({ children }) {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <SiteHeader />
      {children}
      <Footer />
      <WhatsAppButton />
      <Reveal />
    </>
  );
}