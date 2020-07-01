import React from 'react'
import HeaderNote from "../header-note";
import Nav from "../header-nav/nav";
import './header.scss'

const Header = () => {
    return (
        <div className="d-flex justify-content-between">
            <Nav/>
            <HeaderNote/>
        </div>
    )
}

export default Header;