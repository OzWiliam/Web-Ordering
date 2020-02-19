import React from 'react';
import './Payment.scss';
import { IMenuItem } from '../../model/Menu';
import { MENU_ITEMS } from '../data/demoData';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
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
    const price =  OrderService.price;
    return (
      <div className="payment" id="payment">
        <div className="menu-header">
          <span className="lb-your-order">
            Your order No Table
            <span className="table-number">
              <Link to="/">#{orderTable}</Link>
            </span>
          </span>
        </div>
        <div className="content_deskop">
        <div className="order_summary">
          <strong>$126.75</strong>
        </div>
          <form className="form-input-customer">
            <div className="form-control">
              <label>Name</label>
              <input className="form-control invalid" type="text"/>
            </div>
            <div className="form-control">
              <label>Mobile No.</label>
              <span>(Optional)</span>
              <input className="form-control invalid" type="text"/>
            </div>
            <div className="form-control">
              <label>Email</label>
              <span>(Optional)</span>
              <input className="form-control invalid" type="text"/>
            </div>
          </form>
          <div className="term-condition">
            <div className="form-group line"/>
            <div className="form-group">
              <strong>Terms and Conditions</strong>
            </div>
            <div className="term-condition-content">
              1. APPLICABILITY 
              1.1 The General Terms and Conditions below apply
              to all offers and transactions of Blue Pepper. Prices are subject
              to change. 
              1.2 By accepting an offer or making an order, the
              consumer expressly accepts the applicability of these General
              Terms and Conditions.
            </div>
          </div>
          <div className="input-style">
            <input
              type="checkbox"
              value="true"
            />
              <label>'I have read and acept the terms & condition'</label>
          </div>
        </div>
        <div className="content-footer">
          <div className='stick-bottom'>
            <button className="btn-back"></button>
          </div>
          <div className='stick-bottom'>
            <button className="btn-pay"></button>
          </div>
        </div>
      </div>
    );
  }
}
