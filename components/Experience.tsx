'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Systems Engineer',
      company: 'Infosys',
      location: 'Pune, India',
      period: 'August 2021 – July 2024',
      achievements: [
        'Delivered five high-quality software solutions for Mercedes-Benz, boosting system reliability by 30% and scalability through efficient coding and thorough testing.',
        'Integrated Performance of existing CRM Model by utilizing Heroku as middleware, reduced response time from 7 sec to 1 sec.',
        'Formulated a Salesforce data cleanup mechanism, boosted business efficiency by 5% through automatic deletion of unused customer data.',
        'Designed an API in Salesforce to handle 10 different scenarios, improving data processing efficiency by 25%.',
        'Upgraded existing custom Ant used for Salesforce deployment from version 50 to version 57.',
        'Improved deployment efficiency and accuracy by upgrading Java-based tools, resulting in a 30% reduction in deployment time and ensuring smooth Salesforce operations across teams.',
        'Optimized CRM systems to enhance user experience and responsiveness, leading to a 15% reduction in support tickets.',
        'Ideated and accomplished product from scratch and helped scale business to more than 10 million users.',
        'Promoted within 6 months due to strong performance and organizational impacts.'
      ]
    },
    {
      title: 'Chegg Expert',
      company: 'Chegg',
      location: 'Remote',
      period: 'December 2020 – July 2021',
      achievements: [
        'Provided expert-level tutoring in Computer Science topics, helping students improve their understanding and grades in various subjects.',
        'Answered over 500 student queries related to programming, algorithms, data structures, and software development.',
        'Maintained a high rating from students for clarity, responsiveness, and deep knowledge of subject matter.',
        'Collaborated with the Chegg team to develop educational content, enhancing the learning experience for students.',
        'Helped students resolve difficult problems by providing step-by-step explanations, fostering critical thinking and problem-solving skills.'
      ]
    },
    {
      title: 'Software Club Vice President',
      company: 'Dr. D.Y. Patil Institute of Technology',
      location: 'Pune, India',
      period: 'August 2019 – June 2020',
      achievements: [
        'Led and organized technical events and workshops for students, improving their understanding of software development.',
        'Collaborated with faculty and students to curate a list of relevant topics for technical discussions and seminars.',
        'Motivated and guided team members in organizing and executing successful software-related events.',
        'Managed and coordinated the software club’s projects, ensuring timely delivery and effective collaboration.',
        'Helped bridge the gap between students and industry experts through guest lectures and interactive sessions.'
      ]
    },
    {
      title: 'Library Aid',
      company: 'Dr. D.Y. Patil Institute of Technology',
      location: 'Pune, India',
      period: 'January 2019 – June 2019',
      achievements: [
        'Assisted students and faculty in locating and checking out books and materials, providing an organized library experience.',
        'Managed and categorized books and other resources, ensuring the library was well-organized and accessible.',
        'Supported library staff in inventory management and the maintenance of library records.',
        'Provided customer service to students, helping them find study resources and other educational materials.',
        'Ensured the library space remained clean and conducive to studying.'
      ]
    }
  ]

  return (
    <section id="experience" className="relative py-20 px-6">
      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Professional Experience</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
          A blend of hands-on experience in software engineering, leadership, and educational support.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  {/* Infosys Logo */}
                  {exp.company === 'Infosys' && (
                    <img
                      src="/infosys_logo.png" // Replace with your actual Infosys logo path
                      alt="Infosys Logo"
                      className="w-14 h-12 object-contain"
                    />
                  )}
                  {/* Chegg Logo for Chegg Expert */}
                  {exp.company === 'Chegg' && (
                    <img
                      src="/chegg_logo.png" // Replace with your actual Chegg logo path
                      alt="Chegg Logo"
                      className="w-14 h-12 object-contain"
                    />
                  )}
                  {/* Library Aid Logo for D.Y. Patil */}
                  {exp.company === 'Dr. D.Y. Patil Institute of Technology' && exp.title === 'Library Aid' && (
                    <img
                      src="/dpu_logo.jpeg" // Replace with your actual logo path
                      alt="D.Y. Patil Institute of Technology Logo"
                      className="w-14 h-12 object-contain"
                    />
                  )}
                  {/* Software Club Logo for Vice President */}
                  {exp.company === 'Dr. D.Y. Patil Institute of Technology' && exp.title === 'Software Club Vice President' && (
                    <img
                      src="/dpu_logo.jpeg" // Replace with your actual logo path
                      alt="D.Y. Patil Institute of Technology Logo"
                      className="w-14 h-12 object-contain"
                    />
                  )}

                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{exp.title}</h3>
                </div>
                <div className="flex items-center text-white mb-4">
                  <Briefcase className="w-5 h-5 mr-2 " />
                  <span className="mr-4 font-bold">{exp.company}</span>
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="mr-4 font-bold">{exp.location}</span>
                  <Calendar className="w-5 h-5 mr-2 " />
                  <span>{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-white font-bold space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
