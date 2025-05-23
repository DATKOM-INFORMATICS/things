'use client';
import React from 'react';

interface IdeaCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ title, description, onClick }) => {
  return (
    <div onClick={onClick} className="bg-white rounded-xl shadow-md p-4 w-72 cursor-pointer transition hover:scale-105 active:scale-95">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default IdeaCard;
