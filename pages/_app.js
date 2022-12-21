import Head from 'next/head';
import "../sections/Work/Work.scss"
import '../styles/globals.css';


const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Spotmies</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
          name="description"
          content="We Help Startups Launch Their Products In The New Era Of The
          Internet"
        />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
