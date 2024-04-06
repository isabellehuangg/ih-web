import DefaultHead from "~/components/head";
import Navbar from "~/components/navbar";
import { homeData } from "~/const/navbar";
import Image from "next/image";

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
              I am a Computer Engineering student at the University of Waterloo, interested in software development and Mob Psycho.
          </div>
        </div>
    </>
  );
}
