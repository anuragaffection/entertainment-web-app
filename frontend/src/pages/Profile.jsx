// importing from installed packages 
import React, { useContext, useEffect } from 'react'
import { BiSolidUserCircle } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';

// importing from custom files
import MyContext from '../context/MyContext'
import baseUrl from '../utils/baseUrl';
import Login from '../components/AuthComponents/Login'
import Logout from '../components/AuthComponents/Logout'

// profile page 
function Profile() {
    const myState = useContext(MyContext);


    useEffect(() => {
        if (myState.isAuthenticated) {
            const fetchUser = async () => {
                const api = await axios.get(`${baseUrl}/user/profile`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                });
                // console.log(api.data.user);
                myState.setUser(api.data.user)
            }
            fetchUser();
        }
    }, [myState.isAuthenticated])



    return (
        <>
            {
                myState.isAuthenticated === true ? (
                    <div className='p-4 mt-2'>
                        <div className='flex flex-col gap-2 mb-4'>
                            <div className="flex items-center gap-3 text-lg">
                                <BiSolidUserCircle />
                                <span>  {" "} {myState.user.name}</span>
                            </div>
                            <div className="flex items-center gap-3 text-lg">
                                <MdEmail />
                                <span>  {" "} {myState.user.email} </span>
                            </div>
                        </div>
                        <Logout />
                    </div>
                ) : (
                    <Login />
                )
            }
        </>
    )
}

export default Profile