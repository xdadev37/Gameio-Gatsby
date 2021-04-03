import React, { useState } from 'react'
import * as styles from '../../../SCSS/styles.module.scss'

const Game = () => {
    return (<div className={styles.gamePage} >
        <div className={styles.startScreen} ></div>
        <div className={styles.gameAnime} >
            <span><i /><i /></span>
        </div>
    </div>);
}

export default Game;