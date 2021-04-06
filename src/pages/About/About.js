import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'

const About = () => {
    return ( <div id='about' className={styles.about} >
        <nav>
            <h3>Call info</h3>
            <i>Call no. : 021XXXXXX</i>
            <i>Address: John Doe St.</i>
        </nav>
        <nav>
            <h3>About us</h3>
            <i>Jane Doe Co.</i>
            <i>Entertainment</i>
            <i>Tehran</i>
        </nav>
    </div> );
}
 
export default About;