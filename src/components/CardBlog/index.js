'use client'
import React, { useEffect, useState } from 'react'
import styles from './CardBlog.module.css'
import PropTypes from 'prop-types'

export const CardBlog = ({title, author, content, date}) =>{
    const [isMore, setIsMore] = useState(false)

    const [newContent, setNewContent] = useState(content.substring(0, 70) + '...')

    useEffect(()=>{
        if(isMore){
            setNewContent(content)
        }else{
            setNewContent(content.substring(0, 70) + '...')
        }
    },[isMore])

    const handleSeeMore = () => {
        if(isMore){
            setIsMore(false)
        }else{
            setIsMore(true)
        }
    }

    return(
        <div className={isMore ? styles.CardBlog__ContainerOn : styles.CardBlog__Container}>
            <div className={styles.CardBlog__TitleCont}>
                <h3 className={styles.CardBlog__Title}>
                    {title}
                </h3>
                <p className={styles.CardBlog__Date}>
                    {date}
                </p>
            </div>
            <p className={styles.CardBlog__Content}>
               {newContent}
            </p>
            <p className={styles.CardBlog__Author}>
                Autor: {author}
            </p>  
            <button className={styles.CardBlog__Button} type='button' onClick={()=>{handleSeeMore()}}>
                {isMore ? 'Leer menos' : 'Leer más'}
            </button>
        </div>
    )
}
CardBlog.propTypes={
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}