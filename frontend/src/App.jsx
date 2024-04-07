// package importing 
import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages importing 
import Bookmarks from './pages/Bookmarks'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Profile from './pages/Profile'
import Tv from './pages/Tv'

// components importing 
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'

// auth components 
import Login from './components/AuthComponents/Login'
import Register from './components/AuthComponents/Logout'

// media components 
import MediaDetails from './components/MediaComponents/MediaDetails'





function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:mediaId" element={<MediaDetails />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/tv/:mediaId" element={<MediaDetails />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/login" element={<Login />} />
          <Route path="/profile/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
