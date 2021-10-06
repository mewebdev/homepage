import * as React from "react";
import styles from '../styles/jobs.module.scss';
import data from '../data/job-listings.json';
import symbol from '../images/symbol.png';
import arrow from '../images/right-arrow.png';
import title from '../images/WEAREHIR-ING-image.png';
import titleWeb from '../images/hiring-web.png';
const Jobs = () => {
    return (
        <div className={styles.container} id="career">
            <img className={styles.arrow} src={arrow} alt="We Are Hiring"/>
            <div className={styles.top}>
                <img src={title} className={styles.title} id={styles.mobile}/>
                <img src={titleWeb} className={styles.title} id={styles.web}/>
                <img className={styles.symbol} src={symbol} alt=""/>
            </div>
            <strong className={styles.sectionTitle}>Software Candidates</strong>
            <div className={styles.jobListings}>
                {
                    data.map((job, idx)=>(
                        <div className={styles.jobContainer} key={idx}>
                            <h2 className={styles.jobTitle}>
                                {"● "}{job.title}
                            </h2>
                            <div className={styles.box}>
                                <strong className={styles.header}>
                                    {job.title}
                                </strong>
                                <p className={styles.description}>
                                    {job.description}
                                </p>
                                <strong className={styles.header}>
                                    Necessary skills:
                                </strong>
                                <ul>
                                    {job.skills.map((skill, i)=>(
                                        <li className={styles.listItem} key={i}>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                                <strong className={styles.header}>
                                    Desirable skills:
                                </strong>
                                <ul>
                                    {job.otherSkills.map((otherSkill, j)=>(
                                        <li className={styles.listItem} key={j}>
                                            {otherSkill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Jobs;