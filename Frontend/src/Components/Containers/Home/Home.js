import React, { useState } from 'react';

import Header from '../../Shared/Header/Header';
import HomeText from './HomeText/HomeText';

import './Home.css';

const Home = () => {
  const [showNav, setShowNav] = useState(false);

  const setShowNavHandler = () => {
    setShowNav(!showNav);
  };

  const navItems = [
    { item: 'Home', elementId: 'home' },
    { item: 'YCC', elementId: 'about' },
    { item: 'View Organizations', elementId: 'charities' },
    { item: 'Join the community', elementId: 'join' },
    { item: 'More Information', elementId: 'footer' }
  ];

  return (
    <section className="Home" id="home">
      <Header 
        navItems={navItems}
        showNav={showNav} 
        setShowNav={setShowNavHandler} />
      <HomeText showNav={showNav} />
    </section>
  )
};

export default Home;