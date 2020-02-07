import React from 'react';
import './Menu-Detail.scss';

interface IProps {}

interface IState {
  orderTable: number;
}

export default class MenuDetail extends React.Component<IProps, IState> {
  constructor(prop: IProps) {
    super(prop);
  }
  public render() {
    return (
      <div className="menu-detail" id="menu-detail">
        <div className="order-description">
          <span>
            "Your order No."
            <span className="table-number"> #1</span>
          </span>
        </div>
        <div className="content">
          <div className="menu-item">
            <div className="menu-item-detail"></div>
            <div className="modifier-item">
              <div className="name">
                <span>Test2</span>
              </div>
              <div className="description">
                <span>Muti, Required</span>
              </div>
              <div className="price">
                <div>From $9.00</div>
              </div>
              <div className="image">
                <img
                  className="image"
                  src="https://develop-cdn.hlcloud.com.au/5d561e3ea8530e3284e62d84/5d0c4a6abfc3ec001f0d1fb9/5de8a72aa288cb002604cf2e.jpg"
                  alt="test"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
