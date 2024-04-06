import React from 'react';

interface ExperienceItem {
  id: number,
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
    <div className='all-li'>
      {experienceData.map((experience) => (
        <div key={experience.id} className='listed-item'>
          <h1 className="li-title">{experience.role} <span className="gradient-green">@ {experience.company}</span></h1>
          <p className="li-time">{ experience.time }</p>
          <p className='li-description'>{experience.description}</p>
          <p><span className='li-tech'>Technologies: </span>{experience.technologies}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;

