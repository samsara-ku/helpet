/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CloudIcon from '@material-ui/icons/Cloud';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HiddenMenu from './Hidden';
import SignIn from '../SignIn';
import { useAuth } from '../../../hooks/useMyState';
import { AuthActions } from '../../../hooks/useMyActions';
import { heroku } from '../../../env/apiurl.json';
import './index.scss';

function Menu() {
  const history = useHistory();
  const elem1 = useRef();
  const elem2 = useRef();

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState([false, false]);

  const auth = useAuth();
  const { signout } = AuthActions();

  useEffect(() => {
    console.log(`auth Change`, auth);
  }, [auth]);

  return (
    <div className="information__menu">
      <div className="information__menu__row">
        <div className="information__menu__col">
          <div className="information__menu__col__logo">
            <CloudIcon />
          </div>
        </div>
        <div className="information__menu__col">
          <div
            className="information__menu__col__choice"
            onClick={e => {
              if (e.target !== elem1.current) return;
              history.push('/articles/10/');
            }}
            onMouseEnter={() => setHover([true, false])}
            onMouseLeave={() => {
              setHover([false, false]);
            }}
            ref={elem1}
          >
            강아지 연구소
            <ArrowDropDownIcon />
            <HiddenMenu cidx={10} visible={hover[0]} />
          </div>
          <div
            className="information__menu__col__choice"
            onClick={e => {
              if (e.target !== elem2.current) return;
              history.push('/articles/20/');
            }}
            onMouseEnter={() => setHover([false, true])}
            onMouseLeave={() => {
              setHover([false, false]);
            }}
            ref={elem2}
          >
            고양이 연구소
            <ArrowDropDownIcon />
            <HiddenMenu cidx={20} visible={hover[1]} />
          </div>

          {auth.uidx ? (
            <div
              className="information__menu__col__choice"
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
            <div className="information__menu__col__choice" onClick={() => setOpen(true)}>
              로그인
            </div>
          )}
          <div className="information__menu__col__choice" onClick={() => history.push('/qna/')}>
            Q&A
          </div>
        </div>
      </div>

      <SignIn isOpen={open} close={() => setOpen(false)} />
    </div>
  );
}

export default Menu;
