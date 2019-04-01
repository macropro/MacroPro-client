import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

const app = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <h1>Hello world</h1>} />
      </Switch>

    </BrowserRouter>
  )
}

export default app;
