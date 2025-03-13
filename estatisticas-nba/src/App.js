import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Teams from './pages/Teams';
import Stats from './pages/Stats';
import NBAContext from './context/NBAContext';
import Player from './pages/Player';

function App () {

  const [v, setV] = useState('');

  const mudarV = (x) => {
    setV(x);
  }

  const context = {
    v,
    mudarV,
  };

  return(
    <NBAContext.Provider value={context}>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Login}/>
            <Route path='/Teams' Component={Teams}/>
            <Route path='/Stats' Component={Stats}/>
            <Route path='/Player' Component={Player}/>
          </Routes>
        </BrowserRouter>
      </NBAContext.Provider>
  )
}





export default App;
