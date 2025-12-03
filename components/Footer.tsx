'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative py-12 px-4 border-t border-white/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold gradient-text-dark mb-4">
              Социальные сети
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tameimpala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-purple-70 hover:text-dark-purple transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/tameimpala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-purple-70 hover:text-dark-purple transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://www.youtube.com/tameimpala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-purple-70 hover:text-dark-purple transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold gradient-text-dark mb-4">О проекте</h3>
            <p className="text-dark-purple-70 leading-relaxed">
              Интерактивный сайт, посвящённый творчеству Tame Impala и Кевина
              Паркера. Исследуйте биографию, альбомы и интересные факты о
              группе.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold gradient-text-dark mb-4">Навигация</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="#hero"
                className="text-dark-purple-70 hover:text-dark-purple transition-colors"
              >
                Главная
              </a>
              <a
                href="#bio"
                className="text-dark-purple-70 hover:text-dark-purple transition-colors"
              >
                Биография
              </a>
              <a
                href="#albums"
                className="text-dark-purple-70 hover:text-dark-purple transition-colors"
              >
                Альбомы
              </a>
              <a
                href="#game"
                className="text-dark-purple-70 hover:text-dark-purple transition-colors"
              >
                Игра
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-dark-purple-70 text-sm">
            © {new Date().getFullYear()} Tame Impala Fan Site. Все права
            защищены.
          </p>
          <p className="text-dark-purple-70 text-xs mt-2">
            Создано с любовью к музыке
          </p>
        </div>
      </div>
    </footer>
  )
}

