import type { Metadata } from 'next'
import { Petit_Formal_Script } from 'next/font/google'
import '@/styles/globals.css'

const petitFormalScript = Petit_Formal_Script({
  variable: '--font-petit-formal-script',
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'afterbloom',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${petitFormalScript.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
