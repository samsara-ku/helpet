/* eslint-disable no-plusplus */
import React from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

function Main() {
  const animatedItem = {
    1: useScrollFadeIn('right', 1, 0.2),
    2: useScrollFadeIn('left', 1, 0.2),
    3: useScrollFadeIn('right', 1, 0.2),
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
          <div className="concept">"Help + Pet, Helpet."</div>
          <div className="description">반려동물에 대한 정보를 찾으실 때 힘들지 않으신가요?</div>
          <div className="description">
            저희 헬펫은 반려동물 멀티 플랫폼이라는 목표로 반려동물과 동행하는 분들에게 도움을 주기
            위해서 활동합니다.
          </div>
        </div>
        <div className="main__content-row">
          <div className="main__content-col" {...animatedItem[1]}>
            <div className="title">정보 지식 채널</div>
            <div className="concept">여러분들은 여러분들의 반려동물에 대해 얼마나 알고 있나요?</div>
            <div className="description">
              첫 만남부터 이별까지. <br />
              반려동물 주인으로서 꼭 필요한 정보들을 모았습니다.
            </div>
            <Link to="home">
              <div role="button" className="button">
                바로가기
              </div>
            </Link>
          </div>
        </div>
        <div className="main__content-row">
          <div className="main__content-col" {...animatedItem[2]}>
            <div className="title">입양 채널</div>
            <div className="concept">힘들고 외로운 동물들을 도와주실 수 있으신가요?</div>
            <div className="description">
              여러분들의 손길이 필요한 동물들이 있습니다. <br />
              아이들에게 행복한 시간을 선물해주세요.
            </div>
            <Link to="/adopt">
              <div role="button" className="button">
                바로가기
              </div>
            </Link>
          </div>
        </div>
        <div className="main__content-row">
          <div className="main__content-col" {...animatedItem[3]}>
            <div className="title">스토어 채널</div>
            <div className="concept">요즘 가장 핫한 아이템이 무엇인지 아시나요?</div>
            <div className="description">
              요즘 대세 집사들은 모두 갖고 있다는 그것!
              <br /> 여기서 확인해보세요!
            </div>
            <Link to="home">
              <div role="button" className="button">
                바로가기
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="main__footer">Footer is here</div>
    </div>
  );
}

export default Main;
