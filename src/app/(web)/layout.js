import '@/app/(web)/globals.css'
import HeadRoomWrapper from '@/components/Layout/HeadRoomWrapper'
import Navbar from '@/components/Layout/Navbar'
import { ModalProvider } from '@/contexts/ModalContext'
import Modal from '@/components/Modal/Modal'
import Footer from '@/components/Layout/Footer'

// import { Poppins } from 'next/font/google'
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '700', '900'],
//   style: ['normal', 'italic'],
//   variable: '--font-poppins',
// })

export const metadata = {
  title: {
    default: 'Melius Consulting | The Home of HR & Hiring Excellence',
    template: '%s - Melius Consulting',
  },
  description:
    'Welcome to a new standard in HR & Hiring Consultancy. Leadership, talent, people and organisational solutions to unlock our true potential.',
}

function RootLayout({ children }) {
  return (
    <html lang='en' id='root'>
      <body>
        <div className='relative'>
          <ModalProvider>
            <Modal />
            <div className='absolute w-full top-0 z-50'>
              <HeadRoomWrapper>
                <Navbar />
              </HeadRoomWrapper>
            </div>
            <main className='relative'>{children}</main>
            <Footer />
          </ModalProvider>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
