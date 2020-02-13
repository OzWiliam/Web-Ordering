import React from 'react';
import './Menu.scss';
import { IMenuItem } from '../../model/Menu';
// import axios from 'axios';
import { MENU_ITEMS } from '../data/demoData';
import { matchPath } from 'react-router-dom';

interface IProps {
  name?: string;
  description?: string;
  price?: number;
  image?: string;
}

interface IState {
  menuItems: IMenuItem[];
}

const menuItems: IMenuItem[] = JSON.parse(JSON.stringify(MENU_ITEMS));
console.log(menuItems);

// function show_currency (price: any) {
//   return price.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
// }

const menu = menuItems.map(food => {
  return (
    <div className="menu-content">
      <div className="menu-item" id="test2">
        <div className="box">
          <div className="item-image">
            <div>
              <img className="image" src={food.image} alt="test" />
            </div>
          </div>
          <div className="box-content">
            <div className="menu-item-header">
              <strong>{food.name}</strong>
            </div>
            <div className="menu-item-body">
              <div className="description mt_s">{food.description}</div>
            </div>
          </div>
          <div className="price">
            <div>From ${food.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default class Menu extends React.Component<IProps, IState> {
  // public componentDidMount() {
  //   this.initMenu();
  //   console.log(this);
  // }

  // private initMenu() {
  //   const menuItems: IMenuItem[] = JSON.parse(JSON.stringify(MENU_ITEMS));
  //   this.setState({ menuItems });
  // }
  public render() {
    return (
      <div className="menu" id="menu">
        <div className="menu-header">
    <strong className="table-number">Table </strong>
        </div>
        {menu}
      </div>
    );
  }
}
