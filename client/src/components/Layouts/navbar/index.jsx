import React, { useContext } from 'react'
import "./index.scss"
import { NavLink, useNavigate } from "react-router-dom"
import { WishlistContext } from '../../../context/wishlist'
import { BasketContext } from '../../../context/basket'

function Navbar() {
  const navigate = useNavigate()
  const { data } = useContext(WishlistContext)
  const { basket } = useContext(BasketContext)
  return (
    <nav>
      <div className="nav-inner">
        <div className="logo-and-texts">
          <div className="logo">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png" alt="" />

          </div>
          <ul className="nav-texts">
            <li>
              <NavLink to={'/'} className={"nav-link"}>  Home</NavLink>
            </li>
            <li>
              <NavLink to={'/about'} className={"nav-link"}>  About</NavLink>
            </li>
            <li>
              <NavLink to={'/services'} className={"nav-link"}>  Services</NavLink>
            </li>
            <li>
              <NavLink to={'/add'} className={"nav-link"}>  AddPage</NavLink>
            </li>
            <li>
              <NavLink to={'/blog'} className={"nav-link"}>  Blog</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'} className={"nav-link"}>  Contact</NavLink>
            </li>
          </ul>

        </div>
        <div className="nav-logos">
          <div className="wish">
            <i onClick={() => navigate('/wishlist')} className='fa-regular fa-heart'></i>
            <p>{data.length}</p>
          </div>

          <div className="wish">
            <i onClick={() => navigate('/cart')} className='fa-solid fa-bag-shopping'></i>
            <p>{basket.length}</p>
          </div>
          <button>Free Quote</button>
          <div className="have">
            <div className="head">
              <i className='fa-solid fa-headphones'></i>
            </div>
            <div className="call">
              <p style={{ color: "gray" }}>Have any Question?</p>
              <span style={{ color: '#003072' }}>Call: +994 505798656</span>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar