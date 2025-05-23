"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart, Settings, Map, X, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/creator/dashboard", icon: <Home /> },
  { label: "Produits", href: "/creator", icon: <Home /> },
  { label: "Statistiques", href: "/creator/stats", icon: <BarChart /> },
  { label: "Roadmap", href: "/creator/roadmap", icon: <Map /> },
  { label: "Paramètres", href: "/creator/settings", icon: <Settings /> },
];

export default function CreatorSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar mobile */}
      <div className={`fixed inset-0 z-50 bg-black bg-opacity-40 ${open ? "block" : "hidden"}`} onClick={() => setOpen(false)}></div>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r z-50 transition-transform transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex flex-col`}
      >
        <div className="p-6 flex items-center justify-between md:block">
          <div className="font-bold text-xl">Things Creator</div>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-4 hover:bg-gray-100 transition ${
                pathname === item.href ? "bg-gray-200 font-medium" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Bouton menu mobile */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white border rounded-full p-2 shadow"
        onClick={() => setOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>
    </>
  );
}
