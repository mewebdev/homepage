import * as React from "react"
import styles from '../styles/header.module.scss'
import PropTypes from "prop-types"
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
      <a href="/#about" 
        activeClassName={styles.sidebarActive} 
        className={styles.navItem}>
        ABOUT
      </a>
      <a href="/#career" 
        activeClassName={styles.sidebarActive} 
        className={styles.navItem}>
        CAREER
      </a>
      <a href="/#contact" 
        activeClassName={styles.sidebarActive} 
        className={styles.navItem}>
        CONTACT
      </a>
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
