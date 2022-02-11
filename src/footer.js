import React from 'react'
import './footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  return (
    <div className="homepage-footer">
        <p>©2022 Actsiting (part of GigStr SOTF)</p>
        <p>Check out our <a href="https://github.com/School-Of-Tech-Futures-UK/Actsiting-repo">Github
        <GitHubIcon /></a>
</p>
    </div>
  )
}

export default Footer