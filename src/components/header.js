import * as React from "react"
import styles from '../styles/header.module.scss'
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <nav className={styles.container}>
    <ul className={styles.intl}>
      <Link 
        to="/"
        activeClassName={styles.langActive} 
        className={styles.lang}>
          EN
      </Link>
      {"/"}
      <Link 
        to="/ja"
        activeClassName={styles.langActive} 
        className={styles.lang}>
          JA
      </Link>
    </ul>
    <ul className={styles.sidebar}>
      <AnchorLink 
        to="/#about" 
        activeClassName={styles.sidebarActive} 
        className={styles.navItem}>
        ABOUT
      </AnchorLink>
      <AnchorLink to="/#career" 
        activeClassName={styles.sidebarActive} 
        className={styles.navItem}>
        CAREER
      </AnchorLink>
      <AnchorLink to="/#contact" 
        activeClassName={styles.sidebarActive} 
        className={styles.navItem}>
        CONTACT
      </AnchorLink>
    </ul>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
