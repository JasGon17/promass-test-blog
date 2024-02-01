'use client'
import { getDataBlog } from '@/services/blogServices'
import React, { useState } from 'react'
import { AddEntryModal } from '../AddEntryModal'
import { ButtonNewEntry } from '../ButtonNewEntry'
import { Logo } from '../Logo'
import { ModalConectionService } from '../ModalConectionService'
import styles from './header.module.css'

export const Header = () => {
  const [isModalAddEntry, setIsModalAddEntry] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)
  const messageModal = 'errorConection'

  const handleAddEntry = async () => {
    if (isModalAddEntry) {
      setIsModalAddEntry(false)
    } else {
      const data = await getDataBlog()
      if (data === 400) {
        setDisplayModal(true)
      } else {
        setIsModalAddEntry(true)
      }
    }
  }
  const handleModal = () => {
    setDisplayModal(false)
  }

  return (
        <div>
            <AddEntryModal display={isModalAddEntry} handleCloseModal={handleAddEntry}/>
            <ModalConectionService displayModal={displayModal} handleModal={handleModal} messageModal={messageModal}/>
            <header className={styles.Header__Container}>
                <Logo/>
                <ButtonNewEntry handleAddEntry={handleAddEntry}/>
            </header>
        </div>

  )
}
