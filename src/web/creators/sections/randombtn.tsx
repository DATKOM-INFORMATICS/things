import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type RandomDiscoverButtonProps = {
  creators: Creator[];
  setActiveCreator: (creator: Creator) => void;
};

export default function RandomDiscoverButton({ creators, setActiveCreator } : RandomDiscoverButtonProps) {
  return (
    <Button
      onClick={() => {
        const random = creators[Math.floor(Math.random() * creators.length)];
        setActiveCreator(random);
      }}
      className="fixed bottom-6 right-6 bg-black text-white rounded-full px-6 py-3 shadow-lg"
    >
      Découvrir au hasard
    </Button>
  );
}