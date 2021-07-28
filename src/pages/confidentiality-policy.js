import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";

const ConfidentialityPolicyPage = () => {
  const { t } = useTranslation();
  return (
    <Layout title={t("Confidentiality policy")} description={t("Confidentiality policy")}>
      <div className="text-trueGray-300 grid grid-cols-1 gap-2 text-xl text-justify p-24">
        <p>
          La présente politique de confidentialité définit et vous informe de la
          manière dont Klape photographie utilise et protège les informations
          que vous nous fournissez, lorsque vous utilisez notre site internet.
          Cette politique de confidentialité est susceptible d’être modifiée ou
          complétée à tout moment par dont Klape photographie, notamment en vue
          de se conformer à toute évolution législative, règlementaire,
          jurisprudentielle ou technologique. N’hésitez pas à consulter cette
          page régulièrement.
        </p>
        <h2 className="text-white text-3xl">I. DONNÉES PERSONNELLES</h2>
        <p>
          D’une manière générale, il vous est possible de visiter le site sans
          communiquer aucune information personnelle vous concernant. Pour
          bénéficier de l’intégralité de nos services (newsletter,
          téléchargement de produits, commentaires, formulaires de contact),
          nous vous demandons certaines informations nécessaires à l’utilisation
          désirée. En fonction de vos besoins (newsletter, téléchargement de
          produits, commentaires, formulaires de contact), nous collectons au
          maximum les données suivantes : Nom, Prénom, Adresse électronique,
          Numéro de téléphone Ces données personnelles sont collectées au
          travers de formulaires et grâce à l’interactivité établie entre vous
          et le site de Klape photographie. Conformément au Règlement Général
          sur la Protection des Données (General Data Protection Régulation)
          adopté par le Parlement européen le 14 avril 2016, et à la Loi
          Informatique et Libertés du 6 janvier 1978 modifiée, Klape
          photographie vous informe des points suivants :
        </p>

        <p>
          • 1. Identité du responsable du traitement Le responsable du
          traitement est Klape photographie – Mangiavacca Antoine, ayant son
          siège social au 83bd du Redon 13009 Marseille Tél. : 06 16 20 27 26
          Mail : Klape@hotmail.fr
        </p>
        <p>
          • 2. Finalités du traitement Klape photographie est susceptible de
          traiter vos Informations Personnelles afin de vous fournir les
          informations ou les services que vous avez demandé (notamment :
          commande de tirages) et afin de recueillir des informations nous
          permettant d’analyser et d’améliorer notre site, nos produits et
          services (notamment par le biais de cookies);
        </p>
        <p>
          • 3. Destinataires Seul Klape photographie est destinataire de vos
          Informations Personnelles. Ni nous, ni l’un nos sous-traitants, ne
          procèdent à la commercialisation des données personnelles des
          visiteurs et utilisateurs de ce site.
        </p>
        <p>
          • 4. Durée de conservation Vos Informations Personnelles sont
          conservées par Klape photographie uniquement pour le temps
          correspondant à la finalité de la collecte tel qu’indiqué en 2
          ci-dessus qui ne saurait en tout état de cause excéder 24 mois.
        </p>
        <p>
          5. • Cookies/Tracking Klape photographie utilise les cookies afin
          d’améliorer et personnaliser le site et/ou en mesurer l’audience. Les
          cookies sont des fichiers enregistrés sur le disque dur de votre
          ordinateur lors de votre navigation sur Internet et notamment sur le
          site. Un cookie ne sert pas à recueillir des données personnelles à
          votre insu mais à enregistrer des informations relatives à votre
          navigation sur le site qui pourront être directement lues par Klape
          photographie lors de vos visites et requêtes ultérieures sur le site.
          Si vous choisissez de refuser l’ensemble des cookies, votre navigation
          pourra être réduite pour accéder à certaines pages du site. Les
          cookies utilisés par Klape photographie ont pour finalité de permettre
          ou faciliter la communication & la fourniture des services demandés
          par les utilisateurs. Klape photographie utilise aussi des outils
          d’analyse et de suivi afin de mesurer les données sur son site pour
          d’obtenir un aperçu de la clientèle, réaliser des analyses sur
          l’expérience de navigation afin d’améliorer le contenu de celui-ci.
        </p>
        <p>
          • 6. Droits Informatique et Libertés Vous disposez des droits suivants
          concernant vos Informations Personnelles, que vous pouvez exercer en
          nous écrivant à Klape@hotmail.fr.
        </p>
        <p>
          <p> o Droit d’accès et de communication des données</p>
        </p>
        <p>
          Vous avez la faculté d’accéder aux Informations Personnelles qui vous
          concernent. Cependant, en raison de l’obligation de sécurité et de
          confidentialité dans le traitement des données à caractère personnel
          qui incombe à Klape photographie, vous êtes informé que votre demande
          sera traitée sous réserve que vous rapportiez la preuve de votre
          identité.
        </p>
        <p>
          Pour vous aider dans votre démarche, notamment si vous désirez exercer
          votre droit d’accès par le biais d’une demande écrite à l’adresse
          postale mentionnée au point 1, vous trouverez en cliquant sur le lien
          suivant un modèle de courrier élaboré par la Commission Nationale de
          l’Informatique et des Libertés (la « CNIL »).
          <br />
          <a
            href="mailTo:Klape@hotmail.fr"
            className="font-bold underline hover:text-blue-500"
          >
            https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces
          </a>
        </p>
        <p>o Droit de rectification des données</p>
        <p>
          Au titre de ce droit, la législation vous habilite à demander la
          rectification, la mise à jour, le verrouillage ou encore l’effacement
          des données vous concernant qui peuvent s’avérer le cas échéant
          inexactes, erronées, incomplètes ou obsolètes.
          <br />
          <a
            href="mailTo:Klape@hotmail.fr"
            className="font-bold underline hover:text-blue-500"
          >
            https://www.cnil.fr/fr/modele/courrier/rectifier-des-donnees-inexactes-obsoletes-ou-perimees
          </a>
        </p>
        <p>o Droit d’opposition</p>
        <p>
          L’exercice de ce droit n’est possible que dans l’une des deux
          situations suivantes : 1. Lorsque l’exercice de ce droit est fondé sur
          des motifs légitimes ; ou 2. Lorsque l’exercice de ce droit vise à
          faire obstacle à ce que les données recueillies soient utilisées à des
          fins de prospection commerciale.
        </p>
        <p>
          Pour vous aider dans votre démarche, notamment si vous désirez exercer
          votre droit d’opposition par le biais d’une demande écrite adressée à
          l’adresse postale indiquée au point 1, vous trouverez en cliquant sur
          le lien suivant un modèle de courrier élaboré par la CNIL.
          <br />
          <a
            href="mailTo:Klape@hotmail.fr"
            className="font-bold underline hover:text-blue-500"
          >
            https://www.cnil.fr/fr/modele/courrier/supprimer-des-informations-vous-concernant-dun-site-internet
          </a>
        </p>
        <h2 className="text-white text-3xl">
          7. LIEU DE STOCKAGE DES DONNÉES ET TRANSFERTS
        </h2>
        <p>
          Les serveurs d’hébergement sur lesquels Klape photographie traite et
          stocke les bases de données sont exclusivement situés au sein de
          l’Union Européenne.
        </p>
        <h2 className="text-white text-3xl">8. SÉCURITÉ</h2>
        <p>
          Dans le cadre de ses services, Klape photographie accorde la plus
          haute importance à la sécurité et à l’intégrité des données
          personnelles de ses clients.
        </p>
        <p>
          Ainsi, et conformément au RGPD, Klape photographie s’engage à prendre
          toutes précautions utiles afin de préserver la sécurité des données et
          notamment de les protéger contre toute destruction accidentelle ou
          illicite, perte accidentelle, altération, diffusion ou accès non
          autorisés, ainsi que contre toute autre forme de traitement illicite
          ou communication à des personnes non autorisées.
        </p>
        <p>
          Par ailleurs, afin d’éviter notamment tout accès non autorisé, de
          garantir l’exactitude et une bonne utilisation des données, Klape
          photographie a mis en place des procédures électroniques, physiques et
          d’encadrement appropriées en vue de sauvegarder et préserver les
          données recueillies à travers ses services. Si malgré ces précautions
          une faille de sécurité venait à vous impacter, Klape photographie
          s’engage à vous en informer dès que possible et à faire ses meilleurs
          efforts pour prendre toutes les mesures possibles pour neutraliser
          l’intrusion et en minimiser les impacts.
        </p>
        <p>
          Pour toute question, n’hésitez pas à nous contacter sur{" "}
          <a
            href="mailTo:Klape@hotmail.fr"
            className="font-bold underline hover:text-blue-500"
          >
            Klape@hotmail.fr
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default ConfidentialityPolicyPage;

export const translationQuery = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
