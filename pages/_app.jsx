import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log(
      '%c {code} Software Creative Team',
      'color: #fff; font-size: 48px; '
    );
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
