import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Cases from './Cases/Cases';
import Logo from './Logo/Logo';

import './App.css';

const App = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Cases />
          </Route>
          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route path="/contact">
            <h2>Contacts</h2>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </main>
  )
}

export default App;
