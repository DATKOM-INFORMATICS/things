'use client';
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    { title: 'Proposez vos idées', description: 'Soumettez facilement vos suggestions et idées de nouvelles fonctionnalités.' },
    { title: 'Votez et commentez', description: 'Exprimez-vous en votant et en donnant votre avis sur les idées des autres.' },
    { title: 'Suivez la roadmap', description: 'Restez informé de l’évolution des projets et découvrez ce qui arrive bientôt.' },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Comment ça marche ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
