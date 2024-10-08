import React from 'react'
import { Link } from 'react-router-dom'

function ProfileSec({ likedpage }) {
    return (
        <>
            <div className='relative flex flex-col gap-2 border-b border-[#303336]'>
                <div className="avatar absolute top-[7.66rem] right-4">
                    <div className='w-36 rounded-full border-4 border-black'>
                        <img src="https://pbs.twimg.com/profile_images/797667693398781953/yFaIilzC_400x400.jpg"
                            className='w-full h-full rounded-full' />
                    </div>
                </div>
                <div className='max-w-[37rem] h-[13rem] bg-slate-400 ' />
                <div className='flex justify-end mt-3 pl-2'>
                    <div>
                        <button className='btn btn-circle min-h-6 h-9 w-48 border border-[#303336]
                        hover:bg-[#212327]
                        bg-transparent
                        font-bold text-base
                        '>
                            تعديل الملف الشخصيّ
                        </button>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start px-4 py-2 '>

                    <div className='flex items-center justify-start gap-1'>
                        <h1 className='font-bold text-[1.3rem] text-[#E7E9EA]'>سارة بن عبدالعزيز</h1>
                        <p>
                            < svg viewBox="0 0 22 22" fill='#1D9BF0'
                                className='h-5' >
                                <g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z">
                                </path></g></svg >
                        </p>
                    </div>
                    <p dir='ltr' className='text-[#71767b] text-[0.94rem]'>@Saraabd</p>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='flex gap-2 items-center mt-3'>
                            <svg viewBox="0 0 24 24 " fill='#71767b' className='h-5' >
                                <g><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z">
                                </path></g></svg>
                            <p className='text-[#71767b] text-[0.94rem]'>انضم في يناير ٢٠٢٤</p>
                        </div>
                        <div className='flex gap-4 items-center mt-3 '>
                            <div className='flex items-center justify-start gap-1 hover:underline cursor-pointer'>
                                <span className='font-bold text-[0.94rem] text-[#E7E9EA]'>8</span>
                                <p className='text-[#71767b] text-[0.94rem]'>متابَعين</p>
                            </div>
                            <div className='flex items-center justify-start gap-1 hover:underline cursor-pointer'>
                                <span className='font-bold text-[0.94rem] text-[#E7E9EA]'>50</span>
                                <p className='text-[#71767b] text-[0.94rem] '>متابِعان</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex w-full h-[3.3rem] '>
                    <Link to='/profile' className='w-[16.6%]'>
                        <button className={`btn border-none h-full ${likedpage ? 'text-[#71767B]' : 'text-[#E7E9EA]'} text-base shadow-none bg-[rgba(0,0,0,0.5)] hover:bg-[#181818] text-[0.94rem]`}>
                            المنشورات
                        </button>
                    </Link>
                    <button className='btn w-[16.6%] border-none h-full text-[#71767B] text-base shadow-none bg-[rgba(0,0,0,0.5)] hover:bg-[#181818] text-[0.94rem]'>
                        الردود
                    </button>
                    <button className='btn w-[16.6%] border-none h-full text-[#71767B] text-base shadow-none bg-[rgba(0,0,0,0.5)] hover:bg-[#181818] text-[0.94rem]'>
                        المميزة
                    </button>
                    <button className='btn w-[16.6%] border-none h-full text-[#71767B] text-base shadow-none bg-[rgba(0,0,0,0.5)] hover:bg-[#181818] text-[0.94rem]'>
                        المقالات
                    </button>
                    <button className='btn w-[16.6%] border-none h-full text-[#71767B] text-base shadow-none bg-[rgba(0,0,0,0.5)] hover:bg-[#181818] text-[0.94rem]'>
                        الوسائط
                    </button>
                    <Link to='/likedpage' className='w-[16.6%]'>
                        <button className={`btn border-none h-full ${likedpage ? 'text-[#E7E9EA]' : 'text-[#71767B]'} text-base shadow-none bg-[rgba(0,0,0,0.5)] hover:bg-[#181818] text-[0.94rem]`}>
                            الإعجابات
                        </button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default ProfileSec

