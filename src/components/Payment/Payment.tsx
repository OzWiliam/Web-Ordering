import React from 'react';
import './Payment.scss';
import { IMenuItem } from '../../model/Menu';
import { MENU_ITEMS } from '../data/demoData';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import OrderService from '../../services/OrderService';

interface IProps {}

interface IState {
  menuItems: IMenuItem[];
}

const menuItems: IMenuItem[] = JSON.parse(JSON.stringify(MENU_ITEMS));
console.log(menuItems);

export default class Payment extends React.Component<IProps, IState> {
  public render() {
    const orderTable = OrderService.tableNumber;
    const price = OrderService.price;
    return (
      <div className="payment" id="payment">
        <div className="menu-header">Payment
          <span className="lb-your-order">
            Your order No Table
            <span className="table-number">
              <Link to="/"> # {orderTable}</Link>
            </span>
          </span>
        </div>
        <div className="order_summary">
          <div className="lb_price">
            <label>$126.75</label>
          </div>
        </div>
        <div className="payment-form">
          <div className="p_m">
            <form className="form-input-customer">
              <div className="form-group">
                <label>Name</label>
                <input className="form-control ng-invalid" type="text" />
              </div>
              <div className="form-group">
                <label>Mobile No.</label>
                <span>(Optional)</span>
                <input className="form-control ng-invalid" type="text" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <span>(Optional)</span>
                <input className="form-control ng-invalid" type="text" />
              </div>
            </form>
          </div>
          <div className="term-condition">
            <div className="form-group line" />
            <div className="form-group">
              <strong>Terms and Conditions</strong>
            </div>
          </div>
          <div className="input-style">
            <input type="checkbox" value="true" />
            <label>I have read and acept the terms & condition</label>
          </div>
        </div>
        <div className="content-footer">
          <div className="stick-bottom">
            <div>
              <button
                type="button"
                className="btn btn-link btn-block btn-lg btn-back"
              >
                Back
              </button>
            </div>
            <div className="flex-grow-2">
              <button type="button" className="btn  btn-primary btn-lg btn">
                Pay and Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
