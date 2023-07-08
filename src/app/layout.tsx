import './globals.css'
import Hotjar from '@hotjar/browser';

const siteId = 3565377;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sajid',
  description: 'Portfolio Website of Sajid Aalam aka c0mrad1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
