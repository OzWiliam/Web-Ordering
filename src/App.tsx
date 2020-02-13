import React, { Component } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  HashRouter
} from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import MenuDetail from './components/Menu-Detail/Menu-Detail';
import Order from './components/Order/Order';

interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Banner name=" Famous Pizza " />
            <Switch>
              <Route path="/" exact component={Order} />
              <Route path="/menu/:orderTable" component={Menu} />
              {''}
              <Route path="/menu/:orderTable/:food" component={MenuDetail} />
              {''}
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
