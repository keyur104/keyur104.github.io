import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen text-gray-800 ">
      <Header />
      <Hero />
      <section id="page" className='bg-gradient-to-b from-black to-blue-900'>
      {/* <div className="absolute inset-0 bg-black opacity-40 z-0"></div> */}
      <Experience />
      <Skills />
      </section>
      <section className='bg-gradient-to-b from-blue-900 to-black'>
      <Projects />
      <Education />
      </section>
      <Contact />
      <Footer />
      
    </main>
  )
}

