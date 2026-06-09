'use client'

import { motion } from 'framer-motion'
import { Download, GraduationCap, Briefcase, Award, Languages } from 'lucide-react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  }

  const stats = [
    { value: '4', label: 'Internships', icon: Briefcase, color: 'text-blue-500' },
    { value: '6', label: 'Certifications', icon: Award, color: 'text-purple-500' },
    { value: '3', label: 'Languages', icon: Languages, color: 'text-pink-500' },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="p-3 glass rounded-full">
              <GraduationCap className="w-8 h-8 text-neon-blue" />
            </div>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white"
          >
            About{' '}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            IAM & Identity Security Engineer building scalable solutions
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 rounded-full blur-2xl" />
              
              {/* Image container with border */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/20 shadow-xl shadow-black/10 dark:shadow-white/5">
                <Image
                  src="/gemini-profile.png"
                  alt="Anil Chhetri - IAM & Identity Security Engineer"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover object-center"
                  quality={95}
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3 space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white">
                IAM & Identity{' '}
                <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                  Security Engineer
                </span>
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                <p>
                  AI & ML graduate from Sri Sairam College of Engineering, Bangalore, with hands-on 
                  experience in Identity and Access Management, SailPoint IdentityNow (ISC), and 
                  enterprise authentication systems. Proficient in OIDC, OAuth 2.0, Microsoft Entra ID, 
                  Python, SQL, React, and Next.js through academic projects and four internships.
                </p>
                <p>
                  Holds the SailPoint ISC Leader Certificate and passionate about IAM governance, IGA, 
                  cybersecurity, and building scalable identity solutions. From building iTrace (an 
                  identity security assessment platform) to developing AI-powered security tools, I 
                  explore technology through practical, real-world projects.
                </p>
                <p>
                  Looking ahead, I&apos;m focused on contributing to innovative identity security solutions, 
                  collaborating with teams that push boundaries in IAM and cybersecurity, and continuing 
                  to learn from every project and challenge that comes my way.
                </p>
              </div>
            </motion.div>

            {/* Resume Button */}
            <motion.div variants={itemVariants}>
              <a
                href="/ANIL_CHHETRI_RESUME.pdf"
                download="ANIL_CHHETRI_RESUME.pdf"
                className={cn(
                  "group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg font-medium",
                  "hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
                )}
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative p-4 glass rounded-xl text-center group hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
                >
                  <stat.icon className={cn("w-5 h-5 mx-auto mb-2", stat.color)} />
                  <div className={cn("text-2xl font-bold mb-0.5", stat.color)}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
