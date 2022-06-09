import React from 'react'
import { motion } from 'framer-motion'

const View = ({
  children
}) => {
  return (
    <motion.div
      style={{width: '100%'}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default View