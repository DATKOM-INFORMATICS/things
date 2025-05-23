"use client";

export default function ProductStats() {
  const stats = [
    { label: "Produits publiés", value: 8 },
    { label: "Brouillons", value: 3 },
    { label: "En attente", value: 2 },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 shadow grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((item, index) => (
        <div key={index} className="p-4 border rounded-xl text-center">
          <p className="text-2xl font-bold">{item.value}</p>
          <p className="text-sm text-gray-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
