import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Send, Heart } from "lucide-react";
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
    
    // Mock form submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "¡Mensaje enviado! 💕",
        description: "Te contactaré pronto para agendar tu sesión gratuita.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: ""
      });
    } catch (error) {
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
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div 
          ref={headerRef}
          className={`section-header animate-on-scroll fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>
          <span className="section-badge">Contacto</span>
          <h2 className="section-title">¿Lista para transformar tu vida?</h2>
          <p className="section-description">
            Agenda tu llamada gratuita de 20 minutos y comencemos juntas este hermoso camino
          </p>
        </div>
        
        <div className="contact-content">
          <div 
            ref={infoRef}
            className={`contact-info animate-on-scroll slide-in-from-left ${isInfoVisible ? 'is-visible' : ''}`}>
            <Card className="info-card">
              <CardHeader>
                <CardTitle className="info-title">
                  <Heart className="title-icon" />
                  Hablemos
                </CardTitle>
              </CardHeader>
              <CardContent className="info-content">
                <div className="contact-methods">
                  <div className="contact-method">
                    <Mail className="method-icon" />
                    <div className="method-details">
                      <span className="method-label">Email</span>
                      <span className="method-value">{contactInfo.email}</span>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <Phone className="method-icon" />
                    <div className="method-details">
                      <span className="method-label">Teléfono</span>
                      <span className="method-value">{contactInfo.phone}</span>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <MapPin className="method-icon" />
                    <div className="method-details">
                      <span className="method-label">Ubicación</span>
                      <span className="method-value">{contactInfo.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="info-message">
                  <p>
                    Estoy aquí para escucharte y acompañarte en tu proceso de transformación. 
                    Cada mujer merece vivir su mejor vida, y juntas podemos lograrlo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div 
            ref={formRef}
            className={`contact-form-wrapper animate-on-scroll slide-in-from-right ${isFormVisible ? 'is-visible' : ''}`}>
            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle className="form-title">Agenda tu llamada gratuita</CardTitle>
                <p className="form-description">
                  Cuéntame un poco sobre ti y tus objetivos
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-field">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div className="form-field">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-field">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div className="form-field">
                      <Label htmlFor="service">Servicio de interés</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="service-select"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="coaching-individual">Coaching Individual</option>
                        <option value="programa-empoderamiento">Programa Empoderamiento</option>
                        <option value="mentoria-empresarial">Mentoría Empresarial</option>
                        <option value="no-segura">No estoy segura</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-field">
                    <Label htmlFor="message">Cuéntame sobre ti *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntame un poco sobre tu situación actual y qué te gustaría lograr..."
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-button"
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