'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Linkedin, Github, Mail } from 'lucide-react'

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
          <h2 className="text-xl md:text-2xl text-purple-200 mb-6 font-semibold">
            a <span className="text-gradient-to-r from-pink-500 to-purple-600">Software Engineering Student</span>
          </h2>
          <p className="text-gray-100 mb-8 text-lg leading-relaxed max-w-xl">
            With three years of experience in full-stack development, object-oriented programming, and Java backend. Actively seeking Summer 2025 internship opportunities to apply and expand technical skills.
          </p>
          <div className="flex space-x-6 mb-8">
            <a href="mailto:keyur.madane@gmail.com" className="text-gray-100 hover:text-purple-300 transition-colors transform hover:scale-110">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/keyur-madane-104" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-purple-300 transition-colors transform hover:scale-110">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/keyur104" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-purple-300 transition-colors transform hover:scale-110">
              <Github className="w-8 h-8" />
            </a>
          </div>
          <Button
            className="bg-blue-700 hover:bg-blue-900 text-white px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            size="lg" onClick={() => window.open('https://github.com/keyur104/resume/blob/main/KeyurMadane_Resume.pdf', '_blank')}
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
              // width={400}
              // height={400}
              className="object-cover shadow-lg transform hover:scale-105 transition-all border-none outline-none ring-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
