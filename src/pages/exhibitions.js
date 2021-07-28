import { graphql } from "gatsby";
import * as React from "react";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";

const GetExposures = (data) => {
  const { language } = useI18next();

  return data.filter((exhibition) => exhibition.node.lang.startsWith(language));
};

const ExhibitionsPage = (props) => {
  const { t } = useTranslation();
  const data = props.data.allPrismicExposition.edges;
  const exhibitions = GetExposures(data);

  return (
    <Layout title={t("Exhibitions")} description={t("Exhibitions")}>
      <div className="p-24 text-white">
        {exhibitions.map((exhibition) => (
          <div key={exhibition.node.id} className="py-10">
            <section
              dangerouslySetInnerHTML={{
                __html: exhibition.node.data.title.html,
              }}
            />
            <img
              className="w-1/3 h-1/3 "
              src={exhibition.node.data.image.fluid.src}
              alt={exhibition.node.data.image.alt}
            />
            <section
              dangerouslySetInnerHTML={{
                __html: exhibition.node.data.description.html,
              }}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ExhibitionsPage;

export const prismicQuery = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
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
          id
        }
      }
    }
  }
`;
