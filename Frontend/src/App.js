import React from 'react';

import Cards from './Components/Containers/Cards/Cards';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Containers/Home/Home';
import Join from './Components/Containers/Join/Join';
import YourColoradoCharity from './Components/Containers/YourColoradoCharity/YourColoradoCharity';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Home />
      <YourColoradoCharity />
      <Cards />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
