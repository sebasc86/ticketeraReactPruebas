import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import TicketsContainer from '../pages/TicketsContainer'

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        
      <Route exact path="/ticket/:sectorId" component={TicketsContainer} />
      <Route path="/" component={Home}/>
        
     
      
      </Switch>
    </BrowserRouter>
  );
}

export default App;
