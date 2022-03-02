import React from 'react'
import './header.css'
import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
          <Link to='/'>
            <img
              className='header-icon'
              src="https://www.pngkey.com/png/detail/30-304356_apple-logo-transparent-background-cool-apple-logo-png.png"
              alt='An icon of a location pointer'
          />
          </Link>

        <div className='header-search-bar'>
          <input type="text" />
          <SearchIcon />
        </div>

        <div className='header-right-icons'>
          
          <Avatar />
        </div>

      </div>
  )
}

export default Header