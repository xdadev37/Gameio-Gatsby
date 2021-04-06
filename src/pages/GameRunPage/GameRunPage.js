import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'

const Game = () => {
    window.onscroll = () => {
        if (window.scrollY > 750) {
            document.getElementById('gamePage').classList.add(styles.gamePageAnime)
        }
    }

    return (<div id='gamePage' className={styles.gamePage} >
        <div>
            <h2>Online</h2>
            <p>An online game is a video game that is either partially
                <br /> or primarily played through the Internet <br /> or any other computer network available.</p>
        </div>
        <div>
            <h2>Multiplayer</h2>
            <p>A multiplayer video game is a video game in which more than <br /> one person can play in the same game environment <br /> at the same time, either locally (e.g. New Super Mario Bros. Wii) <br /> or online over the internet (e.g. World of Warcraft, Call Of Duty).</p>
        </div>
    </div>)
}

export default Game;