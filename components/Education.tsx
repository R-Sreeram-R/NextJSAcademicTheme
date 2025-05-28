import ExtLink from './ExtLink'
import data from './data/personalInfo.json'

interface EducationItem {
  name: string;
  link: string;
  logo: string;
  degree: string;
  distinction?: string;
}

const Education = (): JSX.Element => {
  const educationData: EducationItem[] = [
    {
      name: "Columbia University",
      link: "https://www.columbia.edu",
      logo: "images/logos/columbia-univerity-logo-no-text.jpg",
      degree: "MS in Computer Science",
      distinction: "Incoming Fall 2025"
    },
    {
      name: "Birla Institute of Technology and Science (BITS) Pilani",
      link: "https://www.bits-pilani.ac.in",
      logo: "images/logos/BITS_Pilani-Logo.svg.png",
      degree: "BE in Computer Science",
      distinction: "GPA: 3.82/4"
    },
  ];

  return (
    <section className="grid gap-6" id="education">
      <h2 className="text-2xl font-bold mt-12 mb-6">Education</h2>

      {educationData.map((edu, index) => (
        <div
          key={index}
          className="flex items-center gap-4"
        >
          <img
            src={edu.logo}
            alt={`${edu.name} logo`}
            className="w-16 h-16 object-contain rounded"
          />
          <div>
            <a
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {edu.name}
            </a>
            <p className="text-gray-800 text-base mt-1">{edu.degree}</p>
            {edu.distinction && (
              <p className="text-gray-600 text-sm mt-1">{edu.distinction}</p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
