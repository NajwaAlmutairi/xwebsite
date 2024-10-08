import React from 'react'
import WriteTweet from './WriteTweet'

function MakeTweetModal() {
    return (
        <>
            <button className="btn btn-circle min-h h-12 w-12 text-center bg-[#1D9BF0] hover:bg-[#3390ce] border-none '" onClick={() => document.getElementById('my_modal_3').showModal()}>
                <svg viewBox="0 0 24 24" className='h-7' fill="white">
                    <g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z">
                    </path></g></svg>
            </button>
            <dialog id="my_modal_3" className="modal bg-[rgba(173,220,255,0.2)]">
                <div className="modal-box max-w-[38rem] w-[38rem] rounded-xl min-h-72 pb-0 ">
                    <form method="dialog relative">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <button className='btn absolute top-2 left-2 btn-circle btn-ghost min-h-5 h-8 w-24 font-bold 
                text-[#4a99e9] border-none outline-none text-[.95rem] hover:bg-[rgba(29,155,240,0.3)]'>
                        المسودات
                    </button>
                    <p className="pt-7"><WriteTweet modal={'yes'} /></p>
                </div>
            </dialog>
        </>
    )
}

export default MakeTweetModal


