import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home/index';
import Header from './Header/index';

function index() {
  return (
    <div className="store">
      <Router basename="/store">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default index;
