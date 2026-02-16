'use client'

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <a
              href="mailto:keyur.madane@gmail.com"
              className="p-2.5 rounded-full bg-white/5 text-gray-600 hover:text-emerald-400 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/keyur-madane-104"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 text-gray-600 hover:text-emerald-400 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/keyur104"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 text-gray-600 hover:text-emerald-400 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          <p className="text-gray-700 text-sm">
            &copy; {new Date().getFullYear()} Keyur Madane
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 text-gray-600 hover:text-emerald-400 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
