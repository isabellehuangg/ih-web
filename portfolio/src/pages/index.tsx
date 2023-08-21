import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/navbar";
import { homeData } from "~/data/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Isabelle Huang</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/smiski_laptop.png" />
      </Head>
      <Navbar navbarData={ homeData }/>
      <main className="flex min-h-screen flex-col items-center justify-center bg-beige">
      </main>
    </>
  );
}
