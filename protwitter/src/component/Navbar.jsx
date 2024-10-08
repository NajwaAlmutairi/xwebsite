import React, { useState } from 'react'

function Navbar({ type }) {
    const [inputCol, setInputCol] = useState(false);
    const loggedinUsername = localStorage.getItem('name');
    return (
        <>
            <div className='w-full flex sticky top-0 z-50'>
                <div className='flex w-[61%] h-[3.3rem] border-b border-l border-[#303336] '>
                    {!type &&
                        <>
                            <button className='btn w-[50%] border-none h-full text-[#E7E9EA] text-base shadow-none bg-[rgba(0,0,0,0.5)]
                    hover:bg-[#181818]'>
                                لك
                            </button>
                            <button className='btn w-[50%] border-none h-full text-[#71767B] text-base shadow-none bg-[rgba(0,0,0,0.5)]
                    hover:bg-[#181818]'>
                                متابعون
                            </button>
                        </>
                    }
                    {type &&
                        <>
                            <div className='flex gap-5 items-center cursor-pointer w-[100%] h-full p-2 pb-1 bg-[rgba(0,0,0,0.5)] '>
                                <button dir='rtl' className='btn min-h-5 h-9 w-9 btn-circle text-center hover:bg-[rgba(231,233,234,0.3)] border-none bg-transparent'>                                        <svg
                                    className="w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="white"
                                        d="M19 12H5m14 0-4 4m4-4-4-4"
                                    />
                                </svg>
                                </button>
                                <div className='flex flex-col items-start justify-start py-2 '>                                    <div className='flex items-center justify-start gap-1'>
                                    <h1 className='font-bold text-[1.25rem] text-[#E7E9EA]'> {loggedinUsername}</h1>
                                    <p>
                                        < svg viewBox="0 0 22 22" fill='#1D9BF0'
                                            className='h-5' >
                                            <g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z">
                                            </path></g></svg >
                                    </p>
                                </div>
                                    <p dir='ltr' className='text-[#71767b] text-[0.85rem]'>١٠٫١ ألف منشورًا</p>
                                </div>
                            </div>
                        </>
                    }

                </div>
                <div className='bg-black w-[39%]  h-[3.3rem]  border-b border-black pt-1 flex justify-center items-center'>
                    <div
                        onFocus={() => setInputCol(true)}
                        onBlur={() => setInputCol(false)}
                        tabIndex={0}
                        className={`flex items-center gap-3 rounded-full w-[22rem] h-10 pr-4 
                        ${inputCol ? 'border border-blue-400' : 'border-none'}
                        ${inputCol ? 'bg-black' : 'bg-[#212327]'}
                        `}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill={`${inputCol ? "#60a5fa" : "currentColor"}`}
                            className="h-5 w-5 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                        <input
                            type="text"
                            className="w-full h-full bg-transparent focus:outline-none"
                            placeholder="بحث"
                        />
                    </div>
                </div>
            </div >

        </>
    )
}

export default Navbar