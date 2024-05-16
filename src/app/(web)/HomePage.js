'use client'
import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Index/Hero'
import Vision from '@/components/Index/Vision'
import Services from '@/components/Index/Services'
import CTAtoContact from '@/components/Index/CTAtoContact'
import Head from 'next/head'
import CalendlyButton from '@/components/Modal/CalendlyButton'

function HomePage() {
  return (
    <div>
      <CalendlyButton />
      <Hero />
      <Vision />
      <Services />
      <CTAtoContact />
    </div>
  )
}

export default HomePage
