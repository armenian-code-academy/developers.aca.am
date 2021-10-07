import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';
import { getDocBySlug } from '../../src/services/mdx.mjs';
import { getDataFromFolders } from '../../src/services/mdx.mjs';
import Image from 'next/image';
import MarkDownWrapper from '../../src/components/wrappers/MarkdownWrapper';
import { MDXRemote } from 'next-mdx-remote';
import Header from '../../src/components/sections/Header';
import Wrapper from '../../src/components/wrappers/Wrapper';
import Footer from '../../src/components/sections/Footer';
import { folderNames } from '../../src/constants/folderName.constants';

export default function BlogPost({ meta, content }) {
  return (
    <>
      <div>
        <Header />
        <Wrapper>
          <div className="border-b-2 border-gray-200 w-full flex flex-col items-center justify-center mt-5 pb-5">
            <main>
              <div>
                <div className="w-full flex flex-col items-center justify-center my-3">
                  <h2 className="mb-2 text-2xl">{meta.title}</h2>
                  <p>{meta.description}</p>
                </div>
                <div>
                  <Image
                    src={require(`/public/${meta.image}`)}
                    alt={meta.description}
                    objectFit="cover"
                    width={600}
                    height={600}
                  />
                </div>
                <div></div>
              </div>
            </main>
          </div>
          <MarkDownWrapper>
            <MDXRemote {...content} />
          </MarkDownWrapper>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const pathsEn = await getDataFromFolders(folderNames.getBlogFolderName()).map(
    ({ slug }) => {
      return { params: { slug: slug.replace(/\.en/, '') }, locale: 'en' };
    }
  );
  const pathsAm = await getDataFromFolders(folderNames.getBlogFolderName()).map(
    ({ slug }) => {
      return { params: { slug: slug.replace(/\.en/, '') }, locale: 'am' };
    }
  );

  return {
    paths: [...pathsEn, ...pathsAm],
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params;

  const { meta, content } = getDocBySlug(
    folderNames.getBlogFolderName(),
    slug,
    locale
  );
  const mdxContent = await serialize(content);
  return {
    props: { meta, content: mdxContent },
  };
}
