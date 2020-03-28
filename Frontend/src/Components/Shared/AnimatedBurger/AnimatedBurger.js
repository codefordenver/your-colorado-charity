import React, { useState } from 'react';

import './AnimatedBurger.css';

const AnimatedBurger = props => {
  const [cn, setCn] = useState('AnimatedBtn')

  const clickHandler = () => {
    if (cn === 'AnimatedBtn' || cn === 'AnimatedBtn deactive') {
      setCn('AnimatedBtn active')
      props.setShowNav()
    } else {
      setCn('AnimatedBtn deactive')
      props.setShowNav()
    }
  };

  if (!props.showNav && cn === 'AnimatedBtn active') {
    setCn('AnimatedBtn deactive')
  }

  return (
    <div 
      className={cn}
      onClick={clickHandler} >
      <span className="AnimatedBtn__span" />
      <span className="AnimatedBtn__span" />
      <span className="AnimatedBtn__span" />
    </div>
  )
};

export default AnimatedBurger;