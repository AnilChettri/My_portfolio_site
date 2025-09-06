'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, Check } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'


const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      id: 1,
      title: 'Python for Data Science and AI',
      issuer: 'IBM SkillsBuild',
      date: '2025',
      description: 'Comprehensive Python programming certification covering data science fundamentals, AI applications, and practical programming skills.',
      skills: ['Python', 'Data Science', 'AI Programming', 'Problem Solving'],
      credentialId: 'PY0101EN',
      verified: true,
      logo: '🐍',
      color: 'from-blue-500 to-cyan-500',
      certificateUrl: '/certificates/ibm-python-certificate.pdf',
    },
    {
      id: 2,
      title: 'Data Analytics Essentials',
      issuer: 'IBM/Cisco',
      date: '2025',
      description: 'Advanced data analytics certification covering statistical analysis, data visualization, and business intelligence techniques.',
      skills: ['Data Analytics', 'Statistics', 'Data Visualization', 'Business Intelligence'],
      credentialId: 'DA-ESSENTIALS-2025',
      verified: true,
      logo: '📈',
      color: 'from-green-500 to-emerald-500',
      certificateUrl: '/certificates/data-analytics-essentials.pdf',
    },
    {
      id: 3,
      title: 'Machine Learning Fundamentals',
      issuer: 'Professional Institute',
      date: '2023',
      description: 'Comprehensive machine learning certification covering algorithms, model training, evaluation, and practical applications.',
      skills: ['Machine Learning', 'Algorithms', 'Model Training', 'Data Analysis'],
      credentialId: 'ML-FUND-2023',
      verified: true,
      logo: '🤖',
      color: 'from-purple-500 to-pink-500',
      certificateUrl: '/certificates/machine-learning-certificate.pdf',
    },
    {
      id: 4,
      title: 'Building AI Literacy',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Foundation course in artificial intelligence literacy, covering AI principles, applications, and ethical considerations.',
      skills: ['AI Literacy', 'AI Ethics', 'AI Applications', 'Technology Awareness'],
      credentialId: 'AI-LIT-2024',
      verified: true,
      logo: '🧠',
      color: 'from-indigo-500 to-purple-500',
      certificateUrl: '/certificates/ai-literacy-certificate.pdf',
    },
    {
      id: 5,
      title: 'Machine Learning Internship',
      issuer: 'Pantech E Limited',
      date: '2023',
      description: 'Practical internship certification in machine learning, covering real-world project development and supervised learning techniques.',
      skills: ['ML Projects', 'Supervised Learning', 'TensorFlow', 'Scikit-learn'],
      credentialId: 'PANTECH-ML-2023',
      verified: true,
      logo: '🎓',
      color: 'from-orange-500 to-red-500',
      certificateUrl: '/certificates/pantech-internship-certificate.pdf',
    },
    {
      id: 6,
      title: 'Responsible AI Principles',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Advanced course on responsible AI development, covering ethical AI principles and practical applications in real-world scenarios.',
      skills: ['Responsible AI', 'AI Ethics', 'Bias Prevention', 'AI Governance'],
      credentialId: 'RESP-AI-2024',
      verified: true,
      logo: '⚖️',
      color: 'from-teal-500 to-blue-500',
      certificateUrl: '/certificates/responsible-ai-certificate.pdf',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  }

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
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
              <Award className="w-8 h-8 text-neon-green" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Certifications
            </span>{' '}
            & Awards
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Professional credentials and achievements that showcase my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="group relative glass p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 tilt-card"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Verification Badge */}
              {cert.verified && (
                <div className="absolute -top-2 -right-2 z-10">
                  <div className="w-8 h-8 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center border-2 border-black">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}

              {/* Logo and Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={cn(
                  "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center text-2xl",
                  `bg-gradient-to-br ${cert.color}`
                )}>
                  {cert.logo}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black dark:text-white group-hover:text-neon-blue transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-neon-purple font-semibold">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>Issued {cert.date}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + skillIndex * 0.05 
                      }}
                      className="px-2 py-1 text-xs bg-white/10 dark:bg-white/10 bg-gray-200 rounded-md text-black dark:text-gray-300 border border-black/20 dark:border-white/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Credential ID */}
              <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-500 border-t border-black/10 dark:border-white/10 pt-4">
                <span>ID: {cert.credentialId}</span>
                <motion.a
                  href={cert.certificateUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 text-neon-blue hover:text-neon-green transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </motion.a>
              </div>

              {/* Glow Effect on Hover */}
              <div className={cn(
                "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10",
                `bg-gradient-to-r ${cert.color}`,
                "blur-xl"
              )} />

              {/* Card Shadow */}
              <div 
                className="absolute inset-0 rounded-xl bg-black/50 -z-20" 
                style={{ transform: 'translateZ(-10px)' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 p-6 glass rounded-2xl border border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-green mb-1">
                {certifications.length}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-blue mb-1">
                {certifications.filter(c => c.verified).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Verified</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-purple mb-1">
                {new Set(certifications.flatMap(c => c.skills)).size}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Skills</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
