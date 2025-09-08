'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      id: 1,
      role: 'Machine Learning Intern',
      company: 'Pantech E Limited',
      period: 'May 2023 - June 2023',
      location: 'Bangalore, Karnataka',
      description: 'Developed machine learning models for real-world applications, focusing on supervised learning techniques. Gained hands-on experience with key ML libraries such as Scikit-learn and TensorFlow.',
      skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Data Preprocessing', 'Supervised Learning'],
      type: 'Internship',
      current: false,
    },
    {
      id: 2,
      role: 'Python Developer Intern',
      company: 'MotionCut',
      period: 'July 2024 - August 2024',
      location: 'Remote',
      description: 'Created an Expense Tracker application using Python, implementing categorization and analysis of expenses. Enhanced the user interface using HTML and CSS, ensuring a responsive and intuitive experience.',
      skills: ['Python', 'HTML', 'CSS', 'Data Analysis', 'UI/UX Design'],
      type: 'Internship',
      current: false,
    },
    {
      id: 3,
      role: 'AI Developer Intern',
      company: 'AskMeIdentity',
      period: 'July 2025 - Nov 2025',
      location: 'Remote',
      description: 'Working on artificial intelligence solutions and machine learning implementations. Developing innovative AI-powered applications and contributing to cutting-edge projects.',
      skills: ['Python', 'AI', 'Machine Learning', 'Deep Learning', 'Data Science'],
      type: 'Internship',
      current: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 glass rounded-full">
              <Briefcase className="w-8 h-8 text-neon-pink" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            Work{' '}
            <span className="bg-gradient-to-r from-neon-pink to-neon-green bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                className={cn(
                  "relative flex items-center",
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple border-4 border-black z-10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>

                {/* Card */}
                <motion.div
                  className={cn(
                    "ml-16 md:ml-0 md:w-5/12 glass p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group",
                    exp.current && "ring-2 ring-neon-green/30"
                  )}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-neon-blue transition-colors">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-1 text-xs bg-neon-green/20 text-neon-green rounded-full border border-neon-green/30">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-neon-purple mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="px-3 py-1 text-xs bg-white/10 dark:bg-white/10 bg-gray-200 text-black dark:text-white rounded-full border border-black/20 dark:border-white/20">
                      {exp.type}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />
                      Key Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.2 + skillIndex * 0.1 
                          }}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full text-neon-blue hover:bg-neon-blue/10 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Timeline End */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 bottom-0 translate-y-full w-6 h-6 rounded-full bg-gradient-to-r from-neon-pink to-neon-green"
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in working together?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className={cn(
              "px-8 py-3 bg-gradient-to-r from-neon-pink to-neon-green rounded-full text-white font-semibold",
              "magnetic-btn glow-border",
              "hover:shadow-[0_0_25px_rgba(255,0,110,0.4)] transition-all duration-300"
            )}
          >
            Let&apos;s Connect
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
