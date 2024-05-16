import '@/styles/globals.css'
import { ModalProvider } from '@/contexts/ModalContext'
import Modal from '@/components/Layout/Modal'

export default function App({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
      <Modal />
    </ModalProvider>
  )
}
