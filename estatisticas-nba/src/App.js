import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Teams from './pages/Teams';
import Pag2 from './pages/Pag2';
import NBAContext from './context/NBAContext';

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
            <Route path='/Pag2' Component={Pag2}/>
          </Routes>
        </BrowserRouter>
      </NBAContext.Provider>
  )
}





export default App;
