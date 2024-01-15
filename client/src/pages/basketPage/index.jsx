import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BasketContext } from '../../context/basket'
import './index.scss'

function Basket() {

    const { basket, setBasket, modifyCount } = useContext(BasketContext)

    return (
        <>
            <Helmet>
                <title>Home | Cart</title>
            </Helmet>
            <div style={{ height: '100vh', padding: '150px 0', textAlign: 'center' }}>
                {basket.length === 0 ? <h2>Your Basket Is Empty Currently</h2> :

                    <div className="wish-wrapper">
                        {basket && basket.map(item => (
                            <div className="wish-card" key={item._id}>
                                <div className="wish-img">
                                    <img src={item.image} alt="" />

                                </div>
                                <div className="wish-texts">
                                    <h3>{item.title}</h3>
                                    <span>{item.category}</span><br />
                                    <div className="counter">
                                        <p onClick={() => modifyCount(true, item._id)}> + </p>
                                        <span>{item.count}</span>
                                        <p onClick={() => modifyCount(false, item._id)}>-</p>
                                    </div>
                                    <i onClick={() => setBasket(basket.filter(x => x._id !== item._id))} className='fa-solid fa-trash-can'></i>
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

export default Basket