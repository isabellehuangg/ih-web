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
        <Image src="/smiski_v.png" alt="Smiski doing yoga in a V" width={120} height={120} className="ml-2" />
        <h1 className="title">
          <span className="gradient-text">Lets Connect</span>!
        </h1>
        <div className= "description">
            I am always open to opportunities related to full-stack development and embedded programming. You can contact me through:
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
