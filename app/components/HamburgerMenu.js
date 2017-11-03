import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  return (
    <Menu isOpen={false} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
      <Link to="/">Home</Link>
      <Link to="/experience">experience</Link>
      <Link to="/contact">contact</Link>
    </Menu>
  );
};

export default HamburgerMenu;
