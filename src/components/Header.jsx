import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ShopIcon from '@material-ui/icons/Shop';
import InstagramIcon from '@material-ui/icons/Instagram';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <span className="header__link">홈</span>
        </Link>
        <Link to="/">
          <span className="header__link">크리에이터즈</span>
        </Link>
        <Link to="/">
          <span className="header__link">스토어</span>
        </Link>
      </div>

      <div className="header__right">
        <Link to="/">
          <FacebookIcon />
        </Link>
        <Link to="/">
          <YouTubeIcon />
        </Link>
        <Link to="/">
          <InstagramIcon />
        </Link>
        <Link to="/">
          <ShopIcon />
        </Link>
      </div>
    </div>
  );
}

export default Header;
