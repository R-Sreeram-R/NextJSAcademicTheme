import React from 'react';
import universityData from './data/university-experience.json';

interface UniversityExperience {
  id: string;
  title: string;
  organization: string;
  duration: string;
  type: string;
  description: string[];
  skills?: string[];
  impact?: string;
  logo: string;
}

const UniversityExperience: React.FC = () => {
  return (
    <section className="w-full" id="university-experience">
      <h2 className="text-4xl text-center font-bold mt-12 mb-12">University Experience & Activities</h2>
      <div className="space-y-6">
        {universityData.experiences.map((exp: UniversityExperience) => (
          <div 
            key={exp.id} 
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 w-full"
          >
            {/* Header section with logo, title, type badge, and duration */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4 flex-1">
                <img 
                  src={exp.logo} 
                  alt={`${exp.organization} logo`}
                  className="w-12 h-12 object-contain flex-shrink-0 rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-2">
                    <span className="font-medium text-gray-800">{exp.organization}</span>
                    <span>•</span>
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      exp.type === 'Leadership' ? 'bg-red-100 text-red-700 border border-red-200' :
                      exp.type === 'Research' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                      exp.type === 'Volunteer' ? 'bg-green-100 text-green-700 border border-green-200' :
                      exp.type === 'Academic' ? 'bg-purple-100 text-purple-700 border border-purple-200' :
                      'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>
              {/* Duration moved to the right on desktop */}
              <div className="md:flex-shrink-0">
                <span className="inline-block px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                  {exp.duration}
                </span>
              </div>
            </div>

            {/* Content section - single column layout */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-3">
                  Description
                </h4>
                <ul className="space-y-2">
                  {exp.description.map((desc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gray-400 mt-1.5 text-xs">•</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.impact && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Impact
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{exp.impact}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniversityExperience;