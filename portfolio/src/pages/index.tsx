import Head from "next/head";
import Navbar from "~/components/navbar";
import { homeData } from "~/data/project";
import Image from "next/image";

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
        <Image src="/smiski_yoga.png" alt="Smiski doing yoga" width={120} height={120} className="ml-2" />
        <h1 className="text-4xl font-bold text-center sm:items-center">
          Hello, Im <span className="gradient-text">Isabelle</span>!
        </h1>
        <p className="text-lg flex items-center mt-3 justify-center h-full text-center sm:w-7/12 w-10/12">
          I am a Computer Engineering student at the University of Waterloo, interested in software development and Mob Psycho.
        </p>
      </div>
    </>
  );
}
