import React from 'react';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import Wrapper from '../src/components/wrappers/Wrapper';

export default function Blog() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Footer />
      </Wrapper>
    </div>
  );
}
