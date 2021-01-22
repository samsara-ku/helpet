import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Global/Header/Header';
import Notfound from './components/Information/Notfound';
import HomeContainer from './containers/HomeContainer';
import Footer from './components/Global/Footer/Footer';
import ArticlePageContainer from './containers/ArticlePageContainer';
import Articles from './components/Information/Articles';
import Main from './components/Landing/Main';
import AdoptationIndex from './components/Adoptation/Index';

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

          <Route exact path="/home/articles">
            <Header />
            <Articles />
          </Route>

          <Route exact path="/home/articles/article/:aidx">
            <Header />
            <ArticlePageContainer />
          </Route>
    
          <Route path="/adopt">
            <Header />
            <AdoptationIndex />
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
