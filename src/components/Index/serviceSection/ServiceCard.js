import BackgroundWrapper from '@/components/Layout/BackgroundWrapper'
import CalendlyPopUp from '@/components/Modal/CalendlyPopUp'
import Link from 'next/link'
import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import useAOS from '@/app/(web)/aos/AosHook'

const ServiceCard = ({ link, index }) => {
  useAOS()
  return (
    <div
      data-aos={`zoom-in-${index == 1 ? 'left' : 'right'}`}
      key={link.name}
      scroll={true}
      className='flex flex-col hover:scale-105 transition-all rounded-2xl bg-white shadow-xl border border-meliusRed'
    >
      <BackgroundWrapper>
        <div className='relative flex-1 px-3 pb-8 pt-10 md:px-3'>
          <div className='absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-meliusBlue p-5 shadow-lg'>
            <link.icon className='h-6 w-6 text-meliusRed' aria-hidden='true' />
          </div>
          <h2 className='text-2xl text-center font-medium text-meliusBlue'>
            {link.name}
          </h2>
          <p className='mt-4 text-base text-gray-500'>{link.description}</p>
        </div>
        <div className='grid grid-cols-3 grid-rows-1 gap-x-1 px-2 mx-auto'>
          {link.features.map((feature) => (
            <p className='text-sm text-center hover:scale-105 transition-all text-meliusBlue hidden md:block'>
              <span className='text-meliusRed font-bold'>{feature.title}:</span>
              <br />
              {feature.description}
            </p>
          ))}
        </div>
        <div className='flex flex-row gap-x-5 rounded-bl-2xl rounded-br-2xl p-6 md:px-8'>
          <CalendlyPopUp
            title={`Contact us`}
            // href={link.href}
            className='text-base font-medium text-meliusRed hover:text-meliusBlue transition-all'
          />
          <Link
            className='text-meliusBlue text-sm font-bold hover:text-meliusRed my-auto'
            href={`/services/${link.href}`}
          >
            Find out more <ArrowLongRightIcon className='h-4 inline' />
          </Link>
        </div>
      </BackgroundWrapper>
    </div>
  )
}

export default ServiceCard
