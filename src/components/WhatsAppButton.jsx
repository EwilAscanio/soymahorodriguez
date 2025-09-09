import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '584145942817'; // Reemplaza con tu número de WhatsApp
  const message = 'Hola, me gustaría obtener más información sobre tus servicios.'; // Mensaje predeterminado

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={30} />
    </button>
  );
};

export default WhatsAppButton;
