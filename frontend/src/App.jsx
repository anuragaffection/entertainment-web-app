// importing from packages 
import React from "react"
import { Routes, Route, useLocation } from 'react-router-dom'

// importing pages 
import Bookmarks from './pages/Bookmarks'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Profile from './pages/Profile'
import Tv from './pages/Tv'

//importing components  
import Error404 from './components/Error404'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'

// importing auth components 
import Login from './components/AuthComponents/Login'
import Register from './components/AuthComponents/Logout'

// media components 
import MediaDetails from './components/MediaComponents/MediaDetails'

// app 
function App() {
  const location = useLocation();

  // Define an array of routes where SearchBar should be hidden
  const searchBarHiddenRoutes = ['/profile', '/profile/login', '/profile/register'];

  // Check if the current route is in the array
  const isSearchBarHidden = searchBarHiddenRoutes.includes(location.pathname);

  return (
    <div className="bg-leanBlue relative h-screen w-screen overflow-y-scroll flex flex-col overflow-x-hidden items-center justify-evenly text-white lg:flex-row scrollbar-corner-transparent scrollbar-thin  scrollbar-thumb-darkRed scrollbar-track-transparent overflow-scroll py-5  ">
      {/* Header on all pages  */}
      <Header />
      {/* pages rendering according to path or route  */}
      <div className="w-11/12 h-5/6 z-40  lg:h-full  ">
        {/* SearchBar conditional rendering  */}
        {!isSearchBarHidden && <SearchBar />}
        <Routes>
          {/* home routes  */}
          <Route path="/" element={<Home />} />

          {/* movies routes  */}
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:mediaId" element={<MediaDetails />} />

          {/* tv routes  */}
          <Route path="/tv" element={<Tv />} />
          <Route path="/tv/:mediaId" element={<MediaDetails />} />

          {/* bookmarks routes */}
          <Route path="/bookmarks" element={<Bookmarks />} />

          {/* search routes  */}
          <Route path="/all/search/:mediaType/:searchQuery" element={<SearchResult />} />
          <Route path="/movie/search/:mediaType/:searchQuery" element={<SearchResult />} />
          <Route path="/tv/search/:mediaType/:searchQuery" element={<SearchResult />} />
          <Route path="/bookmarks/search/:mediaType/:?searchQuery" element={<SearchResult />} />

          {/* profile routes  */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/login" element={<Login />} />
          <Route path="/profile/register" element={<Register />} />
          
          {/* error routes */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
