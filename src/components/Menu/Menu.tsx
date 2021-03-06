import React from 'react';
import './Menu.scss';
import { IMenuItem } from '../../model/Menu';
import { MENU_ITEMS } from '../data/demoData';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  HashRouter
} from 'react-router-dom';
import OrderService from '../../services/OrderService';

interface IProps {}

interface IState {}

const menuItems: IMenuItem[] = JSON.parse(JSON.stringify(MENU_ITEMS));
console.log(menuItems);
const totalPrice = OrderService.totalPrice;

export default class Menu extends React.Component<IProps, IState> {
  onClickMenuItem = (menuItem: IMenuItem) => {
    OrderService.currentMenuItem = JSON.parse(JSON.stringify(menuItem));
  };

  render() {
    const tableNumber = OrderService.tableNumber;
    if (!tableNumber) {
      console.log('Go to Table Page');
      return;
    }

    const menu = menuItems.map((food, i) => {
      return (
        <div className="menu-content" key={i}>
          <div className="menu-item" id="test2">
            <div className="box">
              <div className="item-image">
                <div>
                  <img className="image" src={food.imageUrl} alt="test" />
                </div>
              </div>
              <div className="box-content">
                <div className="menu-item-header">
                  <strong>
                    <Link
                      to={'/menu/modify/'}
                      onClick={() => this.onClickMenuItem(food)}
                    >
                      {food.title}
                    </Link>
                  </strong>
                </div>
                <div className="menu-item-body">
                  <div className="description mt_s">{food.description}</div>
                  <div className="price">From ${food.price}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    const orderTable = OrderService.tableNumber;
    return (
      <div className="menu" id="menu">
        <div className="menu-header">
          Order
          <span className="lb-your-order">
            Your order No Table
            <span className="table-number">
              <Link to="/"> #{orderTable}</Link>
            </span>
          </span>
        </div>
        {menu}
        <div className="content-footer">
          <div className="stick-bottom">
            <div className="total">$ {totalPrice}</div>
            <div className="flex-grow">
              <NavLink type="button" className="btn-cart" to={'/menu/cart/'}>
                <button className="btn-cart">View Cart</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
