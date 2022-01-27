import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Work from './components/work';
import Contact from './components/contact';
import Game from './components/game';

import NotFound from './components/errorPages/NotFound';

import Cursor from './components/others/Cursor';

import Navigation from './components/layout/Navigation'

const App = () => {


  return (
    <>
      <Cursor />
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-me" exact component={About} />
          <Route path="/my-skills" exact component={Skills} />
          <Route path="/my-work" exact component={Work} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/lets-play" exact component={Game} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;