import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

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
          <p className="font-bold underline hover:text-blue-500"><Link to="/">Retourner à l'accueil.</Link>.</p>
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;