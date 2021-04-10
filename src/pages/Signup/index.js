// import '../i18n'
import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'
import Home from '../Navbar/HomeComponent'
import { useTranslation } from 'react-i18next'

const Signup = () => {
    const { t } = useTranslation()

    return (<div className={styles.signUp}>
        <nav className={styles.leftNav}>
            <Home />
        </nav>
        <div className={styles.signUpPage} >
            <form>
                <h1>{t('trans.signUp.topic')}</h1>
                <br />
                <div className={styles.initialForm}>
                    <label htmlFor="fname">{t('trans.signUp.fname')}
                        <input required type="text" placeholder=' First Name' />
                    </label>
                    <label htmlFor="lname">{t('trans.signUp.lname')}
                        <input required type="text" placeholder=' Last Name' />
                    </label>
                </div>
                <br />
                <hr width='80%' />
                <h3>{t('trans.signUp.birthday')}</h3>
                <div className={styles.birthdayForm}>
                    <label htmlFor="year">{t('trans.signUp.year')}
                        <input required type="number" placeholder=' Year' />
                    </label>
                    <label htmlFor="month">{t('trans.signUp.month')}
                        <input required type="text" placeholder=' Month' />
                    </label>
                    <label htmlFor="day">{t('trans.signUp.day')}
                        <input required type="number" placeholder=' Day' />
                    </label>
                </div>
                <br />
                <hr width='80%' />
                <label htmlFor="phone">{t('trans.signUp.phoneNo')}</label>
                <input required type="number" placeholder=' Phone no.' />
                <label htmlFor="address">{t('trans.signUp.address')}</label>
                <input required type="text" placeholder=' Address ...' />
                <label htmlFor="email">{t('trans.signUp.email')}</label>
                <input required type="email" placeholder=' E-mail ...' />
                <label htmlFor="pwd">{t('trans.signUp.password')}</label>
                <input required type="password" placeholder=' Password ...' />
                <p>
                    <input type="checkbox" name='checkbox' />{t('trans.signUp.checkbox')}</p>
                <button>{t('trans.signUp.submit')}</button>
            </form>
        </div>
    </div>);
}

export default Signup;