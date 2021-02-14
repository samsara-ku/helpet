import React from 'react';
import './index.scss';

function Home() {
  return (
    <div className="store__home">
      <div className="store__home__row">
        <div className="divider__wrapper">
          <span className="divider" />
        </div>
        <div className="title">반려동물 용품</div>
        <div className="content__wrapper">2</div>
        <div className="button__wrapper">
          <button type="button">더 보기 +</button>
        </div>
      </div>
      <div className="store__home__row">
        <div className="divider__wrapper">
          <span className="divider" />
        </div>
        <div className="title">굿즈</div>
        <div className="content__wrapper">2</div>
        <div className="button__wrapper">
          <button type="button">더 보기 +</button>
        </div>
      </div>
      <div className="store__home__row">
        <div className="divider__wrapper">
          <span className="divider" />
        </div>
        <div className="title">다양한 카테고리</div>
        <div className="content__wrapper">2</div>
        <div className="button__wrapper">
          <button type="button">더 보기 +</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
