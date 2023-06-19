'use client'

import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
const ClientProvider = () => {
  return (
    <>
      <Toaster position='top-right'></Toaster>
    </>
  )
}

export default ClientProvider
