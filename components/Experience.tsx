'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export default function Experience() {
  const fullTimeExperience: ExperienceItem[] = [
    {
      title: 'Senior Software Engineer',
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
    }
  ]

  const partTimeExperience: ExperienceItem[] = [
    {
      title: 'Research Assistant - Software Engineer',
      company: 'Arizona State University',
      location: 'Tempe, AZ, USA',
      period: 'May 2025 – Present',
      achievements: [
        'Automated Qualtrics survey dispatch via Spring Boot with CSV validation, cutting manual setup time by 90%.',
        'Created custom CSV validation and error handling to ensure 100% data accuracy in survey scheduling.',
        'Developing a Flutter cross-platform app with 10 gamified modules for dyslexic learners on Android and iOS.',
        'Implemented adaptive gameplay and progression tracking to personalize difficulty and enhance learning outcomes.',
        'Built scalable microservices architecture supporting educational technology research and accessibility innovation.',
        'Designed RESTful APIs for seamless integration between backend services and cross-platform mobile applications.',
        'Collaborated with research teams to implement data collection mechanisms for educational accessibility studies.',
        'Utilized Agile methodologies to manage project timelines and deliver iterative improvements to research tools.',
        'Conducted code reviews and implemented best practices to maintain high code quality and system reliability.',
        'Contributed to academic research publications through technical implementation and data analysis support.'
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
        'Managed and coordinated the software club&apos;s projects, ensuring timely delivery and effective collaboration.',
        'Helped bridge the gap between students and industry experts through guest lectures and interactive sessions.'
      ]
    }
  ]

  const renderExperienceCard = (exp: ExperienceItem, index: number, sectionDelay: number = 0) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index * 0.1) + sectionDelay }}
      viewport={{ once: true }}
      className="mb-12 relative"
    >
      <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center gap-4">
          {/* ASU Logo */}
          {exp.company === 'Arizona State University' && (
            <img
              src="/asu_logo1.png"
              alt="Arizona State University Logo"
              className="w-14 h-12 object-contain"
            />
          )}
          {/* Infosys Logo */}
          {exp.company === 'Infosys' && (
            <img
              src="/infosys_logo.png"
              alt="Infosys Logo"
              className="w-14 h-12 object-contain"
            />
          )}
          {/* Chegg Logo */}
          {exp.company === 'Chegg' && (
            <img
              src="/chegg_logo.png"
              alt="Chegg Logo"
              className="w-14 h-12 object-contain"
            />
          )}
          {/* D.Y. Patil Logo */}
          {exp.company === 'Dr. D.Y. Patil Institute of Technology' && (
            <img
              src="/dpu_logo.jpeg"
              alt="D.Y. Patil Institute of Technology Logo"
              className="w-14 h-12 object-contain"
            />
          )}
          <h3 className="text-2xl text-center font-bold text-blue-600 mb-2">{exp.title}</h3>
        </div>
        <div className="flex items-center text-white mb-4">
          <div className="flex justify-center items-center mb-1">
            <Briefcase className="w-5 h-5 mr-2" />
            <span className="mr-4 font-bold">{exp.company}</span>
          </div>
          <MapPin className="w-5 h-5 mr-2" />
          <span className="mr-4 font-bold">{exp.location}</span>
          <Calendar className="w-5 h-5 mr-2" />
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
  )

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
        </motion.div>

        {/* Professional Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-blue-500 mb-8 text-center">Professional Experience</h3>
          <div className="w-full px-4">
            {fullTimeExperience.map((exp, index) => renderExperienceCard(exp, index, 0))}
          </div>
        </motion.div>

        {/* Research, Leadership & Part-Time Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-blue-500 mb-8 text-center">Research, Leadership & Part-Time Experience</h3>
          <div className="w-full px-4">
            {partTimeExperience.map((exp, index) => renderExperienceCard(exp, index, 0.2))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}