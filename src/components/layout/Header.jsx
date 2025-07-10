import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopBar from "../TopBar";

export default function Header() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkClass = (path) =>
    `hover:text-[#D9B233] transition ${location.pathname === path ? "underline text-[#D9B233]" : ""}`;

  return (
    <>
      <TopBar />
      <header className="w-full bg-blue-dark text-white px-6 py-4 flex items-center justify-between">
        {/* Logotipo */}
        <Link to="/">
          {/* <div className="text-yellow font-serif text-xl font-bold tracking-widest">
            BARBEARIA
            <div className="text-xs tracking-wide text-white">BELLINI</div>
          </div> */}
          <img src="src/assets/logo4.png" alt="logo" className="h-15 w-auto pt-4" />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden md:flex space-x-8 uppercase text-sm tracking-wide">
          <a href="https://google.com" rel="noopener noreferrer" className={linkClass("/")}>
            Agenda
          </a>
          <Link to="/about" className={linkClass("/about")}>
            Nossa Casa
          </Link>
          <Link to="/products" className={linkClass("/products")}>
            Loja
          </Link>
          <Link to="/contacts" className={linkClass("/contacts")}>
            Contactos
          </Link>
        </nav>

        {/* Menu hambúrguer mobile */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-dark text-white transform transition-transform duration-300 ease-in-out z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <Link to="/" onClick={() => setSidebarOpen(false)}>
            <img src="src/assets/logo4.png" alt="logo" className="h-15 w-auto pt-4" />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white focus:outline-none"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-6 uppercase text-sm tracking-wide">
          <a
            href="https://google.com"
            rel="noopener noreferrer"
            className="hover:text-[#D9B233] transition"
            onClick={() => setSidebarOpen(false)}
          >
            Agenda
          </a>
          <Link to="/about" className="hover:text-[#D9B233] transition" onClick={() => setSidebarOpen(false)}>
            Nossa Casa
          </Link>
          <Link to="/products" className="hover:text-[#D9B233] transition" onClick={() => setSidebarOpen(false)}>
            Loja
          </Link>
          <Link to="/contacts" className="hover:text-[#D9B233] transition" onClick={() => setSidebarOpen(false)}>
            Contactos
          </Link>
        </nav>
      </div>

      {/* Overlay para fechar o sidebar ao clicar fora */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50  z-40" onClick={() => setSidebarOpen(false)} aria-hidden="true"></div>
      )}
    </>
  );
}
