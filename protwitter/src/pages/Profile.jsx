import React from 'react'
import ProfileSec from '../component/ProfileSec'
import Navbar from '../component/Navbar'
import NewsSection from '../component/NewsSection'
import Tweet from '../component/Tweet'
import Sidebar from '../component/Sidebar'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';


function Profile() {
    const navigate = useNavigate();
    const apiUrl = 'https://66e89226b17821a9d9dd1e8f.mockapi.io/comment'
    const [currentUserTweets, setCurrentUserTweets] = useState([]);
    const loggedinUser = localStorage.getItem('username');
    const [userData, setUserData] = useState([]);
    const [likedTweets,setLikedTweets]= useState([]);
    const loggedinUserId = localStorage.getItem('userid');

    useEffect(() => {
        if (!localStorage.getItem('username')) {
            navigate("/");
        }
    }, [navigate]);


    useEffect(() => {
        fetchCurrUserTweets();
        fetchUserData();
    }, []);

    const fetchUserData = () => {
        axios.get(`https://66e89226b17821a9d9dd1e8f.mockapi.io/register/${loggedinUserId}`)
            .then(function (response) {
                setUserData(response.data);
                console.log(response.data);
                setLikedTweets(response.data.likedTweets)
                console.log(response.data.likedTweets);

            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const fetchCurrUserTweets = () => {
        axios.get(apiUrl)
            .then(function (response) {
                const tweets = response.data;
                const userTweets = tweets.filter((ele) => ele.username === loggedinUser)

                setCurrentUserTweets(userTweets);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleLike = (id) => {
        const isLiked = likedTweets.includes(id);
        const updatedLikedTweets = isLiked
            ? likedTweets.filter(tweetId => tweetId !== id)
            : [...likedTweets, id];

        axios.put(`https://66e89226b17821a9d9dd1e8f.mockapi.io/register/${loggedinUserId}`, {
            likedTweets: updatedLikedTweets
        })
            .then(response => {
                setLikedTweets(updatedLikedTweets); 
                console.log('Successfully updated liked tweets:', response);
            })
            .catch(error => {
                console.error('Error updating liked tweets:', error.response ? error.response.data : error.message);
            });
    };

    return (
        <>
            <div className='flex justify-center items-center w-full '>
                <div className='flex w-[83%]  '>
                    <Sidebar />
                    <div className='w-full flex flex-col'>
                        <Navbar type={'yes'} />
                        <div className='w-full flex'>
                            <div className='flex flex-col gap-1 w-[61%]  border border-[#303336] '>
                                <ProfileSec />
                                {currentUserTweets.map((item, index) => {
                                    return (
                                        <Tweet key={index} profile={'yes'} tweetId={item.id} date={item.date} comment={item.comment}
                                            likeCount={item.likeCount} username={item.username}
                                            name={item.name}
                                            likedTweets={likedTweets}
                                            onDelete={(id) => setCurrentUserTweets((prevTweets) => prevTweets.filter(tweet => tweet.id !== id))}
                                            handleLike={handleLike}
                                        />

                                    );
                                })}
                            </div>
                            <div className=' w-[39%]  bg-black'>
                                <NewsSection profile='yes' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile