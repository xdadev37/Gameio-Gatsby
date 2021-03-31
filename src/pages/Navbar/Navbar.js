import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../../../SCSS/styles.module.scss'

const Navbar = () => {
    return (
        <div className={styles.navbar} >
            <div className={styles.leftNav} >
                <Link to='/' ><span className={styles.logo} >\/<sup>\/</sup>\/</span></Link>
                <Link to='/' ><a>Home</a></Link>
                <Link ><a>Guide</a></Link>
                <Link ><a>About</a></Link>
            </div>
            <div className={styles.rightNav} >
                <Link ><a className={styles.signUp} >Signup</a></Link>
                <Link ><a className={styles.login} >Login</a></Link>
            </div>
        </div>
    );
}

export default Navbar;