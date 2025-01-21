'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { SiPython, SiDjango, SiWebstorm } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const projects = [
  {
    title: 'MCQ Generator Using ChatGPT API',
    description:
      'Developed a Django web app that generates multiple-choice questions (MCQs) from a given text using the ChatGPT API. The app sends the generated MCQs to a Spring Boot REST API for storage and management. The Spring Boot API handles saving the data in a database, allowing for easy retrieval and management of MCQs.',
    tech: ['Django', 'Python','Java', 'ChatGPT API','Spring Boot','REST API'],
    links: {
      github: '#',
    },
  },
  {
    title: 'Video Anomaly Detection System',
    description:
      'Designed a video anomaly detection system using machine learning, accomplishing 90% accuracy in high-traffic areas. Implemented surveillance techniques, achieving a 30% reduction in security incidents across a 100,000 sq ft area.',
    tech: ['Machine Learning', 'Computer Vision', 'Python'],
    links: {
      github: 'https://github.com/keyur104/Anomaly-Detection.git',
    },
  },
  {
    title: 'Scheme Management Portal for State Government',
    description:
      'Developed a Django web app during a hackathon for managing government schemes, benefiting over 1,000+ personnel. Created fund management features that aim to reduce corruption risks by up to 40%.',
    tech: ['Django', 'Python', 'Web Development'],
    links: {
      github: 'https://github.com/keyur104/GovScheme.git',
    },
  },
  {
    title: 'Chat Application with Multithreading and Sockets',
    description:
      "Engineered a real-time chat application applying Java's multithreading capabilities to support 50+ concurrent client connections. Implemented socket programming to facilitate communication between clients and server, achieving a message delivery success rate of over 95% in a distributed environment.",
    tech: ['Java', 'Multithreading', 'Socket Programming'],
    links: {
      github: '#',
    },
  },
  {
    title: 'Railway Reservation System with COVID-19 Features',
    description:
      'Developed a Railway Reservation System during the lockdown, designed to ensure social distancing within trains. Integrated functionality to verify COVID-19 vaccine certificates or test results during ticket booking. Additionally, the system could allocate new trains when there was a high crowd for a specific destination, ensuring safe travel during the pandemic.',
    tech: ['Python', 'Database Management', 'Web Development'],
    links: {
      github: 'https://github.com/keyur104/PandemicRailwayReservation.git',
    },
  },
  {
    title: 'Car Rental System',
    description:
      'Developed a Django web application that allows users to log in and rent self-driving cars. The system displays a list of available cars along with their rates, and users can choose and rent a car based on their preferences. An admin panel is provided to manage the car listings, including adding, updating, or removing cars. The app ensures a seamless user experience for car rental, with secure authentication and efficient car management for administrators.',
    tech: ['Python','Django', 'Database Management'],
    links: {
      github: 'https://github.com/keyur104/CarRental.git',
    },
  },
  
]

const icons: { [key: string]: JSX.Element } = {
  'Machine Learning': <SiWebstorm className="icon-original-color" />,
  'Computer Vision': <SiWebstorm className="icon-original-color" />,
  Python: <SiPython className="icon-original-color" />,
  Django: <SiDjango className="icon-original-color" />,
  Java: <FaJava className="icon-original-color" />,
  'Web Development': <SiWebstorm className="icon-original-color" />,
  Multithreading: <SiWebstorm className="icon-original-color" />,
  'Socket Programming': <SiWebstorm className="icon-original-color" />,
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Projects</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            A collection of projects that demonstrate my skills and creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.8)',
              }}
              transition={{ duration: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Github className="text-blue-400 w-6 h-6" />
                <h3 className="text-xl font-bold ml-2 text-white">{project.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500 bg-opacity-10 text-blue-400 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {icons[tech]} {/* Render icon without extra styling */}
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.links.github !== '#' ? project.links.github : '#'}
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1"
                  target={project.links.github !== '#' ? "_blank" : "_self"}  // Open in new tab unless the link is "#"
                  rel={project.links.github !== '#' ? "noopener noreferrer" : ""}  
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
