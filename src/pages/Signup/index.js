import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'
import Navbar from '../Navbar/Navbar'

const Signup = () => {
    return (<div className={styles.signUpPage} >
        <form>
            <h1>Signup Form</h1>
            <br />
            <div className={styles.initialForm}>
                <label htmlFor="fname">First Name :
                <input required type="text" placeholder=' First Name' />
                </label>
                <label htmlFor="lname">Last Name :
                <input required type="text" placeholder=' Last Name' />
                </label>
            </div>
            <br />
            <hr width='80%' />
            <h3>Birthday : </h3>
            <div className={styles.birthdayForm}>
                <label htmlFor="year">Year :
                <input required type="number" placeholder=' Year' />
                </label>
                <label htmlFor="month">Month :
                <input required type="text" placeholder=' Month' />
                </label>
                <label htmlFor="day">Day :
                <input required type="number" placeholder=' Day' />
                </label>
            </div>
            <br />
            <hr width='80%' />
            <label htmlFor="phone">Phone no. : </label>
            <input required type="number" placeholder=' Phone no.' />
            <label htmlFor="address">Address : </label>
            <input required type="text" placeholder=' Address ...' />
            <label htmlFor="email">E-mail : </label>
            <input required type="email" placeholder=' E-mail ...' />
            <label htmlFor="pwd">Password : </label>
            <input required type="password" placeholder=' Password ...' />
            <p>
                <input type="checkbox" name='checkbox' />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo deserunt ab dignissimos repellendus nulla expedita, debitis non nemo vitae praesentium. Nobis quod rerum illo debitis et quae, asperiores ratione consectetur.
            </p>
            <button>Submit</button>
        </form>
    </div>);
}

export default Signup;