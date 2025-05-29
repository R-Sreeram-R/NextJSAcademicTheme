import React from 'react';
import researchData from './data/research.json';

const ResearchInterests = () => {
  const scrollToPublications = () => {
        const target = document.getElementById('publications');
        if (target) {
            const yOffset = -80; // adjust this value based on your header height
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    };

  return (
    <section className="py-12 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Research Interests
          </h2>
          <button
            onClick={scrollToPublications}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            View Publications →
          </button>
        </div>
        
        <div className="space-y-4">
          {researchData.researchInterests.map((interest, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {interest.title}
              </h3>
              
              <p className="text-gray-700 text-sm">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;