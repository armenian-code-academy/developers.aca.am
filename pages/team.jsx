import React from 'react';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import TopSection from '../src/components/sections/TopSection';
import BottomSection from '../src/components/teams/BottomSection';
// import TeamList from '../src/components/teams/TeamList';
import Wrapper from '../src/components/wrappers/Wrapper';
import getDocBySlug from '../src/services/getDocBySlug';

export default function Team({ data }) {
  console.log(data);
  return (
    <div>
      <Header />
      <Wrapper>
        <TopSection
          header="Lorem ipsum"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
          aliquid."
        />
        {data.content}
        {/* <TeamList /> */}
        <BottomSection />
        <Footer />
      </Wrapper>
    </div>
  );
}
export async function getStaticProps() {
  const data = getDocBySlug('team');

  return {
    props: { data },
  };
}