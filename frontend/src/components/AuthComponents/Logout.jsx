// from installed packages 
import axios from 'axios';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

// from custom files 
import MyContext from '../../context/MyContext';
import baseUrl from '../../utils/baseUrl'


// logout components 
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

        if (api.data && api.data.message) {
            myState.setToast(true);
            myState.setToastMessage(api.data.message)
        } else {
            myState.setToast(true);
            myState.setToastMessage("Logout Successfully")
        }



        setTimeout(() => {
            navigate('/');
        }, 100);

        // localStorage.removeItem('token');
    }

    // logout button 
    return (
        <>
            <button
                onClick={logout}
                className="mb-4 px-6 py-2 flex gap-3 items-center bg-cyan-500 text-lg font-semibold rounded-full duration-100"
            >
                <span>Logout</span>
            </button>
        </>
    )
}

export default Logout