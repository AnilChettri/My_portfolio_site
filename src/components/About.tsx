'use client'

import { motion } from 'framer-motion'
import { Download, Github, Linkedin, User } from 'lucide-react'
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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="p-3 glass rounded-full">
              <User className="w-8 h-8 text-neon-blue" />
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
            className="text-gray-700 dark:text-gray-300 text-xl max-w-2xl mx-auto"
          >
            Passionate developer creating innovative solutions
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-black" />
              </div>
              
              {/* Profile Image */}
              <div className="absolute inset-3 rounded-full overflow-hidden ring-4 ring-white/20 dark:ring-white/10 backdrop-blur-sm professional-image ring-glow">
                <Image
                  src="/anil-profile.png"
                  alt="Anil Chhetri - AI & ML Student"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover object-center rounded-full"
                  priority
                />
                {/* Professional overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
              
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white">
                AI & Machine Learning{' '}
                <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Explorer
                </span>
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed text-lg">
                <p>
                  Currently pursuing my Bachelor&apos;s in Artificial Intelligence & Machine Learning at 
                  Sri Sairam College of Engineering, Bangalore. I believe in learning through building 
                  and have developed a strong foundation in Python, ML algorithms, and data analysis.
                </p>
                <p>
                  My journey is driven by curiosity and hands-on experience. From developing chatbots 
                  to building predictive models and expense tracking applications, I explore AI&apos;s potential 
                  through practical projects that solve real-world problems.
                </p>
                <p>
                  Looking ahead, I&apos;m focused on contributing to innovative AI solutions, collaborating 
                  with teams that push boundaries, and continuing to learn from every project and challenge 
                  that comes my way.
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <a
                href="/resume.pdf"
                download="Anil_Chhetri_Resume.pdf"
                className={cn(
                  "group relative inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium",
                  "magnetic-btn",
                  "hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                )}
              >
                <Download size={18} />
                Download Resume
              </a>

              <div className="flex gap-3">
                <a
                  href="https://github.com/AnilChettri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-3 border border-black/30 dark:border-white/30 rounded-lg text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group",
                    "magnetic-btn"
                  )}
                >
                  <Github className="w-6 h-6 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anil-chhetri-880a8b253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-3 border border-black/30 dark:border-white/30 rounded-lg text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group",
                    "magnetic-btn"
                  )}
                >
                  <Linkedin className="w-6 h-6 transition-colors" />
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-neon-blue mb-1">5+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects Built</div>
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-neon-purple mb-1">6</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Certifications</div>
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-pink-600 dark:text-neon-pink mb-1">3</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Languages</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
