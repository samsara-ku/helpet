import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Notfound from './components/Notfound';
import HomeContainer from './containers/HomeContainer';
import Footer from './components/Footer';
import ArticlePageContainer from './containers/ArticlePageContainer';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/test">
            <Header />
            <Search />
          </Route>

          <Route path="/article">
            <Header />
            <ArticlePageContainer />
          </Route>

          <Route exact path="/">
            <Header />
            <HomeContainer />
            <Footer />
          </Route>

          <Route path="*">
            <Header />
            <Notfound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
