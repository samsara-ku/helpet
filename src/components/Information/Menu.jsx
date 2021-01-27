/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// Above things are disable something about Web accessibility
import React, { useState } from 'react';
import './Menu.scss';
import CloudIcon from '@material-ui/icons/Cloud';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HiddenMenu from './HiddenMenu';
import SignIn from './SignIn';

function Menu({ articles }) {
  const makeCategory = prefix => [
    `${prefix} 건강`,
    `${prefix} 행동`,
    `${prefix} 음식`,
    `${prefix} 훈련`,
    `${prefix} 종류`,
  ];

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState([false, false]);

  return (
    <div className="menu">
      <div className="menu__row">
        <div className="menu__col">
          <div className="menu__col__logo">
            <CloudIcon />
          </div>
        </div>
        <div className="menu__col">
          <div
            className="menu__col__choice"
            onMouseEnter={() => setHover([true, false])}
            onMouseLeave={() => {
              setHover([false, false]);
            }}
          >
            강아지 연구소
            <ArrowDropDownIcon />
            <HiddenMenu category={makeCategory('강아지')} articles={articles} visible={hover[0]} />
          </div>
          <div
            className="menu__col__choice"
            onMouseEnter={() => setHover([false, true])}
            onMouseLeave={() => {
              setHover([false, false]);
            }}
          >
            고양이 연구소
            <ArrowDropDownIcon />
            <HiddenMenu category={makeCategory('고양이')} articles={articles} visible={hover[1]} />
          </div>
          <div className="menu__col__choice" onClick={() => setOpen(true)}>
            로그인
          </div>
          <div className="menu__col__choice">Q&A</div>
        </div>
      </div>

      <SignIn isOpen={open} close={() => setOpen(false)} />
    </div>
  );
}

export default Menu;
