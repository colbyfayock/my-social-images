import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Products',
  description: 'Some nice sneakers!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
          <Nav />
          <main>{ children }</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
