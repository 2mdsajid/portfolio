import ThemeWrapper from '@/lib/utils/ThemeWrapper'
import './globals.css'
import Preloader from './components/reused/Preloader'
import { Analytics } from '@vercel/analytics/react';
import { constructMetadata } from '@/lib/utils/Constants';

export const metadata = constructMetadata()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
