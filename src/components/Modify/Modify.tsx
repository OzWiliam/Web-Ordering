import React from 'react';
import './Modify.scss';
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
import { findDOMNode } from 'react-dom';
import OrderService from '../../services/OrderService';

interface IProps {}

interface IState {
}
const currentMenuItem = OrderService.currentMenuItem;
export default class Modify extends React.Component<IProps, IState> {
  constructor(prop: IProps) {
    super(prop);
  }

  onClickSaveData = () => {
    OrderService.pushMenuItem(currentMenuItem);
    console.log('ok', currentMenuItem);
  };

  public render() {
    const currentMenuItem = OrderService.currentMenuItem;
    if (!currentMenuItem) {
      console.log('Go to Table Page');
      return;
    }
    console.log('Curren menu', currentMenuItem);
    return (
      <div className="modifier" id="modifier">
        <div className="menu-item" id="test2">
          <div className="box">
            <div className="item-image">
              <NavLink className="closed" to={'/menu/order/'}>
                <span>X</span>
              </NavLink>
              <div>
                <img
                  className="image"
                  src={currentMenuItem.imageUrl}
                  alt="test"
                />
              </div>
            </div>
            <div className="box-content">
              <div className="menu-item-header">
                <strong>{currentMenuItem.title}</strong>
              </div>
              <div className="menu-item-body">
                <div className="description mt_s">
                  {currentMenuItem.description}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modifier-item">
          {currentMenuItem.modifierGroups.map((modifierGroup, groupIndex) => {
            return (
              <div key={groupIndex}>
                <strong>{modifierGroup.description}</strong>
                <div className="modifier-body">
                  {modifierGroup.modifierItems.map(
                    (modifier, modifierIndex) => {
                      return (
                        <div
                          className="input-style"
                          key={
                            'menu_' + groupIndex + 'modifier_' + modifierIndex
                          }
                        >
                          <input
                            value={modifier.price}
                            name={'input_' + 'modifierGroup_' + groupIndex}
                            type="radio"
                          />
                          <label className="lb_input">{modifier.name}</label>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="content-footer">
          <div className="stick-bottom">
            <div className="total" >$ {currentMenuItem.price}</div>
            <div className="flex-grow">
              <button
                className="btn-checkout"
                type="button"
                onClick={() => {
                  OrderService.pushMenuItem(currentMenuItem);
                  console.log('ok', currentMenuItem);
                }}
              >
                <NavLink
                  type="button"
                  className="btn-checkout"
                  to={'/menu/order/'}
                >
                Add to Cart
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
