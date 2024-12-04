'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { ToastContainer, toast, ToastPosition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

    // Prepare email data
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Keyur"
    }

    // EmailJS service
    emailjs
      .send(
        'service_5wj6ujw',       // Replace with your service ID
        'template_g8mhw73',      // Replace with your template ID
        emailParams,
        '4BjYUf4XSfKDI2scC'     // Replace with your user ID
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

    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-900">Get in Touch</h2>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-2 px-4 rounded-md hover:from-yellow-600 hover:to-yellow-900 transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Toast container to display the messages */}
      <ToastContainer />
    </section>
  )
}

export default Contact
