import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ar';
import axios from 'axios';

function Tweet(props) {
    const loggedinUser = localStorage.getItem('username');
    const loggedinUserId = localStorage.getItem('userid');
    const apiUrl = 'https://66e89226b17821a9d9dd1e8f.mockapi.io/comment'

    const isLiked = props.likedTweets.includes(props.tweetId);

    const likesValue = (number) => {
        if (number >= 1000000) {
            return Math.floor(number / 1000000) + ' مليون  ';
        } else if (number >= 1000) {
            return Math.floor(number / 1000) + ' ألف  ';
        } else {
            return number;
        }
    }
    const getRelativeTime = (date) => {
        moment.locale('sa');
        return moment(date).fromNow();
    };

    const handleDelete = (id) => {
        axios.delete(`${apiUrl}/${id}`)
            .then(() => {
                props.onDelete(props.tweetId);
                document.getElementById('delete_modal').close();
            })
            .catch((error) => {
            });
    };
    return (
        <>
            <div className='flex gap-2 p-2 w-full border-b border-[#303336]'>
                <div>
                    <div className='btn btn-circle border-none outline-none bg-red-950 hover:bg-red-950 focus:border-none active:border-none w-10 h-10 min-h-7 max-sm:h-7 max-sm:w-7'>
                        {props.profile || props.username === loggedinUser ? (
                            <img
                                src="https://pbs.twimg.com/profile_images/797667693398781953/yFaIilzC_400x400.jpg"
                                alt="user"
                                className='rounded-full w-10 h-10'
                            />
                        ) : (
                            <span className='text-white'>@</span>
                        )}

                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <h3 className='text-[#E7E9EA] text-[.95rem] max-sm:text-[0.60rem]'>
                        {props.name}
                        <span dir='ltr' className='text-[#71767b] text-[.95rem]'> @{props.username} </span>
                        <span dir='ltr' className='text-[#71767b] text-[.95rem]'> {getRelativeTime(props.date)} </span>
                    </h3>
                    <p className='text-[#E7E9EA] text-[.95rem] max-sm:text-xs break-words whitespace-pre-wrap'>{props.comment}</p>
                    <div className='flex mt-2 justify-between'>
                        <div className='flex items-center group cursor-pointer'>
                            <button className="btn btn-circle btn-ghost min-h-9 h-9 w-9 
                            hover:bg-[rgba(29,155,240,0.3)]
                               hover:text-[#1D9BF0]
                               text-[#71767b]
                               group-hover:bg-[rgba(29,155,240,0.3)]
                            ">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill='#71767b'
                                    className='h-5 group-hover:fill-[#1D9BF0]'
                                >
                                    <g>
                                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                                    </g>
                                </svg>
                            </button>
                            <p className='text-[#71767b] text-[0.83rem] group-hover:text-[#1D9BF0]'>70</p>
                        </div>

                        <div className='flex items-center group cursor-pointer'>
                            <button
                                className='btn btn-circle btn-ghost min-h-9 h-9 w-9 
                               hover:text-[#1D9BF0]
                               text-[#71767b]
                               group-hover:bg-[#0f1a14]'>
                                < svg viewBox="0 0 24 24" fill='#71767b'
                                    className='h-5 group-hover:fill-[#45966a]'>
                                    <g>
                                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z">
                                        </path></g></svg>
                            </button>
                            <p className='text-[#71767b] text-[0.83rem] group-hover:text-[#45966a]'>70</p>
                        </div>
                        {isLiked ? (
                            <div className='flex items-center cursor-pointer'>
                                <button
                                    onClick={() => props.handleLike(props.tweetId)}
                                    className='btn btn-circle btn-ghost min-h-9 h-9 w-9 
                                        hover:text-[#1D9BF0]
                                        text-[#71767b]
                                        // group-hover:bg-[#1e0d14]
                                         '>
                                    < svg viewBox="0 0 24 24"
                                        className='h-5'>
                                        <g><path
                                            fill="#f91880"
                                            d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                                        ></path>
                                        </g></svg>
                                </button>
                                <p className='text-[#71767b] text-[0.83rem] group-hover:text-[#d43676]'>{likesValue(props.likeCount)}</p>
                            </div>
                        ) : (
                            <div className='flex items-center group cursor-pointer'>
                                <button
                                    onClick={() => props.handleLike(props.tweetId)}
                                    className='btn btn-circle btn-ghost min-h-9 h-9 w-9 
                               hover:text-[#1D9BF0]
                               text-[#71767b]
                               group-hover:bg-[#1e0d14]
                                '>
                                    < svg viewBox="0 0 24 24" fill='#71767b'
                                        className='h-5 group-hover:fill-[#d43676]'>
                                        <g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z">
                                        </path></g></svg>
                                </button>
                                <p className='text-[#71767b] text-[0.83rem] group-hover:text-[#d43676]'>{likesValue(props.likeCount)}</p>
                            </div>
                        )}
                        <div className='flex items-center group cursor-pointer'>
                            <button
                                className='btn btn-circle btn-ghost min-h-9 h-9 w-9 
                               hover:bg-[rgba(29,155,240,0.3)]
                               hover:text-[#1D9BF0]
                               text-[#71767b]
                               group-hover:bg-[rgba(29,155,240,0.3)]'>
                                < svg viewBox="0 0 24 24" fill='#71767b'
                                    className='h-5 group-hover:fill-[#1D9BF0]'>
                                    <g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z">
                                    </path></g></svg>
                            </button>
                            <p className='text-[#71767b] text-[0.83rem] group-hover:text-[#1D9BF0]'>70 ألف</p>
                        </div>
                        <div className='flex items-center '>
                            <button
                                className='btn btn-circle btn-ghost min-h-9 h-9 w-9 group
                               hover:bg-[rgba(29,155,240,0.3)]
                               hover:text-[#1D9BF0]
                               text-[#71767b]'>
                                < svg viewBox="0 0 24 24" fill='#71767b'
                                    className='h-5 group-hover:fill-[#1D9BF0]'>
                                    <g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z">
                                    </path></g></svg>
                            </button>
                            <button
                                className='btn btn-circle btn-ghost min-h-9 h-9 w-9 group
                               hover:bg-[rgba(29,155,240,0.3)]
                               hover:text-[#1D9BF0]
                               text-[#71767b]'>
                                < svg viewBox="0 0 24 24" fill='#71767b'
                                    className='h-5 group-hover:fill-[#1D9BF0]'>
                                    <g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z">
                                    </path></g></svg>
                            </button>
                        </div>

                    </div>
                </div>
                {props.username !== loggedinUser ?
                    (

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button"
                                className="btn btn-circle btn-ghost min-h-9 h-9 w-9 
                           hover:bg-[rgba(29,155,240,0.3)]
                           hover:text-[#1D9BF0]
                           text-[#71767b]
                  ">
                                &bull;&bull;&bull;
                            </div>

                            <ul tabIndex={0} className="dropdown-content rounded-full cursor-pointer bg-white border border-[#303336] z-[1]  p-4 shadow">
                                <li><a className='text-black text-lg  w-full hover:underline'>
                                    تنبية
                                </a></li>
                            </ul>
                        </div>
                    )
                    :
                    (


                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button"
                                className="btn btn-circle btn-ghost min-h-9 h-9 w-9 
                               hover:bg-[rgba(29,155,240,0.3)]
                               hover:text-[#1D9BF0]
                               text-[#71767b]
                      ">
                                &bull;&bull;&bull;
                            </div>
                            <ul tabIndex={0} className="dropdown-content rounded-full cursor-pointer bg-[#303336] border border-[#303336] hover:bg-[#181818] z-[1]  p-4 shadow">
                                <li onClick={() => {
                                    document.getElementById('delete_modal').showModal()
                                }}
                                ><a className='text-red-500 text-lg  w-full'>
                                        <div className="tooltip tooltip-bottom" data-tip="حذف">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-5' fill='currentColor'>
                                                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                                            </svg>
                                        </div>
                                    </a></li>
                            </ul>

                            <dialog id="delete_modal" className="modal bg-[rgba(173,220,255,0.2)]">
                                <div className="modal-box rounded-xl ">
                                    <form method="dialog ">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <div className="flex flex-col items-center p-4">
                                        <h2 className="text-lg font-semibold mb-4">هل تريد حذف التغريدة؟</h2>
                                        <div className="flex justify-center items-center gap-2">
                                            <button
                                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                                onClick={() => handleDelete(props.tweetId)}
                                            >
                                                تأكيد
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </dialog>

                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Tweet




