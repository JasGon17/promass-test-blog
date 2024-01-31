import React from 'react'
import { Logo } from '../Logo'
import styles from './header.module.css'

export const Header = () =>{
    return(
        <header className={styles.Header__Container}>
            <Logo/>
            <div>
                buscador
            </div>
            <div>
                generar entrada
            </div>
        </header>
    )
}