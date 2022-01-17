import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Game from './pages/Game';
import NotFound from './pages/NotFound';
import Cursor from './components/Cursor';
import LsVibes from './pages/works/LsVibes';
import Portfolio from './pages/works/Portfolio';
import Meteo from './pages/works/Meteo';

const App = () => {


  return (
    <>
      <Cursor />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-me" exact component={About} />
          <Route path="/my-skills" exact component={Skills} />
          <Route path="/my-work" exact component={Work} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/lets-play" exact component={Game} />
          <Route path="/lsvibes" exact component={LsVibes} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/app-meteo" exact component={Meteo} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;