import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home';
import InfoList from './InfoList';
import ReviewList from './ReviewList';
import './Index.scss';
import ScrollToTop from '../Common/ScrollToTop';
import ArticleDetail from './ArticleDetail';

function Index() {
  return (
    <div className="adopt">
      <Router basename="/adopt">
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/information/article/:aidx">
            <ArticleDetail />
          </Route>

          <Route path="/review/article/:aidx">
            <ReviewList />
          </Route>

          <Route path="/information/list">
            <InfoList />
          </Route>

          <Route path="/review/list">
            <ReviewList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Index;
