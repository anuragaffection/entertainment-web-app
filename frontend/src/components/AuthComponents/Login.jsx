// from installed packages 
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { MdMovie } from "react-icons/md";

// from custom files 
import MyContext from '../../context/MyContext';
import baseUrl from '../../utils/baseUrl'


function Login() {
    const myState = useContext(MyContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const api = await axios.post(`${baseUrl}/user/login`, {
                email,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });

            myState.setToast(true);
            myState.setToastMessage(api.data.message)
            myState.setIsAuthenticated(true);

            setTimeout(() => {
                navigate('/')
            }, 1000);

        } catch (error) {
            myState.setToast(true);
            myState.setToastMessage(error.response.data.message)
            myState.setIsAuthenticated(false);
        }
    }


    const container = `text-gray-200 p-4`;
    const wrapper = `flex flex-col gap-7 justify-center items-center my-3`;
    const title = `text-center text-4xl font-bold`;
    const loginForm = `flex flex-col gap-6 bg-deepBlue p-9 rounded-lg w-full md:w-3/4 lg:w-1/2`;
    const labelInputWrapper = 'flex flex-col gap-2'
    const labelStyle = 'font-semibold ml-2'
    const inputStyle = `bg-gray-700 h-12 p-3 rounded-lg`;
    const submitButton = `text-lg font-semibold h-12 rounded-lg bg-darkRed`


    return (
        <>
            <div className={container}>
                <div className={wrapper}>
                    <MdMovie className="text-darkRed text-center text-5xl md:text-6xl" />
                    <h1 className={title}>Login With Email </h1>
                    <form onSubmit={handleSubmit} className={loginForm}>
                        <div className={labelInputWrapper}>
                            <label
                                htmlFor="exampleInputEmail"
                                className={labelStyle}>
                                Enter Email
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className={inputStyle}
                                id="exampleInputEmail"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className={labelInputWrapper}>
                            <label
                                htmlFor="exampleInputPassword"
                                className={labelStyle}>
                                Enter Password
                            </label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className={inputStyle}
                                id="exampleInputPassword"
                                placeholder="Password"
                            />
                        </div>
                        <button className={submitButton}>Submit</button>
                    </form>
                    <div className='hover:text-darkRed'>
                        <Link to={'/profile/register'}>Don't Have Account? Register here.</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login