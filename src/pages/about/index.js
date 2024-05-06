import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import Header from '@/components/About/Header'
import Layout from '@/components/Layout/Layout'
import { getAuthors, client, urlFor } from '../../../sanity'
import Image from 'next/image'

const stats = [
  { label: 'Business was founded', value: '2012' },
  { label: 'People on the team', value: '120+' },
  { label: 'Users on the platform', value: '250k' },
  { label: 'Paid out to creators', value: '$70M' },
]
const values = [
  {
    name: 'Be world-class.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Take responsibility.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Be supportive.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.',
    icon: UserGroupIcon,
  },
  {
    name: 'Always learning.',
    description:
      'Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Share everything you know.',
    description:
      'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
    icon: SparklesIcon,
  },
  {
    name: 'Enjoy downtime.',
    description:
      'Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.',
    icon: SunIcon,
  },
]
// const team = [
//   {
//     name: 'Leslie Alexander',
//     role: 'Co-Founder / CEO',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     location: 'Toronto, Canada',
//   },
//   // More people...
// ]
const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [team, setTeam] = useState([])

  useEffect(() => {
    const getAuthors = async () => {
      try {
        const response = await client.fetch(
          '*[_type == "author"] {name, "imageUrl": image.asset->url, "bio": bio[0].children[0].text}'
        )
        setTeam(response)
      } catch (error) {
        console.error('Error fetching authors:', error)
      }
    }

    getAuthors()
  }, [])

  return (
    <Layout>
      <div className='bg-nexusBlue'>
        <main className='relative isolate'>
          <Header />

          {/* Content section */}
          <div className='mx-auto mt-20 max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
              <div className='grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2'>
                <div>
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                  <p className='mt-8'>
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas.
                  </p>
                </div>
                <div>
                  <p>
                    Erat pellentesque dictumst ligula porttitor risus eget et
                    eget. Ultricies tellus felis id dignissim eget. Est augue
                    maecenas risus nulla ultrices congue nunc tortor. Enim et
                    nesciunt doloremque nesciunt voluptate.
                  </p>
                  <p className='mt-8'>
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas. Iaculis
                    convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                </div>
              </div>
              <dl className='mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4'>
                {stats.map((stat, statIdx) => (
                  <div
                    key={statIdx}
                    className='flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6'
                  >
                    <dt className='text-base leading-7 text-gray-300'>
                      {stat.label}
                    </dt>
                    <dd className='text-3xl font-semibold tracking-tight text-white'>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Image section */}
          <div className='mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
            <img
              src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80'
              alt=''
              className='aspect-[9/4] w-full object-cover xl:rounded-3xl'
            />
          </div>

          {/* Values section */}
          <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Our values
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis.
              </p>
            </div>
            <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16'>
              {values.map((value) => (
                <div key={value.name} className='relative pl-9'>
                  <dt className='inline font-semibold text-white'>
                    <value.icon
                      className='absolute left-1 top-1 h-5 w-5 text-indigo-500'
                      aria-hidden='true'
                    />
                    {value.name}
                  </dt>{' '}
                  <dd className='inline'>{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Team section */}
          <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Our team
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Excepturi repudiandae alias ut. Totam aut facilis. Praesentium
                in neque vel omnis. Eos error odio. Qui fugit voluptatibus eum
                culpa.
              </p>
            </div>
            <ul
              role='list'
              className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4'
            >
              {team.map((person) => (
                <li key={person.name}>
                  {person.imageUrl && (
                    <img
                      className='aspect-[14/13] w-full rounded-2xl object-cover object-top'
                      src={urlFor(person.imageUrl)}
                      alt={person.name}
                    />
                  )}
                  <h3 className='mt-6 text-lg font-semibold leading-8 tracking-tight text-white'>
                    {person.name}
                  </h3>
                  {person.bio && (
                    <p className='text-base leading-7 text-gray-300'>
                      {person.bio}
                    </p>
                  )}
                  {/* Render other properties conditionally */}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA section */}
          <div className='relative isolate -z-10 mt-32 sm:mt-40'>
            <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20'>
                <img
                  className='h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm'
                  src='https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
                  alt=''
                />
                <div className='w-full flex-auto'>
                  <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                    Join our team
                  </h2>
                  <p className='mt-6 text-lg leading-8 text-gray-300'>
                    Lorem ipsum dolor sit amet consect adipisicing elit.
                    Possimus magnam voluptatum cupiditate veritatis in accusamus
                    quisquam.
                  </p>
                  <ul
                    role='list'
                    className='mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2'
                  >
                    {benefits.map((benefit) => (
                      <li key={benefit} className='flex gap-x-3'>
                        <CheckCircleIcon
                          className='h-7 w-5 flex-none'
                          aria-hidden='true'
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className='mt-10 flex'>
                    <a
                      href='#'
                      className='text-sm font-semibold leading-6 text-indigo-400'
                    >
                      See our job postings{' '}
                      <span aria-hidden='true'>&rarr;</span>
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
                className='aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-nexusRed to-nexusRed opacity-75'
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
