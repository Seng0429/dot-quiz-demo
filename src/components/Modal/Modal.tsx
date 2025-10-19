import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

interface ModalITF {
  children: ReactNode
  showModal: boolean
}

const Modal: React.FC<ModalITF> = ({ children, showModal }) => {
  if (!showModal) {
    return null
  }

  const modalRoot = document.querySelector('body')
  if (!modalRoot) {
    console.error("The 'body' element was not found in the DOM.")
    return null
  }

  return createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modalCard}>
        {children}
      </div>
    </div>,
    modalRoot
  )
}

export default Modal
