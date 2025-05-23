"use client"
import CreatorPin from "./sections/pin";
import RandomDiscoverButton from "./sections/randombtn";
import CreatorModal from "./sections/modal";
import FilterDrawer from "./sections/filter";
import { useState } from "react";
import MapBackground from "./sections/mapbg";
import Header from "@/components/web/header";



const creators = [
  {
    id: 1,
    name: "Oiko",
    type: "Entreprise",
    category: "Tech",
    logo: "/images/oiko.png",
    tagline: "Applications et services pour la jeunesse",
    position: { x: 40, y: 60 },
  },
  {
    id: 2,
    name: "Paris 13",
    type: "Collectivité",
    category: "Services publics",
    logo: "/images/paris13.png",
    tagline: "Projets citoyens et collaboratifs",
    position: { x: 70, y: 20 },
  },
];

export default function CreatorsMapPage() {
  //const [activeCreator, setActiveCreator] = useState(null);

  const [activeCreator, setActiveCreator] = useState<Creator | null>(null);


  return (
    <>
    <Header />
    <div className="relative pt-8 h-screen w-full bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
      {/* Map fond */}
      <MapBackground />

      {/* Pins des creators */}
      {creators.map((creator) => (
        <CreatorPin key={creator.id} creator={creator} onClick={() => setActiveCreator(creator)} />
      ))}

      {/* Découverte aléatoire */}
       <RandomDiscoverButton creators={creators} setActiveCreator={setActiveCreator} />

      {/* Modal fiche creator */}
      {activeCreator && <CreatorModal creator={activeCreator} onClose={() => setActiveCreator(null)} />}

      {/* Filter Drawer */}
      <FilterDrawer />
    </div>
    </>
  );
}

