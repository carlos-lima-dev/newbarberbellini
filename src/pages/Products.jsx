// src/pages/Products.jsx
import React from "react";
import { products } from "../constants/productsData";

export default function Products() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-dark">Descubra os Nossos Produtos</h1>

      {/* Aviso sobre compras */}
      <div className="bg-yellow-100 text-yellow-800 border border-yellow-300 p-4 rounded mb-8 text-center font-medium">
        As compras são realizadas exclusivamente na nossa loja física. Visite-nos para conhecer todos os produtos
        disponíveis!
      </div>

      {/* Lista de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(({ id, name, description, price, image }) => (
          <div
            key={id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-xl mb-2">{name}</h2>
              <p className="text-blue-dark mb-4">{description}</p>
              <p className="font-bold text-lg">{price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
