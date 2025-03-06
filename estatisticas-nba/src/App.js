import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Pag1 from './pages/Pag1';
import Pag2 from './pages/Pag2';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/Pag1' Component={Pag1}/>
          <Route path='/Pag2' Component={Pag2}/>
        </Routes>
      </BrowserRouter>
    );

  }
}

export default App;
