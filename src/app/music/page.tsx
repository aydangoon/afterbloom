import Link from 'next/link'

export default function MusicPage() {
  return (
    <div className="max-w-lg mx-auto py-12">
      <div className="relative flex justify-center pb-32">
        <Link href="/home">
          <img
            src="/images/arrow.webp"
            className="absolute left-0 w-10 scale-[-1]"
          />
        </Link>
        <h1 className="text-4xl font-bold">Music</h1>
      </div>
      <div className="flex flex-col items-center gap-8">
        <section className="flex flex-col items-center gap-2">
          <div className="relative w-64 aspect-square">
            <img src="/images/afterthought.webp" className="absolute inset-0" />
            <img
              src="/images/new.gif"
              aria-hidden
              className="absolute -top-8 -right-12 h-16 w-auto"
            />
          </div>
          <h3 className="text-2xl font-bold pt-4">Afterthought</h3>
          <p className="text-center text-sm">
            You lost yourself in the pursuit. <br />
            Was it worth it?
          </p>
          <a href="" className="bg-violet-500 underline font-bold">
            LISTEN NOW
          </a>
        </section>
      </div>
    </div>
  )
}
