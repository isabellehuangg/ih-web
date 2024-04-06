import DefaultHead from "~/components/head";
import Navbar from "~/components/navbar";
import { homeData } from "~/const/navbar";
import Project from "~/components/project";
import { projects } from "~/const/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <DefaultHead />
      <Navbar navbarData={homeData} />
      <div className="page">
        <h1 className="title2"><span className="gradient-text">Projects</span></h1>
        <Project projectData={projects} />
        <Image src="/smiski_thinking.png" alt="Smiski doing yoga while thinking" width={130} height={120} className="ml-auto" />
      </div>
    </>
  );
}