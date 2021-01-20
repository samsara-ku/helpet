import './Home.scss';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TweenLite, Power3 } from 'gsap';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const MAX = 1;
const MIN = 0;

function Home() {
  let testimonialList = useRef(null);
  const [slideState, setSlideState] = useState(1); // 0 1
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) {
      return;
    }

    const prevState = slideState;
    const nextState = slideState + 1 > MAX ? MIN : slideState + 1;

    setIsAnimating(true);
    // 이전 화면 왼쪽으로 보내기
    TweenLite.fromTo(
      testimonialList.children[prevState],
      {
        x: 0,
        opacity: 1,
      },
      {
        x: `-100%`,
        opacity: 0.5,
        ease: Power3.easeOut,
        zIndex: 9,
        duration: 1,
      }
    );

    // 다음화면 불러오기
    TweenLite.fromTo(
      testimonialList.children[nextState],
      {
        x: `100%`,
        opacity: 0.5,
      },
      {
        x: 0,
        opacity: 1,
        ease: Power3.easeOut,
        duration: 1,
        zIndex: 10,
        onComplete: () => {
          setSlideState(nextState);
          setIsAnimating(false);
        },
      }
    );
  };

  const prevSlide = () => {
    if (isAnimating) {
      return;
    }
    const prevState = slideState;
    const nextState = slideState - 1 < MIN ? MAX : slideState - 1;

    setIsAnimating(true);
    // 이전 화면 오른쪽으로 보내기
    TweenLite.fromTo(
      testimonialList.children[prevState],
      {
        x: 0,
        opacity: 1,
      },
      {
        x: `100%`,
        opacity: 0.5,
        ease: Power3.easeOut,
        zIndex: 9,
        duration: 1,
      }
    );

    // 다음화면 불러오기
    TweenLite.fromTo(
      testimonialList.children[nextState],
      {
        x: `-100%`,
        opacity: 0.5,
      },
      {
        x: 0,
        opacity: 1,
        ease: Power3.easeOut,
        duration: 1,
        zIndex: 10,
        onComplete: () => {
          setSlideState(nextState);
          setIsAnimating(false);
        },
      }
    );
  };

  return (
    <div className="adopt__home">
      <div
        className="home__route-container"
        ref={el => {
          testimonialList = el;
        }}
      >
        <div className={`home__route-container-item${slideState === 0 ? ' active' : ''}`}>
          <img src="http://www.saac.kr/images/kor09r-17-0380/main/main_visual01.jpg" alt="" />
          <Link to="/information">
            <h3>입양 정보 바로가기</h3>
          </Link>
        </div>

        <div className={`home__route-container-item${slideState === 1 ? ' active' : ''}`}>
          <img src="http://www.saac.kr/images/kor09r-17-0380/main/main_visual02.jpg" alt="" />
          <Link to="/review">
            <h3>입양 후기 바로가기</h3>
          </Link>
        </div>

        <div className="arrow arrow-left">
          <button type="button" onClick={prevSlide}>
            <ChevronLeftIcon />
          </button>
        </div>
        <div className="arrow arrow-right">
          <button type="button" onClick={nextSlide}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
