import React from 'react';
import './SignIn.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import CancelIcon from '@material-ui/icons/Cancel';
import Modal from '../Global/Modal/Modal';

function SignIn({ isOpen, close }) {
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
              <input type="text" placeholder="Email" />
            </div>
            <div className="sign-in__login-password">
              <input type="text" placeholder="Password" />
            </div>
            <div className="sign-in__login-forgot">
              <u>비밀번호</u>를 잊으셨나요?
            </div>
            <div className="sign-in__login-button">
              <button type="button">로그인</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SignIn;
