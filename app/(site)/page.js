'use client';
import Hero from "../../components/Hero";
import ValueStrip from "../../components/ValueStrip";
import NovelaBanner from "../../components/NovelaBanner";
import FreeResources from "../../components/FreeResources";
import Products from "../../components/Products";
import AboutMaho from "../../components/AboutMaho";
import ContactForm from "../../components/ContactForm";

export default function Home() {
  return (
    <main id="contenido">
      <div className="hero-first-screen">
        <Hero />
        <ValueStrip />
      </div>
      <NovelaBanner />
      <FreeResources filter="Todos" onFilter={() => {}} />
      <Products />
      <AboutMaho />
      <ContactForm />
    </main>
  );
}