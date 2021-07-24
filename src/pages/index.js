import * as React from 'react'
import Navbar from '../components/navbar'
import CardSection from '../components/CardSection'
import LandingPage from '../components/LandingPage'

import corsicaPath from "../assets/svgPaths/corsicaPath"
import reunionPath from "../assets/svgPaths/reunionPath"
import astroPath from "../assets/svgPaths/astroPath"
import pacaPath from "../assets/svgPaths/pacaPath"
import architect from "../assets/svgPaths/architectPath"
import Footer from '../components/footer'
import Biography from '../components/biography'

const IndexPage = () => {
  const contentRef = React.useRef(null);

  return(
    <main className="bg-trueGray-900">
      <title>Antoine Mangiavacca</title>
      <Navbar />
      <LandingPage contentRef={contentRef}/>
      <hr className="border-b border-white border-2" />
      <div id="content" ref={contentRef} className="grid grid-cols-1">
        <CardSection title="La Corse" path={corsicaPath} svgRef="corse" img="bg-corse-img"/>
        <CardSection title="La Réunion" path={reunionPath} svgRef="reunion" img="bg-reunion-img" right/>    
        <CardSection title="Région PACA" path={pacaPath} svgRef="paca" img="bg-paca-img" duration={10}/>
        <CardSection title="Astrophotographie" path={astroPath} svgRef="astro" img="bg-astro-img" duration={4} right/>
        <CardSection title="Architecture" path={architect} svgRef="architect" img="bg-architect-img" duration={5}/>
      </div>
      <hr className="border-b border-white border-2" />
      <Biography />
      <hr className="border-b border-white border-2" />
      <Footer />
    </main>
  )
}

export default IndexPage;