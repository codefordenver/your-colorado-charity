import React from 'react';

import './Join.css';

const Join = () => {
  return (
    <section 
      className="Join" 
      id="join">
      <h1 className="Join__h1">Join Us</h1>
      <p className="Join__p">
        This is the page where we give information to charities interested in signing up to use the app.  It will contain a few brief paragraphs describing the steps they will go through to join.  This will be amended as the app develops. 
      </p>
      <p className="Join__p">
          This is the page where we give information to charities interested in signing up to use the app.  It will contain a few brief paragraphs describing the steps they will go through to join.  This will be amended as the app develops. 
      </p>
      <p className="Join__p">
          This is the page where we give information to charities interested in signing up to use the app.  It will contain a few brief paragraphs describing the steps they will go through to join.  This will be amended as the app develops. 
      </p>
      <a 
        className="Join__a"  
        onClick={() => alert('Loads an info page where they can follow instructions to sign up')}>
        Click here to get started
      </a>
    </section>
  )
};

export default Join;