'use client'
import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export function useModal() {
  return useContext(ModalContext)
}

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [bookingUrl, setBookingUrl] = useState('')
  const [defaultUrl, setDefaultUrl] = useState(
    '3eeeadec-57e5-4c78-9f48-22a6c1a635fb'
  )

  const openModal = (url) => {
    setBookingUrl(url)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  // const toggleModal = () => {
  //   setIsOpen(!isOpen)
  // }

  return (
    <ModalContext.Provider
      value={{ isOpen, bookingUrl, defaultUrl, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}
