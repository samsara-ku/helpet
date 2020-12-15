import './Header.scss';
import _ from 'lodash'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ShopIcon from '@material-ui/icons/Shop';
import InstagramIcon from '@material-ui/icons/Instagram';

function Header() {
  const [hide, setHide] = useState(false)
  const [pageY, setPageY] = useState(0)

  const handleScroll = () => {
    const currentY = window.scrollY
    const deltaY = currentY - pageY
    const hide = currentY !== 0 && deltaY >= 0

    setHide(hide)
    setPageY(currentY)
  }

  useEffect(() => {
    const throttledScroll = _.throttle(handleScroll, 500)
    window.addEventListener('scroll', throttledScroll)

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [pageY])

  return (
    <div className="header">
      <div className={'header__row ' + (hide && 'hide')}>
        <div className="header__col">
          <Link to="/">
            <div className="header__item">홈</div>
          </Link>
          <Link to="/">
            <div className="header__item">크리에이터즈</div>
          </Link>
          <Link to="/">
            <div className="header__item">스토어</div>
          </Link>
        </div>
        <div className="header__col">
          <Link to="/">
            <FacebookIcon className="header__item"/>
          </Link>
          <Link to="/">
            <YouTubeIcon className="header__item"/>
          </Link>
          <Link to="/">
            <InstagramIcon className="header__item"/>
          </Link>
          <Link to="/">
            <ShopIcon className="header__item"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
