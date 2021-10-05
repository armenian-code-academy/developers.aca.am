import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import BlogComponent from '../src/components/blog/BlogComponent';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import Wrapper from '../src/components/wrappers/Wrapper';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import MarkdownWrapper from '../src/components/wrappers/MarkdownWrapper';
import { getDataFromFolders } from '../src/services/getDataFromFolders.mjs';

export default function Blog() {
  const components = {
    Image,
  };

  return (
    <div>
      <Head>
        <title>Blog page</title>
      </Head>
      <Header />
      <Wrapper>
        <BlogComponent />
        <MarkdownWrapper>
          <MDXRemote components={components} {...content} />
        </MarkdownWrapper>
        <Footer />
      </Wrapper>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: '' }, // See the "paths" section below
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      content: mdxSource,
      meta,               
    },
  };
}
