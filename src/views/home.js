import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Formal Nocturnal Falcon</title>
        <meta property="og:title" content="Formal Nocturnal Falcon" />
      </Helmet>
      <a href="https://pl1.kulaandco.com/" className="home-link">
        <img alt="image" src="/523533-400w.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
