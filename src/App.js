import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Cats from './components/Cats.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navigation">
            <Nav />
          </div>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/cats" component={Cats}/>
              <Route render={function() {
                return <h1>You must be lost! Click above to go back.</h1>
              }} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
