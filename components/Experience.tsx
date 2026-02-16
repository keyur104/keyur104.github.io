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
      title: 'AI Engineer Intern',
      company: 'Byteable AI Inc.',
      location: 'Phoenix, AZ, USA',
      period: 'January 2026 – Present',
      achievements: [
        'Develop multi-agent AI workflows in VS Code and web IDE, cutting enterprise PoC generation time from 45 to 10 minutes.',
        'Build 6 MCP integrations for CI/CD, cloud, and GitHub into Byteable\'s platform, reducing manual DevOps setup by 60%.',
        'Engineer validation logic for AI-generated scaffolding, achieving 92% pass rate across 40+ enterprise-grade test suites.'
      ]
    },
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

  const getCompanyLogo = (company: string) => {
    const logos: Record<string, { src: string; alt: string }> = {
      'Arizona State University': { src: '/asu_logo1.png', alt: 'Arizona State University Logo' },
      'Infosys': { src: '/infosys_logo.png', alt: 'Infosys Logo' },
      'Byteable AI Inc.': { src: '/logo_byte.png', alt: 'Byteable AI Logo' },
      'Chegg': { src: '/chegg_logo.png', alt: 'Chegg Logo' },
      'Dr. D.Y. Patil Institute of Technology': { src: '/dpu_logo.jpeg', alt: 'D.Y. Patil Institute of Technology Logo' },
    }
    return logos[company] || null
  }

  const renderExperienceCard = (exp: ExperienceItem, index: number, sectionDelay: number = 0) => {
    const logo = getCompanyLogo(exp.company)
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: (index * 0.1) + sectionDelay }}
        viewport={{ once: true }}
        className="relative pl-8 md:pl-12 pb-12 last:pb-0"
      >
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 to-transparent" />

        {/* Timeline dot */}
        <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />

        <div className="gradient-border p-6">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              {logo && (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-12 h-12 object-contain rounded-lg bg-white/10 p-1"
                />
              )}
              <div>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-emerald-400 font-semibold text-sm">{exp.company}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {exp.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-500/40"
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="experience" className="relative py-24 px-6 bg-[#050505] dot-grid">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-600 text-lg">Where I&apos;ve worked and what I&apos;ve built</p>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <Briefcase className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Professional Experience</h3>
          </div>
          <div>
            {fullTimeExperience.map((exp, index) => renderExperienceCard(exp, index, 0))}
          </div>
        </motion.div>

        {/* Part-time / Research Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <Briefcase className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Research, Leadership & Part-Time</h3>
          </div>
          <div>
            {partTimeExperience.map((exp, index) => renderExperienceCard(exp, index, 0.2))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
