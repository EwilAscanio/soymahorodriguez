import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import EbooksSection from "./EbooksSection";
import PrintedBooksSection from "./PrintedBooksSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EbooksSection />
        <PrintedBooksSection />
        <ContactSection />
        
        {/* <TestimonialsSection />
        <BlogSection />
        <ServicesSection />
       */}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;