import React, { useState } from 'react'
import { Link } from 'gatsby'
import * as styles from '../../../SCSS/styles.module.scss'
import Login from '../Login/index'

const Navbar = () => {
    const [loginButton, setLoginButton] = useState(false)

    return (
        <div className={styles.navbar} >
            <nav className={styles.leftNav} >
                <Link to='/' ><span className={styles.logo} >\/<sup>\/</sup>\/</span></Link>
                <Link to='/' ><li>Home</li></Link>
                <li onClick={() => {
                    window.scrollTo(0, 750)
                }} >Guide</li>
                <li onClick={() => {
                    window.scrollTo(0, 1500)
                }} >Game</li>
                <Link to='#about' ><li>About</li></Link>
            </nav>
            {loginButton ? <Login setLoginButton={setLoginButton} /> : <nav className={styles.rightNav} >
                <li onClick={() => setLoginButton(true)} className={styles.login} >Login</li>
                <Link to='/Login'><li className={styles.signUp} >Signup</li></Link>
            </nav>}
        </div>
    );
}

export default Navbar;