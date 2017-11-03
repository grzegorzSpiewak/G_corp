import React from 'react';
import MauseScroll from './MauseScroll';

const urlImg = './img/home.jpg';

const image = {
  backgroundImage: `url(${urlImg})`,
  color: 'red',
};

const Hero = () => {
  return (
    <div className="hero" style={image}>
      <div className="hero__overlay">
        <div className="hero__overlay__centered">
          <h1 className="hero__header">Some sick qoute</h1>
          <h2 className="hero__caption">Other sick quote</h2>
          <MauseScroll />
        </div>
      </div>
    </div>
  );
};

export default Hero;
