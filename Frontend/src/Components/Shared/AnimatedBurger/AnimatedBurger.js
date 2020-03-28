import React, { useState } from 'react';

import './AnimatedBurger.css';

const AnimatedBurger = props => {
  const [cn, setCn] = useState('AnimatedBtn')

  const clickHandler = () => {
    if (cn === 'AnimatedBtn') {
      setCn('AnimatedBtn active')
      props.setShowNav()
    } else if (cn === 'AnimatedBtn active') {
      setCn('AnimatedBtn deactive')
      props.setShowNav()
    } else if (cn === 'AnimatedBtn deactive') {
      setCn('AnimatedBtn active')
      props.setShowNav()
    }
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