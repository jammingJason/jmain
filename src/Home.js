import React from 'react';
import './Home.css';
import jLeonardsOnMainArt from './images/jLeonardsOnMain.jpg';
import buttermilkChicken from './images/buttermilkChicken.jpg';
import caesarSalad from './images/caesarSalad.jpg';
import cremeBrulee from './images/cremeBrulee.jpg';

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <h1>Welcome!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col col-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col col-12">
            <img src={jLeonardsOnMainArt} alt="J. Leonards on Main" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
