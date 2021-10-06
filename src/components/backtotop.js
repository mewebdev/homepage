import * as React from "react";
import styles from '../styles/backtotop.module.scss';
import arrow from '../images/up.png';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const BackToTop = () => {
    return (
        <div className={styles.container}>
            <AnchorLink to="/#top" className={styles.link}>
                    <img src={arrow} className={styles.downArrow} alt=""/>
            </AnchorLink>
            <AnchorLink to="/#top" className={styles.text}>
                Back To Top
            </AnchorLink>
        </div>
    )
}

export default BackToTop;