import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Navbar from '../Navbar'

const Layout = ({
  children,

}) => {
  return (
    <div>
      <Navbar/>
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  )
}

export default Layout