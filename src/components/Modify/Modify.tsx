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
  menuItems: IMenuItem[];
}

const menuItems: IMenuItem[] = JSON.parse(JSON.stringify(MENU_ITEMS));

export default class Order extends React.Component<IProps, IState> {
  constructor(prop: IProps) {
    super(prop);
  }

  public render() {
    const currentMenuItem = OrderService.currentMenuItem;
    if(!currentMenuItem){
        console.log('Go to Table Page');
        return ;
    }
    console.log(currentMenuItem);
    return (
      <div className="modifier" id="modifier">
        {menuItems.map((food, i) => {
          return (
            <div className="modifier-item" key={i}>
              {food.modifierGroups.map(function(modify, i) {
                return (
                  <div key={i}>
                    <strong>{modify.description}</strong>
                    <div className="modifier-body">
                      {modify.modifierItems.map(function(option, i) {
                        return (
                          <div className="input-style" key={i}>
                            <input name="radioGroup" type="radio" />
                            <label className="lb_input">{option.name}</label>
                          </div>
                        );
                      })}
                      ;
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
