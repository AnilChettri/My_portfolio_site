'use client'

import { motion } from 'framer-motion'
import { Code, Database, TrendingUp, Shield } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'SailPoint ISC', category: 'iam', icon: '🔐' },
    { name: 'Microsoft Entra ID', category: 'iam', icon: '🛡️' },
    { name: 'OIDC / OAuth 2.0', category: 'iam', icon: '🔑' },
    { name: 'IGA & RBAC', category: 'iam', icon: '⚙️' },
    { name: 'MFA & SSO', category: 'iam', icon: '🔒' },
    { name: 'Identity Lifecycle', category: 'iam', icon: '🔄' },
    { name: 'Python', category: 'programming', icon: '🐍' },
    { name: 'SQL', category: 'programming', icon: '🗃️' },
    { name: 'JavaScript', category: 'programming', icon: '🟨' },
    { name: 'TypeScript', category: 'programming', icon: '📘' },
    { name: 'Pandas & NumPy', category: 'programming', icon: '📊' },
    { name: 'Scikit-Learn', category: 'programming', icon: '🧠' },
    { name: 'React', category: 'frontend', icon: '⚛️' },
    { name: 'Next.js', category: 'frontend', icon: '▲' },
    { name: 'Express.js', category: 'frontend', icon: '🚀' },
    { name: 'REST APIs', category: 'frontend', icon: '🔗' },
    { name: 'Firebase Auth', category: 'frontend', icon: '🔥' },
    { name: 'PostgreSQL', category: 'frontend', icon: '🐘' },
    { name: 'Git', category: 'tools', icon: '🔄' },
    { name: 'n8n', category: 'tools', icon: '⚡' },
    { name: 'Jupyter', category: 'tools', icon: '📓' },
    { name: 'Postman', category: 'tools', icon: '📮' },
  ]

  const skillCategories = [
    {
      title: 'IAM & Identity Security',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-neon-blue to-neon-purple',
      skills: skills.filter(skill => skill.category === 'iam')
    },
    {
      title: 'Programming & Data',
      icon: <Code className="w-6 h-6" />,
      color: 'from-neon-purple to-neon-pink',
      skills: skills.filter(skill => skill.category === 'programming')
    },
    {
      title: 'Frontend & Backend',
      icon: <Database className="w-6 h-6" />,
      color: 'from-neon-pink to-neon-green',
      skills: skills.filter(skill => skill.category === 'frontend')
    },
    {
      title: 'Tools & Platforms',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-neon-green to-neon-blue',
      skills: skills.filter(skill => skill.category === 'tools')
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
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
              <Code className="w-8 h-8 text-neon-green" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            Technical{' '}
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            IAM platforms, programming languages, and tools I work with
          </p>
        </motion.div>

        {/* Animated Marquee */}
        <div className="mb-20">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 animate-marquee"
              style={{ minWidth: '200%' }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 px-6 py-4 glass rounded-full border border-white/10 hover:border-neon-blue/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium whitespace-nowrap text-black dark:text-white">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Skill Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    className="flex items-center gap-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm font-medium text-black dark:text-white">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
