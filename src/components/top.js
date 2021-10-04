import * as React from "react";
import styles from '../styles/top.module.scss';
import flow from '../images/spacegiflow.gif';
import space from '../images/space.png';

const Top = () => {
    return (
        <div className={styles.container} id="top">
            <div className={styles.bg}>
                ME
            </div>
            <section className={styles.text}>
                <div>
                    <p className={styles.paragraph}>
                        <span id={styles.me}>ME</span> is a creative file system for <span className={styles.box}>brainstorming</span>
                    </p>
                </div>
                <div>

                    <img src={flow} alt="FLOW IN ME" id={styles.flow} />
                </div>
                <div>
                    <p className={styles.paragraph}>
                        It is your very personal <span className={styles.box}>internet</span> collection and knowledge base that is with you forever—
                    </p>
                </div>
                <div>
                    <img src={space} alt="SPACES IN ME" id={styles.space} />
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

export default Top;