import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Notfound from './components/Notfound';
import HomeContainer from './containers/HomeContainer';
import Footer from './components/Footer';
import ArticlePageContainer from './containers/ArticlePageContainer';
import Search from './components/Search/Search';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/test">
            <Search />
          </Route>

          <Route path="/article">
            <ArticlePageContainer />
          </Route>

          <Route exact path="/">
            <HomeContainer />
            <Footer />
          </Route>

          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
