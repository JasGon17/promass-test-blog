import React from 'react'
import styles from './ButtonNewEntry.module.css'
import { FaPlus } from "react-icons/fa";

export const ButtonNewEntry = ({handleAddEntry}) =>{
    return(
        <button 
        className={styles.ButtonNewEntry__Container}
        onClick={()=>{handleAddEntry()}}
        type='button'
        >
            Nueva entrada
            <FaPlus/>
        </button>
    )
}