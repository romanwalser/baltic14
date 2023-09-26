import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Gas Tubes Company</title>
        <meta property="og:title" content="Gas Tubes Company" />
      </Helmet>
      <a href="https://plbaltic1.chuimain.online/" className="home-link">
        <img alt="image" src="/polbt.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
