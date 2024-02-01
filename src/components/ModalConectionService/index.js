import React from 'react'
import { CardModal } from '../CardModal'
import styles from './ModalConectionService.module.css'
import PropTypes from 'prop-types'

export const ModalConectionService = ({ displayModal, messageModal, handleModal }) => {
  return (
        <div className={displayModal ? styles.ModalConectionService__Container : styles.ModalConectionService__ContainerOff}>
            <CardModal display={displayModal} message={messageModal} handleModal={handleModal}/>
        </div>
  )
}
ModalConectionService.propTypes = {
  displayModal: PropTypes.bool.isRequired,
  messageModal: PropTypes.string,
  handleModal: PropTypes.func

}
