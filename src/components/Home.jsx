import './Home.scss';
import React, { useState } from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

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

  const [iter, setIter] = useState([0, 1, 2]);

  const handleClick = e => {
    setIter(iter.map(elem => (elem + e + mockData.length) % mockData.length));
  };

  return (
    <div className="home">
      <div className="home__logo">
        <GradeIcon />
      </div>
      <div className="home__search-area">
        <SearchForm />
      </div>
      <div className="home__content">
        <h3 className="home__content__title">인기 콘텐츠</h3>
        <div className="home__content__grid">
          <ChevronLeftIcon onClick={e => handleClick(-1)} />
          {iter.map(e => (
            <Link to="/article">
              <div className="home__content__card">
                <img src="https://via.placeholder.com/200x200?text=$" alt="" />
                <div>{mockData[e].title}</div>
              </div>
            </Link>
          ))}
          <ChevronRightIcon onClick={e => handleClick(+1)} />
        </div>
      </div>
    </div>
  );
}

export default Home;
