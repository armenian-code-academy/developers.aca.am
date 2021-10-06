import React from 'react';
import Footer from '../../src/components/sections/Footer';
import Header from '../../src/components/sections/Header';
import Wrapper from '../../src/components/wrappers/Wrapper';
import Head from 'next/head';
import { getDataFromFolders } from '../../src/services/mdxServices.mjs';
import { getBlogFolderName } from '../../src/constants/folderName.constants';
import BlogList from '../../src/components/blog/BlogList';
import BlogHeader from '../../src/components/blog/BlogHeader';

export default function Blog({ blogList }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <Wrapper>
        <BlogHeader header="Some blog header" />
        <BlogList blogList={blogList} />
        <Footer />
      </Wrapper>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const folderContents = await getDataFromFolders(getBlogFolderName(), locale);

  return {
    props: {
      blogList: folderContents,
    },
  };
}
