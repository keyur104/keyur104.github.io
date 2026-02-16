'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Globe, Database, PenTool, Server, Cpu, Handshake } from 'lucide-react'
import {
  FaJava, FaHtml5, FaCss3Alt, FaBootstrap, FaGit, FaSalesforce,
  FaComments, FaUsers, FaPuzzlePiece, FaExchangeAlt, FaClock, FaUserTie
} from 'react-icons/fa'
import {
  SiPython, SiCplusplus, SiJavascript, SiDjango, SiSpringboot,
  SiPostgresql, SiMysql, SiPostman, SiVisualstudiocode, SiHeroku, SiEclipseide
} from 'react-icons/si'
import { AiOutlineApi } from 'react-icons/ai';
import { Gauge, Network } from 'lucide-react'

const skills = [
  {
    category: 'Programming Languages',
    icon: <Code className="w-5 h-5" />,
    items: [
      { name: 'Java', icon: <FaJava className="text-red-500 w-5 h-5" /> },
      { name: 'Python', icon: <SiPython className="text-blue-500 w-5 h-5" /> },
      { name: 'C/C++', icon: <SiCplusplus className="text-green-500 w-5 h-5" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 w-5 h-5" /> }
    ]
  },
  {
    category: 'Front-End',
    icon: <Globe className="w-5 h-5" />,
    items: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-5 h-5" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-400 w-5 h-5" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500 w-5 h-5" /> }
    ]
  },
  {
    category: 'Frameworks & Tools',
    icon: <PenTool className="w-5 h-5" />,
    items: [
      { name: 'Django', icon: <SiDjango className="text-green-600 w-5 h-5" /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500 w-5 h-5" /> },
      { name: 'Rest API', icon: <AiOutlineApi className="text-gray-400 w-5 h-5" /> },
      { name: 'Salesforce', icon: <FaSalesforce className="text-blue-400 w-5 h-5" /> },
      { name: 'Heroku', icon: <SiHeroku className="text-purple-400 w-5 h-5" /> },
      { name: 'Git', icon: <FaGit className="text-orange-500 w-5 h-5" /> },
      { name: 'VS Code', icon: <SiVisualstudiocode className="text-blue-500 w-5 h-5" /> },
      { name: 'Eclipse', icon: <SiEclipseide className="text-gray-400 w-5 h-5" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500 w-5 h-5" /> }
    ]
  },
  {
    category: 'Databases',
    icon: <Database className="w-5 h-5" />,
    items: [
      { name: 'MySQL', icon: <SiMysql className="text-blue-600 w-5 h-5" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400 w-5 h-5" /> }
    ]
  },
  {
    category: 'Systems & Concepts',
    icon: <Server className="w-5 h-5" />,
    items: [
      { name: 'Distributed Systems', icon: <Network className="text-green-400 w-5 h-5" /> },
      { name: 'API Design', icon: <AiOutlineApi className="text-blue-400 w-5 h-5" /> },
      { name: 'Multithreading', icon: <Cpu className="text-purple-400 w-5 h-5" /> },
      { name: 'System Architecture', icon: <Database className="text-orange-400 w-5 h-5" /> },
      { name: 'Data Structures', icon: <Code className="text-yellow-400 w-5 h-5" /> },
      { name: 'Performance Optimization', icon: <Gauge className="text-red-400 w-5 h-5" /> }
    ]
  },
  {
    category: 'Soft Skills',
    icon: <Handshake className="w-5 h-5" />,
    items: [
      { name: 'Communication', icon: <FaComments className="text-teal-400 w-5 h-5" /> },
      { name: 'Collaboration', icon: <FaUsers className="text-blue-400 w-5 h-5" /> },
      { name: 'Problem-Solving', icon: <FaPuzzlePiece className="text-yellow-400 w-5 h-5" /> },
      { name: 'Adaptability', icon: <FaExchangeAlt className="text-green-400 w-5 h-5" /> },
      { name: 'Time Management', icon: <FaClock className="text-purple-400 w-5 h-5" /> },
      { name: 'Leadership', icon: <FaUserTie className="text-pink-400 w-5 h-5" /> }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#050505] dot-grid relative">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Skills</h2>
          <p className="text-gray-600 text-lg">The technologies I use to bring ideas to life</p>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skillGroup, groupIdx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: groupIdx * 0.08 }}
              viewport={{ once: true }}
              className={`gradient-border p-6 ${
                groupIdx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 px-3 py-2 rounded-lg text-sm transition-all duration-200 border border-white/5 hover:border-white/10"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
