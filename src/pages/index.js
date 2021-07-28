import * as React from 'react'
import Layout from '../components/Layout'

import CardSection from '../components/CardSection'
import LandingPage from '../components/LandingPage'

import corsicaPath from "../assets/svgPaths/corsicaPath"
import reunionPath from "../assets/svgPaths/reunionPath"
import astroPath from "../assets/svgPaths/astroPath"
import pacaPath from "../assets/svgPaths/pacaPath"
import architect from "../assets/svgPaths/architectPath"
import Biography from '../components/biography'

import { graphql } from 'gatsby'

import {useTranslation} from 'gatsby-plugin-react-i18next';

const IndexPage = () => {
  const { t } = useTranslation();
  const contentRef = React.useRef(null);

  return(
    <Layout title="Klape" description={t("Photographer, Camera Operator")}>
      <LandingPage contentRef={contentRef}/>
      <hr className="border-b border-white border-2" />
      <div id="content" ref={contentRef} className="grid grid-cols-1">
        <CardSection title={t("Corsica")} path={corsicaPath} svgRef="corse" img="bg-corse-img"/>
        <CardSection title={t("Reunion island")} path={reunionPath} svgRef="reunion" img="bg-reunion-img" right/>    
        <CardSection title={t("PACA")} path={pacaPath} svgRef="paca" img="bg-paca-img" duration={10}/>
        <CardSection title={t("Astrophotography")} path={astroPath} svgRef="astro" img="bg-astro-img" duration={4} right/>
        <CardSection title={t("Architecture")} path={architect} svgRef="architect" img="bg-architect-img" duration={5}/>
      </div>
      <hr className="border-b border-white border-2" />
      <Biography />
    </Layout>
  )
}

export default IndexPage;

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