import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import {useTranslation} from 'gatsby-plugin-react-i18next';

const StorePage = (props) => {
  const { t } = useTranslation();

  const images = props.data.allMongodbMyFirstDatabaseImages.edges;
  const params = new URLSearchParams(props.location.search);

  return (
    <Layout title={t("Store")} descrption={t("Antoine Mangiavacca store")}>
      <div className="bg-gradient-to-b from-trueGray-900 to-black px-3 mx-auto flex flex-wrap flex-col text-center p-24 text-white">
        <h1 className="text-5xl font-bold leading-tight font-sans">
          {t("Pricing information")}
        </h1>
        <p className="leading-normal text-lg my-6">
          {t("PricingDesc")}
        </p>
        <div className="grid grid-cols-3 gap-3 divide-y-2 divide-white divide-opacity-20 lg:px-64 xl:px-80">
          <div />
          <div className="font-bold italic border-none text-lg">
          {t("Fine art")}
          </div>
          <div className="font-bold italic border-none text-lg">
          {t("Lamination")}
          </div>
          <div className="font-bold text-lg">45x30cm</div> <div>75€</div>
          <div>145€</div>
          <div className="font-bold text-lg">60x40cm</div> <div>90€</div>
          <div>175€</div>
          <div className="font-bold text-lg">70x50cm</div> <div>125€</div>
          <div>200€</div>
          <div className="font-bold text-lg">90x60cm</div> <div>140€</div>
          <div>250€</div>
        </div>
        <div className="flex flex-row">
          <div className="text-white text-xl mt-3 w-1/2">
            {t("More details")}
            <a
              href="/benefits"
              className="font-bold underline hover:text-blue-500"
            >
              {t("here")}
            </a>
          </div>
          <div className="text-white font-bold mt-3 w-1/2">
            {t("Frame not included")}
          </div>
        </div>
      </div>

      <Gallery images={images} initialValue={params.get("value")} />
    </Layout>
  );
};

export default StorePage;

export const imagesQuery = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMongodbMyFirstDatabaseImages {
      edges {
        node {
          featuredImg {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP], quality: 35)
            }
          }
          name
          refId
        }
      }
    }
  }
`;