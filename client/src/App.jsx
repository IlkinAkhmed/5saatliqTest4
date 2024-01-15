import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainlLayout from './components/Layouts/MainlLayout'
import Home from './pages/home'
import Blog from './pages/Blog'
import Contact from './pages/contact'
import AddPage from './pages/add'
import Wishlist from './pages/wishlist'
import Services from './pages/services'
import Details from './pages/details'
import About from './pages/about'
import { WishlistProvider } from './context/wishlist'
import { BaskettProvider } from './context/basket'
import Basket from './pages/basketPage'

function App() {

  return (
    <BaskettProvider>
      <WishlistProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainlLayout />}>
              <Route index element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/services" element={<Services />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Basket />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </BaskettProvider>
  )
}

export default App
