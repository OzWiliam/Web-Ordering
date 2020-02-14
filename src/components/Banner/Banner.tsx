import React from 'react';
import './Banner.scss';
import { Link } from 'react-router-dom';

interface IProps {
  name: string;
}

export default class Banner extends React.Component<IProps> {
  public render() {
    return (
      <div className="banner" id="banner">
        <img
          className="restaurant-logo"
          src="https://develop-cdn.hlcloud.com.au/5d561e3ea8530e3284e62d84/5d0c4a6abfc3ec001f0d1fb9/5de4b8a7d75337001af64faf.gif"
          alt="Famous Pizza"
        />

        <div className="restaurant-title">
          <h1 className="title">
              <span>Beer Garden</span>
          </h1>
        </div>
      </div>
    );
  }
}
