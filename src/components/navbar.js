import { motion, useCycle } from "framer-motion";
import * as React from "react";
import { useLocation } from "@reach/router";
import { useTranslation } from "gatsby-plugin-react-i18next";
import LanguageSwitch from "./languageSwitch";
import { Link } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

const sideBar = (location, barData, language) => (
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
            <Link
              className={
                "inline-block py-2 px-4 " +
                (location.pathname === data.href || location.pathname === "/" + language + data.href
                  ? "font-bold text-white"
                  : "text-trueGray-200")
              }
              to={data.href}
            >
              {data.name}
            </Link>
          </li>
        );
      })}
      <li><LanguageSwitch /></li>
    </ul>
  </motion.div>
);

const Navbar = () => {
  const { t } = useTranslation();
  const { language } = useI18next()

  const [isOpen, setBarOpen] = useCycle(false, true);
  const location = useLocation();

  const barData = [
    {
      name: t("Home"),
      href: "/",
    },
    {
      name: t("Store"),
      href: "/store/",
    },
    {
      name: t("Benefits"),
      href: "/benefits/",
      subs: [
        {
          name: "Les tirages",
          href: "/benefits/",
        },
        {
          name: "Détails",
          href: "/benefits/",
        },
      ],
    },
    {
      name: t("Exhibitions"),
      href: "/exhibitions/",
    },
    {
      name: t("Biography"),
      href: "/biography/",
    },
    {
      name: t("Articles"),
      href: "/articles/",
    },
    {
      name: t("Tutorials"),
      href: "/tutorials/",
    },
  ];

  return (
    <>
      <nav
        id="header"
        className="absolute w-full z-10 top-0 text-white bg-black bg-opacity-30"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <Link
              className="uppercase text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              to="/"
            >
              <div>Klape</div>
            </Link>
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
                    <Link
                      className={
                        "inline-block py-2 px-4 no-underline lg:text-lg hover:text-trueGray-500 rounded-lg " +
                        (location.pathname === data.href || location.pathname === "/" + language + data.href
                          ? "font-bold text-white"
                          : "text-trueGray-200")
                      }
                      to={data.href}
                    >
                      {data.name}
                    </Link>
                  </li>
                );
              })}
              <li><LanguageSwitch /></li>
            </ul>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        {isOpen ? sideBar(location, barData, language) : ""}
      </nav>
    </>
  );
};
export default Navbar;
