/* eslint-disable no-plusplus */
import React from 'react';
import './Main.scss';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

function Main() {
  const animatedItem = {
    1: useScrollFadeIn('down', 1, 0.2),
    2: useScrollFadeIn('down', 1, 0.3),
    3: useScrollFadeIn('down', 1, 0.4),
    4: useScrollFadeIn('down', 1, 0.5),
  };

  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header-col">로고</div>
        <div className="main__header-col">
          <div className="main__header-choice">소개</div>
          <div className="main__header-choice">사업</div>
          <div className="main__header-choice">FAQ</div>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content-row">
          <svg
            id="logo"
            width="508"
            height="103"
            viewBox="0 0 508 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="white"
              strokeWidth="3"
              d="M79.5625 103H65.9922V55.6797H14.3828V103H0.882812V0.625H14.3828V44.6406H65.9922V0.625H79.5625V103Z"
            />
            <path
              stroke="white"
              strokeWidth="3"
              d="M161.406 55.6797H117.039V91.9609H168.578V103H103.539V0.625H167.875V11.7344H117.039V44.6406H161.406V55.6797Z"
            />
            <path
              stroke="white"
              strokeWidth="3"
              d="M198.953 91.9609H247.469V103H185.383V0.625H198.953V91.9609Z"
            />
            <path
              stroke="white"
              strokeWidth="3"
              d="M276.367 62.9219V103H262.867V0.625H300.625C311.828 0.625 320.594 3.48438 326.922 9.20312C333.297 14.9219 336.484 22.4922 336.484 31.9141C336.484 41.8516 333.367 49.5156 327.133 54.9062C320.945 60.25 312.062 62.9219 300.484 62.9219H276.367ZM276.367 51.8828H300.625C307.844 51.8828 313.375 50.1953 317.219 46.8203C321.062 43.3984 322.984 38.4766 322.984 32.0547C322.984 25.9609 321.062 21.0859 317.219 17.4297C313.375 13.7734 308.102 11.875 301.398 11.7344H276.367V51.8828Z"
            />
            <path
              stroke="white"
              strokeWidth="3"
              d="M411.578 55.6797H367.211V91.9609H418.75V103H353.711V0.625H418.047V11.7344H367.211V44.6406H411.578V55.6797Z"
            />
            <path
              stroke="white"
              strokeWidth="3"
              d="M507.695 11.7344H474.789V103H461.359V11.7344H428.523V0.625H507.695V11.7344Z"
            />
          </svg>
        </div>
        <div className="main__content-row" {...animatedItem[1]}>
          <div className="test">This area is for test!</div>
        </div>
        <div className="main__content-row" {...animatedItem[2]}>
          <div className="test">This area is for test!</div>
        </div>
        <div className="main__content-row" {...animatedItem[3]}>
          <div className="test">This area is for test!</div>
        </div>
        <div className="main__content-row" {...animatedItem[4]}>
          <div className="test">This area is for test!</div>
        </div>
      </div>
      <div className="main__footer">Footer is here</div>
    </div>
  );
}

export default Main;
