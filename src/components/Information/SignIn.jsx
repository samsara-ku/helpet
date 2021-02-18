import React, { useState } from 'react';
import './SignIn.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import CancelIcon from '@material-ui/icons/Cancel';
import Modal from '../Global/Modal/Modal';

function SignIn({ isOpen, close }) {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const onSigninHandler = async () => {
    console.log(formState);
    const result = await fetch(`http://localhost:5000/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    }).then(res => res.json());

    console.log(result);
  };

  const onChangeHandler = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };

  return (
    <Modal isOpen={isOpen} onClose={() => close()}>
      <div className="sign-in">
        <div className="sign-in-col">
          <div className="sign-in__login">
            <div className="sign-in__login-close">
              <CancelIcon onClick={() => close()} />
            </div>
            <div className="sign-in__login-title">로그인</div>
            <div className="sign-in__login-register">
              <FacebookIcon />
              <TwitterIcon />
            </div>
            <div className="sign-in__login-email">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formState.email}
                onChange={e => {
                  const { name, value } = e.target;
                  onChangeHandler(name, value);
                }}
              />
            </div>
            <div className="sign-in__login-password">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formState.password}
                onChange={e => {
                  const { name, value } = e.target;
                  onChangeHandler(name, value);
                }}
              />
            </div>
            <div className="sign-in__login-forgot">
              <u>비밀번호</u>를 잊으셨나요?
            </div>
            <div className="sign-in__login-button">
              <button type="button" onClick={onSigninHandler}>
                로그인
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SignIn;
