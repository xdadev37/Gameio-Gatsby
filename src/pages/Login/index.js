import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'

const Signup = (props) => {
    return (<div className={styles.loginPage}>
        <form>
            <span onClick={() => { props.setLoginButton(false) }}></span>
            <label htmlFor="email">E-mail :
            <input type="email" />
            </label>
            <label htmlFor="password">Password :
            <input type="password" />
            </label>
            <button>Login</button>
        </form>
    </div>);
}

export default Signup;