"use client";

import { Eye, Heart, MessageCircle } from "lucide-react";

export default function MainStats() {
  const stats = [
    { icon: Eye, label: "Vues", value: "2 450" },
    { icon: Heart, label: "Votes", value: "340" },
    { icon: MessageCircle, label: "Feedbacks", value: "27" },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 shadow flex flex-col md:flex-row gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="flex-1 flex items-center gap-3 p-4 border rounded-xl">
          <stat.icon className="w-8 h-8 text-indigo-600" />
          <div>
            <p className="text-lg font-bold">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
