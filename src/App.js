import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <h1>Hello world</h1>} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
