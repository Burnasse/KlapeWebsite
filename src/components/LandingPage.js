import * as React from "react";
import AmPath from "./AmPath";

const LandingPage = ({contentRef}) => {
  return (
    <>
      <div
        className="p-24 bg-hero-img bg-cover text-center bg-center min-h-screen"
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        role="presentation"
      >
        <div className="container px-3 mx-auto flex flex-wrap flex-col">
          <div className="my-4 pt-10 md:w-3/5 block m-auto">
            <AmPath />
          </div>
          <p className="leading-normal text-lg mb-8 text-white">
            Photographe, Opérateur Caméra
          </p>

          <div className="mt-10">
            <button
              onClick={() => {contentRef.current.scrollIntoView({ behavior: "smooth" })}}
              className=" py-3 px-8 bg-black bg-opacity-30 text-white text-opacity-50 border-2 border-opacity-50 hover:border-opacity-100 hover:text-opacity-100 transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
