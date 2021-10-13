import React from "react";
import arrow from '../images/right-arrow.png';
import styles from '../styles/about.module.scss';
import data from '../data/members.json';
import mio from '../images/mio.jpg';
import ken from '../images/ken.png';
import title from '../images/WHOWEARE-image.png'
import titleWeb from '../images/whoweare-web.png'

const About = () => {
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
                            {data[0].name}
                        </h3>
                        <div className={styles.bottom}>
                            <img className={styles.profileImage} src={ken} alt={"Ken Tsuchida"}/>
                            <p className={styles.bio}>
                                {data[0].bio}
                            </p>
                        </div>
                    </div>
                    <div className={styles.member}>
                        <h3 className={styles.name}>
                            {data[1].name}
                        </h3>
                        <div className={styles.bottom}>
                            <img className={styles.profileImage} src={mio} alt={"Ken Tsuchida"}/>
                            <p className={styles.bio}>
                                {data[1].bio}
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About;