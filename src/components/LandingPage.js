import * as React from "react";
import AmPath from "./AmPath";
import { useTranslation } from "react-i18next";

const LandingPage = ({contentRef}) => {
  const { t } = useTranslation()
  
  return (
    <>
      <div
        className="p-5 pt-24 sm:p-24 bg-hero-img bg-cover text-center bg-center min-h-screen"
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        role="presentation"
      >
        <div className="w-full px-3 flex flex-col">
          <div className="my-4 pt-10 w-full lg:w-3/5 m-auto">
            <AmPath />
          </div>
          <h1 className="leading-normal text-lg mb-8 text-white">
            {t("Photographer, Camera Operator")}
          </h1>

          <div className="mt-10">
            <button
              onClick={() => {contentRef.current.scrollIntoView({ behavior: "smooth" })}}
              className=" py-3 px-8 bg-black bg-opacity-30 text-white text-opacity-50 border-2 border-opacity-50 hover:border-opacity-100 hover:text-opacity-100 transition duration-300"
            >
              {t("Discover")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
