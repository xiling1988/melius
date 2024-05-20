import Image from 'next/image'
import consultancyPic from '../../../../public/service-consult.jpeg'
import recruitmentPic from '../../../../public/service-recruitment.png'
import BackgroundWrapper from '@/components/Layout/BackgroundWrapper'
import Link from 'next/link'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
function Services() {
  return (
    <div className='bg-gray-50'>
      <BackgroundWrapper colorFrom={'meliusBlue'} colorTo={'meliusRed'}>
        <div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-22 lg:max-w-7xl lg:px-8'>
          {/* Details section */}
          <section aria-labelledby='details-heading'>
            <div className='flex flex-col py-20 items-center text-center'>
              <h2
                id='details-heading'
                className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'
              >
                The Fine Details
              </h2>
              <p className='mt-3 max-w-3xl text-lg text-gray-600'>
                Our patented padded snack sleeve construction protects your
                favorite treats from getting smooshed during all-day adventures,
                long shifts at work, and tough travel schedules.
              </p>
            </div>

            <div className='mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
              <Link href={'/services/consultancy'}>
                <div className='aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
                  <Image
                    // width={100}
                    // height={100}
                    src={consultancyPic}
                    alt='Drawstring top with elastic loop closure and textured interior padding.'
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <p className='mt-8 text-base text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  eos atque tempore dolores, molestiae nulla recusandae quam
                  necessitatibus blanditiis! Ratione non, quidem dignissimos
                  amet ea optio recusandae veniam fuga. Quibusdam.
                </p>
              </Link>
              <Link href={'/services/hiring-excellence'}>
                <div className='aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
                  <Image
                    // width={100}
                    // height={100}
                    src={recruitmentPic}
                    alt='Front zipper pouch with included key ring.'
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <p className='mt-8 text-base text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt ex ratione corrupti incidunt cumque? Pariatur,
                  veritatis molestiae placeat quia dolorum ipsam nostrum,
                  excepturi expedita eum porro voluptatem consequuntur, nobis
                  ratione.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </BackgroundWrapper>
    </div>
  )
}

export default Services
