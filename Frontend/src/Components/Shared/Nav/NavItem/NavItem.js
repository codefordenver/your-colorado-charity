import React from 'react';
import { Link } from 'react-scroll';

import './NavItem.css';

const NavItem = props => {
  const delay = (props.index + 1) * 333;

  return (
    <Link 
      className="NavItem" 
      duration={1000}
      onClick={props.setShowNav}
      smooth={true}
      style={{
        opacity: props.showNav ? '1' : '0',
        transitionDelay: props.showNav ? `${delay}ms` : '0ms'
      }}
      to={props.itemId}> 
      <p className="NavItem__p">{props.item}</p>
    </Link>
  )
};

export default NavItem;