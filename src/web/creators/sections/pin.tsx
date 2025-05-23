"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type CreatorPinProps = {
  creator: Creator;
  onClick: () => void;
};

export default function CreatorPin({ creator, onClick }: CreatorPinProps) {
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{ top: `${creator.position.y}%`, left: `${creator.position.x}%` }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
    >
      <Image
        src={creator.logo}
        alt={creator.name}
        width={50}
        height={50}
        className="rounded-full shadow-xl border-2 border-white"
      />
    </motion.div>
  );
}