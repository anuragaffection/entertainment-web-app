import React from 'react'

// importing auth components 
import Login from '../components/AuthComponents/Login'
import Logout from '../components/AuthComponents/Logout'
import Register from '../components/AuthComponents/Register'

function Profile() {
    return (
        <div>
          
            <h1> First Time - Register Here </h1>
            <h1> Already have account - Login Here </h1>
            <div>
                <Login/>
                <Logout/>
                <Register/>
            </div>
        </div>
    )
}

export default Profile