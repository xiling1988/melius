import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Index/Hero'
import Vision from '@/components/Index/Vision'
import Services from '@/components/Index/Services'
import CTAtoContact from '@/components/Index/CTAtoContact'
import Head from 'next/head'
import { useEffect } from 'react'
import { getAuthors } from '../../sanity'

export default function Home() {
  return (
    <>
      <Head>
        <title>Melius Consulting | Hiring Excellence</title>
      </Head>
      <main className='absolute top-0 left-0 right-0'>
        <Layout>
          <Hero />
          <Vision />
          <Services />
          <CTAtoContact />
        </Layout>
      </main>
    </>
  )
}
