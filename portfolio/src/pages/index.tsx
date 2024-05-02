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
          <Image src="/smiski_yoga.png" alt="Smiski doing yoga" width={120} height={120} className="ml-2" />
          <h1 className="title">
            Hello, Im <span className="gradient-text">Isabelle</span>!
          </h1>
          <div className="description">
            I'm a Computer Engineering student at the University of Waterloo, entering my 2B term; currently working on backend development @ <em><a className="highlight" href="https://teamwaterloop.ca/">Waterloop</a></em>, HCI research @ <em><a className="highlight" href="https://uwaterloo.ca/social-intelligent-robotics-research-lab/">SIRRL</a></em>. In my spare time, I attempt drawing & long distance running. Key word being attempt... ಥ_ಥ 
          {/* </div>
          <div className="description"> */}
            {/* In my spare time, I attempt drawing & long distance running. Key word being attempt... ಥ_ಥ  */}
          </div>
          <div className="description">
            Always open to new connections!
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
