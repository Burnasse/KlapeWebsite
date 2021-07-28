import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";

const NotFoundPage = () => {
  return (
    <Layout title="Not found" description="Page not found">
      <div className="p-24 text-white text-center">
        <h1 className="text-5xl my-10">Page not found</h1>
        <p className="text-xl">
          Sorry 
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>
          we couldn’t find what you were looking for.
          <p className="font-bold underline hover:text-blue-500"><Link to="/">Go home</Link>.</p>
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
