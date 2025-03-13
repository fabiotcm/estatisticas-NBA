import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Teams from './pages/Teams';
import Stats from './pages/Stats';
import Player from './pages/Player';
import NBAContext from './context/NBAContext';

function App () {

  const [team_id, setTeamID] = useState('');
  const [team_logo, setTeamLogo] = useState('');

  const mudarTeamID = (x) => {
    setTeamID(x);
  }

  const mudarTeamLogo = (x) => {
    setTeamLogo(x);
  }

  const context = {
    team_id,
    mudarTeamID,
    team_logo,
    mudarTeamLogo,
  };

  return(
    <NBAContext.Provider value={context}>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Login}/>
            <Route path='/Teams' Component={Teams}/>
            <Route path='/Stats' Component={Stats}/>
            <Route path='/Player' Component={ Player } />
          </Routes>
        </BrowserRouter>
      </NBAContext.Provider>
  )
}





export default App;
