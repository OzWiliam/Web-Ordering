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
import Order from './components/Order/Order';
import Menu from './components/Menu/Menu';
import Modify from './components/Modify/Modify';
import Payment from './components/Payment/Payment';
import Cart from './components/Cart/Cart';

interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <HashRouter>
          <div className="App">
            <Banner name=" Famous Pizza " />
            <Switch>
              <Route path="/" exact component={Order} />
              <Route path="/menu/order" component={Menu} />
              <Route path="/menu/modify" component={Modify} />
              <Route path="/menu/cart" component={Cart} />
              <Route path="/menu/payment" component={Payment} />
            </Switch>
          </div>
        </HashRouter>
      </Router>
    );
  }
}

export default App;
