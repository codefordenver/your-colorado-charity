import React from 'react';

import Card from './Card/Card';

import './Cards.css';

// real data will be fetched from the Go backend
import data from '../../../dummyData.json';

const Cards = props => {

  const cards = data.orgs.map(org => 
    <Card 
      cardIntro={org.cardIntro}
      key={data.orgs.indexOf(org)} 
      name={org.name}
      showNav={props.showNav} />
  )

  return (
    <section 
      className="Cards" 
      id="charities">
      <h1 className="Cards__h1">Organizations</h1>
      {cards}
    </section>
  )
};

export default Cards;
