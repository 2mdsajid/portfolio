import ThemeWrapper from '@/lib/utils/ThemeWrapper'
import './globals.css'

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
      <body>
      <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  )
}
