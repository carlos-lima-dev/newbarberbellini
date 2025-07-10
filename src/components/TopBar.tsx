import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { Phone } from "lucide-react";
import React from "react";

export default function TopBar() {
  return (
    <div className="w-full bg-white text-blue-dark py-2 px-4 flex flex-col sm:flex-row justify-between items-center text-sm font-medium space-y-2 sm:space-y-0">
      {/* Redes Sociais */}
      <div className="hidden sm:flex space-x-4 items-center">
        <a
          href="https://facebook.com/suaPagina"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-blue-dark hover:scale-110 transition-transform duration-200 ease-in-out"
          aria-label="Facebook"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="https://instagram.com/suaPagina"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-blue-dark hover:scale-110 transition-transform duration-200 ease-in-out"
          aria-label="Instagram"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://youtube.com/suaPagina"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-blue-dark hover:scale-110 transition-transform duration-200 ease-in-out"
          aria-label="YouTube"
        >
          <FaYoutube size={18} />
        </a>
        <a
          href="https://tiktok.com/@suaPagina"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-blue-dark hover:scale-110 transition-transform duration-200 ease-in-out"
          aria-label="TikTok"
        >
          <FaTiktok size={18} />
        </a>
      </div>

      {/* Info de contacto */}
      <div className="flex items-center gap-2 text-blue-dark">
        <span className="whitespace-nowrap">A Barbearia em Guimarães</span>
        <Phone size={16} className="text-blue-dark" />
        <a href="tel:+351900000000" className="hover:underline cursor-pointer text-blue-dark whitespace-nowrap">
          (+351) 900 000 000
        </a>
      </div>
    </div>
  );
}
