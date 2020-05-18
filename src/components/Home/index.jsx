import React from 'react';

import './Home.scss';

const Home = () => {
  return (
    <section className="home">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h2 className="title">HATS</h2>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">JACKETS</h2>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">SNEAKERS</h2>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">WOMENS</h2>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">MENS</h2>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
