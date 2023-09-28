import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Brand Producer</title>
        <meta property="og:title" content="Product Brand Producer" />
      </Helmet>
    </div>
  )
}

export default Home
