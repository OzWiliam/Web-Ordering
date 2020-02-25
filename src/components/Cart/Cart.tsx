import React from 'react';
import './Cart.scss';
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
import Order from '../Order/Order';

interface IProps {}

interface IState {
  totalPrice: number;
}

const currentMenuItem = OrderService.currentMenuItem;
const totalPrice = OrderService.totalPrice;

export default class Cart extends React.Component<IProps, IState> {
  constructor(prop: IProps) {
    super(prop);
    this.state = {
      totalPrice: 0
    };
  }

  public render() {
    const tableNumber = OrderService.tableNumber;
    const menuItems = OrderService.menuItems;
    console.log(menuItems);
    const orderFunctions = menuItems.map((order, i) => {
      return (
        <tr key={'item-cart ' + i}>
          <td>
            <label className="title">
              <strong>{order.title}</strong>
            </label>
          </td>
          <td>
            <span className="total">
              <strong>${order.price}</strong>
            </span>
          </td>
          <td className="action">
            <div className="action-button">
              <button
                className="button"
                onClick={() => {
                  OrderService.removeMenuItem(order);
                }}
              >
                <NavLink to={'/menu/cart/'}>X</NavLink>
              </button>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <div className="cart" id="cart">
        <div className="menu-header">
          Order
          <span className="lb-your-order">
            Your order No Table
            <span className="table-number">
              <Link to="/"> #{tableNumber}</Link>
            </span>
          </span>
        </div>
        <div className="body-content">
          <table>
            <tbody>{orderFunctions}</tbody>
            <tfoot>
              <tr className="total-row">
                <td>
                  <strong>
                    Total
                    <span className="gst">(inc GST)</span>
                  </strong>
                </td>
                <td>$ = {totalPrice}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="content-footer">
          <div className="stick-bottom">
            <div className="flex-grow">
              <NavLink type="button" to={'/menu/order'}>
                <button type="button" className="btn-back flex-grow">
                  Back
                </button>
              </NavLink>
            </div>
            <NavLink
              type="button"
              className="btn-pay flex-grow"
              to={'/menu/payment/'}
            >
              <button
                className="btn-pay flex-grow"
              >
                Continue to Payment
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
