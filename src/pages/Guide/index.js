import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'
import { useTranslation } from 'react-i18next'

const Guide = () => {
    const { t } = useTranslation()

    return (
        <div className={styles.guidePage} >
            <span />
            <h1>{t('trans.guidePage.topic')}</h1>
            <p>{t('trans.guidePage.text')}</p>
            <span />
        </div>
    );
}

export default Guide;