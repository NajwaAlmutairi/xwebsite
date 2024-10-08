import React, { useState } from 'react'

function NewsSection(props) {
    const [focusColor, setFocusColor] = useState(false);

    return (
        <>
            <div className='flex flex-col items-center p-2 gap-2  '>
                {props.premium &&
                    <div className='flex flex-col gap-2 p-4 border border-[#303336] rounded-2xl'>
                        <h1 className='font-bold text-xl text-[#E7E9EA]'>الاشتراك في Premium</h1>
                        <h1 className='font-bold text-[.9rem] text-[#E7E9EA] w-[85%]'>اشترك لاكتشاف ميزات جديدة وفي حال كنت مؤهلًا، ستتسلّم حصة من إيرادات الإعلانات.</h1>
                        <button className='btn btn-circle font-bold border-none text-lg min-h-9 h-9 w-24 bg-[#1D9BF0] hover:bg-[#3492d1]'>اشترك</button>
                    </div>
                }
                  {/*  */}
                  {props.profile && 
                  <div className='flex flex-col w-full gap-3 pt-3  border border-[#303336] rounded-2xl'>
                    <h1 className='font-bold px-4 text-xl text-[#E7E9EA]'>قد يعجبك</h1>
                    <div className='flex justify-between cursor-pointer px-4 py-2 w-full hover:bg-[#080808]' >
                        <div className='flex gap-2'>
                            <button className='btn btn-circle min-h-9 h-9 w-9 border-none ouline-none '>
                                <img src="https://pbs.twimg.com/profile_images/1627549312199663617/UcbyIQa3_400x400.jpg"
                                    alt="Profile image"
                                     className='h-full w-full rounded-full'/>
                            </button>
                            <div className='flex flex-col items-start justify-start'>
                                <h1 className='font-bold text-[1rem] text-[#E7E9EA] hover:underline'>SAUDI PlNTEREST</h1>
                                <p dir='ltr' className='text-[#71767b] text-[0.9rem]'>@Saudiipinterest</p>
                            </div>
                        </div>
                        <button className='btn btn-circle bg-[#EFF3F4] hover:bg-[#d3d4d4] min-h-8 h-8 w-[4.7rem] font-bold border-none ouline-none text-sm text-[#0F1419]'>
                            متابعة
                        </button>
                    </div>
                    <div className='flex justify-between cursor-pointer px-4 py-2 w-full hover:bg-[#080808]' >
                        <div className='flex gap-2'>
                            <button className='btn btn-circle min-h-9 h-9 w-9 border-none ouline-none '>
                                <img src="https://pbs.twimg.com/profile_images/1598314142208823296/5iGnY6WL_400x400.jpg"
                                    alt="Profile image"
                                     className='h-full w-full rounded-full'/>
                            </button>
                            <div className='flex flex-col items-start justify-start'>
                                <h1 className='font-bold text-[1rem] text-[#E7E9EA] hover:underline'>منبر الهلال - Mnbr Alhilal</h1>
                                <p dir='ltr' className='text-[#71767b] text-[0.9rem]'>@MnbrAlhila</p>
                            </div>
                        </div>
                        <button className='btn btn-circle bg-[#EFF3F4] hover:bg-[#d3d4d4] min-h-8 h-8 w-[4.7rem] font-bold border-none ouline-none text-sm text-[#0F1419]'>
                            متابعة
                        </button>
                    </div>
                    <div className='flex justify-between cursor-pointer px-4 py-2 w-full hover:bg-[#080808]' >
                        <div className='flex gap-2'>
                            <button className='btn btn-circle min-h-9 h-9 w-9 border-none ouline-none '>
                                <img src="https://pbs.twimg.com/profile_images/3127745865/dd05f22753691b28ce2a8884ccf9e6cf_400x400.jpeg"
                                    alt="Profile image"
                                     className='h-full w-full rounded-full'/>
                            </button>
                            <div className='flex flex-col items-start justify-start'>
                                <h1 className='font-bold text-[1rem] text-[#E7E9EA] hover:underline'>سلمان بن عبدالعزيز</h1>
                                <p dir='ltr' className='text-[#71767b] text-[0.9rem]'>@KingSalman</p>
                            </div>
                        </div>
                        <button className='btn btn-circle bg-[#EFF3F4] hover:bg-[#d3d4d4] min-h-8 h-8 w-[4.7rem] font-bold border-none ouline-none text-sm text-[#0F1419]'>
                            متابعة
                        </button>
                    </div>
                    <div className='cursor-pointer px-4 py-3 w-full rounded-b-2xl hover:bg-[#080808]' >
                        <h1 className='text-[#1D9BF0] ' > عرض المزيد</h1>
                    </div>
                </div>
            }
                {/*  */}

                <div className='flex flex-col w-full gap-3 pt-3  border border-[#303336] rounded-2xl'>
                    <h1 className='font-bold px-4 text-xl text-[#E7E9EA]'>ماذا يحدث</h1>
                    <div className='cursor-pointer px-4 w-full' >
                        <h1 className='font-bold text-lg text-[#E7E9EA]'>#نرتقي_بجودة_الحياة</h1>
                        <p className='text-[#71767b] text-sm'>برنامج جودة الحياة</p>
                        <p className='text-[#71767b] text-sm'>مُروَّج بواسطة برنامج جودة الحياة</p>
                    </div>
                    <div className='cursor-pointer px-4 py-2 w-full hover:bg-[#080808]' >
                        <div className='flex justify-between w-full'>
                            <div>
                                <p className='text-[#71767b] text-sm'>رياضة · متداول</p>
                                <h1 className='font-bold text-lg text-[#E7E9EA]'>#ميتروفيتش</h1>
                            </div>
                            <button
                                className='btn btn-circle btn-ghost min-h-9 h-9 w-9 
                                 hover:bg-[rgba(29,155,240,0.3)]
                                 hover:text-[#1D9BF0]
                                 text-[#71767b]'>
                                &bull;&bull;&bull;
                            </button>
                        </div>

                    </div>
                    <div className='cursor-pointer px-4 py-2 w-full hover:bg-[#080808]' >
                        <div className='flex justify-between w-full'>
                            <div>
                                <p className='text-[#71767b] text-sm'>السياسة · متداول</p>
                                <h1 className='font-bold text-lg text-[#E7E9EA]'>الديوان الملكي</h1>
                            </div>
                            <button
                                className='btn btn-circle btn-ghost min-h-9 h-9 w-9 
                               hover:bg-[rgba(29,155,240,0.3)]
                               hover:text-[#1D9BF0]
                               text-[#71767b]'>
                                &bull;&bull;&bull;
                            </button>
                        </div>

                    </div>
                    <div className='cursor-pointer px-4 py-2 w-full hover:bg-[#080808]' >
                        <div className='flex justify-between w-full'>
                            <div>
                                <p className='text-[#71767b] text-sm'>المتداول في المملكة العربية السعودية</p>
                                <h1 className='font-bold text-lg text-[#E7E9EA]'>الراتب الأساسي</h1>
                            </div>
                            <button
                                className='btn btn-circle btn-ghost min-h-9 h-9 w-9 
                                hover:bg-[rgba(29,155,240,0.3)]
                                hover:text-[#1D9BF0]
                                text-[#71767b]'>
                                &bull;&bull;&bull;
                            </button>
                        </div>

                    </div>
                    <div className='relative cursor-pointer px-4 py-2 w-full hover:bg-[#080808]' >
                        <div className='flex justify-between items-start w-full'>
                            <div>
                                <p className='text-[#71767b] text-sm'>صور شعبية · متداول</p>
                                <h1 className='font-bold text-lg text-[#E7E9EA]'>الصحة القابضة </h1>
                            </div>
                            <button
                                className=' btn btn-circle btn-ghost min-h-9 h-9 w-9 
                                hover:bg-[rgba(29,155,240,0.3)]
                                hover:text-[#1D9BF0]
                                text-[#71767b]'>
                                &bull;&bull;&bull;
                            </button>
                            <p className='absolute bottom-0 left-0 px-4 py-2 text-[#71767b] text-xs '> تغريدة &bull; ٢٬٢٨٢</p>
                        </div>
                    </div>
                    <div className='cursor-pointer px-4 py-3 w-full rounded-b-2xl hover:bg-[#080808]' >
                        <h1 className='text-[#1D9BF0] ' > عرض المزيد</h1>
                    </div>
                </div>

              

            </div>
        </>
    )
}

export default NewsSection


