'use client'
import { useModal } from '@/contexts/ModalContext'
import React from 'react'

const ModalButton = ({ title }) => {
  const { openModal, defaultUrl } = useModal()
  return (
    <button
      onClick={() => openModal(defaultUrl)}
      className='rounded-md bg-meliusBlue hover:bg-meliusRed hover:text-meliusBlue transition-all px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      {title}
    </button>
  )
}

export default ModalButton
