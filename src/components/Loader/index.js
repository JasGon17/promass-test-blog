import React from 'react'
import PropTypes from 'prop-types'
import styles from './Loader.module.css'

export const Loader = ({display}) =>{
    return(
        <div className={ display ? styles.onLoader : styles.offLoader }>
            <div className={styles.loaderCont}>
                <div className={styles.loaderSon1}></div>
                <div className={styles.loaderSon2}></div>
                <div className={styles.loaderSon3}></div>
                <div className={styles.loaderSon4}></div>
            </div>
        </div>
    )
}
Loader.propTypes = {
    display: PropTypes.bool.isRequired
}