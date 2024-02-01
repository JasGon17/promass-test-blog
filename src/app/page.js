import React from 'react'
import { Blogs } from '@/components/Blogs'
import { Presentation } from '@/components/Presentation'
import { getDataBlog } from '@/services/blogServices'
import styles from './page.module.css'

export default async function Home () {
  const data = await getDataBlog()
  return (
    <main className={styles.main}>
      <Presentation/>
      <Blogs data={data}/>
    </main>
  )
}
