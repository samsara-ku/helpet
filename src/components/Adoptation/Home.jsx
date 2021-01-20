import './Home.scss';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TweenLite, Power3 } from 'gsap';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const MAX = 1;
const MIN = 0;

function Home() {
  const testimonialList = useRef(null);
  const [slideState, setSlideState] = useState(1); // 0 1
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const nextSlide = () => {
    if (isAnimating) {
      return;
    }

    const prevState = slideState;
    const nextState = slideState + 1 > MAX ? MIN : slideState + 1;
    setSlideState(nextState);

    setIsAnimating(true);
    // 이전 화면 왼쪽으로 보내기
    TweenLite.fromTo(
      testimonialList.current.children[prevState],
      {
        x: 0,
        opacity: 1,
        scale: 1.2,
      },
      {
        x: `-100%`,
        scale: 1,
        opacity: 0.5,
        zIndex: 9,
        duration: 1,
        ease: Power3.easeOut,
      }
    );

    // 다음화면 불러오기
    TweenLite.fromTo(
      testimonialList.current.children[nextState],
      {
        x: `100%`,
        opacity: 0.5,
        scale: 1,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        zIndex: 10,
        scale: 1.2,
        ease: Power3.easeOut,
        onComplete: () => {
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
    setSlideState(nextState);

    setIsAnimating(true);
    // 이전 화면 오른쪽으로 보내기
    TweenLite.fromTo(
      testimonialList.current.children[prevState],
      {
        x: 0,
        opacity: 1,
        scale: 1.2,
      },
      {
        x: `100%`,
        scale: 1,
        opacity: 0.5,
        zIndex: 9,
        duration: 1,
        ease: Power3.easeOut,
      }
    );

    // 다음화면 불러오기
    TweenLite.fromTo(
      testimonialList.current.children[nextState],
      {
        x: `-100%`,
        opacity: 0.5,
        scale: 1,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scale: 1.2,
        zIndex: 10,
        ease: Power3.easeOut,
        onComplete: () => {
          setIsAnimating(false);
        },
      }
    );
  };

  const goSlide = e => {
    console.log(e.target);
    const el = e.target;

    if (el.classList.contains('active')) {
      console.log(`이미 현 화면입니다`);
      return 0;
    }

    // 해당 화면으로 이동
    nextSlide();
  };

  useEffect(() => {
    const sto = setTimeout(() => {
      console.log(`nextSlide();`);
      if (!isHover) {
        nextSlide();
      }
    }, 1500);

    return () => {
      console.log(`clearTimeout(sto);`);
      clearTimeout(sto);
    };
  }, [testimonialList, nextSlide, isHover]);

  return (
    <div className="adopt__home">
      <div
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        className="home__route-container"
        ref={testimonialList}
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

        <div className="labels">
          <div
            role="button"
            aria-hidden="true"
            onClick={goSlide}
            className={`label${slideState === 0 ? ' active' : ''}`}
          >
            입양 정보
          </div>

          <div
            role="button"
            aria-hidden="true"
            onClick={goSlide}
            className={`label${slideState === 1 ? ' active' : ''}`}
          >
            입양 후기
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
