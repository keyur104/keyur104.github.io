'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Linkedin, Github, Mail, ArrowRight, FileText } from 'lucide-react'

const roles = [
  'Software Engineer',
  'Distributed Systems Builder',
  'AI Engineer',
  'Full-Stack Developer',
]

function TypingEffect() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 40 : 80

    if (!isDeleting && text === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(pause)
    }

    if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)))
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <span className="text-emerald-400">
      {text}
      <span className="typing-cursor" />
    </span>
  )
}

export default function Hero() {
  return (
    <section id="about" className="relative pt-28 pb-20 px-6 min-h-screen flex items-center bg-[#050505] dot-grid overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="container mx-auto grid md:grid-cols-5 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-white order-2 md:order-1 md:col-span-3"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-6 tracking-tight text-white">
            Keyur
            <br />
            <span className="text-gray-500">Madane</span>
          </h1>

          <div className="text-2xl md:text-3xl font-mono font-light text-gray-400 mb-6 h-10">
            <TypingEffect />
          </div>

          <p className="text-gray-500 mb-10 text-lg leading-relaxed max-w-xl">
            3+ years building scalable distributed systems & RESTful APIs.
            Reduced response times by <span className="text-white font-medium">85%</span> and improved reliability by <span className="text-white font-medium">30%</span>.
            MS Software Engineering @ ASU.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 text-base group"
              size="lg"
              onClick={() => window.open('https://github.com/keyur104/resume/blob/main/KeyurMadane_Resume.pdf', '_blank')}
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center gap-2">
              <a
                href="mailto:keyur.madane@gmail.com"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/keyur-madane-104"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/keyur104"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex justify-center md:justify-end order-1 md:order-2 md:col-span-2"
        >
          <div className="relative w-56 md:w-96">
            {/* Glowing gradient ring behind the circular part of the image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] aspect-square rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 opacity-60 blur-xl" />
            <img
              src="/keyur-madane3.png"
              alt="Keyur Madane"
              className="relative z-10 w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
