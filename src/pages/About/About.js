import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation()

    return (<div id='about' className={styles.about} >
        <nav>
            <h3>{t('trans.aboutPage.callInfo')}</h3>
            <i>{t('trans.aboutPage.callNo')}</i>
            <i>{t('trans.aboutPage.address')}</i>
        </nav>
        <nav>
            <h3>{t('trans.aboutPage.aboutUs')}</h3>
            <i>{t('trans.aboutPage.JDCo')}</i>
            <i>{t('trans.aboutPage.Entertainment')}</i>
            <i>{t('trans.aboutPage.Tehran')}</i>
        </nav>
    </div>);
}

export default About;