'use client'

import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Education</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            My academic background and qualifications
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-1 gap-8">
          {/* Education Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800 to-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <img
                src="/asu_logo1.png" // Update with your ASU logo path
                alt="Arizona State University Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-white">M.S. Software Engineering</h3>
                <p className="text-gray-300 font-bold">Arizona State University, Tempe, AZ</p>
                <p className="text-gray-300 font-bold mt-2">Expected May 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Education Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800 to-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <img
                src="/dpu_logo.jpeg" // Update with your school logo path
                alt="Dr. D. Y. Patil Institute of Technology Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-white">B.E. Computer Science</h3>
                <p className="text-gray-300 font-bold">Dr. D. Y. Patil Institute of Technology, Pimpri, Pune, India</p>
                <p className="text-gray-300 font-bold mt-2">June 2021</p>
                <p className="text-gray-300">GPA: 9.07 (out of 10)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
