import React, { useState } from 'react'
import { Link } from 'gatsby'
import * as styles from '../../../SCSS/styles.module.scss'
import Login from '../Login/index'
import Home from './HomeComponent'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const [loginButton, setLoginButton] = useState(false)

    const { t, i18n } = useTranslation()
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className={styles.navbar} id='navbar'>
            <span onClick={() => { document.getElementById('navbar').classList.toggle(styles.hamMenuOpened) }}></span>
            <nav className={styles.leftNav} >
                <Home />
                <li onClick={() => {
                    window.scrollTo(0, 750)
                }} >{t('trans.navbar.guide')}</li>
                <li onClick={() => {
                    window.scrollTo(0, 1500)
                }} >{t('trans.navbar.game')}</li>
                <Link to='#about' ><li>{t('trans.navbar.about')}</li></Link>
            </nav>
            {loginButton ? <Login setLoginButton={setLoginButton} /> : <nav className={styles.rightNav} >
                <button onClick={() => { changeLanguage('en'); document.getElementsByTagName('html')[0].setAttribute('style', 'direction: ltr;') }}>EN</button>
                <button onClick={() => { changeLanguage('fa'); document.getElementsByTagName('html')[0].setAttribute('style', 'direction: rtl;') }}>FA</button>
                <li onClick={() => setLoginButton(true)} className={styles.login} >{t('trans.navbar.login')}</li>
                <Link to='/Signup'><li className={styles.signUp} >{t('trans.navbar.signUp')}</li></Link>
            </nav>}
        </div >
    );
}

export default Navbar;