import Link from 'next/link'
import React from 'react'
import styles from './Logo.module.css'

export const Logo = () => {
  return (
        <Link className={styles.Logo__Container} href='/'>
            MiBlog
        </Link>
  )
}
