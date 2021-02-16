import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Category from './Category';
import Product from './Product';

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
            <Product />
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
