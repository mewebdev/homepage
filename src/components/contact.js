import * as React from "react";
import styles from '../styles/contact.module.scss';
import star from '../images/star.png';
import blob from '../images/blob.png';
import arrow from '../images/right-arrow.png'
import down from '../images/up.png'
import web from '../images/CON-TACT-image.png';
import mobile from '../images/contact-mobile.png';
import logo from '../images/O-logo.gif';
const Contact = () => {
    return (
        <div className={styles.container} id="contact">
        <img className={styles.arrow} src={arrow} alt=""/>
        <img src={star} className={styles.star} alt=""/>
            <div className={styles.top}>
                <img src={web} className={styles.title} id={styles.web}/>
                <img src={mobile} className={styles.title} id={styles.mobile}/>
                <img className={styles.blob} src={blob} alt="Click Here"/>
            </div>
            <div className={styles.bottom}>
                <strong className={styles.guide}>
                    Click here
                </strong>
                <a href="mailto:info@o-me.io" className={styles.link}>
                    <img src={down} className={styles.downArrow} alt=""/>
                </a>
                <a href="mailto:info@o-me.io" className={styles.link}>
                    <img src={logo} id={styles.logo} alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Contact;