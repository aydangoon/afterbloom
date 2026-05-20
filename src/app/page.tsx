import { Instagram, Mail, Youtube } from 'lucide-react'
import { TiktokIcon } from '@/components/tiktok-icon'

export default function LandingPage() {
  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-background font-petit-formal-script text-foreground [background-image:radial-gradient(ellipse_at_top_left,rgba(19,54,110,0.1),transparent_70%)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/mages/star-grid-2.webp')] bg-[length:260px_200px] bg-repeat"
      />
      <img
        src="/images/moon.webp"
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-[6%] z-10 h-[6.3rem] w-auto rotate-[15deg] opacity-50"
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
          className="absolute left-[5%] top-[8%] h-4 w-auto opacity-60"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[18%] top-[22%] h-6 w-auto opacity-50"
        />
        <img
          src="/images/star-group-1.webp"
          className="absolute left-[8%] top-[40%] h-10 w-auto opacity-40"
        />
        <img
          src="/images/star-3.webp"
          className="absolute left-[22%] top-[62%] h-5 w-auto opacity-55"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[12%] top-[82%] h-3 w-auto opacity-70"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[3%] top-[55%] h-4 w-auto opacity-50"
        />
        <img
          src="/images/star-3.webp"
          className="absolute left-[26%] top-[5%] h-4 w-auto opacity-55"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[32%] top-[32%] h-3 w-auto opacity-65"
        />
        <img
          src="/images/star-group-1.webp"
          className="absolute left-[28%] top-[88%] h-8 w-auto opacity-35"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[38%] top-[78%] h-4 w-auto opacity-60"
        />
        <img
          src="/images/star-3.webp"
          className="absolute left-[48%] top-[6%] h-5 w-auto opacity-50"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[42%] top-[48%] h-3 w-auto opacity-60"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[52%] top-[92%] h-5 w-auto opacity-50"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[55%] top-[28%] h-3 w-auto opacity-65"
        />
        <img
          src="/images/star-3.webp"
          className="absolute left-[60%] top-[52%] h-4 w-auto opacity-55"
        />
        <img
          src="/images/star-group-1.webp"
          className="absolute left-[62%] top-[18%] h-8 w-auto opacity-40"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[58%] top-[72%] h-5 w-auto opacity-55"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[68%] top-[38%] h-3 w-auto opacity-60"
        />
        <img
          src="/images/star-3.webp"
          className="absolute left-[72%] top-[88%] h-4 w-auto opacity-50"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[78%] top-[28%] h-4 w-auto opacity-55"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[82%] top-[62%] h-3 w-auto opacity-65"
        />
        <img
          src="/images/star-group-1.webp"
          className="absolute left-[86%] top-[8%] h-9 w-auto opacity-35"
        />
        <img
          src="/images/star-3.webp"
          className="absolute left-[90%] top-[45%] h-5 w-auto opacity-50"
        />
        <img
          src="/images/star.webp"
          className="absolute left-[94%] top-[82%] h-3 w-auto opacity-60"
        />
        <img
          src="/images/star-2.webp"
          className="absolute left-[96%] top-[20%] h-4 w-auto opacity-55"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold pb-8">afterbloom</h1>
          <div className="relative h-48 aspect-square cursor-pointer">
            <img
              src="/images/blooming-flower.gif"
              aria-hidden
              className="absolute left-[22%] top-[20%] h-[80%] w-[62%] translate-x-[2px] translate-y-[-25px] object-cover"
            />
            <img
              src="/images/picture-frame.webp"
              aria-hidden
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <p className="text-center text-lg cursor-pointer">Enter</p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-6 text-white">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-opacity hover:opacity-70"
        >
          <Instagram className="h-6 w-6" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="transition-opacity hover:opacity-70"
        >
          <Youtube className="h-6 w-6" />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="transition-opacity hover:opacity-70"
        >
          <TiktokIcon className="h-6 w-6" />
        </a>
        <a
          href="mailto:hello@afterbloom.com"
          aria-label="Email"
          className="transition-opacity hover:opacity-70"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </div>
  )
}
