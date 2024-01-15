import React from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'

function Blog() {
  return (
    <>
      <Helmet>
        <title>Home | Blog</title>
      </Helmet>
      <div>Blog</div>
    </>
  )
}

export default Blog