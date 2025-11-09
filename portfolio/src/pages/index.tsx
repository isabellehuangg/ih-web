import DefaultHead from "~/components/head";
import Navbar from "~/components/navbar";
import { homeData } from "~/const/navbar";
import Image from "next/image";
import { links } from "~/const/links";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <DefaultHead />
      <Navbar navbarData={homeData} />
        <div className="page">
          <Image src="/waiiiit.JPG" alt="Isabelle Waving" width={120} height={120} className="waiiiit" />
          <h1 className="title">
            Hello, I&apos;m <span className="gradient-text">Isabelle</span>!
          </h1>
          <div className="description">
            I&apos;m a 3B Computer Engineering student at the University of Waterloo. 
            My previous internship experience has involved software development at <em><a className="highlight" href="https://www.autodesk.com/ca-en/industry/media-entertainment/">Autodesk</a></em>, Ford Motor Company, and Miovision and software testing at Nicoya.
            I'm currently developing software for the hiring process at UW Blueprint, and have worked on Furhat Robots at <em><a className="highlight" href="https://uwaterloo.ca/social-intelligent-robotics-research-lab/">SIRRL</a></em>.
          </div>
          <div className="description">
            My experience has involved C++/Python with a focus in graphics development, backend systems, and optimization. Always open to new connections!
          </div>
          <div className="links">
            {links.map((link, index) => {
              const IconComponent = link.type === 'Github' ? FaGithub : link.type === 'Linkedin' ? FaLinkedin : link.type === 'Instagram' ? FaInstagram : link.type === 'Envelope' ? FaEnvelope :null;
                return (
                  <a key={index} href={link.link} className="hover-icon">
                    {IconComponent && <IconComponent size={30} />}
                  </a>
                );
            })}
          </div>

        </div>
    </>
  );
}
