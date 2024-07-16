import { useEffect, useState } from 'react'
import { useModal } from '@/contexts/ModalContext'
import { PopupButton } from 'react-calendly'
import CalendlyPopUp from '../Modal/CalendlyPopUp'
import ModalButton from '../Layout/ModalButton'
import useAOS from '@/app/(web)/aos/AosHook'

function Hero() {
  const { openModal, defaultUrl } = useModal()
  useAOS()

  const [rootElement, setRootElement] = useState(null)

  useEffect(() => {
    setRootElement(document.getElementById('calendly-root'))
  }, [])

  return (
    <div className='relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14'>
      <div
        className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96'
        aria-hidden='true'
      />
      <div className='mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
          <h1
            data-aos='zoom-in'
            className='max-w-2xl text-4xl font-bold tracking-tight text-meliusBlue sm:text-6xl lg:col-span-2 xl:col-auto'
          >
            Expert <span className='text-meliusRed'>HR Consulting</span> &{' '}
            <span className='text-meliusRed'>Staffing Solutions</span>
          </h1>
          <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
            <p
              data-aos='zoom-in-up'
              data-aos-delay='600'
              className='pb-3 max-w-2xl text-lg font-bold tracking-tight text-meliusBlue sm:text-lg lg:col-span-2 xl:col-auto'
            >
              Transform your Business with Melius: your Partner in Excellence
              for HR Consultancy in Dubai and Beyond
            </p>
            <p
              data-aos='zoom-in-up'
              data-aos-delay='800'
              className='text-lg leading-8 text-gray-600'
            >
              Welcome to Melius: We redefine HR consultancy and staffing
              services to drive excellence and innovation in your business.
              Whether you need expert advice to unlock organizational potential
              or efficient recruitment services to find top talent, we are here
              to help.
            </p>
            <div
              data-aos='zoom-in-up'
              data-aos-delay='800'
              className='mt-10 flex items-center gap-x-6'
            >
              <CalendlyPopUp title={'Calendly Call'} />
              <ModalButton title={'10to8 Call'} />
            </div>
          </div>
          <img
            data-aos='zoom-in-up'
            src='https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80'
            alt=''
            className='mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'
          />
        </div>
      </div>
      <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
    </div>
  )
}

export default Hero
