'use client'
import React, { useState } from 'react'
import { CardBlog } from '../CardBlog'
import { SearchBar } from '../SearchBar'
import styles from './Blogs.module.css'

export const Blogs = ({data}) =>{
    const [dataBlog, setDataBlog] = useState(data)

    const handleListBlog = (data) => {
        setDataBlog(data)
    }

    return(
        <section className={styles.Blogs__Container}>
            <div className={styles.Blogs__TitleCont}>
                <h2 className={styles.Blogs__Title}>
                    Mis Artículos
                </h2>
                <SearchBar dataBlogs={data} handleListBlog={handleListBlog}/>
            </div>
            {dataBlog.length > 0 ?
                <div className={styles.Blogs__CardBlogContainer}>
                    {dataBlog.map((item, key)=>{
                        return<CardBlog
                        title={item.title}
                        author={item.author}
                        content={item.content}
                        date={item.created_at}
                        key={key}
                        />
                    })}
                </div>
            :
            <div className={styles.Blogs__ContDefaultText}>
                <p className={styles.Blogs__DefaultText}>
                    No se encontraron publicaciones
                </p>
            </div>
            }
        </section>
    )
}