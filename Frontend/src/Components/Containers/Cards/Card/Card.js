import React from 'react';

import './Card.css';

const Card = props => {
  return (
    <div className="Card">
      <h1 className="Card__h1">{props.name}</h1>
      <h3 className="Card__h3">{props.cardIntro}</h3>
      <button 
        className="Card__button"
        onClick={() => props.setEnteredSite(true)}>
        Learn More
      </button>
    </div>
  )
};

export default Card;