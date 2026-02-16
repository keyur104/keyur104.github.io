'use client'

import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-[#050505] dot-grid relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Education</h2>
          <p className="text-gray-600 text-lg">My academic background and qualifications</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* ASU */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="gradient-border p-6"
          >
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <img
                  src="/asu_logo1.png"
                  alt="Arizona State University Logo"
                  className="w-14 h-14 object-contain rounded-lg bg-white/10 p-1.5 shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="text-lg font-bold text-white">M.S. Software Engineering</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                      Current
                    </span>
                  </div>
                  <p className="text-emerald-400 font-medium text-sm">Arizona State University</p>
                  <p className="text-gray-600 text-sm mt-1">Tempe, AZ</p>
                  <p className="text-gray-400 text-sm mt-2">Expected May 2026</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* DPU */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="gradient-border p-6"
          >
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <img
                  src="/dpu_logo.jpeg"
                  alt="Dr. D. Y. Patil Institute of Technology Logo"
                  className="w-14 h-14 object-contain rounded-lg bg-white/10 p-1.5 shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">B.E. Computer Science</h3>
                  <p className="text-emerald-400 font-medium text-sm">Dr. D. Y. Patil Institute of Technology</p>
                  <p className="text-gray-600 text-sm mt-1">Pimpri, Pune, India</p>
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <p className="text-gray-400 text-sm">June 2021</p>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 font-semibold">
                      GPA: 9.07/10
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
