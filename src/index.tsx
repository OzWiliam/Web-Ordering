import 'core-js/features/array/from';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner/Banner';
import Order from '../src/components/Order/Order';
import Menu from '../src/components/Menu/Menu';
import MenuDetail from "../src/components/Menu-Detail/Menu-Detail";
import './styles/global.scss';

ReactDOM.render(
  <div>
    <Banner name=" Famous Pizza " />
    <Order/>
    <Menu orderTable={1}/>
    <MenuDetail/>
  </div>,
  document.getElementById('app')
);
