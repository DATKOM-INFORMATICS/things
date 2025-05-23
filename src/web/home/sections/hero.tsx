'use client';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Things</h1>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        La plateforme où vos idées deviennent des projets concrets. Votez, proposez, innovez.
      </p>
      <div className="space-x-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl">
          Explorer les idées
        </button>
        <button className="border border-white px-6 py-3 rounded-xl">
          Rejoindre la communauté
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
