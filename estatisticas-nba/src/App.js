import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login}/>
        </Routes>
      </BrowserRouter>
    );

  }
}

export default App;
