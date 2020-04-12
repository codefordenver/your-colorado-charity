import React from 'react';

const Site = props => {
  const backHandler = () => {
    props.setEnteredSite(false)
  }

  return (
    <h1>
      INSIDE THE SITE!
      <button onClick={backHandler}>back</button>
    </h1>
  );
};

export default Site;