import * as React from "react";
import styles from '../styles/backtotop.module.scss';
import arrow from '../images/right-arrow.png';

const BackToTop = () => {
    return (
        <div className={styles.container}>
            <a href="/#top" className={styles.link}>
                    <img src={arrow} className={styles.downArrow} alt=""/>
            </a>
            <a href="/#top" className={styles.text}>
                Back To Top
            </a>
        </div>
    )
}

export default BackToTop;