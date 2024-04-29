import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export function useModal() {
  return useContext(ModalContext)
}

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ModalContext.Provider value={{ isOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  )
}
