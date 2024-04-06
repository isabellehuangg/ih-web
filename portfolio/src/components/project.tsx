import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectItem {
  title: string;
  link: string;
  description: string;
  techstack: string;
}

interface ProjectProps {
  projectData: ProjectItem[];
}

const Project: React.FC<ProjectProps> = ({ projectData }) => {
  return (
    <div className='all-li'>
      {projectData.map((project, index) => (
        <div key={index} className='listed-item'>
          <div className='pt-align'>
            <h1 className="li-title">{project.title}</h1>
            <a href={project.link} className='hover-icon'>
                <FaGithub size={22} />
            </a>
          </div>
          <p className='li-description'>{project.description}</p>
          <p><span className='li-tech'>Technologies: </span>{project.techstack}</p>
        </div>
      ))}
    </div>
  );
}

export default Project;
