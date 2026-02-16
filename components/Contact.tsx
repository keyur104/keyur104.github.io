'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Send, Mail } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Keyur"
    }

    emailjs
      .send(
        'service_5wj6ujw',
        'template_g8mhw73',
        emailParams,
        '4BjYUf4XSfKDI2scC'
      )
      .then((response) => {
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
        })
        console.log(response)
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        })
        console.log(error)
      })

    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#050505] dot-grid relative">
      <div className="container mx-auto max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Get in touch
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Contact Me</h2>
          <p className="text-gray-600 text-lg">Have a question or want to work together?</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="gradient-border p-8"
        >
          <div className="relative z-10">
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 transition-all duration-300 placeholder:text-gray-700"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 transition-all duration-300 placeholder:text-gray-700"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 transition-all duration-300 placeholder:text-gray-700 resize-none"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <Send className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.form>
      </div>

      <ToastContainer />
    </section>
  )
}

export default Contact
