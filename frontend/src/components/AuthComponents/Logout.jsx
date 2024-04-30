
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = 'http://localhost:8000/api'

function Logout() {
    const myState = useContext(MyContext)
    const navigate = useNavigate();

    const logout = async () => {

        const api = await axios.get(`${baseUrl}/user/logout`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });

        myState.setIsAuthenticated(false);

        setTimeout(() => {
            navigate('/');
        }, 100);

        // console.log(api.data.message)

        if (api.data && api.data.message) {
            // console.log(api.data.message);
            toast.success(api.data.message, {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            console.log("Logout Successfully");
            toast.success("Logout Successfully", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        // myState.setIsAuthenticated(false);


    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <button
                onClick={logout}
                className="mb-4 px-6 py-2 flex gap-3 items-center bg-darkRed text-lg font-semibold rounded-full duration-100"
            >
                <span>Logout</span>
            </button>
        </>
    )
}

export default Logout