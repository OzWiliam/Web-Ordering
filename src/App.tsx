import React, { Component } from 'react';
import './App.scss';
import routes from './routes';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Menu from "./components/Menu/Menu";
import MenuDetail from "./components/Menu-Detail/Menu-Detail";
import Order from './components/Order/Order';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Banner name=" Famous Pizza " />
          <Switch>
            <Route path="/" exact component={Order}/>
            <Route path='/menu/:orderTable' component={Menu}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
