/* eslint react/prop-types: 0 */
import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Layout from './Layout';
import Home from './Home';
import Experience from './Experience';
import Contact from './Contact';
import HamburgerMenu from './HamburgerMenu';
import Footer from './Footer';

const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 2000, exit: 100 };

  return (
    <Layout>
      <HamburgerMenu />
      <TransitionGroup component="main" id="page-wrap">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/experience" exact component={Experience} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </CSSTransition>
        <Footer />
      </TransitionGroup>
    </Layout>
  );
};

export default withRouter(App);
