'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Lock, ExternalLink, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Cloud-Native Face Recognition System',
    description:
      'Architected a serverless face-recognition pipeline on AWS Lambda with SQS and Docker, achieving 1s per-image latency. Deployed face-detection on AWS Greengrass via MQTT, offloading MTCNN inference to reduce cloud latency. Designed a distributed system splitting ML inference across cloud (Lambda) and edge (Greengrass).',
    tech: ['AWS Lambda', 'SQS', 'Docker', 'AWS Greengrass', 'MQTT', 'MTCNN', 'Python'],
    links: {
      github: '#',
    },
    featured: true,
  },
  {
    title: 'Fraud Detection System',
    description:
      'Engineered a real-time fraud detection backend using Java and Apache Kafka to monitor card transactions. Detects cross-location card usage within 5 minutes, processing up to 500 transactions per second.',
    tech: ['Java', 'Apache Kafka', 'Real-time Processing', 'Anomaly Detection'],
    links: {
      github: '#',
    },
    featured: true,
  },
  {
    title: 'MCQ Generator Using ChatGPT API',
    description:
      'Developed a Django web app that generates multiple-choice questions (MCQs) from a given text using the ChatGPT API. The app sends the generated MCQs to a Spring Boot REST API for storage and management.',
    tech: ['Django', 'Python', 'Java', 'ChatGPT API', 'Spring Boot', 'REST API'],
    links: {
      github: '#',
    },
  },
  {
    title: 'Video Anomaly Detection System',
    description:
      'Designed a video anomaly detection system using machine learning, accomplishing 90% accuracy in high-traffic areas. Implemented surveillance techniques, achieving a 30% reduction in security incidents.',
    tech: ['Machine Learning', 'Computer Vision', 'Python'],
    links: {
      github: 'https://github.com/keyur104/Anomaly-Detection.git',
    },
  },
  {
    title: 'Scheme Management Portal',
    description:
      'Developed a Django web app during a hackathon for managing government schemes, benefiting over 1,000+ personnel. Created fund management features that aim to reduce corruption risks by up to 40%.',
    tech: ['Django', 'Python', 'Web Development'],
    links: {
      github: 'https://github.com/keyur104/GovScheme.git',
    },
  },
  {
    title: 'Chat Application with Multithreading',
    description:
      "Engineered a real-time chat application applying Java's multithreading capabilities to support 50+ concurrent client connections with a message delivery success rate of over 95%.",
    tech: ['Java', 'Multithreading', 'Socket Programming'],
    links: {
      github: '#',
    },
  },
  {
    title: 'Railway Reservation System',
    description:
      'Developed a Railway Reservation System designed to ensure social distancing within trains. Integrated COVID-19 vaccine certificate verification during ticket booking and dynamic train allocation.',
    tech: ['Python', 'Database Management', 'Web Development'],
    links: {
      github: 'https://github.com/keyur104/PandemicRailwayReservation.git',
    },
  },
  {
    title: 'Car Rental System',
    description:
      'Developed a Django web application that allows users to rent self-driving cars. Features include car listing with rates, secure authentication, and an admin panel for managing car inventory.',
    tech: ['Python', 'Django', 'Database Management'],
    links: {
      github: 'https://github.com/keyur104/CarRental.git',
    },
  },
]

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 px-6 bg-[#050505] dot-grid relative">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Projects</h2>
          <p className="text-gray-600 text-lg">A collection of projects that demonstrate my skills and creativity</p>
        </motion.div>

        {/* Featured projects — large bento cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {featured.map((project, idx) => {
            const isPrivate = project.links.github === '#'
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="gradient-border p-8"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Featured</span>
                  </div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white pr-2">{project.title}</h3>
                    {isPrivate ? (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-600 bg-white/5 px-2 py-1 rounded-full shrink-0 border border-white/5">
                        <Lock className="w-3 h-3" />
                        Private
                      </span>
                    ) : (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors shrink-0 p-1"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Other projects — smaller grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((project, idx) => {
            const isPrivate = project.links.github === '#'
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="glass-card p-6 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white pr-2">{project.title}</h3>
                  {isPrivate ? (
                    <span className="inline-flex items-center gap-1 text-xs text-gray-600 bg-white/5 px-2 py-1 rounded-full shrink-0 border border-white/5">
                      <Lock className="w-3 h-3" />
                      Private
                    </span>
                  ) : (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors shrink-0 p-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {!isPrivate && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-400 transition-colors mt-4"
                  >
                    <Github className="w-4 h-4" />
                    View Source
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
