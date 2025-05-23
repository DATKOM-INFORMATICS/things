'use client';
import React from 'react';

interface IdeaModalProps {
  idea: { title: string; description: string };
  onClose: () => void;
}

const IdeaModal: React.FC<IdeaModalProps> = ({ idea, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl w-96 shadow-xl">
        <h2 className="text-2xl font-bold mb-4">{idea.title}</h2>
        <p className="text-gray-600 mb-6">{idea.description}</p>
        <button onClick={onClose} className="bg-indigo-600 text-white px-4 py-2 rounded-xl">Fermer</button>
      </div>
    </div>
  );
};

export default IdeaModal;
