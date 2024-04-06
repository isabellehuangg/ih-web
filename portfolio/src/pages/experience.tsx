import Navbar from "~/components/navbar";
import { homeData } from "~/const/navbar";
import DefaultHead from "~/components/head";
import Experience from "~/components/experience";
import { experience } from "~/const/experience";
import Image from "next/image";
import Link from "next/link";

export default function Experiences() {
    return (
      <>
        <DefaultHead />
        <Navbar navbarData={homeData} />
        <div className="page">
        <h1 className="title2">
            <span className="gradient-text">Experience</span>
        </h1>
          <Experience experienceData={ experience } />
          <Link href="https://drive.google.com/file/d/198ogzwicd2RFPAwLdy9LgcWGABg1euNp/view?usp=sharing" className="resume-button">View Resume</Link>
          <Image src="/smiski_shoulderstand.png" alt="Smiski doing yoga while thinking" width={130} height={120} className="ml-auto" />
        </div>
      </>
    );
}