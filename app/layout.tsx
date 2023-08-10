import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IBRA',
  description: 'IBRA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        {/* @ts-ignore */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
