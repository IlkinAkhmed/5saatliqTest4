import React, { useState } from 'react'

import "./index.scss"
import { NavLink } from "react-router-dom"

function MobileNav() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <div className='mobile-nav'>
            <i onClick={() => setIsNavOpen(!isNavOpen)} className={`fa-solid ${isNavOpen ? 'fa-xmark' : "fa-bars"}`}></i>
            <ul className={`${isNavOpen ? 'ul-open' : ''}`}>
                <li>
                    <NavLink onClick={() => setIsNavOpen(!isNavOpen)} className={'mob-nav-link'} to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setIsNavOpen(!isNavOpen)} className={'mob-nav-link'} to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setIsNavOpen(!isNavOpen)} className={'mob-nav-link'} to={'/services'}>Services</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setIsNavOpen(!isNavOpen)} className={'mob-nav-link'} to={'/add'}>AddPage</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setIsNavOpen(!isNavOpen)} className={'mob-nav-link'} to={'/blog'}>Blog</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setIsNavOpen(!isNavOpen)} className={'mob-nav-link'} to={'/contact'}>Contact</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setIsNavOpen(!isNavOpen)} className={'mob-nav-link'} to={'/cart'}>Basket</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setIsNavOpen(!isNavOpen)} className={'mob-nav-link'} to={'/wishlist'}>Wishlist</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default MobileNav