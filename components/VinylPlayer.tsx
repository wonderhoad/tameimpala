'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section
      id="vinyl"
      className="relative py-20 px-4 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 gradient-text"
          data-aos="fade-up"
        >
          Виниловая пластинка
        </motion.h2>

        <div className="relative flex justify-center items-center">
          <motion.div
            className="relative w-80 h-80 md:w-96 md:h-96"
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{
              duration: 20,
              repeat: isPlaying ? Infinity : 0,
              ease: 'linear',
            }}
            onClick={() => setIsPlaying(!isPlaying)}
            style={{ cursor: 'pointer' }}
          >
            {/* Виниловая пластинка */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
              {/* Центральная часть */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-700 rounded-full border-4 border-gray-600 z-10"></div>
              
              {/* Концентрические круги */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-gray-700 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-gray-700 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-gray-700 rounded-full"></div>
              
              {/* Место для PNG фото - замените /vinyl-image.png на путь к вашему изображению */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden">
                {/* Раскомментируйте и укажите путь к вашему PNG изображению */}
                {/* <Image
                  src="/vinyl-image.png"
                  alt="Tame Impala"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-full"
                /> */}
                <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-orange-400/20 flex items-center justify-center">
                  <span className="text-dark-purple-70 text-sm text-center px-4">
                    PNG фото здесь
                    <br />
                    <span className="text-xs">(добавьте изображение в public/vinyl-image.png)</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Кнопка play/pause */}
          <motion.button
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-8 py-4 glass rounded-full gradient-text-dark font-semibold hover:scale-110 transition-transform"
            onClick={() => setIsPlaying(!isPlaying)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? '⏸ Пауза' : '▶ Воспроизвести'}
          </motion.button>
        </div>
      </div>
    </section>
  )
}

