'use client';
import React, { useState } from 'react';
import IdeaCard from './IdeaCard';
import { motion } from 'framer-motion';
import IdeaModal from './ideamodal';

interface IdeasViewProps {
  viewMode: string;
}

const ideas = [
  { title: 'Dark Mode', description: 'Permettre un mode sombre pour l’application.' },
  { title: 'Notifications Push', description: 'Avertir quand une idée atteint 50 votes.' },
  { title: 'Mode Offline', description: 'Pouvoir proposer des idées sans connexion.' },
  { title: 'Votes par emoji', description: 'Réagir aux idées par emoji.' },
  { title: 'Chat en direct', description: 'Discuter des idées en live.' },
];

const IdeasView: React.FC<IdeasViewProps> = ({ viewMode }) => {
  const [selectedIdea, setSelectedIdea] = useState<any>(null);

  return (
    <div className="pt-32 md:pt-28 pb-24 px-4 bg-white min-h-[calc(100vh-100px)] relative overflow-hidden">
      {viewMode === 'range' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ideas.map((idea, i) => (
            <IdeaCard key={i} title={idea.title} description={idea.description} onClick={() => setSelectedIdea(idea)} />
          ))}
        </div>
      ) : (
        // h-[1500px] border-4 border-gray-100 rounded-3xl w-full min-h-[calc(100vh-100px)] 
        <div className="relative w-full min-h-[calc(100vh-100px)] overflow-hidden">
          {ideas.map((idea, i) => (
            <motion.div
              key={i}
              drag
              dragConstraints={{ top: 0, left: 0, right: 800, bottom: 1300 }}
              dragElastic={0.4}
              whileDrag={{ scale: 1.05 }}
              className="absolute"
              style={{ top: `${i * 120}px`, left: `${i * 80}px` }}
            >
              <IdeaCard title={idea.title} description={idea.description} onClick={() => setSelectedIdea(idea)} />
            </motion.div>
          ))}
        </div>
      )}

      {selectedIdea && <IdeaModal idea={selectedIdea} onClose={() => setSelectedIdea(null)} />}
    </div>
  );
};

export default IdeasView;
