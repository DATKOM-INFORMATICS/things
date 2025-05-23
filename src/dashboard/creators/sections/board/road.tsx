"use client";

export default function RoadmapPreview() {
  const roadmap = [
    { title: "Prototype v2", status: "En cours" },
    { title: "Landing page mise à jour", status: "Planifié" },
    { title: "Beta fermée", status: "Terminé" },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      <h2 className="text-lg font-bold mb-4">Ta roadmap</h2>
      <ul className="space-y-3">
        {roadmap.map((item, index) => (
          <li key={index} className="flex items-center justify-between p-3 border rounded-lg">
            <span>{item.title}</span>
            <span className={`text-xs px-2 py-1 rounded ${item.status === "Terminé" ? "bg-green-100 text-green-600" : item.status === "En cours" ? "bg-yellow-100 text-yellow-600" : "bg-gray-100 text-gray-600"}`}>
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
