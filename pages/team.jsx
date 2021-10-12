import React from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { getDataFromFolders } from "../src/services/mdx.mjs";
import Footer from "../src/components/sections/Footer";
import Header from "../src/components/sections/Header";
import PrimaryDescription from "../src/components/sections/PrimaryDescription";
import SecondaryDescription from "../src/components/teams/SecondaryDescription";
import TeamList from "../src/components/teams/TeamList";
import Wrapper from "../src/components/wrappers/Wrapper";
import { folderNames } from "../src/constants/folderName.constants";
import Locales from "../src/components/sections/Locales";

export default function Team({ teamList }) {
  return (
    <>
      <NextSeo
        title="Open-Source | ACA Developers"
        canonical="https://developers-aca-am.vercel.app/careers"
        openGraph={{
          url: "https://developers-aca-am.vercel.app/careers",
          title: "Open-Source | ACA Developers",
          images: [
            {
              url: "https://aca.am/static/images/seo/seo-image.png",
              alt: "Open-Source | ACA Developers",
            },
          ],
        }}
        robotsProps={{
          nosnippet: false, // show a text snippet in the search results for page
          notranslate: false, // offer translation of page in search results
          noimageindex: true, // do not index images on this page
          noarchive: false, // show a cached link if the website is slow or not responding
          maxSnippet: -1, // Google will choose the snippet length automatically
        }}
        nofollow={false}
        noindex={false}
        additionalMetaTags={[
          {
            name: "application-name",
            content: "developers.aca.am",
          },
          { property: "dc:creator", content: "ACA Software Engineering Team" },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
        ]}
      />
      <Header />
      <motion.div
        initial={{ x: -60, opacity: 0.3 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "tween", stiffness: 100 },
          default: { duration: 0.6 },
        }}
      >
        <Wrapper>
          <PrimaryDescription
            header="Engineering Team"
            content="Since 2019, ACA has it's engineering team and here is our crew members..."
          />
          <TeamList teamList={teamList} />
          <SecondaryDescription />
          <Footer />
        </Wrapper>
      </motion.div>
    </>
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
