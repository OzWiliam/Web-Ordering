import 'core-js/features/array/from';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner/Banner';
import './styles/global.scss';
import Wizard from './components/wizard/wizard';

ReactDOM.render(
  <div>
    <Banner name=" Famous Pizza "></Banner>
    <Wizard name="Hieu"></Wizard>
  </div>,
  document.getElementById('app')
);
