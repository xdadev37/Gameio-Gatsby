import React from 'react'
import * as styles from '../../../SCSS/styles.module.scss'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation()

    return (<>
        <Link to='/' ><span className={styles.logo} >\/<sup>\/</sup>\/</span></Link>
        <Link to='/' ><li>{t('trans.home')}</li></Link>
    </>);
}

export default Home;