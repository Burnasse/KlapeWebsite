import * as React from "react";
import Layout from "../components/Layout";
import Biography from "../components/biography";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";

const BiographyPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t("Biography")} description={t("Antoine Mangiavacca biography")}>
      <div className="p-10">
        <Biography />
      </div>
    </Layout>
  );
};

export default BiographyPage;

export const translationQuery = graphql`
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
  }
`;
