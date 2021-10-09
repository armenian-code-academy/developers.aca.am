import React from 'react';
import { NextSeo } from 'next-seo';
import { getDataFromFolders } from '../src/services/mdx.mjs';
import ProjectHead from '../src/components/project/ProjectHead';
import ProjectList from '../src/components/project/ProjectList';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import Locales from '../src/components/sections/Locales';
import Wrapper from '../src/components/wrappers/Wrapper';
import { folderNames } from '../src/constants/folderName.constants';

export default function OpenSource({ projectList }) {
  return (
    <div>
      <NextSeo
        title="Open-Source | ACA Developers"
        canonical="https://developers-aca-am.vercel.app/careers"
        openGraph={{
          url: 'https://developers-aca-am.vercel.app/careers',
          title: 'Open-Source | ACA Developers',
          images: [
            {
              url: 'https://aca.am/static/images/seo/seo-image.png',
              alt: 'Open-Source | ACA Developers',
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
        <ProjectHead />
        <ProjectList projectList={projectList} />
        <Footer />
      </Wrapper>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const projectList = await getDataFromFolders(
    folderNames.getProjectFolderName(),
    locale
  );

  return {
    props: {
      projectList,
    },
  };
}
