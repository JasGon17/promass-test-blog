'use client'
import React, { useState } from 'react'
import { AddEntryModal } from '../AddEntryModal'
import { ButtonNewEntry } from '../ButtonNewEntry'
import { Logo } from '../Logo'
import styles from './header.module.css'

export const Header = () =>{
    const [isModalAddEntry, setIsModalAddEntry] = useState(false)

    const handleAddEntry = () =>{
        if(isModalAddEntry){
            setIsModalAddEntry(false)
        }else{
            setIsModalAddEntry(true)
        }
    }
    
    return(
        <header className={styles.Header__Container}>
            <Logo/>
            <ButtonNewEntry handleAddEntry={handleAddEntry}/>
            <AddEntryModal display={isModalAddEntry} handleCloseModal={handleAddEntry}/>
        </header>
    )
}