import React from 'react';
import Head from 'next/head';
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
      <Head>
        <title>Blog</title>
      </Head>
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
