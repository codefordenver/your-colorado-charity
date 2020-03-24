import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Nav from '../Nav/Nav';
import AnimatedBurger from '../AnimatedBurger/AnimatedBurger';

import './Header.css';

const Header = props => {

  // Header__img div will be replaced with a component after a logo is made

  return (
    <header className="Header">
      <div className="Header__img">
        <p className="Header__p" style={{ color: props.showNav ? 'transparent' : 'white' }}>LOGO</p>  
      </div> 
      <AnimatedBurger
        showNav={props.showNav} 
        setShowNav={props.setShowNav} />
      <Backdrop show={props.showNav}>
        <Nav 
          navItems={props.navItems}
          showNav={props.showNav}
          setShowNav={props.setShowNav} />
      </Backdrop>
    </header>    
  )
};

export default Header;
