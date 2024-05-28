import BackgroundWrapper from '@/components/Layout/BackgroundWrapper'
import ModalButton from '@/components/Layout/ModalButton'
import CalendlyPopUp from '@/components/Modal/CalendlyPopUp'
import ServicesHeader from '@/components/services/ServicesHeader'
import { useModal } from '@/contexts/ModalContext'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

const page = () => {
  return (
    <>
      <ServicesHeader />
      <div
        id='consultancy'
        className='bg-white px-3 pt-24 sm:pt-32 sm:pb-16 lg:px-8'
      >
        <BackgroundWrapper>
          <div className='mx-auto max-w-7xl md:px-6 lg:px-8'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start'>
              <div className='px-6 lg:px-0 lg:pr-4 lg:pt-4'>
                <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-lg'>
                  <h2 className='text-base font-semibold leading-7 text-meliusBlue'>
                    Optimize your Business
                  </h2>
                  <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                    HR Consultancy
                  </p>
                  <p className='text-meliusRed font-bold italic lg:text-center'>
                    By Melius
                  </p>
                  <p className='mt-6 text-lg leading-8 text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                  <iframe
                    className='mx-auto block lg:hidden my-8 rounded-xl text-center w-full h-26'
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/Hq7VgnlqS6g?si=OIlGneeNUcJ8cpco'
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerpolicy='strict-origin-when-cross-origin'
                    allowfullscreen
                  ></iframe>
                  <div className='text-center lg:hidden'>
                    <ModalButton title='Book your Call!' />
                  </div>

                  <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                    {features.map((feature) => (
                      <div key={feature.name} className='relative pl-9'>
                        <dt className='inline font-semibold text-gray-900'>
                          <feature.icon
                            className='absolute left-1 top-1 h-5 w-5 text-meliusBlue'
                            aria-hidden='true'
                          />
                          {feature.name}
                        </dt>{' '}
                        <dd className='inline'>{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className='sm:px-6 lg:px-0 my-auto'>
                <div className='py-12'>
                  <iframe
                    className='mx-auto hidden lg:block my-auto rounded-xl text-center w-full h-96'
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/Hq7VgnlqS6g?si=OIlGneeNUcJ8cpco'
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerpolicy='strict-origin-when-cross-origin'
                    allowfullscreen
                  ></iframe>
                  <div className='mx-auto text-center mt-10 hidden lg:block'>
                    <ModalButton title='Book your Call!' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundWrapper>
      </div>
      <div
        id='hiring'
        className='bg-white px-6 pt-12 lg:px-8 pb-20 -mt-12 lg:mt-0'
      >
        <BackgroundWrapper>
          <div className='mx-auto max-w-7xl md:px-6 lg:px-8'>
            <div className='grid grid-cols-1 gap-x-24 gap-y-0 sm:gap-y-20 lg:grid-cols-2 lg:items-start'>
              <div className='sm:px-6 lg:px-0 my-auto'>
                <div className='py-12 hidden lg:block'>
                  <iframe
                    className='mx-auto my-auto rounded-xl text-center w-full h-96'
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/9VrwU6RW-vg?si=w4omks9ehQsNaF_t'
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerpolicy='strict-origin-when-cross-origin'
                    allowfullscreen
                  ></iframe>
                  <div className='mx-auto text-center mt-10'>
                    <CalendlyPopUp title='Book your Call!' />
                  </div>
                </div>
              </div>
              <div className='px-6 lg:px-0 lg:pr-4 lg:pt-4'>
                <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-lg'>
                  <h2 className='text-base font-semibold leading-7 text-meliusBlue'>
                    Optimize your Business
                  </h2>
                  <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                    What is <span className='italic'>#HiringExcellence</span>
                  </p>
                  <p className='text-meliusRed font-bold italic lg:text-right lg:mr-16'>
                    By Melius
                  </p>
                  <p className='mt-6 text-lg leading-8 text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                  <div className='py-12 lg:hidden'>
                    <iframe
                      className='mx-auto my-auto rounded-xl text-center w-full h-96'
                      width='560'
                      height='315'
                      src='https://www.youtube.com/embed/9VrwU6RW-vg?si=w4omks9ehQsNaF_t'
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      referrerpolicy='strict-origin-when-cross-origin'
                      allowfullscreen
                    ></iframe>
                    <div className='mx-auto text-center mt-10'>
                      <CalendlyPopUp title='Book your Call!' />
                    </div>
                  </div>
                  <dl className='mt-4 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                    {features.map((feature) => (
                      <div key={feature.name} className='relative pl-9'>
                        <dt className='inline font-semibold text-gray-900'>
                          <feature.icon
                            className='absolute left-1 top-1 h-5 w-5 text-meliusBlue'
                            aria-hidden='true'
                          />
                          {feature.name}
                        </dt>{' '}
                        <dd className='inline'>{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </BackgroundWrapper>
      </div>
    </>
  )
}

export default page
