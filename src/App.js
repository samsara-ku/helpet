import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Global/Header/Header';
import Notfound from './components/Information/Notfound';
import Footer from './components/Global/Footer/Footer';
import Main from './components/Landing/Main';
import AdoptationIndex from './components/Adoptation/Index';
import InformationIndex from './components/Information/index';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main />
            <Footer />
          </Route>

          <Route path="/home">
            <Header />
            <InformationIndex />
            <Footer />
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
