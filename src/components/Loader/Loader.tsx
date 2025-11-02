import React from 'react'
import { createPortal } from 'react-dom'
import styles from './Loader.module.css'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const Loader: React.FC = () => {
  const root = document.querySelector('body')
  if (!root) {
    console.error("The 'body' element was not found in the DOM.")
    return null
  }

  return createPortal(
    <div className={styles.loaderContainer}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress size={'100px'}/>
      </Box>
    </div>,
    root
  )
}

export default Loader