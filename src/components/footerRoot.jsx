
export function FooterBarRoot() {
    return (
        <div className="flex flex-row gap-8 justify-center items-start p-2 m-2">
            <div className="flex flex-col p-6 m-2 justify-start items-center gap-4 ">
                <img src="src/assets/image.png" alt="" className="p-1 m-1" />
                <h2 className="text-zinc-600 font-semibold">A Product by Microsoft.</h2>
                <h2 className="text-zinc-600 font-semibold">All rights reserved.</h2>
                <h2 className="text-zinc-600 font-semibold">&copy Microsoft 2021.</h2>
            </div>
            <div className="flex flex-col p-2 m-2 justify-start items-center gap-4 ">
                <h1 className="p-1 m-1 text-2xl font-semibold">About</h1>
                <h2 className="text-zinc-600 text-xl hover:text-neutral-900 hover:font-italic hover:cursor-pointer" >Download</h2>
                <h2 className="text-zinc-600 text-xl hover:text-neutral-900 hover:font-italic hover:cursor-pointer" >Overview</h2>
                <h2 className="text-zinc-600 text-xl hover:text-neutral-900 hover:font-italic hover:cursor-pointer" >Examples</h2>
                <h2 className="text-zinc-600 text-xl hover:text-neutral-900 hover:font-italic hover:cursor-pointer" >Blog</h2>
            </div>

            <div className="flex flex-col p-2 m-2 justify-start items-center gap-4 text-center ">
                <h1 className="p-1 m-1 text-2xl font-semibold">General</h1>
                {/* <h2 className="text-zinc-600 text-xl hover:text-zinc-800 px-2">General</h2> */}
                <h2 className="text-zinc-600 text-xl hover:text-neutral-900 px-2 hover:cursor-pointer">Notice</h2>
                <h2 className="text-zinc-600 text-xl hover:text-neutral-900 px-2 hover:cursor-pointer">Licence</h2>
                <h2 className="text-zinc-600 text-xl hover:text-neutral-900 px-2 hover:cursor-pointer">Press inquiry</h2>
                <h2 className="text-zinc-600 text-xl hover:text-neutral-900 px-2 hover:cursor-pointer">Press Images</h2>
            </div>

            <div className="flex flex-col p-2 m-2 justify-start items-center gap-4 ">
                <h1 className="p-1 m-1 text-2xl font-semibold">Resources</h1>
                <h2 className="text-zinc-600 text-xl hover:text-neutral-900 hover:cursor-pointer">Help</h2>
                <h2 className="text-zinc-600 text-xl hover:text-neutral-900 hover:cursor-pointer">Tour</h2>
                <h2 className="text-zinc-600 text-xl hover:text-neutral-900 hover:cursor-pointer">Contact</h2>
                <h2 className="text-zinc-600 text-xl hover:text-neutral-900 hover:cursor-pointer">Privacy</h2>
            </div>

            <div className="flex flex-row p-2 m-2 justify-start items-center gap-4 ">
                <a href="https://github.com/abhishektumula" target="_blank"><img src="src/assets/bx-github.svg" alt="" className="h-10 w-10" /></a>
                <a href="https://github.com/abhishektumula/nvim" target="_blank"><img src="src/assets/bx-neovim.svg" alt="" className="h-10 w-10" /></a>
                <a href="https://x.com/axyzk9" target="_balnk"><img src="src/assets/bx-twitter-x.svg" alt="" className="h-10 w-10" /></a>
                <a href="https://youtube.com" target="_blank"><img src="src/assets/bx-youtube.svg" alt="" className="h-10 w-10" /></a >
            </div>

        </div >
    )

}

