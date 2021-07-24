import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/footer";

const StorePage = (props) => {
  const images = props.data.allMongodbMyFirstDatabaseImages.edges;
  const params = new URLSearchParams(props.location.search);

  return (
    <main>
      <title>Store</title>
      <Navbar />
      <>
        <div className="bg-gradient-to-b from-trueGray-900 to-black px-3 mx-auto flex flex-wrap flex-col text-center p-24 text-white">
          <h1 className="text-5xl font-bold leading-tight font-sans">
            Informations Tarifaires <span className="text-2xl">(plus de détails)</span> 
          </h1>
          <p className="leading-normal text-lg my-6">
            La majorité de mes images sont disponibles aux formats 45x30, 60x40,
            70x50 et 90x60, voici les prix pour ces dimensions là (hors frais de
            port) :
          </p>
          <div className="grid grid-cols-3 gap-3 divide-y-2 divide-white divide-opacity-20 lg:px-64 xl:px-80">
            <div/> <div className="font-bold italic border-none text-lg">Tirage Fine art, finition mat*</div> <div className="font-bold italic border-none text-lg">Contrecollage sur support rigide</div>
            <div className="font-bold text-lg">45x30cm</div> <div>75€</div> <div>145€</div>
            <div className="font-bold text-lg">60x40cm</div> <div>90€</div> <div>175€</div>
            <div className="font-bold text-lg">70x50cm</div> <div>125€</div> <div>200€</div>
            <div className="font-bold text-lg">90x60cm</div> <div>140€</div> <div>250€</div>
          </div>
        </div>

        <Gallery classname="bg-black" images={images} initialValue={params.get("value")} />
      </>
      <Footer />
    </main>
  );
};

export default StorePage;

export const imagesQuery = graphql`
  query {
    allMongodbMyFirstDatabaseImages {
      edges {
        node {
          name
          refId
          source
        }
      }
    }
  }
`;
