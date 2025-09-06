'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50">
        <div className="w-14 h-8 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-6 right-6 z-50"
    >
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={cn(
          "relative w-14 h-8 rounded-full transition-all duration-300 ease-in-out",
          "bg-gray-200 dark:bg-gray-800",
          "border-2 border-gray-300 dark:border-gray-600",
          "hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500",
          "shadow-lg hover:shadow-xl"
        )}
        aria-label="Toggle theme"
      >
        {/* Background gradient */}
        <motion.div
          className={cn(
            "absolute inset-0 rounded-full transition-all duration-300",
            theme === 'dark'
              ? "bg-gradient-to-r from-indigo-500 to-purple-600"
              : "bg-gradient-to-r from-yellow-400 to-orange-500"
          )}
          layout
        />

        {/* Toggle circle */}
        <motion.div
          className={cn(
            "absolute top-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center",
            "transition-all duration-300 ease-in-out"
          )}
          animate={{
            x: theme === 'dark' ? 20 : 2,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          layout
        >
          {/* Icons */}
          <motion.div
            key={theme}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
          >
            {theme === 'dark' ? (
              <Moon className="w-3 h-3 text-indigo-600" />
            ) : (
              <Sun className="w-3 h-3 text-orange-600" />
            )}
          </motion.div>
        </motion.div>

        {/* Background icons */}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <Sun className="w-3 h-3 text-white/70" />
          <Moon className="w-3 h-3 text-white/70" />
        </div>
      </button>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded whitespace-nowrap">
          {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
        </div>
      </motion.div>
    </motion.div>
  )
}
