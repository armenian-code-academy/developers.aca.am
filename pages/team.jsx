import React from 'react';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import TopSection from '../src/components/sections/TopSection';
import BottomSection from '../src/components/teams/BottomSection';
import TeamList from '../src/components/teams/TeamList';
import Wrapper from '../src/components/wrappers/Wrapper';
import getDocBySlug from '../src/services/getDocBySlug.js';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

export default function Team({ source, frontMatter }) {
  return (
    <div>
      <Header />
      <Wrapper>
        <TopSection
          header="Lorem ipsum"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
          aliquid."
        />
        {/* <MDXRemote {...source} /> */}
        <TeamList />
        <BottomSection />
        <Footer />
      </Wrapper>
    </div>
  );
}
export async function getStaticProps() {
  const { meta, content, slug } = getDocBySlug('team');
  // console.log(content);
  const mdxSource = await serialize(content);

  // return { props: { meta, content } };
  return { props: { source: mdxSource, frontMatter: meta } };
}