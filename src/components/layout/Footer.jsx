import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-dark text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + descrição */}
        <div>
          <h2 className="text-yellow font-serif text-xl mb-2">BARBEARIA</h2>
          <p className="text-sm text-gray-300">
            Bellini Barbearia em Guimarães. Tradição, estilo e atitude — tudo num só lugar.
          </p>
        </div>

        {/* Contactos */}
        <div>
          <h3 className="text-lg mb-2 text-yellow">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> (+351) 968 000 000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@bellinibarbearia.pt
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Guimarães, Portugal
            </li>
          </ul>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-lg mb-2 text-yellow">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/products" className="hover:underline">
                Agenda
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Nossa Casa
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">
                Lojinha
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-lg mb-2 text-yellow">Segue-nos</h3>
          <div className="flex space-x-4 text-white">
            <FaFacebookF className="hover:text-[#D9B233] transition cursor-pointer" />
            <FaInstagram className="hover:text-[#D9B233] transition cursor-pointer" />
            <FaYoutube className="hover:text-[#D9B233] transition cursor-pointer" />
            <FaTiktok className="hover:text-[#D9B233] transition cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Bellini Barbearia. Todos os direitos reservados.
      </div>
    </footer>
  );
}
