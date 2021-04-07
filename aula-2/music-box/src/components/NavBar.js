import React from 'react'
import logoImage from '../assets/images/logo.png'
import avatarImage from '../assets/images/avatar.png'

function NavBar() {
    return (
        <nav>
            <div className="container">
                <img className="logo" src={logoImage} alt="Logo" />
                <img src={avatarImage} alt="Avatar" className="avatar" />
            </div>
        </nav>
    )
}

export default NavBar