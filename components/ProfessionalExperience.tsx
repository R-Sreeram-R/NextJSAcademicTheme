import React from 'react';
import professionalData from './data/professional-experience.json';

interface ProfessionalExperience {
    id: string;
    company: string;
    position: string;
    duration: string;
    location: string;
    type: string;
    description: string[];
    technologies?: string[];
    achievements?: string[];
    logo: string;
}

const ProfessionalExperience: React.FC = () => {

    const scrollToUniversityExp = () => {
        const target = document.getElementById('university-experience');
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
        <section className="w-full" id="professional-experience">
            <h2 className="text-4xl text-center font-bold mt-12 mb-12">Professional Experience</h2>
            <div className="flex justify-end mb-6">
                <button
                    onClick={scrollToUniversityExp}
                    className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-xs font-medium"
                >
                    Go to University Experience →
                </button>
            </div>

            <div className="space-y-6">
                {professionalData.experiences.map((exp: ProfessionalExperience) => (
                    <div
                        key={exp.id}
                        className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 w-full"
                    >
                        {/* Header section with logo, title, and duration */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div className="flex items-start gap-4 flex-1">
                                <img
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    className="w-12 h-12 object-contain flex-shrink-0 rounded"
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                        {exp.position}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                                        <span className="font-medium text-gray-800">{exp.company}</span>
                                        <span>•</span>
                                        <span>{exp.type}</span>
                                        <span>•</span>
                                        <span>{exp.location}</span>
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

                        {/* Content section with better use of horizontal space */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Left column - Description */}
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-800 mb-3">
                                        Responsibilities
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
                            </div>

                            {/* Right column - Achievements and Technologies */}
                            <div className="space-y-4">
                                {exp.achievements && exp.achievements.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-800 mb-3">
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span className="text-green-500 mt-1.5 text-xs">•</span>
                                                    <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {exp.technologies && exp.technologies.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-800 mb-3">
                                            Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-md text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProfessionalExperience;