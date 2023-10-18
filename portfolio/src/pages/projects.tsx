import Head from "next/head";
import Navbar from "~/components/navbar";
import { homeData } from "~/const/project";
import Project from "~/components/project";
import { projects } from "~/const/constants";
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
      <div className="flex flex-col bg-beige justify-center items-center min-h-screeen">
        <h1 className="text-4xl font-bold mt-8 mb-6"><span className="gradient-text">Projects</span></h1>
        <Project projectData={projects} />
        <Image src="/smiski_thinking.png" alt="Smiski doing yoga while thinking" width={130} height={120} className="ml-auto" />
      </div>
    </>
  );
}