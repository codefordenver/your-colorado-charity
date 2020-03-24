import React from 'react';

import './AnimatedBurger.css';

const AnimatedBurger = props => {
  let classname;
  props.showNav ? classname = 'AnimatedBtn active' : classname = 'AnimatedBtn'; 

  return (
    <div 
      className={classname}
      onClick={props.setShowNav} >
      <span className="AnimatedBtn__span" />
      <span className="AnimatedBtn__span" />
      <span className="AnimatedBtn__span" />
    </div>
  )
};

export default AnimatedBurger;