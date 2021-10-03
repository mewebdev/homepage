import * as React from "react"
import Seo from "../components/seo"
import Top from '../components/top'
import Jobs from '../components/jobs'
import About from '../components/about'
import Contact from '../components/contact'
import BackToTop from '../components/backtotop'
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Top/>
    <Jobs/>
    <About/>
    <Contact/>
    <BackToTop/>
  </Layout>
)

export default IndexPage
