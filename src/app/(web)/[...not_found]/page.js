import {
  BookOpenIcon,
  BookmarkSquareIcon,
  QueueListIcon,
  RssIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid'

const links = [
  {
    name: 'Documentation',
    href: '#',
    description: 'Learn how to integrate our tools with your app.',
    icon: BookOpenIcon,
  },
  {
    name: 'API Reference',
    href: '#',
    description: 'A complete API reference for our libraries.',
    icon: QueueListIcon,
  },
  {
    name: 'Guides',
    href: '#',
    description: 'Installation guides that cover popular setups.',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Blog',
    href: '#',
    description: 'Read our latest news and articles.',
    icon: RssIcon,
  },
]
function NotFound() {
  return (
    <>
      <div className='relative isolate min-h-screen'>
        <img
          src='https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75'
          alt=''
          className='absolute inset-0 -z-10 h-full w-full object-cover object-bottom'
        />
        <div className='mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8'>
          <p className='text-base font-semibold leading-8 text-white'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
            Page not found
          </h1>
          <p className='mt-4 text-base text-white/70 sm:mt-6'>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className='mx-auto mt-16 flow-root max-w-lg sm:mt-20'>
            <h2 className='sr-only'>Popular pages</h2>
            <ul
              role='list'
              className='-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5'
            ></ul>
            <div className='mt-10 flex justify-center'>
              <a
                href='/'
                className='text-sm font-semibold leading-6 text-indigo-600'
              >
                <span aria-hidden='true'>&larr;</span>
                Back to home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
