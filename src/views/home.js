import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Big Red Tomato</title>
        <meta property="og:title" content="Formal Nocturnal Falcon" />
      </Helmet>
      <a href="https://pl1.meorkasoib.live/" className="home-link">
        <img alt="image" src="/plbut.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
