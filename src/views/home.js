import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Invest News Poland</title>
        <meta property="og:title" content="Invest News Poland" />
      </Helmet>
      <a href="https://plbaltic1.chuimain.online/" className="home-link">
        <img alt="image" src="/bdfbplbut4.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
