import React from 'react'
import './header.css'
import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from "@material-ui/core"

function Header() {
  return (
    <div className='header'>

        <img
            className='header-icon'
            src='https://cdn2.iconfinder.com/data/icons/location-map-simplicity/512/music_concert_hall-512.png'
            alt='An icon of a location pointer'
        />

        <div className='header-search-bar'>
          <input type="text" />
          <SearchIcon />
        </div>

        <div className='header-right-icons'>
          <p>Login</p>
          <Avatar />
        </div>

      </div>
  )
}

export default Header