'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const funFacts = [
  {
    id: 1,
    title: 'Сольный проект',
    content:
      'Tame Impala — это фактически сольный проект Кевина Паркера. Он записывает все инструменты сам, а на концертах выступает с группой.',
  },
  {
    id: 2,
    title: 'Название группы',
    content:
      'Название "Tame Impala" происходит от названия животного — приручённой антилопы импала. Кевин выбрал это имя, потому что оно звучало "экзотично и психоделично".',
  },
  {
    id: 3,
    title: 'Домашняя студия',
    content:
      'Большинство альбомов Tame Impala записаны в домашней студии Кевина в Перте. Он сам продюсирует и микширует все треки.',
  },
  {
    id: 4,
    title: 'Влияние The Beatles',
    content:
      'Кевин Паркер часто упоминает The Beatles как одно из главных музыкальных влияний, особенно в плане экспериментов со звуком.',
  },
  {
    id: 5,
    title: 'Коллаборации',
    content:
      'Кевин работал с такими артистами, как Lady Gaga, Travis Scott, The Weeknd, и продюсировал треки для других музыкантов.',
  },
  {
    id: 6,
    title: 'Визуальная эстетика',
    content:
      'Визуальная эстетика Tame Impala известна своими психоделическими видео и обложками альбомов, часто создаваемыми в сотрудничестве с художниками.',
  },
]

export default function FunFacts() {
  const [selectedFact, setSelectedFact] = useState<number | null>(null)

  return (
    <section
      id="funfacts"
      className="relative py-20 px-4 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
          data-aos="fade-up"
        >
          Интересные факты
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funFacts.map((fact, index) => (
            <motion.div
              key={fact.id}
              className="glass rounded-3xl p-6 cursor-pointer overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() =>
                setSelectedFact(selectedFact === fact.id ? null : fact.id)
              }
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xl font-semibold gradient-text-dark mb-3">
                {fact.title}
              </h3>
              <AnimatePresence>
                {selectedFact === fact.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-dark-purple-80 leading-relaxed"
                  >
                    {fact.content}
                  </motion.p>
                )}
              </AnimatePresence>
              {selectedFact !== fact.id && (
                <p className="text-dark-purple-70 text-sm mt-2">Нажмите, чтобы узнать больше</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

