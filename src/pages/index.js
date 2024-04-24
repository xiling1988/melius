import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Index/Hero'
import Vision from '@/components/Index/Vision'
import Services from '@/components/Index/Services'
import Coverage from '@/components/Index/Coverage'
import CTAtoContact from '@/components/Index/CTAtoContact'

export default function Home() {
  return (
    <main>
      <Layout>
        <Hero />
        <Vision />
        <Services />
        {/* <Coverage /> */}
        <CTAtoContact />
      </Layout>
    </main>
  )
}
