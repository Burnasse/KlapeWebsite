import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Biography = () => {
  return (
    <div>

      <div className="w-full mx-auto flex flex-col md:flex-row items-center">
        <StaticImage
          className="w-3/4 md:w-full md:mx-3"
          src="../assets/images/bioImg.webp"
          alt="Bio"
        />
        <div className="text-white">
        <h1 className="my-4 pt-10 md:w-3/5 block m-auto text-6xl text-white text-center font-bold">
        Biographie
      </h1>
          <p className="text-xl py-5 px-3">
            Salut ! Moi c'est Antoine et je suis passionné par la photographie,
            particulièrement tout ce qui tourne autour de la Nature
            (photographie de paysages, orages, astrophotographie, aérienne ..)
            J'aime découvrir de nouvelles méthodes de prises de vues, telle que
            la photographie infrarouge et capturer des images surréalistes de
            par leurs lumières et leurs perspectives.
          </p>
          <p className="text-xl py-5 px-3">
            Je suis titulaire d'un BTS audiovisuel et d'une formation
            professionnelle de photographe pour travailler en parallèle la
            photographie et le cinéma.
          </p>
          <p className="text-xl py-5 px-3">
            Mon activé principale est la vente de tirages, qu'il est possible
            d'acquérir via{" "}
            <a className="font-bold hover:underline" href="/store">
              cette page dédiée
            </a>
            .
          </p>
          <div className="text-center mt-5">
            <h2 className="font-bold text-3xl">Contactez moi</h2>
            <p>Klape@hotmail.fr</p> 
          </div>

          <form method="post" action="#" className="grid grid-cols-2 grid-rows-2 gap-2 m-4">
            <input
              type="text"
              placeholder="Name*"
              className="bg-trueGray-900 border-2 text-white py-1 px-5 rounded-md my-3"
            />
            <textarea
              rows="2"
              placeholder="Message"
              className="bg-trueGray-900 border-2 text-white py-1 px-5 rounded-md"
            />
            <input
              type="email"
              placeholder="Email*"
              className="bg-trueGray-900 border-2 text-white py-1 px-5 rounded-md my-3"
            />
            <input
              type="submit"
              className="bg-white bg-opacity-10 border-2 text-white py-1 px-5 rounded-md m-3"
            />
          </form>
        </div>
      </div>      ​
    </div>
  );
};

export default Biography;
