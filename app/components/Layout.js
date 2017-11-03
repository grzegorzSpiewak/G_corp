import React from 'react';

const Layout = ({ children }) => {
  return (
    <div id="outer-container">
      {children}
    </div>
  );
};

export default Layout;
