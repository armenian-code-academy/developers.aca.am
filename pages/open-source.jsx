import React from 'react';
import ProjectHead from '../src/components/project/ProjectHead';
import ProjectList from '../src/components/project/ProjectList';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import Locales from '../src/components/sections/Locales';
import Wrapper from '../src/components/wrappers/Wrapper';
import { folderNames } from '../src/constants/folderName.constants';
import { getDataFromFolders } from '../src/services/mdx.mjs';

export default function OpenSource({ projectList }) {
  return (
    <div>
      <Locales />
      <Header />
      <Wrapper>
        <ProjectHead />
        <ProjectList projectList={projectList} />
        <Footer />
      </Wrapper>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const projectList = await getDataFromFolders(
    folderNames.getProjectFolderName(),
    locale
  );
  return {
    props: {
      projectList,
    },
  };
}
