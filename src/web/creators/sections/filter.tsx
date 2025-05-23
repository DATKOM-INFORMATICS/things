"use client"
import { Button } from "@/components/ui/button";

export default function FilterDrawer() {
  return (
    <div className="fixed top-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg z-40">
      <h3 className="font-semibold mb-2">Filtres</h3>
      <div className="space-y-2">
        <Button className="w-full bg-gray-800 text-white">Type</Button>
        <Button className="w-full bg-gray-800 text-white">Catégorie</Button>
        <Button className="w-full bg-gray-800 text-white">Vue Map</Button>
      </div>
    </div>
  );
}
