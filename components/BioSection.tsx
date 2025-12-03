'use client'

import { motion } from 'framer-motion'

const bioTimeline = [
  {
    year: '1986',
    title: 'Рождение',
    description: 'Кевин Паркер родился в Перте, Западная Австралия.',
  },
  {
    year: '2007',
    title: 'Начало проекта',
    description:
      'Кевин создал Tame Impala как сольный проект, записывая музыку в своей домашней студии.',
  },
  {
    year: '2010',
    title: 'Innerspeaker',
    description:
      'Выпуск дебютного альбома "Innerspeaker", который получил признание критиков.',
  },
  {
    year: '2012',
    title: 'Lonerism',
    description:
      'Второй альбом "Lonerism" принёс международную известность и премию ARIA.',
  },
  {
    year: '2015',
    title: 'Currents',
    description:
      'Третий альбом "Currents" стал прорывом, получив Grammy и мировое признание.',
  },
  {
    year: '2020',
    title: 'The Slow Rush',
    description:
      'Четвёртый студийный альбом "The Slow Rush" продолжает традицию инноваций.',
  },
]

export default function BioSection() {
  return (
    <section
      id="bio"
      className="relative py-20 px-4 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
          data-aos="fade-up"
        >
          Биография Кевина Паркера
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bioTimeline.map((item, index) => (
            <motion.div
              key={index}
              className="glass rounded-3xl p-6 hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div className="text-3xl font-bold gradient-text-dark mb-2">
                {item.year}
              </div>
              <h3 className="text-xl font-semibold gradient-text-dark mb-3">
                {item.title}
              </h3>
              <p className="text-dark-purple-80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

