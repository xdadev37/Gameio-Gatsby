import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'

const Signup = (props) => {
    return (<div className={styles.loginPage}>
        <form>
            <span onClick={() => {props.setLoginButton(false)}}></span>
            <label htmlFor="email">E-mail : </label>
            <input type="email" />
            <label htmlFor="password">Password : </label>
            <input type="password" />
            <button>Login</button>
        </form>
    </div>);
}

export default Signup;