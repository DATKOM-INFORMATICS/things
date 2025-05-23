"use client";

export default function TopProducts() {
  const products = [
    { name: "App Connect", views: "1 200", votes: "110" },
    { name: "Plugin Alpha", views: "850", votes: "89" },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      <h2 className="text-lg font-bold mb-4">Top produits</h2>
      <ul className="space-y-3">
        {products.map((prod, index) => (
          <li key={index} className="flex items-center justify-between p-3 border rounded-lg">
            <span>{prod.name}</span>
            <div className="text-sm text-gray-500 flex items-center gap-4">
              <span>{prod.views} vues</span>
              <span>{prod.votes} votes</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
