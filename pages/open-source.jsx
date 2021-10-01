import React from 'react';
import ProjectHead from '../src/components/project/ProjectHead';
import ProjectList from '../src/components/project/ProjectList';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import Wrapper from '../src/components/wrappers/Wrapper';

export default function openSource() {
  return (
    <div>
      <Header />
      <Wrapper>
        <ProjectHead />
        <ProjectList />
        <Footer />
      </Wrapper>
    </div>
  );
}
