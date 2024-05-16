import { CheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Simple Yet Smart',
    description:
      'Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.',
  },
  {
    name: 'Freakishly Effective',
    description:
      'Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.',
  },
  {
    name: 'Accessible to All',
    description:
      'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
  },
  {
    name: 'Game Changing',
    description:
      'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.',
  },
  // {
  //   name: 'Visibility & Promotions',
  //   description:
  //     'Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.',
  // },
  // {
  //   name: 'Marketing and brand building',
  //   description:
  //     'Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.',
  // },
  // {
  //   name: 'Reporting & Forecasting',
  //   description:
  //     'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
  // },
  // {
  //   name: 'Sales and E-Commerce',
  //   description:
  //     'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
  // },
]

export default function Services() {
  return (
    <div className='bg-white  py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          <div>
            <h2 className='text-base font-semibold leading-7 text-nexusRed'>
              Our Services
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-nexusBlue sm:text-4xl'>
              Successful <span className='text-nexusRed'>Companies</span>{' '}
              <span className='text-nexusRed'>Happy </span>
              <span className='text-nexusBlue'>Communities</span>
            </p>
            <p className='mt-6 text-base leading-7 text-gray-600'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
            <div className='bg-red-500 h-80 w-80 mt-9 mx-auto rounded-xl'>
              <Image
                unoptimized
                height={100}
                width={100}
                src={'/building.png'}
                className='h-full w-full rounded-xl'
              />
            </div>
          </div>
          <dl className='col-span-2  grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div
                key={feature.name}
                className='relative p-9 hover:bg-gray-100 rounded-xl'
              >
                <dt className='font-semibold text-nexusBlue'>
                  <CheckIcon
                    className='absolute left-0 top-1 h-5 w-5 text-nexusRed'
                    aria-hidden='true'
                  />
                  {feature.name}
                </dt>
                <dd className='mt-2'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
