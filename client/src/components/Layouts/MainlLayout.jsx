import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import MobileNav from '../mobileNav'

function MainlLayout() {
    return (
        <>
            <Navbar />
            <MobileNav/>
            <Outlet />
            <Footer />
        </>
    )
}

export default MainlLayout