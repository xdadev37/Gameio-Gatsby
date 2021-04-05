import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../../../SCSS/styles.module.scss'

const Navbar = () => {
    return (
        <navbar className={styles.navbar} >
            <nav className={styles.leftNav} >
                <Link to='/' ><span className={styles.logo} >\/<sup>\/</sup>\/</span></Link>
                <Link to='/' ><li>Home</li></Link>
                <Link ><li>Guide</li></Link>
                <Link ><li>About</li></Link>
            </nav>
            <nav className={styles.rightNav} >
                <Link ><li className={styles.login} >Login</li></Link>
                <Link ><li className={styles.signUp} >Signup</li></Link>
            </nav>
        </navbar>
    );
}

export default Navbar;