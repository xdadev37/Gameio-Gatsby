import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'

const MainPage = () => {
    window.addEventListener('keyup', (e) => {
        if (e.keyCode === 34 ||
            e.keyCode === 40) {
            window.scrollTo(0, 750)
        }

        if (e.keyCode === 33 ||
            e.keyCode === 38 ||
            e.keyCode === 36) {
            window.scrollTo(0, 0)
        }

        if (e.keyCode === 35) {
            window.scrollTo(0, 10 ** 10)
        }
    })

    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            window.scrollTo(0, 750)
        }

        else {
            window.scrollTo(0, 0)
        }
    })

    return (
        <div className={styles.mainPage} >
            <p>Woe Voe Game</p>
        </div>
    )
}

export default MainPage;