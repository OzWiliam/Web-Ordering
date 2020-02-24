import React from 'react';
import './Order.scss';
import { Route, Link, NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';
import OrderService from '../../services/OrderService';

interface IProps {}

interface IState {
}

export default class Order extends React.Component<IProps, IState> {
  constructor(prop: IProps) {
    super(prop);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e: { target: { value: any } }) => {
    OrderService.tableNumber = +e.target.value;
  };

  public render() {
    return (
      <div className="order" id="order">
        <div className="body-content">
          <div className="card">
            <form className=" valid-number">
              <div className="form-group">
                <label className="lb-table">Please enter table number</label>
                <input
                  className="form-control valid"
                  type="number"
                  pattern="\d*"
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>
          <div className="div-button">
            <div className="btn">
              <NavLink
                type="button"
                className="btn-ordering"
                to={'/menu/order/'}
              >
                <button className="btn-ordering">Start Ordering</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
