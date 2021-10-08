import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('%c {code} Software Team', 'color: #fff; font-size: 48px; ');
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
