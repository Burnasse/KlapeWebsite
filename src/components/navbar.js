import { motion, useCycle } from "framer-motion";
import * as React from "react";
import { useLocation } from '@reach/router';

const barData = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "Galerie boutique",
    href: "/store/",
  },
  {
    name: "Prestations",
    href: "/benefits/",
  },
  {
    name: "Expositions",
    href: "/exposure/",
  },
  {
    name: "Biographie",
    href: "/biography/",
  },
  {
    name: "Articles",
    href: "/articles/",
  },
  {
    name: "Tutoriels",
    href: "/tutorials/",
  },
];

const sideBar = (location) => (
  <motion.div
    className="lg:hidden absolute inline-block z-50 m-2 px-1 py-1 inset-0 bg-black bg-opacity-80 rounded-md top-10"
    animate={{ scaleY: [0, 1] }}
    transition={{
      duration: 2,
      times: [0, 0.1],
    }}
  >
    <ul className="bg-black bg-opacity-80">
      {barData.map((data) => {
        return (
          <li key={data.name + "side"}>
            <a className={"inline-block py-2 px-4 " + (location.pathname === (data.href) ? "font-bold text-white" : "text-trueGray-200")} href={data.href}>
              {data.name}
            </a>
          </li>
        );
      })}
    </ul>
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setBarOpen] = useCycle(false, true);
  const location = useLocation()

  return (
    <div>
      <nav
        id="header"
        className="absolute w-full z-10 top-0 text-white bg-trueGray-900 bg-opacity-50"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a
              className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="/"
            >
              <div>Klape</div>
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              onClick={() => setBarOpen()}
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-center flex-1 items-center">
              {barData.map((data) => {
                return (
                  <li key={data.name} className="mr-3">
                    <a
                      className={"inline-block py-2 px-4 no-underline lg:text-lg hover:text-trueGray-500 rounded-lg " + (location.pathname === data.href ? "font-bold text-white" : "text-trueGray-200")}
                      href={data.href}
                    >
                      {data.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        {isOpen ? sideBar(location) : ""}
      </nav>
    </div>
  );
};
export default Navbar;
