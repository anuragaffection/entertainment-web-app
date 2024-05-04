// importing from packages 
import React, { useContext } from "react"
import { Routes, Route, useLocation } from 'react-router-dom'

import MyContext from "./context/MyContext"
import Toast from './components/CssComponents/Toast'

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
import Details from './components/MediaDetails/Details'

// importing auth components 
import Login from "./components/AuthComponents/Login"
import Register from './components/AuthComponents/Register'


function App() {
  const location = useLocation();
  const { toast } = useContext(MyContext)

  // hiding search bar 
  const searchBarHiddenRoutes = ['/profile', '/profile/login', '/profile/register', '/bookmarks'];
  const isSearchBarHidden = searchBarHiddenRoutes.includes(location.pathname);

  // css 
  const containerstyle = 'bg-leanBlue relative h-screen w-screen overflow-y-scroll flex flex-col overflow-x-hidden items-center justify-evenly text-white lg:flex-row scrollbar-corner-transparent scrollbar-thin  scrollbar-thumb-darkRed scrollbar-track-transparent overflow-scroll py-5';
  const wrapperStyle = 'w-11/12 h-5/6 z-40 lg:h-full mb-10';


  return (
    <div className={containerstyle}>

      {/* Header will always be shown  */}
      <Header />

      <div className={wrapperStyle}>

        {/* conditionally  rendering of searchbar + */}
        {!isSearchBarHidden && <SearchBar />}

        <Routes>
          <Route path="/" element={<Home />} />

          {/* movies & tv routes  */}
          <Route path="/movie" element={<Movie />} />
          <Route path="/tv" element={<Tv />} />

          {/* movie & tv details route */}
          <Route path="/movie/:mediaId" element={<Details />} />
          <Route path="/tv/:mediaId" element={<Details />} />

          {/* bookmarks route  */}
          <Route path="/bookmarks" element={<Bookmarks />} />

          {/* profile routes  */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/login" element={<Login />} />
          <Route path="/profile/register" element={<Register />} />

          {/* search routes  */}
          <Route path="/:mediaType/search/:searchQuery" element={<SearchResult />} />

          {/* error routes */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>

      {toast && <Toast />}
    </div>
  )
}

export default App
