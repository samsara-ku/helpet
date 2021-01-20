import './Home.scss';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TimelineLite, Power3 } from 'gsap';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const MAX = 1;
const MIN = 0;

function Home() {
  let testimonialList = useRef(null);
  const [state, setState] = useState(0); // 0 1

  const nextSlide = () => {
    const prevState = state;
    let nextState = 0;

    if (state + 1 > MAX) {
      setState(MIN);
      nextState = MIN;
    } else {
      setState(state + 1);
      nextState = state + 1;
    }
  };

  const prevSlide = () => {
    console.log(state);
    const prevState = state;
    let nextState = 0;

    if (state - 1 < MIN) {
      setState(MAX);
      nextState = MAX;
    } else {
      setState(state - 1);
      nextState = state - 1;
    }
  };

  return (
    <div className="adopt__home">
      <div
        className="home__route-container"
        ref={el => {
          testimonialList = el;
        }}
      >
        <div className={`home__route-container-item${state === 0 ? ' active' : ''}`}>
          <img src="http://www.saac.kr/images/kor09r-17-0380/main/main_visual01.jpg" alt="" />
          <Link to="/information">
            <h3>입양 정보 바로가기</h3>
          </Link>
        </div>

        <div className={`home__route-container-item${state === 1 ? ' active' : ''}`}>
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
