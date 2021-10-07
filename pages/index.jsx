import TopSection from '../src/components/sections/PrimaryDescription';
import PostHeader from '../src/components/posts/PostHeader';
import PostList from '../src/components/posts/PostList';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import Wrapper from '../src/components/wrappers/Wrapper';
import Head from 'next/head';
import Locales from '../src/components/sections/Locales';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ACA Products</title>
      </Head>
      <Locales />
      <Header />
      <Wrapper>
        <TopSection
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
