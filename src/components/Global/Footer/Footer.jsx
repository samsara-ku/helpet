import './Footer.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">helpet© Copyright 2020, All Rights Reserved</div>
      <div className="footer__row">
        <div className="footer__col">
          <Link to="/">이용약관_testing</Link>
        </div>
        <div>
          Test 입니다
        </div>
        <div className="footer__col">
          <Link to="/">개인정보처리방침</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
