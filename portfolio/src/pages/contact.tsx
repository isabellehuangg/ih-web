import Head from "next/head";
import Navbar from "~/components/navbar";
import { homeData } from "~/data/project";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Isabelle Huang</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/smiski_laptop.png" />
      </Head>
      <Navbar navbarData={homeData} />
      <div className="flex min-h-screeen flex-col bg-beige justify-center items-center text-green">
        <Image src="/smiski_v.png" alt="Smiski doing yoga in a V" width={120} height={120} className="ml-2" />
        <h1 className="text-4xl font-bold"><span className="gradient-text">Lets Connect</span>!</h1>
        <p className= "text-lg flex items-center mt-3 justify-center h-full text-center sm:w-7/12 w-10/12">I am always open to opportunities related to full-stack development and embedded programming. You can contact me through:</p>
        <div className="flex flex-row gap-2 mt-3">
            <a href="http://github.com/isabellehuangg" className="hover-icon">
                <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/isabellehuangg" className="hover-icon">
                <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/isabellehuangg/?hl=en" className="hover-icon">
                <FaInstagram size={30} />
            </a>
            <a href="mailto:isabelle.huang@uwaterloo.ca" className="hover-icon">
                <FaEnvelope size={30} />
            </a>
        </div>
      </div>
    </>
  );
}
