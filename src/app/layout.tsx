import type { Metadata } from 'next'
import { Petit_Formal_Script } from 'next/font/google'
import '@/styles/globals.css'
import { Instagram, Mail, Youtube } from 'lucide-react'
import { TiktokIcon } from '@/components/tiktok-icon'

const petitFormalScript = Petit_Formal_Script({
  variable: '--font-petit-formal-script',
  weight: '400',
  subsets: ['latin'],
})

const PRELOAD_IMAGES = [
  '/images/moon.webp',
  '/images/saturn.webp',
  '/images/seagulls.webp',
  '/images/star.webp',
  '/images/star-2.webp',
  '/images/star-3.webp',
  '/images/star-group-1.webp',
  '/images/grass.webp',
  '/images/grass-2.webp',
  '/images/castle.png',
  '/images/shooting-star.webp',
]

export const metadata: Metadata = {
  title: 'afterbloom',
  description: '',
  icons: {
    icon: [
      { url: '/images/favicon_io/favicon.ico', sizes: 'any' },
      {
        url: '/images/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/images/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/images/favicon_io/apple-touch-icon.png',
  },
  manifest: '/images/favicon_io/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {PRELOAD_IMAGES.map((href) => (
          <link key={href} rel="preload" as="image" href={href} />
        ))}
      </head>
      <body className={`${petitFormalScript.variable} antialiased`}>
        <div className="flex flex-col relative h-[100dvh] w-full overflow-hidden bg-background font-petit-formal-script text-foreground [background-image:radial-gradient(ellipse_at_top_left,rgba(19,54,110,0.1),transparent_70%)]">
          <Background />
          <div className="flex-1 px-4 sm:px-6">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/mages/star-grid-2.webp')] bg-[length:260px_200px] bg-repeat"
      />
      <img
        src="/images/moon.webp"
        aria-hidden
        className="pointer-events-none absolute left-[12%] top-[6%] z-10 h-[6rem] w-auto rotate-[15deg] opacity-60"
      />
      <img
        src="/images/saturn.webp"
        className="absolute right-[6%] top-[6%] z-10 h-[4rem] w-auto opacity-50"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          src="/images/seagulls.webp"
          className="absolute right-[25%] top-[20%] h-20 w-auto -rotate-[8deg] opacity-90"
        />
        <img
          src="/images/seagulls.webp"
          className="absolute right-[30%] top-[25%] h-16 w-auto opacity-95"
        />
        <img
          src="/images/seagulls.webp"
          className="absolute right-[25%] top-[30%] h-10 w-auto rotate-[10deg] opacity-85"
        />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          src="/images/star.webp"
          className="absolute left-[5%] top-[8%] h-4 w-auto opacity-70"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[18%] top-[22%] h-6 w-auto opacity-60"
        />
        <img
          src="/images/star-group-1.webp"
          className="absolute left-[8%] top-[40%] h-10 w-auto opacity-50"
        />
        <img
          src="/images/star-3.webp"
          className="absolute left-[22%] top-[62%] h-5 w-auto opacity-65"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[12%] top-[82%] h-3 w-auto opacity-80"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[3%] top-[55%] h-4 w-auto opacity-60"
        />
        <img
          src="/images/star-3.webp"
          className="absolute left-[26%] top-[5%] h-4 w-auto opacity-65"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[32%] top-[32%] h-3 w-auto opacity-75"
        />
        <img
          src="/images/star-group-1.webp"
          className="absolute left-[28%] top-[88%] h-8 w-auto opacity-45"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[38%] top-[78%] h-4 w-auto opacity-70"
        />
        <img
          src="/images/star-3.webp"
          className="absolute left-[48%] top-[6%] h-5 w-auto opacity-60"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[42%] top-[48%] h-3 w-auto opacity-70"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[52%] top-[92%] h-5 w-auto opacity-60"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[55%] top-[28%] h-3 w-auto opacity-75"
        />
        <img
          src="/images/star-3.webp"
          className="absolute left-[60%] top-[52%] h-4 w-auto opacity-65"
        />
        <img
          src="/images/star-group-1.webp"
          className="absolute left-[62%] top-[18%] h-8 w-auto opacity-50"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[58%] top-[72%] h-5 w-auto opacity-65"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[68%] top-[38%] h-3 w-auto opacity-70"
        />
        <img
          src="/images/star-3.webp"
          className="absolute left-[72%] top-[88%] h-4 w-auto opacity-60"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[78%] top-[28%] h-4 w-auto opacity-65"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[82%] top-[62%] h-3 w-auto opacity-75"
        />
        <img
          src="/images/star-group-1.webp"
          className="absolute left-[86%] top-[8%] h-9 w-auto opacity-45"
        />
        <img
          src="/images/star-3.webp"
          className="absolute left-[90%] top-[45%] h-5 w-auto opacity-60"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[94%] top-[82%] h-3 w-auto opacity-70"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[96%] top-[20%] h-4 w-auto opacity-65"
        />
      </div>
      <img
        src="/images/castle-2.png"
        className="bottom-[1%] absolute left-[15%] h-[12rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          backgroundImage:
            "url('/images/grass-2.webp'), url('/images/grass.webp')",
          backgroundRepeat: 'repeat-x, repeat-x',
          backgroundPosition: 'left 0 bottom -25px, left 110px bottom -25px',
          backgroundSize: '219px auto, 219px auto',
          filter: 'brightness(0.6)',
        }}
      />
    </div>
  )
}

function Footer() {
  return (
    <div className="relative flex justify-center items-center gap-6 text-white p-6">
      <a
        href="https://instagram.com/afterb1oom"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <span
        aria-label="YouTube (coming soon)"
        className="cursor-not-allowed opacity-50"
      >
        <Youtube className="h-6 w-6" />
      </span>
      <a
        href="https://tiktok.com/@afterb1oom"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
      >
        <TiktokIcon className="h-6 w-6" />
      </a>
      <a href="mailto:afterbloom.music@gmail.com" aria-label="Email">
        <Mail className="h-6 w-6" />
      </a>
    </div>
  )
}
