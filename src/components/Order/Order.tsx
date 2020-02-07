import React from 'react';
import './Order.scss';

interface IProps {
  currentStep: number;
  handleChange: (orderTable: number) => void;
}

interface IState {
  orderTable: number;
}

export default class Order extends React.Component<IProps, IState> {
  constructor(prop: IProps) {
    super(prop);
    this.state = {
      orderTable: 2
    };
  }
  public render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
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
                />
              </div>
            </form>
          </div>

          <div className="div-button">
            <div className="btn">
              <button
                className="btn-ordering"
                type="button"
                onClick={() => this.props.handleChange(this.state.orderTable)}
              >
                Start Ordering
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
