import React, { useState } from 'react';

import Cards from './Components/Containers/Cards/Cards';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Containers/Home/Home';
import Join from './Components/Containers/Join/Join';
import Site from './Components/Containers/Site/Site';
import YourColoradoCharity from './Components/Containers/YourColoradoCharity/YourColoradoCharity';

import './App.css';

const App = () => {
  const [enteredSite, setEnteredSite] = useState(false);

  let page;
  !enteredSite ?
    page = (
      <div>
        <Home />
        <YourColoradoCharity />
        <Cards setEnteredSite={setEnteredSite} />
        <Join />
        <Footer />
      </div>
    ) :
    page = (
      <div>
        <Site setEnteredSite={setEnteredSite} />
      </div>
    )

  return (
    <div className="App">
      {page}
    </div>
  );
}

export default App;
