import Head from "next/head";
import Navbar from "~/components/navbar";
import { homeData } from "~/const/project";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { a1, a2, a3, a4, a5, a6, a7 } from "~/const/ani";
import { motion } from 'framer-motion';

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
        <motion.div initial="hidden" animate="show" variants={a1}>
          <Image src="/smiski_v.png" alt="Smiski doing yoga in a V" width={120} height={120} className="ml-2" />
        </motion.div>
        <h1 className="text-4xl font-bold"><motion.div initial="hidden" animate="show" variants={a2}><span className="gradient-text">Lets Connect</span>!</motion.div></h1>
        <div className= "text-lg flex items-center mt-3 justify-center h-full text-center sm:w-7/12 w-10/12">
          <motion.div initial="hidden" animate="show" variants={a3}>
            I am always open to opportunities related to full-stack development and embedded programming. You can contact me through:
          </motion.div>
        </div>
        <div className="flex flex-row gap-2 mt-3">
            <a href="http://github.com/isabellehuangg" className="hover-icon">
              <motion.div initial="hidden" animate="show" variants={a4}>
                <FaGithub size={30} />
              </motion.div>
            </a>
            <a href="https://www.linkedin.com/in/isabellehuangg" className="hover-icon">
              <motion.div initial="hidden" animate="show" variants={a5}>
                <FaLinkedin size={30} />
              </motion.div>
            </a>
            <a href="https://www.instagram.com/isabellehuangg/?hl=en" className="hover-icon">
              <motion.div initial="hidden" animate="show" variants={a6}>
                <FaInstagram size={30} />
              </motion.div>
            </a>
            <a href="mailto:isabelle.huang@uwaterloo.ca" className="hover-icon">
              <motion.div initial="hidden" animate="show" variants={a7}>
                <FaEnvelope size={30} />
              </motion.div>
            </a>
        </div>
      </div>
    </>
  );
}
