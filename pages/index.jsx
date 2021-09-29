import TopSection from '../src/components/home/TopSection';
import PostHeader from '../src/components/posts/PostHeader';
import PostList from '../src/components/posts/PostList';
import Header from '../src/components/sections/Header';
import Wrapper from '../src/components/wrappers/Wrapper';

export default function Home() {
  return (
    <div>
      <Header />
      <Wrapper>
        <TopSection />
        <PostHeader />
        <PostList />
      </Wrapper>
    </div>
  );
}
