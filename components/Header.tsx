'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault()
  const el = document.getElementById(id)
  if (!el) return

  const targetY = el.getBoundingClientRect().top + window.scrollY - 80 // offset for fixed header
  const startY = window.scrollY
  const diff = targetY - startY
  const duration = Math.min(Math.max(Math.abs(diff) * 0.8, 600), 1500) // 600ms min, 1500ms max
  let startTime: number | null = null

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    // easeInOutCubic for smooth feel
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2

    window.scrollTo(0, startY + diff * ease)
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.a
              href="#about"
              onClick={(e) => smoothScroll(e, 'about')}
              className="text-white hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/icon1.png"
                alt="Keyur Madane Logo"
                width={100}
                height={100}
                className="w-30 h-10 object-contain"
              />
            </motion.a>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => smoothScroll(e, item.toLowerCase())}
                className="relative px-4 py-2 text-sm text-gray-500 hover:text-white transition-colors rounded-full hover:bg-white/5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <button
            className="md:hidden text-white hover:text-gray-200 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pt-4 pb-2 border-t border-white/5 mt-4"
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  smoothScroll(e, item.toLowerCase())
                  setIsOpen(false)
                }}
                className="block py-3 px-4 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}
