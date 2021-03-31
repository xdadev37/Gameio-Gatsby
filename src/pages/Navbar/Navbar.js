import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../../../SCSS/styles.module.scss'

const Navbar = () => {
    return (
        <div className={styles.navbar} >
            <div className={styles.leftNav} >
                <Link href='/' ><span className={styles.logo} >\/<sup>\/</sup>\/</span></Link>
                <Link href='/Main' ><a>Home</a></Link>
                <Link href='/Guide' ><a>Guide</a></Link>
                <Link to='/About' ><a>About</a></Link>
            </div>
            <div className={styles.rightNav} >
                <Link to='/Signup' ><a className={styles.signUp} >Signup</a></Link>
                <Link to='/Login' ><a className={styles.login} >Login</a></Link>
            </div>
        </div>
    );
}

export default Navbar;