import React from 'react'
import "./index.scss"
import { Link } from "react-router-dom"

function Industry() {
  return (
    <section className='industry'>
      <div className="industry-inner">
        <div className="industry-head">
          <p>INDUSTRY WE OFFER</p>
          <h2>Managed IT services customized for your industry</h2>
          <p style={{ color: "gray" }}>We understand the complexities of modern markets and translate them into real business solutions for automotive, financial, insurance, pharma & life sciences,</p>
        </div>
        <div className="industry-wrapper">
          <div className="ind-card">
            <i className="fa-solid fa-city"></i>
            <h3>Industries & Manufacturing</h3>
            <Link>Find Out More<i className='fa-solid fa-arrow-right'></i></Link>
          </div>
          <div className="ind-card">
            <i className="fa-solid fa-cart-shopping"></i>
            <h3>Industries & Manufacturing</h3>
            <Link>Find Out More<i className='fa-solid fa-arrow-right'></i></Link>
          </div>
          <div className="ind-card">
          <i className="fa-solid fa-plane-departure"></i>
            <h3>Industries & Manufacturing</h3>
            <Link>Find Out More <i className='fa-solid fa-arrow-right'></i> </Link>
          </div>
          <div className="ind-card">
          <i className="fa-solid fa-graduation-cap"></i>
            <h3>Industries & Manufacturing</h3>
            <Link>Find Out More <i className='fa-solid fa-arrow-right'></i> </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industry