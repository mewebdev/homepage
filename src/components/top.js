import React from "react";
import * as styles from '../styles/top.module.scss';
import flow from '../images/spacegiflow.gif';
import space from '../images/space.png';
import cross from '../images/cross.png'
import me from '../images/ME-image.png';
import snake from '../images/sfc-deepfake-snake.png';
import { useIntl } from "gatsby-plugin-react-intl"

export default function Top (){
    const intl = useIntl()
    return (
        <div className={styles.container} id="top">
            <div className={styles.bg}>
                <img src={me} alt="" />
            </div>
            <section className={styles.text}>
                <div>
                    <p className={styles.paragraph}>
                        <span id={styles.me}>ME</span> {intl.formatMessage({id: 'intro_a'})} <span className={styles.box}> {intl.formatMessage({id: 'word_a'})}</span>{intl.formatMessage({id: 'intro_b'})}
                    </p>
                </div>
                <div id={styles.flow}>
                    <img src={flow} alt="FLOW IN ME" className={styles.image} />
                </div>
                <div>
                    <p className={styles.paragraph}>
                    {intl.formatMessage({id: 'intro_c'})} <span className={styles.box}>{intl.formatMessage({id: 'word_c'})}</span> {intl.formatMessage({id: 'intro_d'})}
                    </p>
                </div>
                <div id={styles.spaceContainer}>

                <img src={snake} alt="" id={styles.snake}/>
                    <div id={styles.space}>
                        <img src={space} alt="SPACES IN ME" className={styles.image} />
                    </div>
                    <img src={cross} alt="" id={styles.cross}/>
                </div>
                <div>
                    <p className={styles.paragraph}>
                    {intl.formatMessage({id: 'intro_e'})} <span className={styles.bentBox}>{intl.formatMessage({id: 'word_e'})}</span>{intl.formatMessage({id: 'intro_f'})}
                    </p>
                </div>
            </section>
        </div>
    )
}