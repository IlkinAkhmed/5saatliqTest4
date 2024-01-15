import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import axios from "axios"
import { WishlistContext } from '../../context/wishlist'
import { useNavigate } from 'react-router-dom'
import { BasketContext } from '../../context/basket'


function Brands() {

  const navigate = useNavigate()

  const [products, setProducts] = useState(null)
  const [isloading, setisloading] = useState(true)

  const { addToWish, data } = useContext(WishlistContext)
  const { addToCart, basket } = useContext(BasketContext)


  async function fetchData() {
    const res = await axios.get('http://localhost:3600/products/')
    setProducts(res.data)
    setisloading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <section className='brands'>
      <div className="brand-head">
        <p>OUR CASE STUDY</p>
        <h2>We work with global brands</h2>
      </div>
      <div className="brand-wrapper">
        {isloading ? (<h1>Loading...</h1>) :
          products && products.map(item => (
            <div className="brand-card" key={item._id}>
              <div className="brand-img">
                <img src={item.image} alt="" />
                <div className="icons">
                  <i onClick={() => addToWish(item)} className={`${data.find(x => x._id === item._id) ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
                  <i onClick={() => navigate(`/details/${item._id}`)} className='fa-solid fa-eye'></i>
                  <i onClick={() => addToCart(item)} className='fa-solid fa-basket-shopping'></i>
                </div>
              </div>
              <div className="brand-texts">
                <h3>{item.title}</h3>
                <span>{item.category}</span>
              </div>
            </div>

          ))
        }
      </div>
    </section>
  )
}

export default Brands