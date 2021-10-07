import React from 'react';
import Head from 'next/head';
import { getDataFromFolders } from '../src/services/mdx.mjs';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/Header';
import TopSection from '../src/components/sections/TopSection';
import BottomSection from '../src/components/teams/BottomSection';
import TeamList from '../src/components/teams/TeamList';
import Wrapper from '../src/components/wrappers/Wrapper';
import { folderNames } from '../src/constants/folderName.constants';
import Locales from '../src/components/sections/Locales';

export default function Team({ teamList }) {
  return (
    <div>
      <Head>
        <title>ACA Teams</title>
      </Head>
      <Locales />
      <Header />
      <Wrapper>
        <TopSection header="Team header" content="some description" />
        <TeamList teamList={teamList} />
        <BottomSection />
        <Footer />
      </Wrapper>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const teamList = await getDataFromFolders(
    folderNames.getTeamFolderName(),
    locale
  );

  return {
    props: {
      teamList,
    },
  };
}