"use client";

import ProductCard from "./card";

const products = [
  { id: "1", name: "App Connect", tagline: "Une app pour connecter les étudiants.", status: "Publié" },
  { id: "2", name: "Things Plugin", tagline: "Plugin pour booster tes idées.", status: "En attente" },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
