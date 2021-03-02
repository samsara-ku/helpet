/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// Above things are disable something about Web accessibility
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Menu.scss';
import CloudIcon from '@material-ui/icons/Cloud';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HiddenMenu from './HiddenMenu';
import SignIn from './SignIn';
import { useAuth } from '../../hooks/useMyState';
import { AuthActions } from '../../hooks/useMyActions';
import { heroku } from '../../env/apiurl.json';

function Menu({ articles }) {
  const history = useHistory();

  const makeCategory = prefix => [
    `${prefix} 건강`,
    `${prefix} 행동`,
    `${prefix} 음식`,
    `${prefix} 훈련`,
    `${prefix} 종류`,
  ];

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState([false, false]);

  const auth = useAuth();
  const { signout } = AuthActions();

  useEffect(() => {
    console.log(`auth Change`, auth);
  }, [auth]);

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

          {auth.uidx ? (
            <div
              className="menu__col__choice"
              onClick={() => {
                fetch(`${heroku}/signout`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                })
                  .then(res => res.json())
                  .then(console.log);

                signout();
              }}
            >
              로그아웃
            </div>
          ) : (
            <div className="menu__col__choice" onClick={() => setOpen(true)}>
              로그인
            </div>
          )}
          <div className="menu__col__choice" onClick={() => history.push('/qna/')}>
            Q&A
          </div>
        </div>
      </div>

      <SignIn isOpen={open} close={() => setOpen(false)} />
    </div>
  );
}

export default Menu;
