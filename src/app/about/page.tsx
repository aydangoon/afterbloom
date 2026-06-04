import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="max-w-lg mx-auto py-12">
      <div className="relative flex justify-center pb-12">
        <Link href="/home">
          <img
            src="/images/arrow.webp"
            className="absolute left-0 w-10 scale-[-1]"
          />
        </Link>
        <h1 className="text-4xl font-bold">About</h1>
      </div>
      <div className="flex flex-col items-center text-left gap-2">
        <div className="relative aspect-square w-full max-w-[400px]">
          <div className="absolute inset-[21%] overflow-hidden">
            <img src="/images/us.webp" className="h-full w-full object-cover" />
          </div>
          <img
            src="/images/picture-frame.webp"
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
          />
        </div>
        <p className="font-[500] first-letter:float-left first-letter:pr-2 first-letter:pt-0 first-letter:text-4xl first-letter:leading-[0.85] first-letter:font-bold">
          Afterbloom is an nyc-based alternative synthpop project by Huda Ayaz
          and Aydan Gooneratne. Stay tuned, it&apos;s just the beginning.
        </p>
      </div>
    </div>
  )
}
