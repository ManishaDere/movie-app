import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './scss/styles.scss';

import Home from './screens/home';
import Explore from './screens/explore';
function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/explore" component={Explore} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;




