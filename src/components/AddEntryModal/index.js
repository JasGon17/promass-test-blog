'use client'
import React, { useEffect, useState } from 'react'
import styles from './AddEntryModal.module.css'
import { FiX } from "react-icons/fi";
import PropTypes from 'prop-types'
import { AddEntryModalForm } from '../AddEntryModalForm';


export const AddEntryModal = ({display, handleCloseModal}) =>{
    const [isResetForm, setIsResetForm] = useState(false)
    useEffect(() => {
        if (display) {
          document.body.style.overflow = 'hidden'
          document.body.style.height = '100vh'
        } else {
          document.body.style.overflow = 'scroll'
          document.body.style.height = 'auto'
        }
      }, [display])
    useEffect(()=>{
        if(isResetForm){
            setIsResetForm(false)
        }
    },[isResetForm])
    
      const handleFixModal = () =>{
        handleCloseModal()
        setIsResetForm(true)
      }
    
    return(
        <div className={display ? styles.AddEntryModal__Container : styles.AddEntryModal__ContainerOff}>
            <div className={styles.AddEntryModal__Form}>
                <h2 className={styles.AddEntryModal__TitleForm}>
                    Agrega un nuevo artículo
                </h2>
                <AddEntryModalForm isResetForm={isResetForm}/>
                <button 
                className={styles.AddEntryModal__CloseModal} 
                onClick={()=>{handleFixModal()}}
                type='button'>
                    <FiX/>
                </button>
            </div>
        </div>
    )
}
AddEntryModal.propTypes ={
    display: PropTypes.bool.isRequired
}