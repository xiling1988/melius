import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Headroom from 'react-headroom'

const Layout = ({ children }) => {
  return (
    <div className='relative'>
      <div className='absolute w-full top-0 z-50'>
        <Headroom>
          <Navbar />
        </Headroom>
      </div>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
