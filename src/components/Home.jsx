import './Home.css';
import React from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import SearchForm from './SearchForm';

function Home() {
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
        <div className="home__contnet__grid">
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <div className="home__content__card border">
              <img
                src={`https://via.placeholder.com/200x200?text=${e}`}
                alt=""
              />
              <span>안녕{e}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="home__content">
        <h3 className="home__content__title">인기 콘텐츠</h3>
        <div className="home__contnet__grid">
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <div className="home__content__card border">
              <img
                src={`https://via.placeholder.com/200x200?text=${e}`}
                alt=""
              />
              <span>안녕{e}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="home__content">
        <h3 className="home__content__title">인기 콘텐츠</h3>
        <div className="home__contnet__grid">
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <div className="home__content__card border">
              <img
                src={`https://via.placeholder.com/200x200?text=${e}`}
                alt=""
              />
              <span>안녕{e}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
