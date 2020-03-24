import React from 'react';

import NavItem from './NavItem/NavItem';
import './Nav.css';

const Nav = props => {
  const navItems = props.navItems.map(navItem => {
    const index = props.navItems.indexOf(navItem);
    return <NavItem 
      index={index}
      item={navItem.item}
      itemId={navItem.elementId}
      key={props.navItems.indexOf(navItem)}
      showNav={props.showNav}
      setShowNav={props.setShowNav} />
  });

  return (
    <nav className="Nav">
      <ul className="Nav__ul">
        {navItems}
      </ul>  
    </nav>
  )
}

export default Nav;