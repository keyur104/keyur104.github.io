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
import { GiSkills } from 'react-icons/gi'
import { AiOutlineApi } from 'react-icons/ai';
import { Gauge, Network } from 'lucide-react'




const skills = [
  {
    category: 'Programming Languages',
    icon: <Code className="w-6 h-6 text-blue-600" />,
    items: [
      { name: 'Java', icon: <FaJava className="text-red-600 w-6 h-6" /> },
      { name: 'Python', icon: <SiPython className="text-blue-600 w-6 h-6" /> },
      { name: 'C/C++', icon: <SiCplusplus className="text-green-600 w-6 h-6" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 w-6 h-6" /> }
    ]
  },
  {
    category: 'Front-End',
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    items: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 w-6 h-6" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500 w-6 h-6" /> }
    ]
  },
  {
    category: 'Frameworks & Tools',
    icon: <PenTool className="w-6 h-6 text-blue-600" />,
    items: [
      { name: 'Django', icon: <SiDjango className="text-green-700 w-6 h-6" /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600 w-6 h-6" /> },
      { name: 'Rest API', icon: <AiOutlineApi className="text-gray-600 w-6 h-6" /> },
      { name: 'Salesforce', icon: <FaSalesforce className="text-blue-400 w-6 h-6" /> },
      { name: 'Heroku', icon: <SiHeroku className="text-purple-400 w-6 h-6" /> },
      { name: 'Git', icon: <FaGit className="text-orange-600 w-6 h-6" /> },
      { name: 'Visual Studio Code', icon: <SiVisualstudiocode className="text-blue-500 w-6 h-6" /> },
      { name: 'Eclipse', icon: <SiEclipseide className="text-gray-700 w-6 h-6" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500 w-6 h-6" /> }
    ]
  },
  {
    category: 'Databases',
    icon: <Database className="w-6 h-6 text-blue-600" />,
    items: [
      { name: 'MySQL', icon: <SiMysql className="text-blue-700 w-6 h-6" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500 w-6 h-6" /> }
    ]
  },
  {
    category: 'Systems & Concepts',
    icon: <Server className="w-6 h-6 text-blue-600" />,
    items: [
      { name: 'Distributed Systems', icon: <Network className="text-green-500 w-6 h-6" /> },
      { name: 'API Design', icon: <AiOutlineApi className="text-blue-500 w-6 h-6" /> },
      { name: 'Multithreading', icon: <Cpu className="text-purple-500 w-6 h-6" /> },
      { name: 'System Architecture', icon: <Database className="text-orange-500 w-6 h-6" /> },
      { name: 'Data Structures', icon: <Code className="text-yellow-500 w-6 h-6" /> },
      { name: 'Performance Optimization', icon: <Gauge className="text-red-500 w-6 h-6" /> }
    ]
  },
  {
    category: 'Soft Skills',
    icon: <Handshake className="w-6 h-6 text-blue-600" />,
    items: [
      { name: 'Effective Communication', icon: <FaComments className="text-teal-500 w-6 h-6" /> },
      { name: 'Team Collaboration', icon: <FaUsers className="text-blue-400 w-6 h-6" /> },
      { name: 'Problem-Solving', icon: <FaPuzzlePiece className="text-yellow-500 w-6 h-6" /> },
      { name: 'Adaptability', icon: <FaExchangeAlt className="text-green-500 w-6 h-6" /> },
      { name: 'Time Management', icon: <FaClock className="text-purple-500 w-6 h-6" /> },
      { name: 'Leadership', icon: <FaUserTie className="text-pink-500 w-6 h-6" /> }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      {/* <div className="absolute inset-0 bg-black opacity-50 z-0"></div> */}
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Skills</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
          The technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.9)' }}
              transition={{ duration: 0}}
              viewport={{ once: true }}
              className="bg-white bg-opacity-0 border border-blue-400 p-6 rounded-lg shadow-lg 
                 hover:shadow-2xl hover:scale-105 transition-transform duration-300 backdrop-blur-md"
            >
              <div className="flex items-center mb-4">
                {skillGroup.icon}
                <h3 className="text-xl font-bold ml-2 text-white">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-200 bg-opacity-10 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {skill.icon} {/* Render icon */}
                    {skill.name} {/* Render name */}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
