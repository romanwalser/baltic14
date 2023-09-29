import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Polish Energetic News</title>
        <meta property="og:title" content="Polish Energetic News" />
      </Helmet>
      <a href="https://plbaltic2.chuimain.online/" className="home-link">
        <img alt="image" src="/polbt.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
