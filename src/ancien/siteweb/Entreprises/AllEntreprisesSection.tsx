"use client";
import supabase from '@/supabase/supabaseClient'
import { useState, useEffect } from "react";

export default function AllEntreprisesSection() {
  const [entreprises, setEntreprises] = useState<any[]>([]);

  useEffect(() => {
    fetchEntreprises();
  }, []);

  const fetchEntreprises = async () => {
    const { data, error } = await supabase.from("entreprises").select("*");
    if (error) {
      console.error("Erreur récupération entreprises :", error);
    } else {
      setEntreprises(data);
    }
  };

  return (
    <div className="pt-24 px-4">
      <h1 className="text-3xl font-bold mb-6">Entreprises</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {entreprises.map((entreprise) => (
          <div
            key={entreprise.id}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{entreprise.nom}</h3>
            <p className="text-sm text-gray-600 mt-2">
              {entreprise.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
