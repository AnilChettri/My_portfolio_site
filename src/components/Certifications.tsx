'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, Check } from 'lucide-react'
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
      title: 'SailPoint Leader: Identity Security',
      issuer: 'SailPoint',
      date: '2026',
      description: 'Earned SailPoint ISC Leader Certificate demonstrating foundational IAM governance expertise including identity lifecycle, access governance, RBAC, and compliance frameworks.',
      skills: ['SailPoint ISC', 'IAM Governance', 'Identity Lifecycle', 'RBAC', 'Access Governance'],
      credentialId: 'SAILPOINT-ISC-2026',
      verified: true,
      logo: '🔐',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'NHI Fundamentals',
      issuer: 'OASIS',
      date: '2026',
      description: 'Certification covering Non-Human Identity fundamentals, including machine identities, service accounts, and automated identity management in modern enterprise environments.',
      skills: ['NHI', 'Machine Identities', 'Service Accounts', 'Identity Management'],
      credentialId: 'NHI-FUND-2026',
      verified: true,
      logo: '🛡️',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      title: 'Identity Security Certified Administrator',
      issuer: 'CyberXdelta',
      date: '2026',
      description: 'Professional certification in identity security administration covering access management, security policies, and enterprise identity infrastructure.',
      skills: ['Identity Security', 'Access Management', 'Security Policies', 'IAM Admin'],
      credentialId: 'CX-ADMIN-2026',
      verified: true,
      logo: '⚙️',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'ISC2 CC Course Conclusion & Final Assessment Validation',
      issuer: 'ISC2',
      date: '2026',
      description: 'Completed ISC2 Certified in Cybersecurity (CC) course curriculum and passed final assessment validation covering cybersecurity principles, risk management, and security operations.',
      skills: ['Cybersecurity', 'Risk Management', 'Security Operations', 'Incident Response'],
      credentialId: 'ISC2-CC-2026',
      verified: true,
      logo: '🔒',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 5,
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: '2025',
      description: 'Completed IBM Python certification covering Python programming fundamentals, data structures, and analytical libraries for data science applications.',
      skills: ['Python', 'Data Science', 'NumPy', 'Pandas', 'Data Analysis'],
      credentialId: 'IBM-PY-2025',
      verified: true,
      logo: '🐍',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 6,
      title: 'Responsible AI',
      issuer: 'Google',
      date: '2025',
      description: 'Certification covering responsible AI principles, ethical considerations, fairness, transparency, and bias mitigation in artificial intelligence systems.',
      skills: ['Responsible AI', 'AI Ethics', 'Fairness', 'Bias Mitigation', 'Transparency'],
      credentialId: 'RAI-GOOGLE-2025',
      verified: true,
      logo: '🤖',
      color: 'from-red-500 to-pink-500',
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
            Industry-recognised credentials in IAM, identity security, and cybersecurity
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
              className="group relative bg-white/80 dark:bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 tilt-card"
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
                  <div className="w-8 h-8 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center border-2 border-white dark:border-black">
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
              <div className="text-xs text-gray-500 dark:text-gray-500 border-t border-black/10 dark:border-white/10 pt-4">
                ID: {cert.credentialId}
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
          <div className="inline-flex items-center gap-8 p-6 bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-2xl border border-black/10 dark:border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-green mb-1">
                {certifications.length}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
            </div>
            <div className="w-px h-12 bg-black/20 dark:bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-blue mb-1">
                {certifications.filter(c => c.verified).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Verified</div>
            </div>
            <div className="w-px h-12 bg-black/20 dark:bg-white/20" />
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
