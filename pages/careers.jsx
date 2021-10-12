import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { getDataFromFolders } from "../src/services/mdx.mjs";
import { folderNames } from "../src/constants/folderName.constants";
import Footer from "../src/components/sections/Footer";
import Header from "../src/components/sections/Header";
import Wrapper from "../src/components/wrappers/Wrapper";
import Locales from "../src/components/sections/Locales";
import ProjectHead from "../src/components/project/ProjectHead";
import ProjectList from "../src/components/project/ProjectList";

export default function Careers({ careersList }) {
  return (
    <>
      <NextSeo
        title="Careers | ACA Developers"
        canonical="https://developers-aca-am.vercel.app/careers"
        openGraph={{
          url: "https://developers-aca-am.vercel.app/careers",
          title: "Careers | ACA Developers",
          images: [
            {
              url: "https://aca.am/static/images/seo/seo-image.png",
              alt: "Careers | ACA Developers",
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
          <ProjectList projectList={careersList} />
          <Footer />
        </Wrapper>
      </motion.div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const careersList = await getDataFromFolders(
    folderNames.getCareersFolderName(),
    locale
  );

  return {
    props: {
      careersList,
    },
  };
}
