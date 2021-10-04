import * as React from "react";
import styles from '../styles/contact.module.scss';
import star from '../images/star.png';
import blob from '../images/blob.png';
import arrow from '../images/right-arrow.png'
const Contact = () => {
    return (
        <div className={styles.container} id="contact">
        <img className={styles.arrow} src={arrow} alt=""/>
        <img src={star} className={styles.star} alt=""/>
            <div className={styles.top}>
                <h2 className={styles.title}>
                    CON-TACT
                </h2>
                <img className={styles.blob} src={blob} alt="Click Here"/>
            </div>
            <div className={styles.bottom}>
                <strong className={styles.guide}>
                    Click here
                </strong>
                <a href="mailto:ken@o-me.io" className={styles.link}>
                    <img src={arrow} className={styles.downArrow} alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Contact;