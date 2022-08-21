import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Services from "../components/services";
import Contact from "../components/contact";

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Services />
    <Contact />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="WordPress, React & Jamstack" />

export default IndexPage
