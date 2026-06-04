export default function HomePage() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-lg mx-auto">
      <div className="h-1/2 relative w-full text-2xl">
        <img
          src="/images/spiderweb.gif"
          className="absolute w-full h-full object-contain opacity-75"
        />
        <a
          href="/music"
          className="flex flex-col gap-2 absolute left-0 top-1/2 translate-y-[-50%]"
        >
          <img src="/images/music.gif" className="w-16" />
          <p className="font-bold">Music</p>
        </a>
        <a
          className="flex absolute left-1/2 top-0 translate-x-[-50%] cursor-not-allowed"
          title="coming soon..."
          href="#"
        >
          <img src="/images/cd.gif" className="w-16 pr-2 relative bottom-4" />
          <p className="font-bold">Videos</p>
        </a>
        <a
          title="coming soon..."
          className="absolute right-0 top-1/2 cursor-not-allowed"
        >
          <img src="/images/camera.gif" />
          <p className="font-bold">Photos</p>
        </a>
        <a href="/about" className="flex absolute right-1/2 bottom-0">
          <p className="font-bold">About</p>
          <img src="/images/book-2.gif" className="w-10 ml-4" />
        </a>
      </div>
    </div>
  )
}
