'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text-dark">
            Tame Impala
          </h1>
          <p className="text-xl md:text-2xl gradient-text-dark mb-12 leading-relaxed font-medium">
            Tame Impala — это австралийский музыкальный проект, созданный
            мультиинструменталистом и продюсером Кевином Паркером. Начиная с
            2007 года, Кевин создаёт психоделическую музыку, которая сочетает в
            себе элементы рока, поп-музыки и электроники. Его уникальный звук,
            характеризующийся реверберацией, фазовыми эффектами и мечтательными
            мелодиями, завоевал сердца миллионов слушателей по всему миру.
            Каждый альбом Tame Impala — это путешествие в мир звуков и эмоций,
            где каждая композиция рассказывает свою историю.
          </p>

          {showButton && (
            <motion.a
              href="https://youtu.be/j-iheFkstFQ?si=Jd8g74VAGinwepKx"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.4, y: 0 }}
              whileHover={{ opacity: 0.8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="inline-block px-6 py-3 text-sm text-white/70 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              Читать дальше
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  )
}

