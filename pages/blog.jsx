import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import BlogComponent from '../src/components/blog/BlogComponent';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import Wrapper from '../src/components/wrappers/Wrapper';
import getDocBySlug from '../src/services/getDocBySlug.mjs';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import MarkdownWrapper from '../src/components/wrappers/MarkdownWrapper';

export default function Blog({ content, meta }) {
  const components = {
    Image,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
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

export async function getStaticProps({ locale }) {
  const { content, meta } = getDocBySlug('blog', locale);
  const mdxSource = await serialize(content);
  return {
    props: {
      content: mdxSource,
      meta,
    },
  };
}
