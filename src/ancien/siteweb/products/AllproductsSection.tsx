"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/supabase/supabaseClient";

export default function ProduitsPage() {
  const [produits, setProduits] = useState<any[]>([]);

  useEffect(() => {
    fetchProduits();
  }, []);

  const fetchProduits = async () => {
    const { data, error } = await supabase.from("produits").select("*");
    if (error) {
      console.error("Erreur récupération produits :", error);
    } else {
      setProduits(data);
    }
  };

  return (
    <div className="pt-24 px-4">
      <h1 className="text-3xl font-bold mb-6">Produits disponibles</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {produits.map((produit) => (
          <Link
            key={produit.id}
            href={`/produits/${produit.id}`}
            className="block p-4 border rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{produit.nom}</h3>
            <p className="text-sm text-gray-600 mt-2">{produit.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
