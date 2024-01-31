import React from 'react'
import styles from './Blogs.module.css'

export const Blogs = () =>{
    return(
        <section className={styles.Blogs__Container}>
            <div className={styles.Blogs__TitleCont}>
                <h2 className={styles.Blogs__Title}>Mis Blogs</h2>
                <div>buscador</div>
            </div>
            <div className={styles.Blogs__CardBlogContainer}>

            </div>
        </section>
    )
}