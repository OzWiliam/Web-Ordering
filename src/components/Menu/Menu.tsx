import React from 'react';
import './Menu.scss';

interface IProps {
  orderTable: number;
}

interface IState {
  nameFood: string;
}

export default class Menu extends React.Component<IProps, IState> {
  constructor(prop: IProps) {
    super(prop);
    this.state = {
      nameFood: 'Test2'
    };
  }
  public render() {
    return (
      <div className="menu" id="menu">
        <div className="menu-header">
          <span className="table-number">table {this.props.orderTable}</span>
        </div>
        <div className="menu-content">
          <div className="menu-item" id="test2">
            <div className="box">
              <div className="item-image">
                <div>
                  <img
                    className="image"
                    src="https://develop-cdn.hlcloud.com.au/5d561e3ea8530e3284e62d84/5d0c4a6abfc3ec001f0d1fb9/5de8a72aa288cb002604cf2e.jpg"
                    alt="test"
                  />
                </div>
              </div>
              <div className="box-content">
                <div className="menu-item-header">
                  <h6>Test 2</h6>
                </div>

                <div className="menu-item-body">
                  <div className="description mt_s">Muti, Required</div>
                </div>
              </div>
              <div className="price">
                <div>From $9.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
