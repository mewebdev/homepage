import * as React from "react"
import * as styles from '../styles/header.module.scss'
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-react-intl"

export default function Header({ siteTitle }){
  const intl = useIntl()
  return(
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
          日本語
      </Link>
    </ul>
    <ul className={styles.sidebar}>
      <AnchorLink 
        to={`/${intl.locale}/#about`}
        activeClassName={styles.sidebarActive} 
        className={styles.navItem}>
        ABOUT
      </AnchorLink>
      <AnchorLink to={`/${intl.locale}/#career`} 
        activeClassName={styles.sidebarActive} 
        className={styles.navItem}>
        CAREER
      </AnchorLink>
      <AnchorLink to={`/${intl.locale}/#contact`}
        activeClassName={styles.sidebarActive} 
        className={styles.navItem}>
        CONTACT
      </AnchorLink>
    </ul>
  </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}