import ThemeWrapper from '@/lib/utils/ThemeWrapper'
import './globals.css'
import Preloader from './components/reused/Preloader'
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Sajid | c0mrad1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio Website of Sajid Aalam aka c0mrad1" />
        <meta name="keywords" content="c0mrad1, sajid, mbbs, mcoms, pokhara, gaming, trekking, coding" />
        <meta name="og:title" content="Sajid | c0mrad1" />
        <meta name="og:description" content="Portfolio Website of Sajid Aalam aka c0mrad1" />
        <meta name="og:image" content="/200909.jpg" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <Preloader />
        <ThemeWrapper>
          {children}
          <Analytics />
        </ThemeWrapper>
      </body>
    </html>
  )
}
