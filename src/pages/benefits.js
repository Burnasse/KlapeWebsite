import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";

const BenefitsPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t("Benefits")} description={t("Benefits Antoine Mangiavacca")}>
      <div className="grid grid-cols-1 gap-3 text-trueGray-300 text-xl p-24 mx-auto text-justify">
        <h2 className="text-white font-bold text-5xl leading-tight">
          Mariage ou portrait
        </h2>
        <p>
          Dans le cadre de mon travail, je propose de nombreuses prestations
          photographiques et vidéos.
        </p>
        <p>
          <span className="text-white font-bold text-2xl">Portrait</span> : Que
          vous ayez besoin d'un photographe pour votre mariage ou bien pour une
          séance portrait en lumière naturelle, je serai plus que ravis
          d'apporter ma touche artistique !
        </p>
        <p>
          <span className="text-white font-bold text-2xl">
            Photographie d'architecture
          </span>
          : Pour votre cabinet d'architecte ou bien pour vendre votre bien, vous
          pouvez faire appel à mes services. Vous trouverez des exemples de mon
          travail ici et là.
        </p>
        <p>
          Le tarif variera selon le déroulement, le lieux et vos différentes
          demandes (livre photo, vidéo) Merci de me contacter par mail
          (klape@hotmail.fr) pour en discuter.
        </p>

        <h2 className="text-white font-bold text-5xl leading-tight pt-10">
          Atelier photographique
        </h2>
        <p>
          Je propose également des workshops autour de mon travail, que vous
          soyez débutant ou à un niveau plus avancé, je vous apprendrai mes
          techniques de repérage, de prises de vues et de post-production dans
          différents domaines (astrophotographie, infrarouge, paysages, ...).
        </p>
        <p>
          Selon votre demande et le niveau de compétence visé, cela pourra se
          dérouler sur un ou plusieurs jours. Les forfaits pour ce type de
          prestations sont les suivants (frais de déplacement non inclus) :
        </p>

        <div>
          <h3 className="text-white font-bold text-2xl leading-tight">
            - atelier photographie infrarouge (une journée) : 270€
          </h3>
          <p className="px-4">
            Dans cet atelier je présente la photographie infrarouge, l'atelier
            sera très axé pratique et aura également une partie post-production
            via un tutorial vidéo fait pour l'occasion. ​
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold text-2xl leading-tight">
            - atelier débutant prise de vue (une journée) : 190€
          </h3>
          <p className="px-4">
            Je vous apprendrai les bases de la prise de vue, avec les réglages
            manuels (vitesse, sensibilité, ouverture, ...) et aussi les bases de
            la composition.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold text-2xl leading-tight">
            - atelier prise de vue et post-production (deux journées) : 280€
          </h3>
          <p className="px-4">
            En plus des bases de la photographie, je vous apprendrai à traiter
            vos images en post-production selon votre style (noir & blanc, style
            vintage, couleurs ..)
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold text-2xl leading-tight">
            - atelier prise de vue de nuit (une soirée + une journée) : 350€
          </h3>
          <p className="px-4">
            Ce forfait est spécialisé dans les prises de vues de nuit, avec le
            ciel étoilé. Nous repasserons rapidement les bases du mode manuel
            avant d'entrer dans le vif du sujet. Ce forfait contient également
            une journée dédiée à la post-production de ce type d'image.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold text-2xl leading-tight">
            - atelier complet (une demi-journée de préparation/repérage + 2
            jours (photo et post-production) : 550€
          </h3>
          <p className="px-4">
            Dans cet atelier, nous partirons de la base de mes sorties : le
            repérage des lieux et les prévisions météo avant d'entamer une
            journée photo en extérieur suivi d'une séance photo de nuit. Une
            dernière journée sera dédiée à la post-production des images.
          </p>
        </div>

        <p className="pt-10">
          Les tarifs pourront varier selon les demandes personnalisées. Les
          ateliers seront accompagnés de vidéos explicatives, pour ne pas tout
          oublier ! Pour toute demande, merci de me contacter par mail :
          klape@hotmail.fr
        </p>
      </div>
    </Layout>
  );
};

export default BenefitsPage;

export const translationQuery = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
