import React from 'react'
import styles from './header.module.css'

export const Header = () =>{
    return(
        <header className={styles.Header__Container}>
            <div>
                MiBlog
            </div>
            <div>
                bucador
            </div>
            <div>
                generar entrada
            </div>
        </header>
    )
}