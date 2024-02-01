import React from 'react'
import { CardModal } from '../CardModal'
import styles from './ModalConectionService.module.css'

export const ModalConectionService = ({displayModal, messageModal, handleModal }) =>{
    return(
        <div className={displayModal ? styles.ModalConectionService__Container : styles.ModalConectionService__ContainerOff}>
            <CardModal display={displayModal} message={messageModal} handleModal={handleModal}/>
        </div>
    )
}