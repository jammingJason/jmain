import React from 'react';
import logo from './images/jMainLogoUpscale.jpg';
import jMainMap from './images/jMainMap.jpg';

const Location = () => {
  return (
    <>
      <div className="contianer">
        <div className="row">
          <div className="col col-4"></div>
          <div className="col col-4">
            <img src={logo} alt="Logo" />
          </div>
          <div className="col col-4"></div>
        </div>
        <div className="row">
          <div className="col col-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col col-12">
            <h1>
              622 Main Street
              <br />
              Blackshear, GA
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col col-4"></div>
          <div className="col col-4">
            <img src={jMainMap} alt="Map" />
            <div className="col col-4"></div>
          </div>
          <div className="col col-4"></div>
        </div>
      </div>
    </>
  );
};

export default Location;
