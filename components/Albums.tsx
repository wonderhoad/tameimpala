'use client'

import { motion } from 'framer-motion'

const albums = [
  {
    title: 'Innerspeaker',
    year: '2010',
    description:
      'Дебютный альбом, который познакомил мир с уникальным звуком Tame Impala. Психоделический рок с мечтательными мелодиями.',
  },
  {
    title: 'Lonerism',
    year: '2012',
    description:
      'Второй альбом, углубившийся в темы одиночества и самоанализа. Получил премию ARIA и международное признание.',
  },
  {
    title: 'Currents',
    year: '2015',
    description:
      'Прорывной альбом, который принёс Tame Impala мировую славу. Сочетание поп-музыки и психоделии с номинацией на Grammy.',
  },
  {
    title: 'The Slow Rush',
    year: '2020',
    description:
      'Четвёртый студийный альбом, исследующий тему времени. Продолжает традицию инноваций в звуке и продюсировании.',
  },
]

export default function Albums() {
  return (
    <section
      id="albums"
      className="relative py-20 px-4 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
          data-aos="fade-up"
        >
          Альбомы
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {albums.map((album, index) => (
            <motion.div
              key={index}
              className="glass rounded-3xl p-8 hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10, rotate: 1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold gradient-text-dark">{album.title}</h3>
                <span className="text-xl text-dark-purple-70">{album.year}</span>
              </div>
              <p className="text-dark-purple-80 leading-relaxed">{album.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

