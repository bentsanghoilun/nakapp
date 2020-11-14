import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
//import Particles from 'react-particles-js';

import Cases from './Cases/Cases';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Shared/Footer';
import Header from './Shared/Header';
import Sidetag from './Shared/SideTag';

import './App.css';

const App = () => {
  return (
    <main>
      <Router>
        <Header />
        <Sidetag />
        <Switch>
          <Route path="/" exact>
            <Cases />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
      <Footer />
    </main>
  )
}

export default App;
