import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';
import { getDocBySlug } from '../../src/services/mdxServices.mjs';
import { getDataFromFolders } from '../../src/services/mdxServices.mjs';
import Image from 'next/image';
import MarkDownWrapper from '../../src/components/wrappers/MarkdownWrapper';
import { MDXRemote } from 'next-mdx-remote';
import Header from '../../src/components/sections/Header';
import { blogFolder } from '../../src/constants/folderName.constants';
import Wrapper from '../../src/components/wrappers/Wrapper';
import Footer from '../../src/components/sections/Footer';

export default function BlogPost({ meta, content }) {
  return (
    <>
      <div>
        <Header />
        <Wrapper>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full">
              <div>
                <h2>{meta.title}</h2>
                <p>{meta.description}</p>
              </div>
              <div className=" h-96 relative">
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
          </div>
        </Wrapper>
      </div>
      <Footer />
    </>
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
  console.log(locale, 'locale');
  const { meta, content } = getDocBySlug(blogFolder(), slug, locale);
  const mdxContent = await serialize(content);
  return {
    props: { meta, content: mdxContent },
  };
}
