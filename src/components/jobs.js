import React from "react";
import * as styles from '../styles/jobs.module.scss';
import symbol from '../images/symbol.png';
import arrow from '../images/right-arrow.png';
import title from '../images/WEAREHIR-ING-image.png';
import titleWeb from '../images/hiring-web.png';
import { useIntl } from "gatsby-plugin-react-intl"

export default function Jobs() {
    const intl = useIntl()
    return (
        <div className={styles.container} id="career">
            <img className={styles.arrow} src={arrow} alt="We Are Hiring" />
            <div className={styles.top}>
                <img src={title} className={styles.title} id={styles.mobile} />
                <img src={titleWeb} className={styles.title} id={styles.web} />
                <img className={styles.symbol} src={symbol} alt="" />
            </div>
            <strong className={styles.sectionTitle}>{intl.formatMessage({ id: 'software_title' })}</strong>
            <div className={styles.jobListings}>
                <div className={styles.jobContainer}>
                    <h2 className={styles.jobTitle}>
                        {"● "}{intl.formatMessage({ id: 'job_a_title' })}
                    </h2>
                    <div className={styles.box}>
                        <strong className={styles.header}>
                            {intl.formatMessage({ id: 'software_title' })}
                        </strong>
                        <p className={styles.description}>
                            {intl.formatMessage({ id: 'job_a_description' })}
                        </p>
                        <strong className={styles.header}>
                            {intl.formatMessage({ id: 'skill_title' })}
                        </strong>
                        <ul>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_a_skill_1' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_a_skill_2' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_a_skill_3' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_a_skill_4' })}
                            </li>
                        </ul>
                        <strong className={styles.header}>
                            {intl.formatMessage({ id: 'other_skill_title' })}
                        </strong>
                        <ul>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_a_other_skill_1' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_a_other_skill_2' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_a_other_skill_3' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_a_other_skill_4' })}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.jobContainer}>
                    <h2 className={styles.jobTitle}>
                        {"● "}{intl.formatMessage({ id: 'job_b_title' })}
                    </h2>
                    <div className={styles.box}>
                        <strong className={styles.header}>
                            {intl.formatMessage({ id: 'software_title' })}
                        </strong>
                        <p className={styles.description}>
                            {intl.formatMessage({ id: 'job_b_description' })}
                        </p>
                        <strong className={styles.header}>
                            {intl.formatMessage({ id: 'skill_title' })}
                        </strong>
                        <ul>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_b_skill_1' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_b_skill_2' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_b_skill_3' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_b_skill_4' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_b_skill_5' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_b_skill_6' })}
                            </li>
                        </ul>
                        <strong className={styles.header}>
                            {intl.formatMessage({ id: 'other_skill_title' })}
                        </strong>
                        <ul>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_b_other_skill_1' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_b_other_skill_2' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_b_other_skill_3' })}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.jobContainer}>
                    <h2 className={styles.jobTitle}>
                        {"● "}{intl.formatMessage({ id: 'job_c_title' })}
                    </h2>
                    <div className={styles.box}>
                        <strong className={styles.header}>
                            {intl.formatMessage({ id: 'software_title' })}
                        </strong>
                        <p className={styles.description}>
                            {intl.formatMessage({ id: 'job_c_description' })}
                        </p>
                        <strong className={styles.header}>
                            {intl.formatMessage({ id: 'skill_title' })}
                        </strong>
                        <ul>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_c_skill_1' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_c_skill_2' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_c_skill_3' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_c_skill_4' })}
                            </li>
                        </ul>
                        <strong className={styles.header}>
                            {intl.formatMessage({ id: 'other_skill_title' })}
                        </strong>
                        <ul>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_c_other_skill_1' })}
                            </li>
                            <li className={styles.listItem} >
                                {intl.formatMessage({ id: 'job_c_other_skill_2' })}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}