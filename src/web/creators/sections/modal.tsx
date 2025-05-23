import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type CreatorModalProps = {
  creator: Creator;
  onClose: () => void;
};

export default function CreatorModal({ creator, onClose } : CreatorModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 shadow-xl z-50"
    >
      <div className="flex items-center gap-4">
        <Image
          src={creator.logo}
          alt={creator.name}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold">{creator.name}</h2>
          <p className="text-sm text-gray-500">{creator.tagline}</p>
        </div>
      </div>
      <Button
        onClick={onClose}
        className="mt-4 w-full bg-gray-900 text-white"
      >
        Fermer
      </Button>
    </motion.div>
  );
}