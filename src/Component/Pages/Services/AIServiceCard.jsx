import React from 'react';

function AIServiceCard({ title, description, imgUrl }) {
  // WhatsApp link with a default message (you can customize this)
  const handleWhatsAppClick = () => {
    const phoneNumber = "+923060711693"; 
    const message = "Hello, I would like to know more about your services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-sm mx-auto bg-dark border-2 border-green rounded-lg shadow-lg overflow-hidden">
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-green mb-4">{title}</h2>
        <p className="text-blue mb-6">{description}</p>
        <button
          onClick={handleWhatsAppClick}
          className="w-full py-2 text-green border border-green hover:text-dark bg-white rounded-2xl relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          <span className="relative text-lg z-10">CONTACT US</span>
          <span className="absolute inset-0 bg-blue transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>
        </button>
      </div>
    </div>
  );
}

export default AIServiceCard;
