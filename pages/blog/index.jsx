import React from 'react';
import { NextSeo } from 'next-seo';
import { folderNames } from '../../src/constants/folderName.constants';
import { getDataFromFolders } from '../../src/services/mdx.mjs';
import Footer from '../../src/components/sections/Footer';
import Header from '../../src/components/sections/Header';
import Wrapper from '../../src/components/wrappers/Wrapper';
import BlogList from '../../src/components/blog/BlogList';
import BlogHeader from '../../src/components/blog/BlogHeader';
import Locales from '../../src/components/sections/Locales';

export default function Blog({ blogList }) {
  return (
    <div>
      <NextSeo
        title="Blog | ACA Developers"
        canonical="https://developers-aca-am.vercel.app/careers"
        openGraph={{
          url: 'https://developers-aca-am.vercel.app/careers',
          title: 'Blog | ACA Developers',
          images: [
            {
              url: 'https://aca.am/static/images/seo/seo-image.png',
              alt: 'Blog | ACA Developers',
            },
          ],
        }}
        robotsProps={{
          nosnippet: false, // show a text snippet in the search results for page
          notranslate: false, // offer translation of page in search results
          noimageindex: true, // do not index images on this page
          noarchive: false, // show a cached link if the website is slow or not responding
          maxSnippet: -1, // Google will choose the snippet length automatically
        }}
        nofollow={false}
        noindex={false}
        additionalMetaTags={[
          {
            name: 'application-name',
            content: 'developers.aca.am',
          },
          { property: 'dc:creator', content: 'ACA Software Engineering Team' },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1',
          },
        ]}
      />
      <Locales />
      <Header />
      <Wrapper>
        <BlogHeader header="Articles from Software Engineering Team" />
        <BlogList blogList={blogList} />
        <Footer />
      </Wrapper>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const folderContents = await getDataFromFolders(
    folderNames.getBlogFolderName(),
    locale
  );

  return {
    props: {
      blogList: folderContents,
    },
  };
}
