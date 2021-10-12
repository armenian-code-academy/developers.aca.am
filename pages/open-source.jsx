import React from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { getDataFromFolders } from "../src/services/mdx.mjs";
import ProjectHead from "../src/components/project/ProjectHead";
import ProjectList from "../src/components/project/ProjectList";
import Footer from "../src/components/sections/Footer";
import Header from "../src/components/sections/Header";
import Locales from "../src/components/sections/Locales";
import Wrapper from "../src/components/wrappers/Wrapper";
import { folderNames } from "../src/constants/folderName.constants";

export default function OpenSource({ projectList }) {
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
          nosnippet: false,
          notranslate: false,
          noimageindex: true,
          noarchive: false,
          maxSnippet: -1,
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
        initial={{ y: -60, opacity: 0.3 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "tween", stiffness: 100 },
          default: { duration: 0.6 },
        }}
      >
        <Wrapper>
          <ProjectHead />
          <ProjectList projectList={projectList} />
          <Footer />
        </Wrapper>
      </motion.div>
    </>
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
