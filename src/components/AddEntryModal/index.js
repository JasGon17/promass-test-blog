'use client'
import React, { useEffect } from 'react'
import styles from './AddEntryModal.module.css'
import { FiX } from "react-icons/fi";
import PropTypes from 'prop-types'
import { AddEntryModalForm } from '../AddEntryModalForm';


export const AddEntryModal = ({display, handleCloseModal}) =>{
    useEffect(() => {
        if (display) {
          document.body.style.overflow = 'hidden'
          document.body.style.height = '100vh'
        } else {
          document.body.style.overflow = 'scroll'
          document.body.style.height = 'auto'
        }
      }, [display])
    
    return(
        <div className={display ? styles.AddEntryModal__Container : styles.AddEntryModal__ContainerOff}>
            <div className={styles.AddEntryModal__Form}>
                <h2 className={styles.AddEntryModal__TitleForm}>
                    Agrega un nuevo artículo
                </h2>
                <AddEntryModalForm/>
                <button 
                className={styles.AddEntryModal__CloseModal} 
                onClick={()=>{handleCloseModal()}}
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