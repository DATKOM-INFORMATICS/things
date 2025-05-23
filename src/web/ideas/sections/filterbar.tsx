'use client';
import React from 'react';

interface IdeasFilterBarProps {
  viewMode: string;
  onChangeView: (mode: string) => void;
}

const IdeasFilterBar: React.FC<IdeasFilterBarProps> = ({ viewMode, onChangeView }) => {
  return (
    <div className="fixed top-16 md:top-20 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-4 py-2">
      <div className="flex space-x-2">
        <button className={`px-4 py-2 rounded-xl ${viewMode === 'bazar' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`} onClick={() => onChangeView('bazar')}>
          Bazar
        </button>
        <button className={`px-4 py-2 rounded-xl ${viewMode === 'range' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`} onClick={() => onChangeView('range')}>
          Rangé
        </button>
      </div>

      <div className="hidden md:flex space-x-2">
        <select className="px-4 py-2 rounded-xl bg-gray-100">
          <option>Type d’idée</option>
        </select>
        <select className="px-4 py-2 rounded-xl bg-gray-100">
          <option>Zone</option>
        </select>
        <select className="px-4 py-2 rounded-xl bg-gray-100">
          <option>Catégorie</option>
        </select>
        <span className="px-4 py-2 text-gray-500">Page 1</span>
        <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white">Ajouter</button>
      </div>

      <div className="md:hidden flex space-x-2">
        <button className="px-3 py-2 rounded-xl bg-indigo-600 text-white">+</button>
      </div>
    </div>
  );
};

export default IdeasFilterBar;
