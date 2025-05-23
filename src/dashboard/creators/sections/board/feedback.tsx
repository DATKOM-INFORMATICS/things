"use client";

export default function RecentFeedbacks() {
  const feedbacks = [
    { author: "Emma", message: "Super produit, j’adore l’idée !" },
    { author: "Yanis", message: "Hâte de voir les prochaines fonctionnalités !" },
    { author: "Amira", message: "Je propose une option de personnalisation." },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      <h2 className="text-lg font-bold mb-4">Derniers feedbacks</h2>
      <ul className="space-y-3">
        {feedbacks.map((fb, index) => (
          <li key={index} className="p-3 border rounded-lg">
            <p className="text-sm text-gray-600 mb-1">{fb.author}</p>
            <p className="text-sm">{fb.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
