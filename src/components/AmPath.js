import * as React from "react";
import { motion } from "framer-motion";
import path from "../assets/svgPaths/amPath";

const transition = { duration: 10 };

const AmPath = () => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 750 100"
        className="w-full h-full"
      >
        <motion.path
          d={path}
          fill="white"
          fillOpacity="0"
          strokeWidth="2"
          stroke="white"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, fillOpacity: 1 }}
          transition={transition}
        />
      </svg>
  );
};

export default AmPath;
