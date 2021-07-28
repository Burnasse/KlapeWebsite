import * as React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { Link } from "gatsby";
import { isMobile } from "react-device-detect";

const svgData = {
  corse: {
    className: "w-48 h-40  lg:w-72 lg:h-80",
    viewBox: "0 0 500 900",
  },
  reunion: {
    className: "w-48 h-40  lg:w-96 lg:h-80",
    viewBox: "0 0 850 900",
  },
  astro: {
    className: "w-48 h-40  lg:w-96 lg:h-80",
    viewBox: "0 0 660 740",
  },
  paca: {
    className: "w-48 h-40  lg:w-96 lg:h-80",
    viewBox: "0 0 435 465",
  },
  architect: {
    className: "w-48 h-40  lg:w-96 lg:h-80",
    viewBox: "0 0 515 405",
  },
};

const svgAnim = (path, svgRef, duration) => {
  return isMobile ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={svgData[svgRef].viewBox}
      className={svgData[svgRef].className}
    >
      <path
        d={path}
        fill="transparent"
        strokeWidth="5"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <InView threshold={0.75} triggerOnce>
      {({ ref, inView }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={svgData[svgRef].viewBox}
          className={svgData[svgRef].className}
        >
          <motion.path
            ref={ref}
            d={path}
            fill="transparent"
            strokeWidth="5"
            stroke="white"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={duration ? { duration: duration } : { duration: 2 }}
          />
        </svg>
      )}
    </InView>
  );
};

const CardSection = ({ title, path, img, svgRef, right, duration }) => {
  const svg = path ? svgAnim(path, svgRef, duration) : "";

  const buttonComp = (right) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-24 w-24 opacity-90"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        stroke="white"
        d={right ? "M7 16l-4-4m0 0l4-4m-4 4h18" : "M17 8l4 4m0 0l-4 4m4-4H3"}
      />
    </svg>
  );

  const content = right ? (
    <>
      <Link
        to={"/store?value=" + svgRef}
        className="px-10 w-full h-full flex flex-row items-center justify-center md:justify-start hover:bg-black hover:bg-opacity-10"
      >
        {buttonComp(right)}
      </Link>
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-end">
        <div className="text-4xl lg:text-5xl xl:text-7xl leading-tight text-white">
          {title}
        </div>
      </div>
      <div className="justify-center items-start text-left p-4">
        <div className="my-4">{svg}</div>
      </div>
    </>
  ) : (
    <>
      <div className="justify-center items-start text-left p-4">
        <div className="my-4">{svg}</div>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row items-center ">
        <div className="text-4xl lg:text-5xl xl:text-7xl leading-tight text-white ">
          {title}
        </div>
      </div>
      <Link
        to={"/store?value=" + svgRef}
        className="px-10 w-full h-full flex flex-row items-center justify-center md:justify-end hover:bg-black hover:bg-opacity-10"
      >
        {buttonComp()}
      </Link>
    </>
  );

  return (
    <div
      role="presentation"
      onDragStart={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
      className={
        "w-full mx-auto flex flex-col md:flex-row items-center bg-cover bg-center " +
        img
      }
    >
      {content}
    </div>
  );
};

export default CardSection;
