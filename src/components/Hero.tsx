'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Mail } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-72 h-72 bg-gradient-to-r from-neon-pink/20 to-neon-green/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="relative mb-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-black" />
              </div>
              
              {/* Profile image */}
              <div className="absolute inset-2 rounded-full overflow-hidden ring-2 ring-white/20 dark:ring-white/10 backdrop-blur-sm professional-image ring-glow">
                <Image
                  src="/anil-profile.jpg"
                  alt="Anil Chhetri - AI & ML Enthusiast"
                  fill
                  className="object-cover object-center"
                  sizes="128px"
                  priority
                />
                {/* Overlay for better contrast on both themes */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating particles */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-neon-blue rounded-full opacity-80"
                animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-neon-purple rounded-full opacity-60"
                animate={{ y: [0, 8, 0], scale: [1, 0.8, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Greeting with Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neon-blue text-lg sm:text-xl mb-4 font-medium h-8"
          >
            <TypeAnimation
              sequence={[
                '👋 Welcome to my Portfolio',
                3000,
                '📝 Explore my Projects',
                3000,
                '📈 See my Progress',
                3000,
                '🚀 What\'s Next?',
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-black dark:text-white"
            />
          </motion.div>

          {/* Main Headline with Typing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-2 text-black dark:text-white leading-tight">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-neon-blue dark:to-neon-purple bg-clip-text text-transparent">
                Anil Chhetri
              </span>
            </h1>
            <div className="text-2xl sm:text-4xl lg:text-5xl font-bold h-16 flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  'Learning by Building',
                  3000,
                  'Growing through Projects',
                  3000,
                  'Exploring ML & AI',
                  3000,
                  'Creating the Future',
                  3000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              />
            </div>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Building the future with{' '}
            <span className="text-black dark:text-white font-semibold">AI & Machine Learning</span>.{' '}
            Every project teaches me something new, and{' '}
            <span className="text-black dark:text-white font-semibold">every challenge</span> brings me closer to{' '}
            <span className="text-black dark:text-white font-semibold">innovation</span>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className={cn(
                "group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold text-lg",
                "magnetic-btn",
                "hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
              )}
            >
              <span className="relative z-10">View Projects</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className={cn(
                "group relative px-8 py-4 border-2 border-black/80 dark:border-white/80 rounded-full text-black dark:text-white font-semibold text-lg",
                "magnetic-btn",
                "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105 transition-all duration-300"
              )}
            >
              <span className="flex items-center gap-2">
                <Mail size={20} />
                Contact Me
              </span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <a
              href="https://github.com/AnilChettri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 group-hover:text-neon-blue transition-colors" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
