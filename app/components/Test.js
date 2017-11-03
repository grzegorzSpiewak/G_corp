import React from 'react';

const image = {
  backgroundImage: '..url("./img/home.jpg")',
};

const Test = () => {
  return (
    <div className="test" style={image}>
      <img src="./img/technology.jpg" alt="background" />

    </div>
  );
};

export default Test;
