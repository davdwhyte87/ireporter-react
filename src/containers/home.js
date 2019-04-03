/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';


const Home = () => (
  <div className="boxes">
    <div className="welcome-box">
      <h1 className="welcome"> Welcome to iReporter!</h1>
    </div>
    <div className="row">
      <img src={require('../images/background.jpg')} className="bg-img" />
      <div className="left-box">
        <div>
          <i className="fa fa-bullhorn icon" />
          <h1 className="description">iReporter</h1>
          <h2 className="description-long">Let"s end corruption.</h2>
        </div>
      </div>
    </div>
  </div>
);

export default connect(() => ({}), {})(Home);
