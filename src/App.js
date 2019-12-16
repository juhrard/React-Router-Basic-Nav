import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about'>
      <About/>
    </Route>
    <Route exact path='/contact'>
      <Contact/>
    </Route>
  </div>
);

export default App;
