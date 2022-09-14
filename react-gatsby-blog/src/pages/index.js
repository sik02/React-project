import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/HeroSection/Hero";
import Trips from "../components/Trips/Trips";


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destinations"/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
