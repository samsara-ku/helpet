/* eslint-disable react/prop-types */
import './Layout1.scss';
import React from 'react';

function Layout1({ mainContent }) {
  return (
    <div className="layout1">
      {/* <div className="layout1__main">{mainContent}</div> */}
      {mainContent}
      {/* <div className="layout1__side">{sideContent}</div> */}
    </div>
  );
}

export default Layout1;
