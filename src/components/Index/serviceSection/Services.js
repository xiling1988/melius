import { LifebuoyIcon, NewspaperIcon } from '@heroicons/react/24/outline'
import ServiceCard from './ServiceCard'
import useAOS from '@/app/(web)/aos/AosHook'
const supportLinks = [
  {
    name: 'Comprehensive HR Consulting Services',
    href: '#consultancy',
    description:
      'At Melius, we offer a wide range of HR consulting services designed to meet the unique needs of your business. Our global HR consultancy expertise ensures that we deliver solutions tailored to your organizational challenges.',
    icon: LifebuoyIcon,
    features: [
      {
        title: 'Leadership Training',
        description:
          'Develop high-performance leadership skills within your team.',
      },
      {
        title: 'Business Transformation',
        description: 'Implement strategies for sustainable business growth.',
      },
      {
        title: 'Employee Engagement',
        description:
          'Boost productivity and morale with our customized programs.',
      },
    ],
  },
  {
    name: 'Ethical and Efficient Staffing Solutions',
    href: '#hiring',
    description:
      'Our staffing services are designed to provide high-quality recruitment with a focus on ethical practices. We guarantee a high fill rate and client satisfaction by leveraging data-based analytics and market intelligence.',
    icon: NewspaperIcon,
    features: [
      {
        title: 'Headhunting Services',
        description:
          'Find the best talent with our specialized headhunting services.',
      },
      {
        title: 'Recruitment Analytics',
        description:
          'Use data-driven insights to optimize your hiring process.',
      },
      {
        title: 'Intelligent Hiring',
        description:
          'Stay ahead with our comprehensive market research and intelligence.',
      },
    ],
  },
]

export default function Services() {
  useAOS()
  return (
    <div className='bg-meliusRed'>
      <div className='bg-[url(https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100)] bg-cover bg-center'>
        {/* <div className=' opacity-40'>
            <img
              className='h-full w-full object-cover'
              src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100'
              alt=''
            />
            <div
              className='absolute bg-meliusBlue opacity-50 '
              aria-hidden='true'
            />
          </div> */}
        <div className='relative mx-auto max-w-7xl py-16 px-6 lg:px-8'>
          <h3 className='text-2xl font-bold tracking-tight text-meliusBlue md:text-5xl lg:text-6xl'>
            Our Services
          </h3>
          <p className='mt-6 max-w-3xl font-bold text-xl text-meliusBlue'>
            At Melius, we offer a wide range of HR consulting services designed
            to meet the unique needs of your business. Our global HR consultancy
            expertise ensures that we deliver solutions tailored to your
            organizational challenges.
          </p>
        </div>

        {/* Overlapping cards */}
        <section
          className='relative z-10 mx-auto max-w-7xl px-6 pb-32 lg:px-8'
          aria-labelledby='contact-heading'
        >
          <div className='grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0'>
            {supportLinks.map((link, i) => (
              <ServiceCard key={i} index={i} link={link} />
            ))}
          </div>
        </section>
        {/* <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            <div>
              <h2 className='text-base font-semibold leading-7 text-meliusRed'>
                Our Services
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-meliusBlue sm:text-4xl'>
                Successful <span className='text-meliusRed'>Companies</span>{' '}
                <span className='text-meliusRed'>Happy </span>
                <span className='text-meliusBlue'>Communities</span>
              </p>
              <p className='mt-6 text-base leading-7 text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
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
                  <dt className='font-semibold text-meliusBlue'>
                    <CheckIcon
                      className='absolute left-0 top-1 h-5 w-5 text-meliusRed'
                      aria-hidden='true'
                    />
                    {feature.name}
                  </dt>
                  <dd className='mt-2'>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div> */}
      </div>
    </div>
  )
}
