import React from 'react'
import { Link } from "react-router-dom";

function Error404() {
    return (
        <div className="flex flex-col justify-center items-center h-full text-white">
            <h1 className="text-4xl font-bold mb-8">Oops! Something went wrong...</h1>
            <p className="text-lg mb-8">The page you are looking for does not exist.</p>
            <Link
                to="/"
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
            >
                Go back to Home
            </Link>
        </div>
    )
}

export default Error404