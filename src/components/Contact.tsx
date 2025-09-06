'use client'

import { motion } from 'framer-motion'
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useState, useRef, FormEvent } from 'react'
// import emailjs from '@emailjs/browser'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields.',
      })
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      })
      return
    }

    setStatus({
      type: 'loading',
      message: 'Sending your message...',
    })

    try {
      // EmailJS configuration - you'll need to set these up
      // const serviceId = 'your_service_id' // Replace with your EmailJS service ID
      // const templateId = 'your_template_id' // Replace with your EmailJS template ID  
      // const publicKey = 'your_public_key' // Replace with your EmailJS public key

      // For demonstration, we'll show success after a delay
      // In production, you would use the actual EmailJS configuration
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Uncomment this when you have EmailJS configured:
      /*
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Anil Chhetri',
        },
        publicKey
      )
      */

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.',
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      })

      // Reset form reference
      if (formRef.current) {
        formRef.current.reset()
      }

    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact me directly.',
      })
    }

    // Clear status after 5 seconds
    setTimeout(() => {
      setStatus({ type: 'idle', message: '' })
    }, 5000)
  }

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
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
              <Mail className="w-8 h-8 text-neon-green" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hi? 
            I&apos;d love to hear from you. Drop me a message below!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Get in Touch</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-lg">
                I&apos;m always open to discussing new opportunities, creative projects, 
                or potential collaborations. Whether you&apos;re looking for a developer 
                to bring your ideas to life or just want to connect, feel free to reach out!
              </p>
            </motion.div>

            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/5 transition-colors">
                <div className="p-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Email</p>
                  <p className="text-black dark:text-white font-medium">chettrianil899@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/5 transition-colors">
                <div className="p-2 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Response Time</p>
                  <p className="text-black dark:text-white font-medium">Usually within 24 hours</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">Quick Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AnilChettri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-300 group magnetic-btn"
                >
                  <svg className="w-6 h-6 group-hover:text-neon-blue transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/anil-chhetri-880a8b253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-300 group magnetic-btn"
                >
                  <svg className="w-6 h-6 group-hover:text-neon-purple transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass p-8 rounded-2xl border border-white/10"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 dark:bg-white/5 bg-gray-100/80 border border-black/20 dark:border-white/20 rounded-lg text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 dark:bg-white/5 bg-gray-100/80 border border-black/20 dark:border-white/20 rounded-lg text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 dark:bg-white/5 bg-gray-100/80 border border-black/20 dark:border-white/20 rounded-lg text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>
              </div>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "p-4 rounded-lg flex items-center gap-3",
                    status.type === 'success' && "bg-green-500/20 border border-green-500/30 text-green-400",
                    status.type === 'error' && "bg-red-500/20 border border-red-500/30 text-red-400",
                    status.type === 'loading' && "bg-blue-500/20 border border-blue-500/30 text-blue-400"
                  )}
                >
                  {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
                  {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
                  {status.type === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                  <p className="text-sm">{status.message}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status.type === 'loading'}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg text-white font-semibold text-lg",
                  "magnetic-btn glow-border",
                  "hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-all duration-300",
                  "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                )}
                whileHover={{ scale: status.type === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status.type === 'loading' ? 1 : 0.98 }}
              >
                {status.type === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Alternative Contact Info */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                Prefer email directly?{' '}
                <a
                  href="mailto:chettrianil899@gmail.com"
                  className="text-neon-blue hover:text-neon-green transition-colors font-medium"
                >
                  chettrianil899@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
