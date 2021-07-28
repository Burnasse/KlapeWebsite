import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

const Biography = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full mx-auto flex flex-col md:flex-row items-center">
        <StaticImage
          className="w-3/4 md:w-full md:mx-3"
          src="../assets/images/bioImg.webp"
          alt="Bio"
          onDragStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className="text-white">
        <h1 className="my-4 pt-10 md:w-3/5 block m-auto text-6xl text-white text-center font-bold">
        {t("Biography")}
      </h1>
          <p className="text-xl py-5 px-3">
            {t("BiographyDesc1")}
          </p>
          <p className="text-xl py-5 px-3">
            {t("BiographyDesc2")}
          </p>
          <p className="text-xl py-5 px-3">
            {t("BiographyDesc3")}
            <a className="font-bold underline hover:text-blue-500" href="/store">
              {t("My dedicated page")}
            </a>
            .
          </p>
          <div className="text-center mt-5">
            <h2 className="font-bold text-3xl">{t("Contact me")}</h2>
            <a href="mailto:Klape@hotmail.fr" className="font-bold underline hover:text-blue-500">Klape@hotmail.fr</a> 
          </div>

          <form method="post" action="#" className="grid grid-cols-2 grid-rows-2 gap-2 m-4">
            <input
              type="text"
              placeholder={t("Name") + "*"}
              required={true}
              className="bg-trueGray-900 border-2 text-white py-1 px-5 rounded-md my-3"
            />
            <textarea
              rows="2"
              placeholder={t("Message")}
              className="bg-trueGray-900 border-2 text-white py-1 px-5 rounded-md"
            />
            <input
              type="email"
              placeholder={t("Email") + "*"}
              required={true}
              className="bg-trueGray-900 border-2 text-white py-1 px-5 rounded-md my-3"
            />
            <input
              type="submit"
              value={t("Send")}
              className="bg-white bg-opacity-10 border-2 text-white py-1 px-5 rounded-md m-3 hover:bg-opacity-20"
            />
          </form>
        </div>
      </div>      ​
    </>
  );
};

export default Biography;
