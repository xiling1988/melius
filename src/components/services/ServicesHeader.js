import {
  LifebuoyIcon,
  NewspaperIcon,
  ArrowRightIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import BackgroundWrapper from '../Layout/BackgroundWrapper'
import Link from 'next/link'
import CalendlyPopUp from '../Modal/CalendlyPopUp'

const supportLinks = [
  {
    name: 'HR Consultancy',
    href: '#consultancy',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Hiring Excellence',
    href: '#hiring',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: NewspaperIcon,
  },
]

function ServicesHeader() {
  return (
    <div className='bg-white'>
      {/* Header */}
      <div className='relative bg-gray-800 py-32'>
        <div className='absolute inset-0'>
          <img
            className='h-full w-full object-cover'
            src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100'
            alt=''
          />
          <div
            className='absolute  bg-meliusBlue inset-0 opacity-50 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8'>
          <h1 className='text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl'>
            Our Services
          </h1>
          <p className='mt-6 max-w-3xl font-bold text-xl text-white'>
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames. Dui, amet, nec sit pulvinar.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className='relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8'
        aria-labelledby='contact-heading'
      >
        <h2 className='sr-only' id='contact-heading'>
          Contact us
        </h2>
        <div className='grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0'>
          {supportLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              scroll={true}
              className='flex flex-col hover:scale-105 transition-all rounded-2xl bg-white shadow-xl'
            >
              <div className='relative flex-1 px-6 pb-8 pt-16 md:px-8'>
                <div className='absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-meliusBlue p-5 shadow-lg'>
                  <link.icon
                    className='h-6 w-6 text-meliusRed'
                    aria-hidden='true'
                  />
                </div>
                <h3 className='text-xl font-medium text-meliusBlue'>
                  {link.name}
                </h3>
                <p className='mt-4 text-base text-gray-500'>
                  {link.description}
                </p>
              </div>
              <div className='rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8'>
                <CalendlyPopUp
                  title={`Contact us`}
                  // href={link.href}
                  className='text-base font-medium text-meliusRed hover:text-meliusBlue transition-all'
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServicesHeader
