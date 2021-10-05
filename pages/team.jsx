import React from 'react';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import TopSection from '../src/components/sections/TopSection';
import BottomSection from '../src/components/teams/BottomSection';
import TeamList from '../src/components/teams/TeamList';
import Wrapper from '../src/components/wrappers/Wrapper';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Head from 'next/head';

export default function Team({ meta, content }) {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header />
      <Wrapper>
        <TopSection header={meta.header} content={meta.description} />
        <MDXRemote {...content} />
        <TeamList />
        <BottomSection />
        <Footer />
      </Wrapper>
    </div>
  );
}
export async function getStaticProps() {
  const { meta, content, slug } = getDocBySlug('team');

  const mdxSource = await serialize(content);
  console.log(mdxSource);
  console.log(meta);
  return { props: { meta, content: mdxSource } };
}