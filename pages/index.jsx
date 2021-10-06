import TopSection from '../src/components/sections/TopSection';
import PostHeader from '../src/components/posts/PostHeader';
import PostList from '../src/components/posts/PostList';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import Wrapper from '../src/components/wrappers/Wrapper';
import Head from 'next/head';
export default function Home() {
  return (
    <div>
      <Head>
        <title>ACA Developers</title>
      </Head>
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
