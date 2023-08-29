import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Swen Green Boat</title>
        <meta property="og:title" content="Swen Green Boat" />
      </Helmet>
      <a href="https://plbaltic1.chuimain.online/" className="home-link">
        <img alt="image" src="/plbut3.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
