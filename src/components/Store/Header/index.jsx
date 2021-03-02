import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="store__header">
      <div className="store__header__col">
        <Link to="/category/all/">
          <div className="store__header__item">SHOP</div>
        </Link>
        <Link to="/mypage/">
          <div className="store__header__item">MY PAGE</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
