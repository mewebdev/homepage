import React from "react";
import styles from '../styles/top.module.scss';
import flow from '../images/spacegiflow.gif';
import space from '../images/space.png';
import cross from '../images/cross.png'
import me from '../images/ME-image.png';
import snake from '../images/sfc-deepfake-snake.png';
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-react-intl"

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
                        <span id={styles.me}>ME</span> {intl.formatMessage({id: 'intro_a'})} <span className={styles.box}>brainstorming</span>
                    </p>
                </div>
                <div id={styles.flow}>
                    <img src={flow} alt="FLOW IN ME" className={styles.image} />
                </div>
                <div>
                    <p className={styles.paragraph}>
                        It is your very personal <span className={styles.box}>internet</span> collection and knowledge base that is with you forever—
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
                        it takes the flow of your thoughts somewhere <span className={styles.bentBox}>unexpected</span> leading to new discoveries and ideas.
                    </p>
                </div>
            </section>
        </div>
    )
}