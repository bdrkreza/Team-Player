import './App.css';
import Player from './Player/Player';
import Header from './Header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Series from './Series/Series';
import Home from './Home/Home';
import NoMatch from './NoMatch/NoMatch';
import Team from './Team/Team';
function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/series">
            <Series />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
