import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMess, setErrorMess] = useState('');
    const apiUrl = 'https://66e89226b17821a9d9dd1e8f.mockapi.io/register';
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMess('');

        axios.get(apiUrl)
            .then(function (response) {
                console.log(response);
                const userDate = response.data;
                const userExist = userDate.filter((ele) => ele.userName === userName && ele.password === password)

                if (userExist.length === 1) {
                    localStorage.setItem('username', userName)
                    localStorage.setItem('name', userExist[0].name)
                    localStorage.setItem('userid', userExist[0].id)
                    navigate('/home')
                } else {
                    setErrorMess(("يوجد خطأ في أسم الحساب أو في كلمة المرور التي أدخلتها"))
                }
            })
            .catch(function (error) {
                console.log(error);
                setErrorMess('حدث خطأ الرجاء المحاولة مرة آخرى 11');
            })




    }
    useEffect(() => {
        setErrorMess('');
    }, [userName, password])

    useEffect(() => {
        if (localStorage.getItem('username')) {
            localStorage.removeItem('username');
            localStorage.removeItem('userid');
        }
    }, [])
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div>
                            <svg viewBox="0 0 24 24" fill="white" className='w-80 max-sm:w-20 '>
                                <g>
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </g></svg>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 items-center max-sm:items-center' >
                        <p className='font-bold text-5xl'>سجل دخولك</p>
                        <div className="card bg-base-100 w-[24rem] max-w-sm shrink-0 shadow-2xl">
                            <form className="card-body" onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">اسم الحساب </span>
                                    </label>
                                    <input type="text" placeholder="اسم الحساب"
                                        value={userName} onChange={(e) => setUserName(e.target.value)}
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> كلمة المرور</span>
                                    </label>
                                    <input type="password"
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                        placeholder="********" className="input input-bordered" required />
                                </div>
                                {errorMess && (
                                    <div className="text-red-500 mb-2">
                                        {errorMess}
                                    </div>
                                )}
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary"> تسجيل دخول </button>
                                </div>
                            </form>
                            <p className="text-[.9rem] text-[#71767b]  text-center pb-4">
                                ليس لديك حساب؟{' '}
                                <Link to={'/register'} className="underline hover:text-white">
                                    أنشى حساب
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login