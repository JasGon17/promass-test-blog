'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from './AddEntryModalForm.module.css'
import { AddEntrySchema } from '@/utils/AddEntrySchema'

export const AddEntryModalForm = ({isResetForm, handleFormPost}) => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(AddEntrySchema),
        mode: 'onChange',
        criteriaMode: 'all'
      })
    const [resetForm, setResetForm] = useState(false)
    
    useEffect(() => {
        if(isResetForm || resetForm){
            reset()
        }
    },[isResetForm, resetForm])

    useEffect(()=>{
        if(resetForm){
            setResetForm(false)
        }
    },[resetForm])
    
    const  dateEntry = new Date();
    const day = dateEntry.getDate();
    const month = dateEntry.getMonth() + 1;
    const year = dateEntry.getFullYear();
    const newMonth= month < 10 ? '0' + month : month
    const formattedDate = day + '/' + newMonth + '/' + year;

    const registerTitle = register('title')
    const registerAuthor = register('author')
    const registerContent = register('content')

    const onSubmit = (data) =>{
        handleFormPost(data)
        setResetForm(true)
    }
      
    return(
            <form 
            className={styles.AddEntryModalForm__Container}
            onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.AddEntryModalForm__DateCont}>
                    <p className={styles.TextDate}>
                        Fecha de entrada:
                    </p>
                    <p className={styles.TextDate}>
                        {formattedDate}
                    </p>
                </div>
                <div className={styles.AddEntryModalForm__ParContInput}>
                    <div className={styles.AddEntryModalForm__ContInput}>
                        <label
                        className={styles.AddEntryModalForm__Label} 
                        htmlFor="title">
                            Ingresa Titulo
                            <input 
                            id='title'
                            className={styles.AddEntryModalForm__Input} 
                            type="text" 
                            {...registerTitle}
                            />
                        </label>
                        { errors?.title &&
                        <span className={styles.AddEntryModalForm__ErrorMessage}>
                        {errors?.title?.message}
                        </span>
                        }
                    </div>
                    <div className={styles.AddEntryModalForm__ContInput}>
                        <label
                        className={styles.AddEntryModalForm__Label} 
                        htmlFor="author">
                            Ingresa Nombre del Autor
                            <input 
                            id='author'
                            className={styles.AddEntryModalForm__Input} 
                            type="text" 
                            {...registerAuthor}
                            />
                        </label>
                        { errors?.author &&
                        <span className={styles.AddEntryModalForm__ErrorMessage}>
                        {errors?.author?.message}
                        </span>
                    }
                    </div>
                </div>
                <div className={styles.AddEntryModalForm__ContInput}>
                    <label
                    className={styles.AddEntryModalForm__Label} 
                    htmlFor="content">
                        Ingresa el Contenido
                        <textarea 
                        id='content'
                        className={styles.AddEntryModalForm__InputTextArea} 
                        type="text" 
                        {...registerContent}
                        />
                    </label>
                    { errors?.content &&
                    <span className={styles.AddEntryModalForm__ErrorMessage}>
                    {errors?.content?.message}
                    </span>
                    }
                </div>
                <div className={styles.AddEntryModalForm__ContButton}>
                    <button className={styles.AddEntryModalForm__ButtonSubmit} type='submit'>
                        Generar
                    </button>   
                </div>
            </form>
    )
}