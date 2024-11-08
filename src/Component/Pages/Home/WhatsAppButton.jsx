import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+923060711693';
    const message = "Hello, I would like to know more about your services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed bottom-24  z-50 right-4 bg-green-500 text-white bg-[#2FCE4D] p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all"
      onClick={handleWhatsAppClick}
    >
      <FaWhatsapp size={30} />
    </div>
  );
};

export default WhatsAppButton;
