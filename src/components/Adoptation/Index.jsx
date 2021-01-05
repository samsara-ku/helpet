import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './Main';
import InfoList from './InfoList';
import ReviewList from './ReviewList';

function Index() {
  return (
    <Router basename="/adopt">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/information/list">
          <InfoList />
        </Route>

        <Route path="/review/list">
          <ReviewList />
        </Route>
      </Switch>
    </Router>
  );
}

export default Index;
