import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  <Head>
    <title>PortFox - News Portal</title>
    <link rel="icon" href="/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap"
      rel="stylesheet"
    />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;