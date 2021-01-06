import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <h1>입양 센터</h1>
      <div className="home__route-container">
        <Link to="/information">
          <div className="home__route-container-item image1 border">
            <h3>입양 정보 바로가기</h3>
          </div>
        </Link>
        <Link to="/review">
          <div className="home__route-container-item image2 border">
            <h3>입양 후기 바로가기</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
