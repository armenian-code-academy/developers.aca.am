import Head from 'next/head';
import PostHeader from '../src/components/posts/PostHeader';
import PostList from '../src/components/posts/PostList';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import Wrapper from '../src/components/wrappers/Wrapper';
import Locales from '../src/components/sections/Locales';
import PrimaryDescription from '../src/components/sections/PrimaryDescription';


export default function Careers() {
  return (
    <div>
      <Head>
        <title>ACA Careers</title>
      </Head>
      <Locales />
      <Header />
      <Wrapper>
        <PrimaryDescription
          header="Lorem ipsum"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
                  aliquid."
        />
        <PostHeader />
        <PostList />
        <Footer />
      </Wrapper>
    </div>
  );
}
