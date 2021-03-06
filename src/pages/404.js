import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const NotFoundPage = () => {
  return (
    <Layout title="Introuvable" description="Page introuvable">
      <div className="p-24 text-white text-center">
        <h1 className="text-5xl my-10">Page introuvable</h1>
        <p className="text-xl">
          Désolé
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>
          Nous n'avons pas pu trouver ce que vous cherchiez.
        </p>
        <p className="font-bold underline hover:text-blue-500">
          <Link to="/">Retourner à l'accueil.</Link>.
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const translationQuery = graphql`
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
  }
`;
