import { Link } from "gatsby";
import * as React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-trueGray-900 pt-10">
      <hr className="border-b border-white border-2 border-opacity-50" />
      <div className="container mx-auto px-8 divide-y text-white py-5">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6">
            <Link
              className="no-underline uppercase hover:no-underline font-bold text-3xl lg:text-4xl"
              to="/"
            >
              Klape
            </Link>
          </div>
          <div className="flex-1">
            <p className="uppercase font-bold text-xl md:mb-6">
              Legal
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/confidentiality-policy"
                  className="underline hover:text-blue-500"
                >
                  {t("Confidentiality policy")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase font-bold text-xl md:mb-6">
              Social
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.facebook.com/klapeful/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-blue-500"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.instagram.com/klapefull/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-blue-500"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase font-bold text-xl md:mb-6">
              Klape
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/"
                  className="underline hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" p-4 text-1xl text-center">
          &copy; 2020 Mangiavacca Antoine
        </div>
      </div>
    </footer>
  );
};

export default Footer;
