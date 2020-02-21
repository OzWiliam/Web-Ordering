
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

interface IProps {}

interface IState {
  menuItems: IMenuItem[];
}

export default class Cart extends React.Component<IProps, IState> {
  constructor(prop: IProps) {
    super(prop);
  }
  public render() {
    const tableNumber = OrderService.tableNumber;
    return (
      <div className="cart" id="cart">
        <div className="menu-header">
          Order
          <span className="lb-your-order">
            Your order No Table
            <span className="table-number">
              <Link to="/">#{tableNumber}</Link>
            </span>
          </span>
        </div>
        <div className="body-content">
          <table>
            <tbody>
              <tr>
                <td>
                  <label className="title">
                    <strong>Cao Lau</strong>
                  </label>
                </td>
                <td>
                  <div className="modifier-name">Fried</div>
                </td>
                <td>
                  <span className="total">
                    <strong>$11.30</strong>
                  </span>
                </td>
                <td className="action">
                  <div className="action-button">
                    <button className="button">x</button>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="total-row">
                <td>
                  <strong>
                    Total
                    <span className="gst">(inc GST)</span>
                  </strong>
                </td>
                <td>$35.92</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="content-footer">
          <div className="stick-bottom">
            <div className="flex-grow">
              <NavLink type="button"  to={'/menu/order'}>
                <button className="btn-back flex-grow">View Cart</button>
              </NavLink>
            </div>
            <NavLink type="button" className="btn-pay flex-grow" to={'/menu/payment/'}>
              <button className="btn-pay">Continue to Payment</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
