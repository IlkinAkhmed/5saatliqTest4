import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import axios from "axios"
import { useParams } from 'react-router-dom'

function Details() {

  const { id } = useParams()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function fetchData() {
    const res = await axios.get(`http://localhost:3600/products/${id}`)
    setData(res.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <Helmet>
        <title>Home | Details</title>
      </Helmet>
      {isLoading ? <h1>Loading...</h1> :
        <div className='details'>
          <div className="det-card">
            <div className="det-img">
              <img src={data.image} alt="" />
            </div>
            <div className="det-texts">
              <p style={{ color: "#003072", fontSize: '2em' }}>{data.title}</p>
              <p>{data.category}</p>
              <p style={{ color: "gray", fontSize: '1.2em' }}>{data.description}</p>
            </div>
          </div>
        </div >
      }
    </>
  )
}

export default Details