import React from 'react'
import './header.css'


import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Header() {
  return (
    <div className='header'>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to='/'>
            <a class="navbar-brand" href="/"> <b> ActCiting</b> | Part of GigStr </a>
          </Link>
          </div>
      </nav>

       

       

      </div>
  )
}

export default Header