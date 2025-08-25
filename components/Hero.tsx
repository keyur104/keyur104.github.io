'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Linkedin, Github, Mail } from 'lucide-react'
import { Tooltip } from 'react-tooltip';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-16 px-6 min-h-screen flex items-center bg-gradient-to-b from-blue-500 to-black">
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div> {/* Dark overlay */}
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10 flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white order-2 md:order-1"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-shadow-md">
            {/* Hi, I am */}
            <br />
            <span className="text-6xl md:text-7xl text-gradient-to-r from-purple-200 to-indigo-300">Keyur Madane</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-200 mb-6 font-semibold">
          <span className="text-gradient-to-r from-blue-500 to-blue-600">Software Engineer | 3+ Years Experience | Master&apos;s Student</span>
          </h2>
          <p className="text-gray-100 mb-8 text-lg leading-relaxed max-w-xl">
            Software Engineer with 3+ years of experience building scalable, high-performance distributed systems and RESTful APIs. Proven track record of reducing system response times by 85% and improving reliability by 30%. Currently pursuing Master&apos;s in Software Engineering while actively seeking full-time opportunities and co-op positions to drive innovative technology solutions.
          </p>
          <div className="flex space-x-6 mb-8">
            <a 
              href="mailto:keyur.madane@gmail.com" 
              data-tooltip-id="email-tooltip"
              data-tooltip-content="Email"
              className="text-gray-100 hover:text-blue-200 transition-colors transform hover:scale-110"
            >
              <Mail className="w-8 h-8" />
            </a>
            <Tooltip id="email-tooltip" />

            <a 
              href="https://linkedin.com/in/keyur-madane-104" 
              target="_blank" 
              rel="noopener noreferrer"
              data-tooltip-id="linkedin-tooltip"
              data-tooltip-content="LinkedIn"
              className="text-gray-100 hover:text-blue-200 transition-colors transform hover:scale-110"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <Tooltip id="linkedin-tooltip" />

            <a 
              href="https://github.com/keyur104" 
              target="_blank" 
              rel="noopener noreferrer"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="GitHub"
              className="text-gray-100 hover:text-blue-200 transition-colors transform hover:scale-110"
            >
              <Github className="w-8 h-8" />
            </a>
            <Tooltip id="github-tooltip" />
          </div>
          
          <Button
            className="bg-blue-700 hover:bg-blue-900 text-white px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            size="lg" 
            onClick={() => window.open('https://github.com/keyur104/resume/blob/main/KeyurMadane_Resume.pdf', '_blank')}
          >
            My Resume
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative w-56 h-56 md:w-96 md:h-96 transform -translate-y-18 ">
            <img
              src="/keyur-madane1.png"
              alt="Keyur Madane"
              className="object-cover shadow-lg transform hover:scale-105 transition-all border-none outline-none ring-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}