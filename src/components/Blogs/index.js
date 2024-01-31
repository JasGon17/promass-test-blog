import React from 'react'
import { CardBlog } from '../CardBlog'
import styles from './Blogs.module.css'

const dataBlogs = [
    {
        title: 'como volar',
        author: 'Jacinto',
        date:'12-02-2023',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem qui sapiente, quam ut quae commodi cum repudiandae sequi sunt quibusdam, ratione, facilis iusto aliquam libero at repellat nam et nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at eligendi voluptas nam rerum voluptatum! Ipsa nobis tempore natus, cumque illo unde deserunt nostrum ut, sunt animi numquam quaerat repudiandae.'
    },
    {
        title: 'como ser dnsmshttl',
        author: 'Jacinto',
        date:'12-02-2023',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem qui sapiente, quam ut quae commodi cum repudiandae sequi sunt quibusdam, ratione, facilis iusto aliquam libero at repellat nam et nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at eligendi voluptas nam rerum voluptatum! Ipsa nobis tempore natus, cumque illo unde deserunt nostrum ut, sunt animi numquam quaerat repudiandae.'
    },
    {
        title: 'como ser baggy',
        author: 'desconocido',
        date:'12-02-2023',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem qui sapiente, quam ut quae commodi cum repudiandae sequi sunt quibusdam, ratione, facilis iusto aliquam libero at repellat nam et nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at eligendi voluptas nam rerum voluptatum! Ipsa nobis tempore natus, cumque illo unde deserunt nostrum ut, sunt animi numquam quaerat repudiandae.'
    },
    {
        title: '100 razones para ir al gym',
        author: 'rq',
        date:'12-02-2023',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem qui sapiente, quam ut quae commodi cum repudiandae sequi sunt quibusdam, ratione, facilis iusto aliquam libero at repellat nam et nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at eligendi voluptas nam rerum voluptatum! Ipsa nobis tempore natus, cumque illo unde deserunt nostrum ut, sunt animi numquam quaerat repudiandae.'
    },
]

export const Blogs = () =>{
    return(
        <section className={styles.Blogs__Container}>
            <div className={styles.Blogs__TitleCont}>
                <h2 className={styles.Blogs__Title}>
                    Mis Artículos
                </h2>
                <div>buscador</div>
            </div>
            {dataBlogs.length > 0 ?
                <div className={styles.Blogs__CardBlogContainer}>
                    {dataBlogs.map((item, key)=>{
                        return<CardBlog
                        title={item.title}
                        author={item.author}
                        content={item.content}
                        date={item.date}
                        key={key}
                        />
                    })}
                </div>
            :
            <div className={styles.Blogs__ContDefaultText}>
                <p className={styles.Blogs__DefaultText}>
                    Aún no hay ninguna publicación
                </p>
            </div>
            }
        </section>
    )
}