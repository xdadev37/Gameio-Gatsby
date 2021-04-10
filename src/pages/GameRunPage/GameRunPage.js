import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'
import { Trans, useTranslation } from 'react-i18next'

const Game = () => {
    const { t } = useTranslation()

    window.onscroll = () => {
        if (window.scrollY > 750) {
            document.getElementById('gamePage').classList.add(styles.gamePageAnime)
        }
    }

    return (<div id='gamePage' className={styles.gamePage} >
        <div>
            <h2>{t('trans.gamePage.topic')}</h2>
            <Trans i18nKey='trans.gamePage.textOnline'>
                <p><br /><br /></p>
            </Trans>
        </div>
        <div>
            <h2>{t('trans.gamePage.topic2')}</h2>
            <Trans i18nKey='trans.gamePage.textMulti'>
                <p><br /><br /></p>
            </Trans>
        </div>
    </div>)
}

export default Game;