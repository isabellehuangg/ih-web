import Head from "next/head";

export default function DefaultHead() {
  return (
    // This is at the top of every page
    <Head>
      <title>Isabelle Huang</title>
      <meta name="description" content="Personal Portfolio" />
      <link rel="icon" href="/smiski_laptop.png" />
    </Head>
  );
}