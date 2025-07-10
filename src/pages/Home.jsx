import React, { useState, useEffect } from "react";
import heroImage from "../assets/hero.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";
import slide5 from "../assets/slide5.webp";
import { products } from "../constants/productsData";
import { ChevronUp } from "lucide-react";
const slides = [heroImage, slide2, slide3, slide4, slide5];
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(10);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Função para calcular quantos produtos mostrar consoante a largura do ecrã
  const calculateInitialVisibleCount = () => {
    const width = window.innerWidth;
    let columns = 1;

    if (width >= 1280) columns = 4; // lg
    else if (width >= 1024) columns = 3; // md
    else if (width >= 640) columns = 2; // sm

    const rows = Math.floor(window.innerHeight / 300); // Altura estimada de 1 cartão
    const estimatedCount = columns * rows;

    return Math.max(5, Math.min(estimatedCount, products.length));
  };

  // Atualiza o número de produtos ao carregar ou redimensionar
  useEffect(() => {
    const updateCount = () => {
      const count = calculateInitialVisibleCount();
      setVisibleCount(count);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, products.length));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      setShowScrollTop(scrollTop + clientHeight >= scrollHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full flex items-center justify-center" style={{ height: "calc(100dvh - 100px)" }}>
        {/* Imagem de fundo */}
        {/* Slides */}
        {slides.map((img, index) => (
          <picture>
            <source media="(min-width: 768px)" srcSet={img.desktop} />
            <source media="(max-width: 767px)" srcSet={img.mobile} />
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
              }`}
            />
          </picture>
        ))}

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Botão centralizado mais abaixo */}
            <div className="relative z-20 translate-y-34 sm:translate-y-64">
          <a
            href="https://google.com"
            rel="noopener noreferrer"
            className="inline-block bg-blue-dark text-white font-semibold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            Fazer Marcação
          </a>
        </div>
      </section>

      {/* Texto */}
      <section className="w-full text-center py-12 px-4 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Descubra os Nossos Produtos</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">Qualidade e estilo para o seu cuidado diário.</p>
      </section>

      {/* Produtos */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, visibleCount).map(({ id, name, description, price, image }) => (
          <div key={id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{name}</h3>
              <p className="text-gray-600 text-sm mb-4">{description}</p>
              <p className="font-bold text-blue-dark">{price}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Mostrar Mais */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4 mb-12">
        {visibleCount < products.length && (
          <button
            onClick={showMore}
            className="text-blue-dark font-semibold underline transition transform hover:scale-105 cursor-pointer"
          >
            Mostrar Mais
          </button>
        )}
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 bg-white text-blue-dark p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Voltar ao topo"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </>
  );
}
