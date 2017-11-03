/* eslint react/prop-types: 0 */
import React from 'react';
import Header from './Header';
import About from './About';


const homepage = {
  header: {
    background: 'home',
    heading: 'Lorem ipsum dolor sit amet',
    caption: 'Curabitur quis lorem vitae massa fermentum facilisis in sit amet magna',
  },
  about: {
    heading: 'Lorem ipsum dolor sit amet',
    caption: 'Lorem ipsum dolor',
    text: 'Cras vel turpis et tellus interdum pellentesque. Ut cursus eget est molestie porttitor. Curabitur semper sapien vel tellus cursus, vitae vulputate metus blandit. Cras vulputate ut risus quis suscipit. Quisque egestas mauris a nunc feugiat, a aliquet mauris consequat. Fusce et tincidunt mi. Nam finibus orci sit amet dui ornare, ac cursus quam dapibus. Nam id congue sapien. Etiam hendrerit, nulla eget ultricies aliquet, justo mauris placerat mauris, lacinia blandit lorem sem ut orci. Aenean congue faucibus dolor, eget vestibulum odio commodo in. Ut sed vulputate risus. Aenean eleifend gravida sem, ac maximus arcu pulvinar vel.',
  },
};

const Home = () => {
  return (
    <div className="home">
      <Header {...homepage.header} />
      <About {...homepage.about} />
    </div>
  );
};

export default Home;
