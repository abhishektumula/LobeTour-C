
export function BottomBarRoot() {
    return (
        <div className="flex flex-col justify-start items-center text-center p-4 m-4 gap-6">
            <div className="w-[70%] text-neutral-700 text-7xl font-bold tracking-normal leading-normal"><h1>Train your app with Lobe</h1></div>
            <div className="w-[40%] px-8 py-4 m-4 rounded-full text-2xl bg-[#04ddb2] text-white tracking-wide leading-relaxed hover:shadow-2xl/50 duration-300 ease-in-out">
                <button>Download</button>
            </div>
            <hr className="w-[120%] h-[2px] bg-neutral-300 border-0" />
        </div>
    )
}