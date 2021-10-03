import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styles from '../styles/layout.module.scss'
import Header from "./header"
import Footer from "./footer"

import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      </header>
      <main className={styles.body}>
        {children}
      </main>
      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
