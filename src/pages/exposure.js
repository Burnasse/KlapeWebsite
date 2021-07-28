import { graphql } from "gatsby";
import * as React from "react";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";

const GetExposures = (data) => {
  const { language } = useI18next();
  console.log(data);

  return data.filter((exposure) => exposure.node.lang.startsWith(language));
};

const ExposurePage = (props) => {
  const { t } = useTranslation();
  const data = props.data.allPrismicExposition.edges;
  const exposures = GetExposures(data);

  return (
    <Layout title={t("Exposure")} description="">
      <div className="p-24 text-white">
        {exposures.map((exposure) => (
          <div className="py-10">
            <section dangerouslySetInnerHTML={{ __html: exposure.node.data.title.html}} />
            <img className="w-1/3 h-1/3 " src={exposure.node.data.image.fluid.src} alt={exposure.node.data.image.alt}/>
            <section dangerouslySetInnerHTML={{ __html: exposure.node.data.description.html}} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ExposurePage;

export const prismicQuery = graphql`
  query PrismicQuery {
    allPrismicExposition {
      edges {
        node {
          data {
            description {
              html
            }
            image {
              fluid {
                src
              }
            }
            title {
              html
            }
          }
          lang
        }
      }
    }
  }
`;
