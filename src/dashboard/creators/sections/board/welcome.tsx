"use client";

import { UserCircle } from "lucide-react";

export default function WelcomeBanner() {
  const creatorName = "Jordan"; // à récupérer via props ou context plus tard
  const today = new Date().toLocaleDateString("fr-FR", { weekday: "long", month: "long", day: "numeric" });

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-6 flex items-center justify-between shadow">
      <div>
        <h1 className="text-2xl font-bold mb-2">Bienvenue, {creatorName} !</h1>
        <p className="text-sm">On est le {today}. Que souhaites-tu faire aujourd'hui ?</p>
      </div>
      <div>
        <UserCircle className="w-12 h-12" />
      </div>
    </div>
  );
}
