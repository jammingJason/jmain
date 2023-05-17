import React from 'react';
import table from './images/jMainTable.jpg';
import chicken from './images/buttermilkChicken.jpg';
import caesar from './images/caesarSalad.jpg';
import creme from './images/cremeBrulee.jpg';
import filetMac from './images/filetMacNcheese.jpg';
import frenchOnion from './images/FrenchOnionSoup.jpg';
import houseSalad from './images/HouseSalad.jpg';
import lava from './images/lavaCake.jpg';
import macNcheese from './images/macNcheese.jpg';
import mussels from './images/Mussels.jpg';
import trout from './images/PecanCrustedTrout.jpg';
import sheCrab from './images/sheCrab.jpg';
import shrimpGrits from './images/ShrimpGrits.jpg';
import wedge from './images/WedgeBLTSalad.jpg';

const Pictures = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <h1>Enjoy!</h1>
          </div>
        </div>

        <div className="row">
          <div className="col col-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col col-12">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={table} className="d-block w-100" alt="Food Item" />
                </div>
                <div className="carousel-item">
                  <img
                    src={chicken}
                    className="d-block w-100"
                    alt="Food Item"
                  />
                </div>
                <div className="carousel-item">
                  <img src={caesar} className="d-block w-100" alt="Food Item" />
                </div>
                <div className="carousel-item">
                  <img src={creme} className="d-block w-100" alt="Food Item" />
                </div>
                <div className="carousel-item">
                  <img
                    src={filetMac}
                    className="d-block w-100"
                    alt="Food Item"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={frenchOnion}
                    className="d-block w-100"
                    alt="Food Item"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={houseSalad}
                    className="d-block w-100"
                    alt="Food Item"
                  />
                </div>
                <div className="carousel-item">
                  <img src={lava} className="d-block w-100" alt="Food Item" />
                </div>
                <div className="carousel-item">
                  <img
                    src={macNcheese}
                    className="d-block w-100"
                    alt="Food Item"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={mussels}
                    className="d-block w-100"
                    alt="Food Item"
                  />
                </div>
                <div className="carousel-item">
                  <img src={trout} className="d-block w-100" alt="Food Item" />
                </div>
                <div className="carousel-item">
                  <img
                    src={sheCrab}
                    className="d-block w-100"
                    alt="Food Item"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={shrimpGrits}
                    className="d-block w-100"
                    alt="Food Item"
                  />
                </div>
                <div className="carousel-item">
                  <img src={wedge} className="d-block w-100" alt="Food Item" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pictures;
