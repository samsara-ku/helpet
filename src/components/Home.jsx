import './Home.scss';
import React, { useState } from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import { Link } from 'react-router-dom';
import Search from './Search';

function Home() {
  const mockData = [
    {
      id: '1234',
      title: 'Hi',
    },
    {
      id: '5436',
      title: 'Hello',
    },
    {
      id: '2315',
      title: 'Good',
    },
    {
      id: '0966',
      title: 'We',
    },
    {
      id: '7546',
      title: 'Are',
    },
    {
      id: '2109',
      title: 'Best',
    },
    {
      id: '1034',
      title: 'Doing',
    },
  ];

  return (
    <div className="home">
      <div className="home__logo">
        <GradeIcon />
      </div>
      <div className="home__search-area">
        <Search />
      </div>
      <div className="home__content">
        <div className="home__content__title">인기 콘텐츠</div>
        <div className="home__content__grid">
          {mockData.map(e => (
            <div>{e.title}</div>
          ))}
        </div>
      </div>
      <div className="home__content">
        <div className="home__content__title">요즘에 핫한 정보</div>
        <div className="home__content__grid">HI</div>
      </div>
      <div className="home__content">
        <div className="home__content__title">또 다른 정보</div>
        <div className="home__content__grid">HI</div>
      </div>
    </div>
  );
}

export default Home;
