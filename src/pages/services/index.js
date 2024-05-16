import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Layout from '@/components/Layout/Layout'
import SubjectsHeader from '@/components/services/SubjectsHeader'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt:
            'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt:
            'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt:
            'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt:
            'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const collections = [
  {
    name: 'Free',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg',
    imageAlt: 'Woman wearing a comfortable cotton t-shirt.',
  },
  {
    name: 'Career Coaching',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg',
    imageAlt: 'Man wearing a comfortable and casual cotton t-shirt.',
  },
  {
    name: 'Forever',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg',
    imageAlt:
      'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
  },
]
const trendingProducts = [
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  // More products...
]
const perks = [
  {
    name: 'Free returns',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description:
      'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    name: 'Same day delivery',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    name: 'All year discount',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description:
      'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
]
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const index = () => {
  return (
    <Layout>
      <main className=''>
        {/* Hero section */}
        <div className='relative'>
          {/* Background image and overlap */}
          <div
            aria-hidden='true'
            className='absolute inset-0 hidden sm:flex sm:flex-col'
          >
            <div className='relative w-full flex-1 bg-gray-800'>
              <div className='absolute inset-0 overflow-hidden'>
                <img
                  src='/rockstar-emp.jpeg'
                  alt=''
                  className='h-full w-full object-cover object-top'
                />
              </div>
              <div className='absolute inset-0 bg-gray-900 opacity-50' />
            </div>
            <div className='h-32 w-full bg-white md:h-40 lg:h-48' />
          </div>

          <div className='relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8'>
            {/* Background image and overlap */}
            <div
              aria-hidden='true'
              className='absolute inset-0 flex flex-col sm:hidden'
            >
              <div className='relative w-full flex-1 bg-gray-800'>
                <div className='absolute inset-0 overflow-hidden'>
                  <img
                    src='/rockstar-emp.jpeg'
                    alt=''
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <div className='absolute inset-0 bg-gray-900 opacity-50' />
              </div>
              <div className='h-48 w-full bg-white' />
            </div>
            <div className='relative py-32'>
              <h1 className='text-4xl font-bold tracking-tight text-white mt-20 md:mt-40 sm:text-5xl md:text-6xl'>
                Become a Melius Rockstar!
              </h1>
              <div className='mt-4 sm:mt-6'>
                <a
                  href='#'
                  className='inline-block rounded-md border border-transparent bg-nexusRed px-8 py-3 font-medium text-white hover:bg-nexusBlue'
                >
                  Your first session here
                </a>
              </div>
            </div>
          </div>

          <section
            aria-labelledby='collection-heading'
            className='relative -mt-96 sm:mt-0'
          >
            <h2 id='collection-heading' className='sr-only'>
              Collections
            </h2>
            <div className='mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8'>
              {collections.map((collection) => (
                <div
                  key={collection.name}
                  className='group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto'
                >
                  <div>
                    <div
                      aria-hidden='true'
                      className='absolute inset-0 overflow-hidden rounded-lg'
                    >
                      <div className='absolute inset-0 overflow-hidden group-hover:opacity-75'>
                        <h2 className='text-sky-400 bg-nexusBlue text-3xl font-bold text-center py-16 h-48 z-20'>
                          {collection.name}
                        </h2>
                        <img
                          src={collection.imageSrc}
                          alt={collection.imageAlt}
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50' />
                    </div>
                    <div className='absolute inset-0 flex items-end rounded-lg p-6'>
                      <div>
                        <p aria-hidden='true' className='text-sm text-white'>
                          Shop the collection
                        </p>
                        <h3 className='mt-1 font-semibold text-white'>
                          <a href={collection.href}>
                            <span className='absolute inset-0' />
                            {collection.name}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <section aria-labelledby='trending-heading'>
          <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32'>
            <SubjectsHeader />
            {/* <div className='md:flex md:items-center md:justify-between'>
              <h2
                id='favorites-heading'
                className='text-2xl font-bold tracking-tight text-gray-900'
              >
                Trending Products
              </h2>
              <a
                href='#'
                className='hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block'
              >
                Shop the collection
                <span aria-hidden='true'> &rarr;</span>
              </a>
            </div> */}

            <div className='mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8'>
              {trendingProducts.map((product) => (
                <div key={product.id} className='group relative'>
                  <div className='h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80'>
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                  <h3 className='mt-4 text-sm text-gray-700'>
                    <a href={product.href}>
                      <span className='absolute inset-0' />
                      {product.name}
                    </a>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
                  <p className='mt-1 text-sm font-medium text-gray-900'>
                    {product.price}
                  </p>
                </div>
              ))}
            </div>

            <div className='mt-8 text-sm md:hidden'>
              <a
                href='#'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Shop the collection
                <span aria-hidden='true'> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        <section
          aria-labelledby='perks-heading'
          className='border-t border-gray-200 bg-gray-50'
        >
          <h2 id='perks-heading' className='sr-only'>
            Our perks
          </h2>

          <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
            <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0'>
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
                >
                  <div className='md:flex-shrink-0'>
                    <div className='flow-root'>
                      <img
                        className='-my-1 mx-auto h-24 w-auto'
                        src={perk.imageUrl}
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                    <h3 className='text-base font-medium text-gray-900'>
                      {perk.name}
                    </h3>
                    <p className='mt-3 text-sm text-gray-500'>
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default index

// export default function TipCalculator() {
//   let [totalBill, setTotalBill] = useState(50)
//   let [tipPercentage, setTipPercentage] = useState(18)
//   let [people, setPeople] = useState(1)
//   let [totalTip, setTotalTip] = useState(0)
//   let [perPerson, setPerPerson] = useState(0)

//   const calculateTip = (bill, percentage) => {
//     setTotalTip(totalBill * (tipPercentage / 100))
//     setPerPerson(totalTip / people)
//   }

//   useEffect(() => {
//     calculateTip(totalBill, tipPercentage)
//   }, [totalBill, tipPercentage, people])

//   return (
//     <>
//       <form>
//         <label>Bill</label>
//         <input
//           type='number'
//           onChange={(e) => setTotalBill(e.target.value)}
//           value={totalBill}
//         ></input>
//         <label>Tip Percentage</label>
//         <input
//           type='number'
//           onChange={(e) => setTipPercentage(e.target.value)}
//           value={tipPercentage}
//         ></input>
//         <label>Number of People</label>
//         <input
//           type='number'
//           onChange={(e) => setPeople(e.target.value)}
//           value={people}
//         ></input>
//       </form>
//       <p>Total Tip: ${totalTip}</p>
//       <p>Tip Per Person: ${isNaN(people) ? '-' : perPerson.toFixed(2)}</p>
//     </>
//   )
// }