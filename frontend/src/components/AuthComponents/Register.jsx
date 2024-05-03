// from installed packages 
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { MdMovie } from "react-icons/md";

// from custom files 
import MyContext from '../../context/MyContext';
import baseUrl from '../../utils/baseUrl';


// register components 
function Register() {

    const myState = useContext(MyContext);
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const api = await axios.post(`${baseUrl}/user/register`, {
                name,
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
            myState.setIsAuthenticated(true)

            setTimeout(() => {
                navigate('/profile')
            }, 1500);
        }
        catch (error) {
            myState.setToast(true);
            myState.setToastMessage(error.response.data.message)
            myState.setIsAuthenticated(false);
        }
    }

    // css of register 
    const container = ` text-gray-200 px-4 pt-0 pb-4`;
    const wrapper = `flex flex-col gap-4 justify-center items-center my-3`;
    const title = `text-center text-4xl font-bold`;
    const registerForm = `flex flex-col gap-4 bg-deepBlue px-9 py-6 rounded-lg w-full md:w-3/4 lg:w-1/2`;
    const labelInputWrapper = 'flex flex-col gap-1'
    const labelStyle = 'font-semibold ml-2'
    const inputStyle = `bg-gray-700 h-12 p-3 rounded-lg`;
    const submitButton = `text-lg font-semibold h-12 rounded-lg bg-darkRed`

    return (
        <>
            <div className={container}>
                <div className={wrapper}>
                    <MdMovie className="text-darkRed text-center text-5xl md:text-6xl" />
                    <h1 className={title}>Register Here   </h1>
                    <form onSubmit={handleSubmit} className={registerForm}>

                        {/* name input  */}
                        <div className={labelInputWrapper}>
                            <label htmlFor="exampleInputName" className={labelStyle}>Name </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className={inputStyle}
                                id="exampleInputName"
                                placeholder="Enter Name"
                                required
                            />
                        </div>

                        {/* email input  */}
                        <div className={labelInputWrapper}>
                            <label htmlFor="exampleInputEmail" className={labelStyle}>Email address</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className={inputStyle}
                                id="exampleInputEmail"
                                placeholder="Enter email"
                                required
                            />
                        </div>

                        {/* password input  */}
                        <div className={labelInputWrapper}>
                            <label htmlFor="exampleInputPassword" className={labelStyle}>Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className={inputStyle}
                                id="exampleInputPassword"
                                placeholder="Password"
                                required
                            />
                        </div>

                        <button type="submit" className={submitButton}>Submit</button>
                    </form>
                    <div className='hover:text-darkRed'>
                        <Link to={'/profile'}>Already Have Account? Login here.</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register