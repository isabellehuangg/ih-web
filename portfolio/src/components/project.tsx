import { FaGithub } from 'react-icons/fa';

export default function Project({ projectData }) {
  return (
    <div className='sm:w-7/12 w-10/12'>
      {projectData.map((project: any, index : any) => (
        <div key={index} className='text-green border-2 border-green rounded p-4 mb-5'>
          <div className='flex flex-row gap-2 items-baseline'>
            <h1 className="text-2xl font-semibold gradient-text">{project.title}</h1>
            <a href={project.link} className='hover:text-lightgreen duration-500 hover:scale-110'>
                <FaGithub size={22} />
            </a>
          </div>
          <p className='my-2'>{project.description}</p>
          <p><span className='font-semibold mb-2'>Technologies: </span>{project.techstack}</p>
        </div>
      ))}
    </div>
  );
}
