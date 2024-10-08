import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar'
import NewsSection from '../component/NewsSection'
import WriteTweet from '../component/WriteTweet'
import Tweet from '../component/Tweet'
import Sidebar from '../component/Sidebar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const navigate = useNavigate();
    const apiUrl = 'https://66e89226b17821a9d9dd1e8f.mockapi.io/comment'
    const [allUserTweets, setAllUserTweets] = useState([]);
    const [userData, setUserData] = useState([]);
    const [likedTweets,setLikedTweets]= useState([]);
    const loggedinUserId = localStorage.getItem('userid');


    useEffect(() => {
        if (!localStorage.getItem('username')) {
            navigate("/");
        }
    }, [navigate]);


    useEffect(() => {
        fetchUserData();
        fetchUserTweets();
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

    const fetchUserTweets = () => {
        axios.get(apiUrl)
            .then(function (response) {
                setAllUserTweets(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const addTweet = (newTweet) => {
        setAllUserTweets((prevTweets) => [newTweet, ...prevTweets]);
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
                        <Navbar />
                        <div className='w-full flex'>
                            <div className='flex flex-col gap-1 w-[61%] bg-black border-l border-[#303336]'>
                                <WriteTweet addTweet={addTweet} />

                                {allUserTweets.map((item, index) => {
                                    return (
                                        <Tweet key={index} addTweet={addTweet} tweetId={item.id} date={item.date} comment={item.comment}
                                            likeCount={item.likeCount} username={item.username}
                                            name={item.name} 
                                            likedTweets={likedTweets}
                                            onDelete={(id) => setAllUserTweets((prevTweets) => prevTweets.filter(tweet => tweet.id !== id))}
                                            handleLike={handleLike} 
                                        />
                                    );
                                })}


                            </div>
                            <div className=' w-[39%] h-screen bg-black'>
                                <NewsSection premium="yes" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home