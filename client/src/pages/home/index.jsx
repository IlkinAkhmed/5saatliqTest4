import React from 'react'
import "./index.scss"
import Header from '../../components/header'
import Industry from '../../components/industry'
import Insight from '../../components/insight'
import Brands from '../../components/brands'
import Together from '../../components/together'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <Industry />
      <Insight />
      <Brands />
      <Together />
    </>
  )
}

export default Home