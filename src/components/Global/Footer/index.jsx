import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">
        <div className="footer__col">
          <div>
            <Link to="/home">헬펫 지식 정보 채널</Link>
          </div>
          <div>
            <Link to="/adopt">헬팻 입양 채널</Link>
          </div>
          <div>
            <Link to="/store">헬팻 스토어 채널</Link>
          </div>
        </div>
        <div className="footer__col">
          <h1>HELPET</h1>
        </div>
      </div>
      <div className="footer__row">
        <div className="footer__col">
          <div className="footer__follow">
            Follow by
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
              <FacebookIcon />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com">
              <YouTubeIcon />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
              <TwitterIcon />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="footer__col">helpet© Copyright 2020, All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Footer;
