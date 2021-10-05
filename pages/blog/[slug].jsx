import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';
import { getDocBySlug } from '../../src/services/mdxServices.mjs';
import { getDataFromFolders } from '../../src/services/mdxServices.mjs';
import Image from 'next/image';
import MarkDownWrapper from '../../src/components/wrappers/MarkdownWrapper';
import { MDXRemote } from 'next-mdx-remote';

export default function BlogPost({ meta, content }) {
  return (
    <div>
      <div>
        <h2>{meta.title}</h2>
        <p>{meta.description}</p>
      </div>
      <div className="w-28 h-24">
        <Image
          src={require(`/public/${meta.image}`)}
          alt={meta.description}
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div>
        <MarkDownWrapper>
          <MDXRemote {...content} />
        </MarkDownWrapper>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getDataFromFolders('blog').map(({ slug }) => {
    return { params: { slug: slug.replace(/\.en/, '') } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params;

  const { meta, content } = getDocBySlug('blog', slug, locale);
  const mdxContent = await serialize(content);
  return {
    props: { meta, content: mdxContent },
  };
}
