import './Footer.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">
        helpet© Copyright 2020, All Rights Reserved
      </div>
      <div className="footer__row">
        <div className="footer__col">
          <Link>이용약관</Link>
        </div>
        <div className="footer__col">
          <Link>개인정보처리방침</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
