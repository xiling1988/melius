import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import BackgroundWrapper from '../Layout/BackgroundWrapper'

const benefits = [
  'Ethical Pricing: Transparent and fair pricing models.',
  'Quality: Guaranteed high quality shortlists',
  'Innovative Solutions: Custom-built programs tailored to your business needs.',
  'Speed: Guaranteed interviews within three weeks.',
]

export default function Vision() {
  return (
    <div className='bg-meliusBlue py-24 sm:py-32'>
      <BackgroundWrapper>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20'>
            <Image
              height={100}
              width={100}
              unoptimized
              className='h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm'
              src='/lense.png'
              alt=''
            />
            <div className='w-full flex-auto'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Why Choose Melius for Your HR and Staffing Needs?
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                To be a trusted partner of consumer brands by providing
                best-in-class Distribution & Brand Management Services to expand
                consumer and market footprint.
              </p>
              <ul
                role='list'
                className='mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2'
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className='flex gap-x-3'>
                    <CheckCircleIcon
                      className='h-7 w-5 flex-none text-meliusBlue'
                      aria-hidden='true'
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className='mt-10 flex'>
                <a
                  href='#'
                  className='text-sm font-semibold leading-6 text-meliusRed'
                >
                  Find out more about us <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'
          aria-hidden='true'
        >
          <div
            className='aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-meliusRed to-meliusRed opacity-025'
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </BackgroundWrapper>
    </div>
  )
}
