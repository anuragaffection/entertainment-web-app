
import React, { useState } from 'react'
import context from './MyContext'

// it is receiving the props from main.jsx file 
// where we have passed whole app code in authState props 
function MyState(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({});
    const [toast, setToast] = useState(false);
    const [toastMessage, setToastMessage] = useState(null)
    

    return (
        <context.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                user,
                setUser,
                toast,
                setToast, 
                toastMessage, 
                setToastMessage
            }}
        >
            {props.children}
        </context.Provider>
    )
}

export default MyState
