import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'
import { Link } from 'gatsby'

const Home = () => {
    return (<>
        <Link to='/' ><span className={styles.logo} >\/<sup>\/</sup>\/</span></Link>
        <Link to='/' ><li>Home</li></Link>
    </>);
}

export default Home;