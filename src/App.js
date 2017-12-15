import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import CSSBasics from './components/cssBasics/CSSBasics';
import HTML5Basics from './components/html5Basics/HTML5Basics';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <Header />
          </div>
          <div>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/cssbasics' component={CSSBasics} />
              <Route path='/html5basics' component={HTML5Basics} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
