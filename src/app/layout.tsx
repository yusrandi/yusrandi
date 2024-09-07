import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import '@/styles/Home.module.css'
import { AppProvider } from '@/components/AppContextFolder/AppProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yusrandi - Software Engineer',
  description: `I've been working on Software development for 5 years straight. Get in touch with me to know more.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
