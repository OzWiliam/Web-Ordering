import React from 'react';
import './Order.scss';
import { Route, Link } from 'react-router-dom';
import Menu from '../Menu/Menu';

interface IProps {}

interface IState {}

export default class Order extends React.Component<IProps> {
  constructor(prop: IProps) {
    super(prop);

    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e: { target: { value: any; }; }) => {
    this.setState({ value: e.target.value });
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
              <button className="btn-ordering" type="button">
                Start Ordering
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
