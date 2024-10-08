import React, { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMess, setErrorMess] = useState('');
    const upperReg = /[A-Z]/;
    const apiUrl = 'https://66e89226b17821a9d9dd1e8f.mockapi.io/register';
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (name.length <= 1) {
            setErrorMess('الاسم يجب أن يكون أكثر من حرف واحد')
            return;
        }
        if (userName.length <= 2) {
            setErrorMess('اسم الحساب يجب أن يكون اكثر من حرفين')
            return;
        }
        if (password.length <= 3 || !upperReg.test(password)) {
            setErrorMess('كلمة المرور يجب أن تكون أكثر من ثلاثة خانات و تحتوي على حرف كبير');
            return;
        }
        setErrorMess('');

        axios.get(apiUrl)
            .then(function (response) {
                console.log(response);
                const userDate = response.data;
                const userExist = userDate.some((ele) => ele.userName === userName)

                if (!userExist) {
                    axios.post(apiUrl, {
                        name: name,
                        userName: userName,
                        password: password,
                        likedTweets:[]
                    })
                        .then(function (response) {
                            console.log(response);
                            navigate('/login');
                        })
                        .catch(function (error) {
                            console.log(error);
                            setErrorMess('حدث خطأ الرجاء المحاولة مرة آخرى');
                        });

                } else {
                    setErrorMess('اسم الحساب موجود بالفعل')
                }
            })
            .catch(function (error) {
                console.log(error);
                setErrorMess('حدث خطأ الرجاء المحاولة مرة آخرى 11');
            })


    }
    useEffect(() => {
        setErrorMess('');
    }, [userName, password,name])

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
                    <div className='flex flex-col gap-4 items-center' >
                        <p className='font-bold text-5xl'>انضم إلينا</p>
                        <div className="card bg-base-100 w-[24rem] max-w-sm shrink-0 shadow-2xl">
                            <form className="card-body" onSubmit={handleRegister} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> الاسم </span>
                                    </label>
                                    <input type="text" value={name}
                                        onChange={(e) => setName(e.target.value)} placeholder="الاسم" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">اسم الحساب </span>
                                    </label>
                                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="اسم الحساب" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> كلمة المرور</span>
                                    </label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" className="input input-bordered" required />
                                </div>
                                {errorMess && (
                                    <div className="text-red-500 mb-2">
                                        {errorMess}
                                    </div>
                                )}
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">التسجيل</button>
                                </div>
                            </form>
                            <p className="text-[.9rem] text-[#71767b]  text-center pb-4">
                                لديك حساب بالفعل؟{' '}
                                <Link to={'/login'} className="underline hover:text-white">
                                    تسجيل دخول
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register