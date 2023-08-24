import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  time: string;
  description: string;
  technologies: string;
}

interface ExperienceProps {
  experienceData: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experienceData }) => {
  return (
    <div className='sm:w-7/12 w-10/12'>
      {experienceData.map((experience, index) => (
        <div key={index} className='text-green border-2 border-green rounded p-4 mb-5'>
          <h1 className="text-2xl font-semibold text-green"><span className="gradient-text">{experience.role}</span> @ {experience.company}</h1>
          <p className="mt-0.5 mb-2">{ experience.time }</p>
          <ul className="list-disc px-4">
            <li>{ experience.description }</li>
            <li> <span className="gradient-text font-semibold">Technologies:</span> { experience.technologies } </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;

