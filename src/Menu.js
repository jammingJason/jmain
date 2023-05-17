import React from 'react';
import menu from './docs/jMenu.pdf';
import imgMenu from './images/jMainMenu.jpg';
import imgMenu2 from './images/jMainMenu2.jpg';
const Menu = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <a href={menu}>Click Here for PDF</a>
          </div>
        </div>
        <div className="row">
          <div className="col col-12">
            <img src={imgMenu} alt="Menu Page 1" />
          </div>
        </div>
        <div className="row">
          <div className="col col-12">
            <br />
            <img src={imgMenu2} alt="Menu Page 2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
