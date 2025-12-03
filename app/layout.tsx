import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tame Impala | Кевин Паркер',
  description: 'Интерактивный сайт о музыкальной группе Tame Impala и Кевине Паркере',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  )
}

