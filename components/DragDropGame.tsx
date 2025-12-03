'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Album {
  id: string
  name: string
  year: string
}

const albums: Album[] = [
  { id: '1', name: 'Innerspeaker', year: '2010' },
  { id: '2', name: 'Lonerism', year: '2012' },
  { id: '3', name: 'Currents', year: '2015' },
  { id: '4', name: 'The Slow Rush', year: '2020' },
]

const years = ['2010', '2012', '2015', '2020']

export default function DragDropGame() {
  const [draggedAlbum, setDraggedAlbum] = useState<Album | null>(null)
  const [matches, setMatches] = useState<Record<string, string>>({})
  const [score, setScore] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)

  useEffect(() => {
    const savedMatches = localStorage.getItem('tameimpala-matches')
    const savedScore = localStorage.getItem('tameimpala-score')
    if (savedMatches) {
      setMatches(JSON.parse(savedMatches))
    }
    if (savedScore) {
      setScore(parseInt(savedScore))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tameimpala-matches', JSON.stringify(matches))
    localStorage.setItem('tameimpala-score', score.toString())
    
    const correctMatches = Object.entries(matches).filter(
      ([year, albumId]) => {
        const album = albums.find((a) => a.id === albumId)
        return album && album.year === year
      }
    ).length

    setScore(correctMatches)
    
    if (correctMatches === albums.length) {
      setGameComplete(true)
    }
  }, [matches])

  const handleDragStart = (album: Album) => {
    setDraggedAlbum(album)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (year: string) => {
    if (draggedAlbum) {
      setMatches((prev) => ({
        ...prev,
        [year]: draggedAlbum.id,
      }))
      setDraggedAlbum(null)
    }
  }

  const resetGame = () => {
    setMatches({})
    setScore(0)
    setGameComplete(false)
    localStorage.removeItem('tameimpala-matches')
    localStorage.removeItem('tameimpala-score')
  }

  const getAlbumForYear = (year: string) => {
    const albumId = matches[year]
    return albums.find((a) => a.id === albumId)
  }

  return (
    <section
      id="game"
      className="relative py-20 px-4 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text"
          data-aos="fade-up"
        >
          Мини-игра: Сопоставь альбомы и годы
        </motion.h2>

        <div className="glass rounded-3xl p-8 mb-8">
          <div className="text-center mb-6">
            <p className="text-2xl gradient-text-dark mb-2">
              Счёт: <span className="font-bold">{score}</span> / {albums.length}
            </p>
            {gameComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-dark-purple text-xl font-bold mb-4"
              >
                🎉 Поздравляем! Вы правильно сопоставили все альбомы!
              </motion.div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Альбомы */}
            <div>
              <h3 className="text-2xl font-semibold gradient-text-dark mb-4 text-center">
                Альбомы
              </h3>
              <div className="space-y-4">
                {albums.map((album) => {
                  const isMatched = Object.values(matches).includes(album.id)
                  return (
                    <motion.div
                      key={album.id}
                      draggable={!isMatched}
                      onDragStart={() => handleDragStart(album)}
                      className={`glass rounded-2xl p-4 cursor-move ${
                        isMatched ? 'opacity-50' : 'hover:scale-105'
                      }`}
                      whileHover={!isMatched ? { scale: 1.05 } : {}}
                      whileTap={!isMatched ? { scale: 0.95 } : {}}
                    >
                      <p className="text-dark-purple font-semibold text-lg">
                        {album.name}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Годы */}
            <div>
              <h3 className="text-2xl font-semibold gradient-text-dark mb-4 text-center">
                Годы выпуска
              </h3>
              <div className="space-y-4">
                {years.map((year) => {
                  const matchedAlbum = getAlbumForYear(year)
                  const isCorrect =
                    matchedAlbum && matchedAlbum.year === year
                  return (
                    <motion.div
                      key={year}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop(year)}
                      className={`glass rounded-2xl p-4 min-h-[60px] flex items-center justify-between ${
                        matchedAlbum
                          ? isCorrect
                            ? 'bg-green-500/20 border-2 border-green-400'
                            : 'bg-red-500/20 border-2 border-red-400'
                          : 'border-2 border-dashed border-white/30'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-dark-purple font-semibold text-lg">
                        {year}
                      </span>
                      {matchedAlbum && (
                        <span className="text-dark-purple-80 text-sm">
                          {matchedAlbum.name}
                        </span>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <motion.button
              onClick={resetGame}
              className="glass rounded-full px-8 py-4 gradient-text-dark font-semibold hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Сбросить игру
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

