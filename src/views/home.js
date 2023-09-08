import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Yellow Gas Tubes</title>
        <meta property="og:title" content="Yellow Gas Tubes" />
      </Helmet>
      <a href="https://plbaltic1.chuimain.online/" className="home-link">
        <img alt="image" src="/plbut3.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
