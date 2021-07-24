import * as React from "react";

const Footer = () => {
  return (
    <footer className="bg-trueGray-900">
      <div className="container mx-auto px-8 divide-y">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <a
              className="text-white no-underline hover:no-underline font-bold text-3xl lg:text-4xl"
              href="/"
            >
              Klape
            </a>
          </div>
          <div className="flex-1">
            <p className="uppercase text-white font-bold text-xl md:mb-6">
              Legal
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/"
                  className="no-underline hover:underline text-white hover:text-gray-500"
                >
                  Politque de confidentialité
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-white font-bold text-xl md:mb-6">
              Social
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.facebook.com/klapeful/"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline hover:underline text-white hover:text-gray-500"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.instagram.com/klapefull/"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline hover:underline text-white hover:text-gray-500"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-white font-bold text-xl md:mb-6">
              Klape
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/"
                  className="no-underline hover:underline text-white hover:text-gray-500"
                >
                  À propos
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/"
                  className="no-underline hover:underline text-white hover:text-gray-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white p-4 text-1xl text-center">
          &copy; 2020 Mangiavacca Antoine{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
