
export function NavBarRoot() {

  return (
    <div className="flex flex-row justify-evenly w-full m-2">
      <img src="src/assets/image.png" alt="" className="w-fit h-15  p-4 rounded-4xl" />
      <div className="flex flex-row gap-15 p-3 justify-center w-full items-start text-zinc-500 m-1 text-lg font-semibold">
        <a href="https://tailwind-lobe-tour.vercel.app/" target="_blank"><button className="bg-transparent hover:text-neutral-900 transition-colors duration-75">Home</button></a>
        <a href="https://tailwind-lobe-tour.vercel.app/" target="_blank"><button className="bg-transparent hover:text-neutral-900 transition-colors duration-75">Overview</button></a>
        <a href="https://tailwind-lobe-tour.vercel.app/" target="_blank"><button className="bg-transparent hover:text-neutral-900 transition-colors duration-75">Examples</button></a>
        <a href="https://tailwind-lobe-tour.vercel.app/" target="_blank"><button className="bg-transparent hover:text-neutral-900 bg-neutral-400 rounded-3xl transition-colors duration-75">Help</button></a >
      </div>
    </div>
  )
}




