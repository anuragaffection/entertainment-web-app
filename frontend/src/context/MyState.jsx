
import React, { useState } from 'react'
import context from './MyContext'

// it is receiving the props from main.jsx file 
// where we have passed whole app code in authState props 
function MyState(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({});
    

    return (
        <context.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                user,
                setUser,
            }}
        >
            {props.children}
        </context.Provider>
    )
}

export default MyState



/*
-- props.children   refers to any content passed between the opening and closing tags 
   of the AuthState component when it's used elsewhere in a parent component.

-- check main.jsx file 
*/