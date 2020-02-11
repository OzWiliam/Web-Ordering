import React from 'react';
import './Payment.scss';
import { Link } from 'react-router-dom';

interface IProps {}

export default class Payment extends React.Component<IProps> {
  public render() {
    return (
      <div className="payment" id="payment">
        <div className="content deskop">
          <form className="form-input-customer">
            <div className="form-control">
              <label>'Name'</label>
              <input className="form-control invalid" type="text"></input>
            </div>
            <div className="form-control">
              <label>'Mobile No.'</label>
              <span>(Optional)</span>
              <input className="form-control invalid" type="text"></input>
            </div>
            <div className="form-control">
              <label>'Email'</label>
              <span>(Optional)</span>
              <input className="form-control invalid" type="text"></input>
            </div>
          </form>
          <div className="stripe-card">
            <div className="form-control">
              <strong>Credit or debit card</strong>
              <input className="form-control invalid" type="text"></input>
            </div>
          </div>
          <div className="term-condition">
            <div className="form-group line"></div>
            <div className="form-group">
              <strong>Terms and Conditions</strong>
            </div>
            <div className="term-condition-content">
              "1. APPLICABILITY 1.1 The General Terms and Conditions below apply
              to all offers and transactions of Blue Pepper. Prices are subject
              to change. 1.2 By accepting an offer or making an order, the
              consumer expressly accepts the applicability of these General
              Terms and Conditions. ""
            </div>
          </div>
          <div className="input-style">
            <input
              id="termConditionIsRequired"
              name="termConditionIsRequired"
              type="checkbox"
              value="true"
            >
              <label>'I have read and acept the terms & condition'</label>
            </input>
          </div>
        </div>
        <div className="content-footer">
          <div>
            <button className="btn-back"></button>
          </div>
          <div>
            <button className="btn-pay"></button>
          </div>
        </div>
      </div>
    );
  }
}
