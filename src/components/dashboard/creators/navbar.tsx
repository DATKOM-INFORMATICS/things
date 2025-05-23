"use client";

import { UserCircle } from "lucide-react";

export default function CreatorNavbar() {
  return (
    <header className="flex items-center justify-between bg-white border-b px-6 h-16">
      <div className="text-lg font-semibold">Mon tableau de bord</div>
      <div className="flex items-center gap-4">
        <UserCircle className="w-7 h-7 text-gray-600" />
      </div>
    </header>
  );
}
