import './Footer.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  return (
    <div className="footer">
      <div className="FooterWrap">
        <div className="FooterLinksContainer">
          <div className="FooterLinksWrapper">
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">소개</h1>
              <Link className="FooterLink" to="/">
                개인정보 처리방침
              </Link>
              <Link className="FooterLink" to="/">
                이용약관
              </Link>
              <Link className="FooterLink" to="/">
                사이트맵
              </Link>
            </div>
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">정보 채널</h1>
              <Link className="FooterLink" to="/">
                인기 정보
              </Link>
              <Link className="FooterLink" to="/">
                필수 정보
              </Link>
              <Link className="FooterLink" to="/">
                화제의 기사
              </Link>
            </div>
          </div>
          <div className="FooterLinksWrapper">
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">입양 채널</h1>
              <Link className="FooterLink" to="/">
                입양 신청
              </Link>
              <Link className="FooterLink" to="/">
                지역별 센터
              </Link>
              <Link className="FooterLink" to="/">
                자원봉사
              </Link>
            </div>
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">쇼핑 채널</h1>
              <Link className="FooterLink" to="/">
                식료품 및 간식
              </Link>
              <Link className="FooterLink" to="/">
                장난감 및 보조기구
              </Link>
              <Link className="FooterLink" to="/">
                의류 및 장신구
              </Link>
            </div>
          </div>
        </div>
        <div className="SocialMedia">
          <div className="SocialMediaWrap">
            <Link classNam="SocialLogo">(주)ReactProject</Link>
            <div className="WebWebsiteRights">HelpPet© Copyright 2020, All Rights Reserved</div>
            <div className="SocialIcons">
              <a className="SocialIconLink" href="/" target="_blank" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a className="SocialIconLink" href="/" target="_blank" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a className="SocialIconLink" href="/" target="_blank" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a className="SocialIconLink" href="/" target="_blank" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a className="SocialIconLink" href="/" target="_blank" aria-label="Youtube">
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
