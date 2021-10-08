const title = 'ACA Software Engineering Team';
const description =
  'Through immersive classes, ACA teaches you the skills you need in your future career as a successful and competitive professional.';

const SEO = {
  title,
  description,
  canonical: 'https://developers-aca-am.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://developers-aca-am.vercel.app/',
    title,
    description,
    images: [
      {
        url: 'https://aca.am/static/images/seo/seo-image.png',
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: '@vre2h',
    site: '@vre2h',
    cardType: 'summary_large_image',
    title,
    ImageData: {
      url: 'https://aca.am/static/images/seo/seo-image.png',
      alt: title,
      width: 1200,
      height: 630,
    },
  },
};

export default SEO;
