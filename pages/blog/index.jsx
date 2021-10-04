import React from 'react';
import BlogComponent from '../../src/components/blog/BlogComponent';
import Footer from '../../src/components/sections/Footer';
import Header from '../../src/components/sections/Header';
import Wrapper from '../../src/components/wrappers/Wrapper';
import Head from 'next/head';
import { getDataFromFolders } from '../../src/services/mdxServices.mjs';
import { blogPath } from '../../src/constants/router.constants';

export default function Blog({ blogList }) {
  console.log(blogList);
  return (
    <div>
      <Head>
        <title>Main</title>
      </Head>
      <Header />
      <Wrapper>
        {blogList?.map(({ data, slug }, index) => {
          return <BlogComponent key={index} meta={data} />;
        })}
        <Footer />
      </Wrapper>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const folderContents = await getDataFromFolders(blogPath(), locale);
  return {
    props: {
      blogList: folderContents,
    },
  };
}
