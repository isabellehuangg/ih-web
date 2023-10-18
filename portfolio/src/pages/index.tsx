import Head from "next/head";
import Navbar from "~/components/navbar";
import { homeData } from "~/const/project";
import Image from "next/image";
import { a1, a2, a3 } from "~/const/ani";
import { motion } from "framer-motion";

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
            <Image src="/smiski_yoga.png" alt="Smiski doing yoga" width={120} height={120} className="ml-2" />
          </motion.div>
          <h1 className="text-4xl font-bold text-center sm:items-center">
            <motion.div initial="hidden" animate="show" variants={a2}>
              Hello, Im <span className="gradient-text">Isabelle</span>!
            </motion.div>
          </h1>
          <div className="text-lg flex items-center mt-3 justify-center h-full text-center sm:w-7/12 w-10/12">
            <motion.div initial="hidden" animate="show" variants={a3}>
                I am a Computer Engineering student at the University of Waterloo, interested in software development and Mob Psycho.
            </motion.div>
          </div>
        </div>
    </>
  );
}
