import React from 'react';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import TopSection from '../src/components/sections/TopSection';
import BottomSection from '../src/components/teams/BottomSection';
import TeamList from '../src/components/teams/TeamList';
import Wrapper from '../src/components/wrappers/Wrapper';

export default function Team() {
  return (
    <div>
      <Header />
      <Wrapper>
        <TopSection
          header="Lorem ipsum"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
          aliquid."
        />
        <TeamList />
        <BottomSection />
        <Footer />
      </Wrapper>
    </div>
  );
}
