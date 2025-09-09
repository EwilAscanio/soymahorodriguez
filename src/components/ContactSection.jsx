import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Send, Heart, PencilLine } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { contactInfo } from "../mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [infoRef, isInfoVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [formRef, isFormVisible] = useIntersectionObserver({ threshold: 0.2 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- Configuración de EmailJS ---
    // Reemplaza con tus propios IDs de EmailJS
    const serviceID = 'service_a96v7zl';
    const templateID = 'template_j7hs76d';
    const publicKey = 'z1oE1xyE07gj9BSWY';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      to_name: 'soymahorodriguez.com', // Puedes cambiar esto
      message: formData.message,
      phone: formData.phone,
    };
    console.log("Enviando con estos parámetros:", templateParams);
    // --------------------------------

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      toast({
        title: "¡Mensaje enviado! 💕",
        description: "Te contactaré pronto para aclarar cualquier duda.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      toast({
        title: "Error al enviar",
        description: "Por favor, intenta nuevamente o contáctame directamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 animate-on-scroll fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>
          <span className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-pink-300">Contacto</span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-pink-500 bg-clip-text text-transparent">¿Lista para transformar tu vida?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Estoy aquí para acompañarte en tu camino hacia una vida plena y auténtica. Completa el formulario y te contactaré.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div 
            ref={infoRef}
            className={`sticky top-8 animate-on-scroll slide-in-from-left ${isInfoVisible ? 'is-visible' : ''}`}>
            <Card className="bg-[linear-gradient(135deg,_#FCE7F3_0%,_#FFFFFF_100%)] border border-pink-500/10 rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
                  <Heart className="text-pink-600" />
                  Hablemos
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-8">
                  <div className="flex items-center gap-4 py-4 border-b border-pink-500/10">
                    <div className="w-10 h-10 bg-[linear-gradient(135deg,_#F9A8D4_0%,_#EC4899_100%)] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <Mail />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 font-medium">Email</span>
                      <span className="text-base text-gray-800 font-semibold">{contactInfo.email}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 py-4 border-b border-pink-500/10">
                    <div className="w-10 h-10 bg-[linear-gradient(135deg,_#F9A8D4_0%,_#EC4899_100%)] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <Phone />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 font-medium">Teléfono</span>
                      <span className="text-base text-gray-800 font-semibold">{contactInfo.phone}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 py-4">
                    <div className="w-10 h-10 bg-[linear-gradient(135deg,_#F9A8D4_0%,_#EC4899_100%)] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <MapPin />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 font-medium">Ubicación</span>
                      <span className="text-base text-gray-800 font-semibold">{contactInfo.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-pink-500/5 rounded-xl border-l-4 border-pink-600">
                  <p className="text-sm text-gray-700 leading-relaxed m-0 italic">
                  Estoy aquí para contarte historias que te inspiren a vivir tu fe y a descubrir tu propósito. Cada mujer merece vivir su mejor vida, y a través de mis palabras, te acompañaré en ese camino.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div 
            ref={formRef}
            className={`relative animate-on-scroll slide-in-from-right ${isFormVisible ? 'is-visible' : ''}`}>
            <Card className="bg-white border border-pink-500/10 rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 mb-2">
                  <PencilLine className="inline-block mr-2 text-pink-600" size={24} />
                  
                  Contactame</CardTitle>
                <p className="text-gray-500 text-base m-0">
                  Cuéntame un poco sobre ti y tus objetivos
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="font-medium text-gray-800 text-sm">Nombre completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        className="p-3 border-2 border-pink-500/20 rounded-xl text-base transition-all duration-200 bg-white focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-500/10"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="font-medium text-gray-800 text-sm">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        className="p-3 border-2 border-pink-500/20 rounded-xl text-base transition-all duration-200 bg-white focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-500/10"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone" className="font-medium text-gray-800 text-sm">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(0414) 123-4567"
                        className="p-3 border-2 border-pink-500/20 rounded-xl text-base transition-all duration-200 bg-white focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-500/10"
                      />
                    </div>
                    
                   
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="font-medium text-gray-800 text-sm">Cuéntame sobre ti *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntame un poco sobre tu situación actual y qué te gustaría lograr..."
                      rows={4}
                      className="p-3 border-2 border-pink-500/20 rounded-xl text-base transition-all duration-200 bg-white focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-500/10"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[linear-gradient(135deg,_#F9A8D4_0%,_#EC4899_100%)] text-white border-none px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    size="lg"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    <Send size={16} className="button-icon" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
