"use client";

import { Eye, ThumbsUp, PackagePlus, MessageCircle } from "lucide-react";
import StatCard from "./card";

export default function StatsGrid() {
  const stats = [
    { label: "Produits publiés", value: 5, icon: <PackagePlus size={20} />, color: "bg-indigo-600" },
    { label: "Total de votes", value: 124, icon: <ThumbsUp size={20} />, color: "bg-emerald-500" },
    { label: "Suggestions reçues", value: 12, icon: <MessageCircle size={20} />, color: "bg-yellow-500" },
    { label: "Vues totales", value: 450, icon: <Eye size={20} />, color: "bg-pink-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  );
}
