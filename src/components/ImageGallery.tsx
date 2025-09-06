'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageGalleryProps {
  images: string[]
  isOpen: boolean
  onClose: () => void
  title: string
}

const ImageGallery = ({ images, isOpen, onClose, title }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 glass rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Main Content */}
          <div className="max-w-6xl w-full max-h-full flex flex-col">
            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-center mb-6 text-white"
            >
              {title} - Gallery
            </motion.h3>

            {/* Image Container */}
            <div className="relative flex-1 flex items-center justify-center">
              {images.length > 1 && (
                <>
                  {/* Previous Button */}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={prevImage}
                    className="absolute left-4 z-10 p-3 glass rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>

                  {/* Next Button */}
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={nextImage}
                    className="absolute right-4 z-10 p-3 glass rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </>
              )}

              {/* Image Display */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full h-[70vh] rounded-lg overflow-hidden bg-gray-900"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`${title} screenshot ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  priority
                />
              </motion.div>
            </div>

            {/* Image Counter & Thumbnails */}
            {images.length > 1 && (
              <div className="mt-6">
                {/* Counter */}
                <div className="text-center text-gray-400 mb-4">
                  {currentIndex + 1} of {images.length}
                </div>

                {/* Thumbnails */}
                <div className="flex justify-center gap-2 flex-wrap">
                  {images.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={cn(
                        "relative w-16 h-12 rounded overflow-hidden border-2 transition-all duration-300",
                        index === currentIndex
                          ? "border-neon-blue shadow-lg shadow-neon-blue/25"
                          : "border-white/20 hover:border-white/40"
                      )}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Backdrop Click to Close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ImageGallery
