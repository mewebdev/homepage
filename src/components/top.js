import * as React from "react";
import styles from '../styles/top.module.scss';

const Top = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bg}>
                ME
            </div>
            <section className={styles.text}>
                <p className={styles.paragraph}>
                    <span id={styles.me}>ME</span> is a creative file system for <span className={styles.box}>brainstorming</span>
                </p>
                <p className={styles.paragraph}>
                    It is your very personal <span className={styles.box}>internet</span> collection and knowledge base that is with you forever— 
                </p>
                <p className={styles.paragraph}>
                    it takes the flow of your thoughts somewhere <span className={styles.bentBox}>unexpected</span> leading to new discoveries and ideas.
                </p>
            </section>
        </div>
    )
}

export default Top;