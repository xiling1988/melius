import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime'
import Image from 'next/image'

const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function Coverage() {
  return (
    <div className="bg-nexusBlue py-24 sm:py-32">
      <div className="relative isolate bg-nexusBlue">
      <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-nexusRed">Nexus Brands Coverage</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">No reach? No problem.</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
            dolor cupiditate blanditiis.
          </p>
        </div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto h-96 w-full max-w-2xl gap-16 bg-white/5 ring-1 ring-white/10 sm:rounded-3xl lg:max-w-none">
            <Image height={100} width={100} unoptimized
              className="w-full h-full object-cover rounded-2xl shadow-xl"
              src="/map.png"
              alt=""
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-nexusBlue to-nexusRed opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}