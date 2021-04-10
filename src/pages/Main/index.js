import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation()

    window.onkeyup = (e) => {
        if (e.keyCode === 34 ||
            e.keyCode === 40) {
            window.scrollBy(0, 750)
        }

        if (e.keyCode === 33 ||
            e.keyCode === 38) {
            window.scrollBy(0, -750)
        }

        if (e.keyCode === 36) {
            window.scrollTo(0, 0)
        }

        if (e.keyCode === 35) {
            window.scrollTo(0, 10 ** 10)
        }
    }

    window.onwheel = (e) => {
        if (e.deltaY > 0) {
            window.scrollBy(0, 750)
        }

        else {
            window.scrollBy(0, -750)
        }
    }

    return (
        <div className={styles.mainPage} >
            <p>{t('trans.mainPage')}</p>
        </div>
    )
}

export default MainPage;