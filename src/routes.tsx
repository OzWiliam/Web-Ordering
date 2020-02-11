import React from 'react';
import Order from './components/Order/Order';
import Menu from './components/Menu/Menu';
import MenuDetail from './components/Menu-Detail/Menu-Detail';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Order />
  },

  {
    path: '/menu/:orderTable',
    exact: false,
    main: () => <Menu />
  },

  {
    path: '/menuDetail/:orderTable/:food',
    exact: false,
    main: () => <MenuDetail />
  }
];

export default routes;