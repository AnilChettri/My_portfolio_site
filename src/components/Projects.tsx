'use client'

import { motion } from 'framer-motion'
import { Folder, ExternalLink, Github, Calendar, Star } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import { cn } from '@/lib/utils'
import { Database } from '@/types/database'
import ImageGallery from './ImageGallery'

type Project = Database['public']['Tables']['projects']['Row']

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    // Sample fallback data in case Supabase is not accessible
    const fallbackProjects: Project[] = [
      {
        id: '1',
        title: 'Smart Expense Tracker',
        summary: 'A comprehensive expense tracking application built with Python. Features intelligent categorization, expense analysis, and budget management with an intuitive user interface.',
        tags: ['Python', 'HTML', 'CSS', 'Data Analysis', 'UI/UX'],
        year: 2024,
        image_url: '/projects/expense-tracker-dashboard.png',
        demo_url: null,
        source_url: 'https://github.com/AnilChettri/expense-tracker',
        featured: true,
        created_at: '2024-07-01T00:00:00Z',
        updated_at: '2024-08-31T00:00:00Z',
      },
      {
        id: '2',
        title: 'AquaGuard Water Management',
        summary: 'A water quality monitoring and management system that helps track water usage, quality metrics, and provides alerts for maintenance and optimization.',
        tags: ['Python', 'Data Monitoring', 'IoT', 'Analytics'],
        year: 2024,
        image_url: '/projects/aquaguard-main.png',
        demo_url: null,
        source_url: 'https://github.com/AnilChettri/aquaguard-system',
        featured: true,
        created_at: '2024-05-15T00:00:00Z',
        updated_at: '2024-06-30T00:00:00Z',
      },
    ]
    
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('featured', { ascending: false })
          .order('year', { ascending: false })

        if (error) {
          console.error('Error fetching projects:', error)
          setProjects(fallbackProjects)
          setError('Using sample data - Supabase connection not available')
        } else {
          setProjects(data || fallbackProjects)
        }
      } catch (err) {
        console.error('Failed to fetch projects:', err)
        setProjects(fallbackProjects)
        setError('Using sample data - Supabase connection failed')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

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

  const featuredProjects = projects.filter(project => project.featured)
  // const otherProjects = projects.filter(project => !project.featured)

  // Project image galleries
  const getProjectImages = (projectId: string) => {
    switch (projectId) {
      case '1': // Expense Tracker
        return [
          '/projects/expense-tracker-dashboard.png',
          '/projects/expense-tracker-add.png',
          '/projects/expense-tracker-analytics.png',
          '/projects/expense-tracker-categories.png',
          '/projects/expense-tracker-reports.png',
          '/projects/expense-tracker-settings.png',
        ]
      case '2': // AquaGuard
        return [
          '/projects/aquaguard-main.png',
          '/projects/aquaguard-details.png',
        ]
      default:
        return ['/projects/default-project.png']
    }
  }

  const openGallery = (project: Project) => {
    setSelectedProject(project)
    setGalleryOpen(true)
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
              <Folder className="w-8 h-8 text-neon-purple" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
          {error && (
            <p className="text-yellow-500 text-sm mt-2 max-w-2xl mx-auto">
              {error}
            </p>
          )}
        </motion.div>

        {loading ? (
          /* Loading State */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass p-6 rounded-xl border border-white/10 animate-pulse">
                <div className="w-full h-48 bg-white/10 rounded-lg mb-4" />
                <div className="h-6 bg-white/10 rounded mb-2" />
                <div className="h-4 bg-white/10 rounded mb-4" />
                <div className="flex gap-2 mb-4">
                  <div className="h-6 w-16 bg-white/10 rounded" />
                  <div className="h-6 w-16 bg-white/10 rounded" />
                  <div className="h-6 w-16 bg-white/10 rounded" />
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-20 bg-white/10 rounded" />
                  <div className="h-8 w-20 bg-white/10 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid lg:grid-cols-2 gap-8 mb-16"
              >
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    className="group relative glass p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 tilt-card overflow-hidden"
                    whileHover={{ 
                      scale: 1.02, 
                      rotateY: 2, 
                      rotateX: 2,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="px-3 py-1 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className="relative w-full h-56 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                      <Image
                        src={project.image_url}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-neon-purple transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ 
                              duration: 0.4, 
                              delay: index * 0.1 + tagIndex * 0.05 
                            }}
                            className="px-3 py-1 text-sm bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full text-neon-blue"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        {project.source_url && (
                          <a
                            href={project.source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg text-white font-medium",
                              "magnetic-btn hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
                            )}
                          >
                            <Github className="w-4 h-4" />
                            View Code
                          </a>
                        )}
                        <button
                          onClick={() => openGallery(project)}
                          className={cn(
                            "flex items-center gap-2 px-6 py-3 glass border border-white/20 rounded-lg text-white font-medium",
                            "magnetic-btn hover:bg-white/10 transition-all duration-300"
                          )}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Images
                        </button>
                      </div>
                    </div>

                    {/* Hover Gradient */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-purple/5 via-neon-pink/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </motion.div>
                ))}
              </motion.div>
            )}

          </>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more projects and my code?
          </p>
          <a
            href="https://github.com/anilchhetri"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold",
              "magnetic-btn",
              "hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
            )}
          >
            <Github className="w-5 h-5" />
            See more on GitHub
          </a>
        </motion.div>

        {/* Image Gallery Modal */}
        {selectedProject && (
          <ImageGallery
            images={getProjectImages(selectedProject.id)}
            isOpen={galleryOpen}
            onClose={() => setGalleryOpen(false)}
            title={selectedProject.title}
          />
        )}
      </div>
    </section>
  )
}

export default Projects
