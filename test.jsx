import { MDXRemote } from 'next-mdx-remote';
import getDocBySlug from '../src/services/getDocBySlug.mjs';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';

export default function Blog({ content, meta }) {
  const components = {
    Image,
  };

  return (
    <div>
      <MDXRemote components={components} {...content} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const { content, meta } = getDocBySlug('blog', locale);
  const mdxSource = await serialize(content);
  return {
    props: {
      content: mdxSource,
      meta,
    },
  };
}
