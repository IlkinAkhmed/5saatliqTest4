import React, { useContext } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/wishlist'
import { BasketContext } from '../../context/basket'

function Wishlist() {
  const { data, setData } = useContext(WishlistContext)
  const { addToCart } = useContext(BasketContext)

  return (
    <>
      <Helmet>
        <title>Home | Wishlist</title>
      </Helmet>
      <div style={{ height: '100vh', padding: '150px 0', textAlign: 'center' }}>
        {data.length === 0 ? <h2>Your Wishlist Is Empty Currently</h2> :

          <div className="wish-wrapper">
            {data && data.map(item => (
              <div className="wish-card" key={item._id}>
                <div className="wish-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="wish-texts">
                  <h3>{item.title}</h3>
                  <span>{item.category}</span><br />
                  <i onClick={() => setData(data.filter(x => x._id !== item._id))} className='fa-solid fa-trash-can'></i>
                  <i onClick={() => addToCart(item)} className='fa-solid fa-basket-shopping'></i>
                </div>
              </div>

            ))
            }
          </div>
        }
      </div>
    </>
  )
}

export default Wishlist