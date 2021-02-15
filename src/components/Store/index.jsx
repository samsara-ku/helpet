import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home/index';
import Header from './Header/index';
import Category from './Category/index';

function index() {
  return (
    <div className="store">
      <Router basename="/store">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/category/:value">
            <Category />
          </Route>

          <Route exact path="/product/:value">
            <div>This area is for product area</div>
          </Route>

          <Route exact path="*">
            <div>This area is not implemented</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default index;
