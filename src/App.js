import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import CSSBasics from './components/cssBasics/CSSBasics';

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
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
