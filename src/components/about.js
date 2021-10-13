import React from "react";
import arrow from '../images/right-arrow.png';
import * as styles from '../styles/about.module.scss';
import mio from '../images/mio.jpg';
import ken from '../images/ken.png';
import title from '../images/WHOWEARE-image.png'
import titleWeb from '../images/whoweare-web.png'
import { useIntl } from "gatsby-plugin-react-intl"

const About = () => {
    const intl = useIntl()
    return (
        <div className={styles.container} id="about">
            <img className={styles.arrow} src={arrow} alt="Who We Are"/>
            <div className={styles.top}>
                <img src={title} id={styles.mobile}/>
                <img src={titleWeb} id={styles.web}/>
            </div>
            <div className={styles.memberContainer}>
                    <div className={styles.member} id={styles.ken}>
                        <h3 className={styles.name}>
                            {intl.formatMessage({ id: 'ken_name' })}
                        </h3>
                        <div className={styles.bottom}>
                            <img className={styles.profileImage} src={ken} alt={"Ken Tsuchida"}/>
                            <p className={styles.bio}>
                            {intl.formatMessage({ id: 'ken_bio' })}
                            </p>
                        </div>
                    </div>
                    <div className={styles.member}>
                        <h3 className={styles.name}>
                        {intl.formatMessage({ id: 'mio_name' })}
                        </h3>
                        <div className={styles.bottom}>
                            <img className={styles.profileImage} src={mio} alt={"Ken Tsuchida"}/>
                            <p className={styles.bio}>
                            {intl.formatMessage({ id: 'mio_bio' })}
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About;