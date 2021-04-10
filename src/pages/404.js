import React from 'react'
import * as styles from '../../SCSS/styles.module.scss'

const NotFound = () => {
    return (<div className={styles.notFoundPage}>
        <h1>Error : 404</h1>
        <h3>Page Not Found</h3>
    </div>);
}

export default NotFound;