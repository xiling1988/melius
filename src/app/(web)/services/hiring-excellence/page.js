import BackgroundWrapper from '@/components/Layout/BackgroundWrapper'
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

const supportLinks = [
  {
    name: 'Sales',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Media Inquiries',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: NewspaperIcon,
  },
]

const page = () => {
  return (
    <div className='bg-white px-6 py-24 sm:pt-36  lg:px-8'>
      <BackgroundWrapper>
        <div className='mx-auto max-w-3xl text-center pb-32'>
          <p className='text-base font-semibold leading-7 text-meliusBlue'>
            Get the Hiring Solutions you need
          </p>
          <h2 className='mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pb-3'>
            What's <span className='italic'>#HiringExcellence?</span>
            <br />
            <span className='text-meliusRed text-2xl sm:text-3xl tracking-tight'>
              by Melius?
            </span>
          </h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className='py-12'>
            <iframe
              className='mx-auto text-center w-full h-96'
              // width='700'
              // height='400'
              src='https://www.youtube.com/embed/9VrwU6RW-vg?si=w4omks9ehQsNaF_t'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <section
          className='relative z-10 pt-20 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8 bg-while'
          aria-labelledby='contact-heading'
        >
          <BackgroundWrapper>
            <h2 className='sr-only' id='contact-heading'>
              Contact us
            </h2>
            <div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
              {supportLinks.map((link) => (
                <div
                  key={link.name}
                  className='flex flex-col rounded-2xl bg-white shadow-xl'
                >
                  <div className='relative flex-1 px-6 pb-8 pt-16 md:px-8'>
                    <div className='absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg'>
                      <link.icon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </div>
                    <h3 className='text-xl font-medium text-gray-900'>
                      {link.name}
                    </h3>
                    <p className='mt-4 text-base text-gray-500'>
                      {link.description}
                    </p>
                  </div>
                  <div className='rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8'>
                    <a
                      href={link.href}
                      className='text-base font-medium text-indigo-700 hover:text-indigo-600'
                    >
                      Contact us<span aria-hidden='true'> &rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </BackgroundWrapper>
        </section>
      </BackgroundWrapper>
    </div>
  )
}

export default page
