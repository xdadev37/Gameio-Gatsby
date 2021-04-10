import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'
import { useTranslation } from 'react-i18next'

const Signup = (props) => {
    const { t } = useTranslation()

    return (<div className={styles.loginPage}>
        <form>
            <span onClick={() => { props.setLoginButton(false) }}></span>
            <label htmlFor="email">{t('trans.loginPage.email')}
                <input type="email" />
            </label>
            <label htmlFor="password">{t('trans.loginPage.password')}
                <input type="password" />
            </label>
            <button>{t('trans.loginPage.login')}</button>
        </form>
    </div>);
}

export default Signup;