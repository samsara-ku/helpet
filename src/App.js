import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Global/Header/Header';
import Notfound from './components/Information/Notfound';
import HomeContainer from './containers/HomeContainer';
import Footer from './components/Global/Footer/Footer';
import ArticlePageContainer from './containers/ArticlePageContainer';
import Search from './components/Information/Search';
import Main from './components/Landing/Main';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main />
            <Footer />
          </Route>

          <Route exact path="/home">
            <Header />
            <HomeContainer />
            <Footer />
          </Route>

          <Route path="/test">
            <Header />
            <Search />
            <Footer />
          </Route>

          <Route path="/article">
            <Header />
            <ArticlePageContainer />
            <Footer />
          </Route>

          <Route path="*">
            <Header />
            <Notfound />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
