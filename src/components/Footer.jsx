import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <p>helpet© Copyright 2020, All Rights Reserved</p>
      <hr />

      <ul>
        <li>
          <Link>이용약관</Link>
        </li>
        <li>
          <Link>개인정보처리방침</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
