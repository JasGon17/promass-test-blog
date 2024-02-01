import Link from 'next/link'
import React from 'react'
import { Logo } from '../Logo'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
        <footer className={styles.Footer__Container}>
            <div className={styles.Footer__BodyCont}>
                <Logo/>
                <div className={styles.Footer__ContactSection}>
                    <p className={styles.Footer__ContactTitle}>
                        Contacto:
                    </p>
                    <Link
                    className={styles.Footer__LinkStyle}
                    href='mailto:jacnto.gonzalez@gmail.com'>
                        jacnto.gonzalez@gmail.com
                    </Link>
                </div>
                <Link
                    className={styles.Footer__LinkStyle}
                    target='_blank'
                    href='https://jacintogonzalez.dev/'>
                        Powered by jacintogonzalez.dev
                </Link>
            </div>
            <p className={styles.Footer__CopyRight}>
                © 2024 All rights reserved by MiBlog.
            </p>
        </footer>
  )
}
