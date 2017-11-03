/* eslint react/prop-types: 0 */
import React from 'react';
import Hero from './Hero';
import Test from './Test';

const test = {
  imgUrl: './img/home.jpg',
};

const Home = () => {
  return (
    <section className="home">
      <Hero {...test} />
      <Test />
    </section>
  );
};

export default Home;
