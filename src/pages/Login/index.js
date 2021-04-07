import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'

const Signup = () => {
    return (<div className={styles.loginPage}>
        <form>
            <h1>login Form</h1>
            <label htmlFor="email">E-mail : </label>
            <input type="email" />
            <label htmlFor="password">Password : </label>
            <input type="password" />
            <button>Login</button>
        </form>
    </div>);
}

export default Signup;