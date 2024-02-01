'use client'
import React, { useEffect, useState } from 'react'
import styles from './AddEntryModal.module.css'
import { FiX } from 'react-icons/fi'
import PropTypes from 'prop-types'
import { AddEntryModalForm } from '../AddEntryModalForm'
import { Loader } from '../Loader'
import { postBlog } from '@/services/blogServices'
import { CardModal } from '../CardModal'

export const AddEntryModal = ({ display, handleCloseModal }) => {
  const [isResetForm, setIsResetForm] = useState(false)

  const [displayLoader, setDisplayLoader] = useState(false)

  const [displayModal, setDisplayModal] = useState(false)
  const [messageModal, setMessageModal] = useState('error')

  useEffect(() => {
    if (display) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [display])

  useEffect(() => {
    if (isResetForm) {
      setIsResetForm(false)
    }
  }, [isResetForm])

  const handleFixModal = () => {
    handleCloseModal()
    setIsResetForm(true)
  }

  const handleModal = () => {
    setDisplayModal(false)
  }

  const handleFormPost = async (data) => {
    setDisplayLoader(true)
    const response = await postBlog(data)
    if (response === 200) {
      console.log('peticion realizada con exito')
      setDisplayLoader(false)
      setDisplayModal(true)
      setMessageModal('succes')
    } else {
      console.log('peticion realizada sin exito')
      setDisplayLoader(false)
      setDisplayModal(true)
      setMessageModal('error')
    }
  }

  return (
        <div className={display ? styles.AddEntryModal__Container : styles.AddEntryModal__ContainerOff}>
            <div className={displayLoader || displayModal ? styles.AddEntryModal__FormOff : styles.AddEntryModal__Form}>
                <h2 className={styles.AddEntryModal__TitleForm}>
                    Agrega un nuevo artículo
                </h2>
                <AddEntryModalForm isResetForm={isResetForm} handleFormPost={handleFormPost}/>
                <button
                className={styles.AddEntryModal__CloseModal}
                onClick={() => { handleFixModal() }}
                type='button'>
                    <FiX/>
                </button>
            </div>
            <CardModal display={displayModal} message={messageModal} handleModal={handleModal}/>
            <Loader display={displayLoader}/>
        </div>
  )
}
AddEntryModal.propTypes = {
  display: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func
}
