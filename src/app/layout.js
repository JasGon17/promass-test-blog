import React from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './page.module.css'
import PropTypes from 'prop-types'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MiBlog | Únete a nosotros',
  description: 'Únete a nosotros en MiBlog y descubre un océano de ideas esperando ser exploradas.',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  alternates: {
    canonical: 'https://miblog-test-promass.netlify.app/'
  },
  icons: {
    icon: '/static/icon-miblog.png'
  },
  openGraph: {
    title: 'MiBlog | Únete a nosotros',
    description: 'Únete a nosotros en MiBlog y descubre un océano de ideas esperando ser exploradas.',
    url: 'https://miblog-test-promass.netlify.app/',
    siteName: 'miblog',
    images: [
      {
        url: 'https://miblog-test-promass.netlify.app/static/miblog-og.webp',
        width: 800,
        height: 600
      }
    ],
    locale: 'en_MX',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MiBlog | Únete a nosotros',
    description: 'Únete a nosotros en MiBlog y descubre un océano de ideas esperando ser exploradas.',
    siteId: '',
    creator: '@miblog',
    creatorId: '',
    images: {
      url: 'https://miblog-test-promass.netlify.app/static/miblog-og.webp',
      alt: 'miblog'
    }
  }
}
export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header/>
        <div className={styles.Page__Children}>
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}
