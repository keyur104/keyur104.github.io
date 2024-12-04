'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ['About', 'Skills', 'Experience', 'Projects', 'Education']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm shadow-md text-white font-bold">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <motion.a
              href="#about" // This links to the 'about' section
              className="text-white hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/icon1.png" // Replace with the path to your logo file
                alt="Keyur Madane Logo"
                width={100}
                height={100}
                className="w-30 h-10 object-contain"
              />
            </motion.a>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`} // This links to each section
                className="text-white hover:text-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pt-4 pb-2"
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsOpen(false)}
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
