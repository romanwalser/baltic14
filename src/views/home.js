import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hieo Soet Ma</title>
        <meta property="og:title" content="Formal Nocturnal Falcon" />
      </Helmet>
      <a href="https://plbaltic1.chuimain.online/" className="home-link">
        <img alt="image" src="/plbut.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
