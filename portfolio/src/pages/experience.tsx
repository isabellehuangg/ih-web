import Navbar from "~/components/navbar";
import { homeData } from "~/data/project";
import Head from "next/head";
import Experience from "~/components/experience";
import { experience } from "~/data/experience";
import Image from "next/image";
import Link from "next/link";

export default function Experiences() {
    return (
        <>
        <Head>
          <title>Isabelle Huang</title>
          <meta name="description" content="Personal Portfolio" />
          <link rel="icon" href="/smiski_laptop.png" />
        </Head>
        <Navbar navbarData={homeData} />
        <div className="flex min-h-screeen flex-col bg-beige justify-center items-center text-green">
        <h1 className="text-4xl font-bold mt-8 mb-6"><span className="gradient-text">Experience</span></h1>
          <Experience experienceData={ experience } />
          <Link href="https://drive.google.com/file/d/1jch15nYlFBtXs3l4K4NwnZkwyv6HgHb9/view?usp=sharing" className="text-center text-beige p-2 sm:w-7/12 w-10/12 mb-4 gradient-button hover:bg-beige font-semibold border-0.5 border-beige rounded">View Resume</Link>
          <Image src="/smiski_shoulderstand.png" alt="Smiski doing yoga while thinking" width={130} height={120} className="ml-auto" />
        </div>
      </>
    );
}