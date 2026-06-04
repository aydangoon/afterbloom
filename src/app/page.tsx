export default function LandingPage() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <a className="flex flex-col items-center" href="/home">
        <h1 className="text-5xl font-bold pb-8">afterbloom</h1>
        <div className="relative h-72 aspect-square cursor-pointer">
          <img
            src="/images/blooming-flower.gif"
            aria-hidden
            className="absolute left-[22%] top-[25%] h-[70%] w-[62%] translate-x-[2px] translate-y-[-25px]"
          />
          <img
            src="/images/picture-frame.webp"
            aria-hidden
            className="absolute inset-0 h-full w-full"
          />
        </div>
        {/* <img src="/images/enter-2.gif" className="w-16 pt-4" /> */}
        <p className="text-center text-2xl font-bold cursor-pointer">Enter</p>
      </a>
    </div>
  )
}
